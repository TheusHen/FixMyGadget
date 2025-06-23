const rules = [
  {
    gadget: "headphone",
    symptoms: ["not turning on", "no sound", "not charging"],
    diagnosis: "Battery or connection issue",
    tutorialKey: "headphone-not-turning-on"
  },
  {
    gadget: "headphone",
    symptoms: ["static noise", "audio cutting out"],
    diagnosis: "Cable or driver issue",
    tutorialKey: "headphone-static-noise"
  },
  {
    gadget: "mouse",
    symptoms: ["not connecting", "cursor not moving"],
    diagnosis: "Connection failure or optical issue",
    tutorialKey: "mouse-not-connecting"
  },
  {
    gadget: "notebook",
    symptoms: ["not turning on", "black screen", "not charging"],
    diagnosis: "Battery or power supply issue",
    tutorialKey: "notebook-not-turning-on"
  },
  {
    gadget: "notebook",
    symptoms: ["overheating", "shutting down by itself"],
    diagnosis: "Heating or ventilation problem",
    tutorialKey: "notebook-overheating"
  }
];

export function simpleAIDiagnosis(gadget, symptoms) {
  const s = symptoms.toLowerCase();
  let rule = rules.find(r =>
      r.gadget === gadget.toLowerCase() &&
      r.symptoms.some(sym => s.includes(sym))
  );
  if (!rule) {
    return {
      diagnosis: "Could not identify the issue. Please seek specialized support.",
      tutorialKey: null
    };
  }
  return {
    diagnosis: rule.diagnosis,
    tutorialKey: rule.tutorialKey
  };
}