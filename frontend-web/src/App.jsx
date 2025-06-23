import { useState } from "react";
import FormDiagnosis from "./components/FormDiagnosis";
import ResultDiagnosis from "./components/ResultDiagnosis";
import axios from "axios";
import "./index.css";

export default function App() {
  const [result, setResult] = useState(null);
  const [lastForm, setLastForm] = useState(null);
  const [loading, setLoading] = useState(false);

  async function fetchDiagnosis(form) {
    setLoading(true);
    try {
      const res = await axios.post("https://fixmygadget-backend.vercel.app/api/diagnosis", form);
      setResult(res.data);
      setLastForm(form);
    } catch (err) {
      setResult({ error: "Connection error. Please try again." });
    }
    setLoading(false);
  }

  async function handleNewYoutube() {
    if (!lastForm) return;
    setLoading(true);
    try {
      // Request new video (extra parameter to force new video)
      const res = await axios.post("https://fixmygadget-backend.vercel.app/api/diagnosis", {
        ...lastForm,
        _forceNewYoutube: true,
        _lastVideoId: result?.youtubeVideo?.videoId || undefined,
      });
      setResult(res.data);
    } catch {
      setResult({ ...result, error: "Error fetching new tutorial." });
    }
    setLoading(false);
  }

  return (
      <div className="fullscreen-bg">
        <div className="header animated-fadein">
          <h1>FixMyGadget <span className="logo-dot">.</span></h1>
          <span className="header-desc">
          Quick diagnosis for gadgets: select the type, brand, model, and describe the symptom.
        </span>
          <span className="lang-warning">
          <strong>US English only. More languages coming soon!</strong>
        </span>
        </div>
        <div className="flex-centered">
          <div className="app-main">
            {!result && (
                <FormDiagnosis onResult={fetchDiagnosis} loading={loading} />
            )}
            {result && (
                <ResultDiagnosis
                    result={result}
                    onReset={() => setResult(null)}
                    onNewYoutube={handleNewYoutube}
                />
            )}
          </div>
        </div>
        <footer className="footer">
          MVP demo &copy; {new Date().getFullYear()} FixMyGadget
        </footer>
      </div>
  );
}