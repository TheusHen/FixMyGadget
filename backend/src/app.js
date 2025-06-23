import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import diagnosisRoutes from "./routes/diagnosis.js";
import tutorialRoutes from "./routes/tutorial.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => res.send("FixMyGadget API online (stateless)"));

app.use("/api/diagnosis", diagnosisRoutes);
app.use("/api/tutorials", tutorialRoutes);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));