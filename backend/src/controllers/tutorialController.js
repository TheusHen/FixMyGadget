export const tutorialList = [
  {
    id: 1,
    gadget: "headphone",
    problem: "headphone-not-turning-on",
    steps: "1. Check the battery\n2. Charge for 30 minutes\n3. Hold the power button for 10s\n4. Try another charger.",
    videoUrl: "https://www.youtube.com/watch?v=fone_nao_liga"
  },
  {
    id: 2,
    gadget: "headphone",
    problem: "headphone-static-noise",
    steps: "1. Check the cable\n2. Test on another device\n3. Clean the connector\n4. Update drivers.",
    videoUrl: "https://www.youtube.com/watch?v=fone_chiado"
  },
  {
    id: 3,
    gadget: "mouse",
    problem: "mouse-not-connecting",
    steps: "1. Check batteries\n2. Reinsert USB receiver\n3. Try another USB port\n4. Update drivers.",
    videoUrl: "https://www.youtube.com/watch?v=mouse_nao_conecta"
  },
  {
    id: 4,
    gadget: "notebook",
    problem: "notebook-not-turning-on",
    steps: "1. Plug into power\n2. Check the charger\n3. Hold power button for 15s\n4. Remove the battery.",
    videoUrl: "https://www.youtube.com/watch?v=notebook_nao_liga"
  },
  {
    id: 5,
    gadget: "notebook",
    problem: "notebook-overheating",
    steps: "1. Clean air vents\n2. Use on a flat surface\n3. Check the cooler\n4. Replace thermal paste.",
    videoUrl: "https://www.youtube.com/watch?v=notebook_superaquecendo"
  }
];

export const getTutorials = (req, res) => {
  const { gadget, problem } = req.query;
  let result = tutorialList;
  if (gadget) result = result.filter(t => t.gadget === gadget.toLowerCase());
  if (problem) result = result.filter(t => t.problem === problem);
  res.json(result);
};

export const getTutorialById = (req, res) => {
  const id = parseInt(req.params.id, 10);
  const tutorial = tutorialList.find(t => t.id === id);
  if (!tutorial) return res.status(404).json({ error: "Tutorial not found" });
  res.json(tutorial);
};