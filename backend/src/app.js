import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import diagnosisRoutes from "./routes/diagnosis.js";
import tutorialRoutes from "./routes/tutorial.js";
import path from "path";

dotenv.config();

const app = express();

app.use(cors({
    origin: "https://fixmygadget.theushen.me"
}));
app.use(express.json());

app.use(express.static(path.resolve("public")));

// Rotas da API
app.use("/api/diagnosis", diagnosisRoutes);
app.use("/api/tutorials", tutorialRoutes);

app.use((req, res) => {
    res.status(404).json({ error: "Not found" });
});

export default app;