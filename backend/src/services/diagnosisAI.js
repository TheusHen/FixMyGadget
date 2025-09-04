const rules = [
  // Audio Devices
  {
    gadget: "headphones",
    symptoms: ["not turning on", "no sound", "not charging", "won't charge", "dead battery"],
    diagnosis: "Battery or power connection issue",
    tutorialKey: "headphones-power-issue"
  },
  {
    gadget: "headphones",
    symptoms: ["static noise", "audio cutting out", "crackling", "distorted sound", "one ear not working"],
    diagnosis: "Audio driver or connection issue",
    tutorialKey: "headphones-audio-issue"
  },
  {
    gadget: "speakers",
    symptoms: ["no sound", "not turning on", "low volume", "crackling", "distorted"],
    diagnosis: "Audio output or power issue",
    tutorialKey: "speakers-audio-issue"
  },
  {
    gadget: "earbuds",
    symptoms: ["not connecting", "won't pair", "one side not working", "battery draining fast"],
    diagnosis: "Bluetooth pairing or battery issue",
    tutorialKey: "earbuds-connection-issue"
  },
  {
    gadget: "soundbar",
    symptoms: ["no sound", "not connecting to tv", "remote not working", "crackling"],
    diagnosis: "Connection or audio processing issue",
    tutorialKey: "soundbar-connection-issue"
  },

  // Computing Devices  
  {
    gadget: "laptop",
    symptoms: ["not turning on", "black screen", "not charging", "dead"],
    diagnosis: "Power supply or battery issue",
    tutorialKey: "laptop-power-issue"
  },
  {
    gadget: "laptop",
    symptoms: ["overheating", "shutting down", "fan loud", "hot", "slow"],
    diagnosis: "Thermal management or ventilation issue",
    tutorialKey: "laptop-overheating"
  },
  {
    gadget: "laptop",
    symptoms: ["keyboard not working", "keys stuck", "touchpad not working"],
    diagnosis: "Input device hardware issue",
    tutorialKey: "laptop-input-issue"
  },
  {
    gadget: "desktop",
    symptoms: ["not turning on", "no display", "boot loop", "blue screen"],
    diagnosis: "Hardware or boot sequence issue",
    tutorialKey: "desktop-boot-issue"
  },
  {
    gadget: "tablet",
    symptoms: ["not charging", "screen cracked", "touch not working", "apps crashing"],
    diagnosis: "Display or software issue",
    tutorialKey: "tablet-display-issue"
  },
  {
    gadget: "monitor",
    symptoms: ["no display", "flickering", "lines on screen", "color issues"],
    diagnosis: "Display panel or connection issue",
    tutorialKey: "monitor-display-issue"
  },

  // Mobile Devices
  {
    gadget: "smartphone",
    symptoms: ["not charging", "battery draining fast", "battery draining", "won't turn on", "dead", "getting hot", "overheating"],
    diagnosis: "Battery or charging port issue",
    tutorialKey: "smartphone-battery-issue"
  },
  {
    gadget: "smartphone",
    symptoms: ["screen cracked", "touch not working", "display issues"],
    diagnosis: "Screen or digitizer damage",
    tutorialKey: "smartphone-screen-issue"
  },
  {
    gadget: "smartphone",
    symptoms: ["overheating", "slow", "apps crashing", "freezing"],
    diagnosis: "Software or thermal issue",
    tutorialKey: "smartphone-performance-issue"
  },
  {
    gadget: "smartwatch",
    symptoms: ["not charging", "battery draining", "won't sync", "not connecting"],
    diagnosis: "Battery or connectivity issue",
    tutorialKey: "smartwatch-connection-issue"
  },

  // Input Devices
  {
    gadget: "mouse",
    symptoms: ["not connecting", "cursor not moving", "lag", "buttons not working"],
    diagnosis: "Connection or optical sensor issue",
    tutorialKey: "mouse-connection-issue"
  },
  {
    gadget: "keyboard",
    symptoms: ["keys not working", "stuck keys", "not connecting", "lag"],
    diagnosis: "Key mechanism or connection issue",
    tutorialKey: "keyboard-input-issue"
  },
  {
    gadget: "gamepad",
    symptoms: ["not connecting", "buttons stuck", "joystick drift", "not charging"],
    diagnosis: "Input mechanism or connection issue",
    tutorialKey: "gamepad-input-issue"
  },

  // Gaming Devices
  {
    gadget: "gaming_console",
    symptoms: ["not turning on", "overheating", "disc not reading", "no display"],
    diagnosis: "Hardware or optical drive issue",
    tutorialKey: "console-hardware-issue"
  },
  {
    gadget: "gaming_headset",
    symptoms: ["microphone not working", "no audio", "echo", "static"],
    diagnosis: "Audio or microphone hardware issue",
    tutorialKey: "gaming-headset-audio-issue"
  },

  // Entertainment Devices
  {
    gadget: "smart_tv",
    symptoms: ["not turning on", "no picture", "sound but no video", "apps not working"],
    diagnosis: "Display panel or software issue",
    tutorialKey: "smart-tv-display-issue"
  },
  {
    gadget: "streaming_device",
    symptoms: ["not connecting to wifi", "buffering", "no signal", "remote not working"],
    diagnosis: "Network connectivity or hardware issue",
    tutorialKey: "streaming-device-connection-issue"
  },

  // Office Equipment
  {
    gadget: "printer",
    symptoms: ["not printing", "paper jam", "streaky prints", "not connecting"],
    diagnosis: "Print mechanism or connectivity issue",
    tutorialKey: "printer-hardware-issue"
  },
  {
    gadget: "scanner",
    symptoms: ["not scanning", "blurry scans", "lines in scan", "not connecting"],
    diagnosis: "Optical sensor or connection issue",
    tutorialKey: "scanner-optical-issue"
  },
  {
    gadget: "webcam",
    symptoms: ["no video", "blurry image", "not recognized", "microphone not working"],
    diagnosis: "Camera sensor or driver issue",
    tutorialKey: "webcam-hardware-issue"
  },

  // Photography
  {
    gadget: "camera",
    symptoms: ["not turning on", "blurry photos", "lens error", "memory card error"],
    diagnosis: "Lens mechanism or storage issue",
    tutorialKey: "camera-hardware-issue"
  },
  {
    gadget: "action_camera",
    symptoms: ["not recording", "overheating", "battery draining", "blurry video"],
    diagnosis: "Recording or thermal issue",
    tutorialKey: "action-camera-recording-issue"
  },

  // Storage & Networking
  {
    gadget: "external_hdd",
    symptoms: ["not recognized", "slow transfer", "clicking noise", "corrupted files"],
    diagnosis: "Drive mechanism or connection issue",
    tutorialKey: "external-hdd-hardware-issue"
  },
  {
    gadget: "router",
    symptoms: ["no internet", "slow wifi", "frequent disconnection", "no signal"],
    diagnosis: "Network configuration or hardware issue",
    tutorialKey: "router-network-issue"
  },
  {
    gadget: "usb_drive",
    symptoms: ["not recognized", "corrupted files", "slow transfer", "write protected"],
    diagnosis: "Flash memory or file system issue",
    tutorialKey: "usb-drive-storage-issue"
  },

  // Home Automation
  {
    gadget: "smart_speaker",
    symptoms: ["not responding", "poor audio quality", "wifi issues", "not connecting"],
    diagnosis: "Network connectivity or audio issue",
    tutorialKey: "smart-speaker-connectivity-issue"
  },
  {
    gadget: "smart_home_hub",
    symptoms: ["devices not responding", "connection issues", "setup problems"],
    diagnosis: "Network or device pairing issue",
    tutorialKey: "smart-hub-connectivity-issue"
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