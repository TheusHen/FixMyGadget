import express from "express";
import { getModels } from "../controllers/modelsController.js";
const router = express.Router();

router.get("/", getModels);

export default router;