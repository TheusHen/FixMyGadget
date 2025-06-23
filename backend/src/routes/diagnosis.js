import express from "express";
import { diagnose } from "../controllers/diagnosisController.js";
const router = express.Router();

router.post("/", diagnose);

export default router;