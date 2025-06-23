import axios from "axios";

export async function getBrandDocUrl(gadget, brand, model) {
  if (!brand || !model) return null;
  const brandSlug = brand.toLowerCase().replace(/\s/g, "");
  const gadgetSlug = gadget.toLowerCase().replace(/\s/g, "");
  const modelSlug = model.toLowerCase().replace(/\s/g, "-");

  if (brandSlug === "sony")
    return `https://www.sony.com/electronics/support/${gadgetSlug}s/${modelSlug}`;
  if (brandSlug === "samsung")
    return `https://www.samsung.com/us/support/model/${modelSlug}/`;
  if (brandSlug === "logitech")
    return `https://support.logi.com/hc/en-us/search?query=${modelSlug}`;
  if (brandSlug === "dell")
    return `https://www.dell.com/support/home/en-us/product-support/product/${modelSlug}/manuals`;

  return `https://www.google.com/search?q=manual+${brand}+${model}`;
}

export async function getYoutubeBestVideo(gadget, brand, model, symptoms, opts = {}) {
  const apiKey = process.env.YOUTUBE_API_KEY;
  let query = `${brand || ""} ${model || ""} ${gadget} ${symptoms} how to fix`;
  query = query.trim();

  try {
    const resp = await axios.get("https://www.googleapis.com/youtube/v3/search", {
      params: {
        key: apiKey,
        q: query,
        part: "snippet",
        maxResults: 5,
        type: "video",
        videoEmbeddable: "true",
        regionCode: "US",
        relevanceLanguage: "en"
      }
    });
    const avoidIds = opts.avoidIds || [];
    const item = resp.data.items.find(
        i => !avoidIds.includes(i.id.videoId)
    ) || resp.data.items[0];

    if (!item) return null;
    return {
      videoId: item.id.videoId,
      title: item.snippet.title,
      channel: item.snippet.channelTitle,
      thumbnail: item.snippet.thumbnails.high.url
    };
  } catch (e) {
    return null;
  }
}