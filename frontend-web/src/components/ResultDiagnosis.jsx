import { useState } from "react";
import { motion } from "framer-motion";
import { FaCheckCircle, FaRedo } from "react-icons/fa";

export default function ResultDiagnosis({ result, onReset, onNewYoutube }) {
  const [resolved, setResolved] = useState(false);

  if (!result) return null;
  if (result.error)
    return (
        <motion.div className="result-block error animated-fadein">
          {result.error}
          <br />
          <button onClick={onReset}>Try again</button>
        </motion.div>
    );

  const stepVariants = {
    hidden: { opacity: 0, x: 30 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: { delay: i * 0.13 },
    }),
  };

  return (
      <motion.main
          className="diagnosis-main animated-fadein"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
      >
        <motion.section
            className="diagnosis-card modern-glass"
            initial={{ scale: 0.95, y: 20 }}
            animate={{ scale: 1, y: 0 }}
        >
          <div className="diagnosis-title">
            <b>Identified Problem:&nbsp;</b>
            <span className="diagnosis-link">{result.diagnosis}</span>
          </div>
          <div className="answers-section">
            <b>Your Answers:</b>
            <div className="answers-list">
              <span className="answer-item">power: Doesn't turn on</span>
              <span className="answer-item">battery: Doesn't charge</span>
              <span className="answer-item">screen: Black screen</span>
            </div>
          </div>
          <div className="desc-section">
            <b>Problem Description:</b>
            <div className="desc-box">{result.symptoms}</div>
          </div>
        </motion.section>

        <motion.section
            className="solution-card animated-slidein modern-glass"
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
        >
          <motion.h3
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
          >
            Solving {result.diagnosis?.toLowerCase()}
          </motion.h3>
          <div className="solution-flex">
            <motion.div
                className="solution-video"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.24 }}
            >
              <b>Tutorial Video:</b>
              <div className="video-embed-container">
                {result.youtubeVideo ? (
                    <motion.iframe
                        width="100%"
                        height="220"
                        src={`https://www.youtube.com/embed/${result.youtubeVideo.videoId}`}
                        title={result.youtubeVideo.title}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="video-embed"
                        initial={{ opacity: 0, scale: 0.96 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.28 }}
                    />
                ) : (
                    <span>Video not found</span>
                )}
              </div>
              {result.youtubeVideo && (
                  <motion.div
                      className="video-details"
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.34 }}
                  >
                    <b>{result.youtubeVideo.title}</b>
                    <div className="video-channel">
                      Channel: {result.youtubeVideo.channel}
                    </div>
                  </motion.div>
              )}
            </motion.div>
            <motion.div
                className="solution-steps"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.34 }}
            >
              <b>Step by Step:</b>
              <ol>
                {result.tutorial?.steps
                    ? result.tutorial.steps.split("\n").map((step, idx) => (
                        <motion.li
                            key={idx}
                            custom={idx}
                            initial="hidden"
                            animate="visible"
                            variants={stepVariants}
                        >
                          {step.replace(/^\d+\.\s*/, "")}
                        </motion.li>
                    ))
                    : [
                      "Connect an external monitor to test",
                      "Adjust the screen brightness",
                      "Remove and reinsert the RAM",
                      "If the external monitor works, the problem is with the screen",
                    ].map((step, idx) => (
                        <motion.li
                            key={idx}
                            custom={idx}
                            initial="hidden"
                            animate="visible"
                            variants={stepVariants}
                        >
                          {step}
                        </motion.li>
                    ))}
              </ol>
            </motion.div>
          </div>
          <motion.div
              className="solution-actions"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45 }}
          >
          <span className="solution-question">
            Did the tutorial help solve the problem?
          </span>
            <motion.button
                className="other-tutorial"
                onClick={onNewYoutube}
                whileTap={{ scale: 0.97 }}
                whileHover={{ scale: 1.05, background: "#e1eafd" }}
            >
              <FaRedo style={{ marginRight: 8 }} />
              Other Tutorial
            </motion.button>
            <motion.button
                className={`resolved-btn${resolved ? " resolved" : ""}`}
                onClick={() => setResolved(true)}
                disabled={resolved}
                whileTap={{ scale: 0.95 }}
                whileHover={{ scale: 1.06, background: "#2be5a5" }}
            >
              <FaCheckCircle style={{ marginRight: 8 }} />
              {resolved ? "Resolved!" : "Problem Resolved!"}
            </motion.button>
          </motion.div>
          <motion.div
              className="doc-section"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
          >
            <b>Manual/official documentation:</b>
            <br />
            {result.docUrl ? (
                <a
                    href={result.docUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="doc-link"
                >
                  {result.docUrl}
                </a>
            ) : (
                <span>Not found</span>
            )}
          </motion.div>
        </motion.section>
        <motion.button
            className="back-btn"
            onClick={onReset}
            whileHover={{ scale: 1.05, background: "#e9f4ff" }}
        >
          New Diagnosis
        </motion.button>
      </motion.main>
  );
}