import express from "express";
import { getTutorials, getTutorialById } from "../controllers/tutorialController.js";
const router = express.Router();

router.get("/", getTutorials);
router.get("/:id", getTutorialById);

export default router;