import { useState } from "react";
import FormDiagnosis from "./components/FormDiagnosis";
import ResultDiagnosis from "./components/ResultDiagnosis";
import axios from "axios";
import "./index.css";

export default function App() {
  const [result, setResult] = useState(null);
  const [lastForm, setLastForm] = useState(null);
  const [loading, setLoading] = useState(false);

  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "https://fixmygadget-backend.vercel.app";

  async function fetchDiagnosis(form) {
    setLoading(true);
    try {
      const res = await axios.post(`${API_BASE_URL}/api/diagnosis`, form);
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
      const res = await axios.post(`${API_BASE_URL}/api/diagnosis`, {
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
          Get instant troubleshooting help for your devices: select device type, brand, model, and describe the issue.
        </span>
          <span className="lang-warning">
          <strong>Available in English. Supports 25+ device categories!</strong>
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