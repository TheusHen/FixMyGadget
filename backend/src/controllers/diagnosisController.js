import { simpleAIDiagnosis } from "../services/diagnosisAI.js";
import { getBrandDocUrl, getYoutubeBestVideo } from "../services/externalInfo.js";
import { tutorialList } from "./tutorialController.js";

const recentYoutubeCache = {};

export const diagnose = async (req, res) => {
  const { gadget, brand, model, symptoms, _forceNewYoutube, _lastVideoId } = req.body;
  const { diagnosis, tutorialKey } = simpleAIDiagnosis(gadget, symptoms);

  const docUrl = await getBrandDocUrl(gadget, brand, model);

  // Chave única para busca
  const queryKey = [gadget, brand, model, symptoms].map(String).join("|").toLowerCase();
  if (!recentYoutubeCache[queryKey]) recentYoutubeCache[queryKey] = [];

  let youtubeVideo = null;
  let attempts = 0;
  const MAX_ATTEMPTS = 5;

  while (!youtubeVideo && attempts < MAX_ATTEMPTS) {
    youtubeVideo = await getYoutubeBestVideo(gadget, brand, model, symptoms, {
      avoidIds: [
        ...(recentYoutubeCache[queryKey] || []),
        _lastVideoId || ""
      ].filter(Boolean)
    });
    if (youtubeVideo && recentYoutubeCache[queryKey].includes(youtubeVideo.videoId)) {
      youtubeVideo = null;
    }
    attempts++;
  }
  if (youtubeVideo) {
    if (!recentYoutubeCache[queryKey].includes(youtubeVideo.videoId)) {
      recentYoutubeCache[queryKey].push(youtubeVideo.videoId);
    }
    if (recentYoutubeCache[queryKey].length > 5) recentYoutubeCache[queryKey].shift();
  }

  let tutorial = null;
  if (tutorialKey) {
    tutorial = tutorialList.find(
      t =>
        t.gadget === gadget.toLowerCase() &&
        t.problem === tutorialKey
    );
  }

  res.json({
    gadget,
    brand,
    model,
    symptoms,
    diagnosis,
    docUrl,
    youtubeVideo,
    tutorial
  });
};