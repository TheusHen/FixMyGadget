import { useState, useMemo } from "react";
import { gadgets } from "../data/gadgets";
import { brandsModels } from "../data/brandsModels";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronDown, FaCheckCircle } from "react-icons/fa";

export default function FormDiagnosis({ onResult, loading }) {
  const [gadget, setGadget] = useState("");
  const [brand, setBrand] = useState("");
  const [model, setModel] = useState("");
  const [symptoms, setSymptoms] = useState("");
  const [brandInput, setBrandInput] = useState("");
  const [modelInput, setModelInput] = useState("");
  const [brandSuggestions, setBrandSuggestions] = useState([]);
  const [modelSuggestions, setModelSuggestions] = useState([]);

  const brandsForGadget = useMemo(() => {
    if (!gadget) return [];
    return brandsModels[gadget].map(b => b.brand);
  }, [gadget]);

  const modelsForBrand = useMemo(() => {
    if (!gadget || !brand) return [];
    const obj = brandsModels[gadget].find(b => b.brand.toLowerCase() === brand.toLowerCase());
    return obj ? obj.models : [];
  }, [gadget, brand]);

  function handleBrandInput(e) {
    const val = e.target.value;
    setBrandInput(val);
    setBrand(val);
    if (!val) return setBrandSuggestions([]);
    setBrandSuggestions(brandsForGadget.filter(b => b.toLowerCase().includes(val.toLowerCase())));
  }

  function handleModelInput(e) {
    const val = e.target.value;
    setModelInput(val);
    setModel(val);
    if (!val) return setModelSuggestions([]);
    setModelSuggestions(modelsForBrand.filter(m => m.toLowerCase().includes(val.toLowerCase())));
  }

  function selectBrandSuggestion(b) {
    setBrandInput(b);
    setBrand(b);
    setBrandSuggestions([]);
    setModelInput("");
    setModel("");
    setModelSuggestions([]);
  }

  function selectModelSuggestion(m) {
    setModelInput(m);
    setModel(m);
    setModelSuggestions([]);
  }

  function onSubmit(e) {
    e.preventDefault();
    if (!gadget || !brand || !model || !symptoms) return;
    onResult({ gadget, brand, model, symptoms });
  }

  return (
      <motion.form
          className="form-diagnosis pretty-form"
          autoComplete="off"
          onSubmit={onSubmit}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: "easeOut" }}
      >
        <div className="field-wrap">
          <div className="select-icon-wrap">
            <select
                value={gadget}
                onChange={e => {
                  setGadget(e.target.value);
                  setBrandInput("");
                  setBrand("");
                  setModelInput("");
                  setModel("");
                  setBrandSuggestions([]);
                  setModelSuggestions([]);
                }}
                required
                disabled={loading}
            >
              <option value="" disabled hidden>
                Select your device type
              </option>
              {gadgets.map(g => (
                  <option value={g.value} key={g.value}>{g.label}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="field-wrap" style={{ position: "relative" }}>
          <input
              type="text"
              value={brandInput}
              placeholder={"Enter device brand (e.g., Apple, Samsung)"}
              onChange={handleBrandInput}
              autoComplete="off"
              disabled={!gadget || loading}
              required
          />
          <AnimatePresence>
            {brandSuggestions.length > 0 && (
                <motion.div
                    className="suggestion-list animated-suggest"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                >
                  {brandSuggestions.map(b => (
                      <div className="suggestion-item" onClick={() => selectBrandSuggestion(b)} key={b}>
                        {b}
                      </div>
                  ))}
                </motion.div>
            )}
          </AnimatePresence>
        </div>

        <div className="field-wrap" style={{ position: "relative" }}>
          <input
              type="text"
              value={modelInput}
              placeholder={"Enter specific model (e.g., iPhone 15 Pro)"}
              onChange={handleModelInput}
              autoComplete="off"
              disabled={!brand || loading}
              required
          />
          <AnimatePresence>
            {modelSuggestions.length > 0 && (
                <motion.div
                    className="suggestion-list animated-suggest"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                >
                  {modelSuggestions.map(m => (
                      <div className="suggestion-item" onClick={() => selectModelSuggestion(m)} key={m}>
                        {m}
                      </div>
                  ))}
                </motion.div>
            )}
          </AnimatePresence>
        </div>

        <div className="field-wrap">
          <textarea
              value={symptoms}
              placeholder={"Describe the problem in detail (e.g., won't turn on, screen flickering, no sound)"}
              onChange={e => setSymptoms(e.target.value)}
              rows={3}
              required
              disabled={loading}
          />
        </div>

        <motion.button
            type="submit"
            disabled={loading}
            className="animated-btn"
            whileTap={{ scale: 0.97 }}
            whileHover={{ scale: 1.03, boxShadow: "0 2px 20px #4634fa22" }}
        >
          {loading ? (
              <span className="loader"></span>
          ) : (
              <>
                <FaCheckCircle style={{ marginRight: 8, verticalAlign: "middle" }} />
                Get Diagnosis & Solution
              </>
          )}
        </motion.button>
      </motion.form>
  );
}