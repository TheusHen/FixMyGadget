import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import diagnosisRoutes from "./routes/diagnosis.js";
import tutorialRoutes from "./routes/tutorial.js";
import path from "path";
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config();

const app = express();

app.use(cors({
    origin: ["https://fixmygadget.theushen.me", "http://localhost:5173", "http://localhost:3000"]
}));
app.use(express.json());

// Rotas da API (must be before static file serving)
app.use("/api/diagnosis", diagnosisRoutes);
app.use("/api/tutorials", tutorialRoutes);

// Serve frontend assets from dist folder
app.use('/assets', express.static(path.resolve("dist/assets")));

// Serve static files from public directory (but exclude index.html)
app.use(express.static(path.resolve("public"), { index: false }));

// Serve other static files from dist (favicon, etc)
app.use(express.static(path.resolve("dist"), { index: false }));

// Serve frontend app for all non-API routes
app.get('*', (req, res) => {
    // Don't serve index.html for API routes
    if (req.path.startsWith('/api/')) {
        return res.status(404).json({ error: "Not found" });
    }
    
    // Serve the frontend index.html for all other routes
    const indexPath = path.resolve("index.html");
    res.sendFile(indexPath);
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`FixMyGadget backend server running on port ${PORT}`);
});

export default app;