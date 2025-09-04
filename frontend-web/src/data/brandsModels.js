export const brandsModels = {
  // Audio Devices
  headphones: [
    { brand: "Sony", models: ["WH-1000XM5", "WH-1000XM4", "WH-CH720N", "MDR-7506"] },
    { brand: "Bose", models: ["QuietComfort 45", "QuietComfort 35 II", "Noise Cancelling 700"] },
    { brand: "Sennheiser", models: ["HD 660S", "Momentum 4", "HD 450BT"] },
    { brand: "Audio-Technica", models: ["ATH-M50x", "ATH-M40x", "ATH-WS1100iS"] },
    { brand: "JBL", models: ["Tune 760NC", "Live 660NC", "Club One"] },
    { brand: "Beats", models: ["Studio3 Wireless", "Solo Pro", "Solo3 Wireless"] }
  ],
  speakers: [
    { brand: "JBL", models: ["Charge 5", "Flip 6", "Pulse 4", "Xtreme 3"] },
    { brand: "Bose", models: ["SoundLink Revolve+", "SoundLink Micro", "Home 500"] },
    { brand: "Sony", models: ["SRS-XB43", "SRS-XB23", "SRS-RA3000"] },
    { brand: "Ultimate Ears", models: ["BOOM 3", "WONDERBOOM 3", "MEGABOOM 3"] },
    { brand: "Marshall", models: ["Kilburn II", "Stockwell II", "Acton II"] }
  ],
  earbuds: [
    { brand: "Apple", models: ["AirPods Pro 2", "AirPods 3", "AirPods Max"] },
    { brand: "Sony", models: ["WF-1000XM4", "WF-C500", "LinkBuds"] },
    { brand: "Samsung", models: ["Galaxy Buds2 Pro", "Galaxy Buds Live", "Galaxy Buds FE"] },
    { brand: "Jabra", models: ["Elite 85t", "Elite 75t", "Elite Active 75t"] },
    { brand: "Sennheiser", models: ["Momentum True Wireless 3", "CX True Wireless"] }
  ],
  soundbar: [
    { brand: "Samsung", models: ["HW-Q990B", "HW-Q800A", "HW-A650"] },
    { brand: "Sony", models: ["HT-A7000", "HT-G700", "HT-S350"] },
    { brand: "LG", models: ["SP11RA", "SPD7Y", "SN5Y"] },
    { brand: "Bose", models: ["Smart Soundbar 900", "TV Speaker", "Solo 5"] }
  ],

  // Computing Devices
  laptop: [
    { brand: "Apple", models: ["MacBook Air M2", "MacBook Pro 14", "MacBook Pro 16"] },
    { brand: "Dell", models: ["XPS 13", "XPS 15", "Inspiron 15 3000", "Latitude 7420", "G15 Gaming"] },
    { brand: "HP", models: ["Spectre x360", "Envy 13", "Pavilion 15", "EliteBook 840"] },
    { brand: "Lenovo", models: ["ThinkPad X1 Carbon", "IdeaPad 3", "Yoga 9i", "Legion 5"] },
    { brand: "ASUS", models: ["ZenBook 14", "VivoBook S15", "ROG Strix G15", "TUF Gaming A15"] },
    { brand: "Acer", models: ["Swift 3", "Aspire 5", "Predator Helios 300", "Nitro 5"] },
    { brand: "MSI", models: ["Creator 15", "GF63 Thin", "Stealth 15M", "Katana GF66"] }
  ],
  desktop: [
    { brand: "Dell", models: ["OptiPlex 7090", "XPS 8950", "Inspiron 3891", "Alienware Aurora R13"] },
    { brand: "HP", models: ["Pavilion TP01", "EliteDesk 800", "OMEN 45L", "Envy Desktop"] },
    { brand: "Lenovo", models: ["IdeaCentre 5", "ThinkCentre M90s", "Legion Tower 5i"] },
    { brand: "ASUS", models: ["VivoPC", "ROG Strix GT35", "Mini PC PN50"] },
    { brand: "Apple", models: ["iMac 24", "Mac Studio", "Mac Pro", "Mac mini"] },
    { brand: "Custom Build", models: ["Intel i5 Build", "Intel i7 Build", "AMD Ryzen 5", "AMD Ryzen 7"] }
  ],
  tablet: [
    { brand: "Apple", models: ["iPad Pro 12.9", "iPad Air 5", "iPad 10th Gen", "iPad mini 6"] },
    { brand: "Samsung", models: ["Galaxy Tab S8 Ultra", "Galaxy Tab S8", "Galaxy Tab A8", "Galaxy Tab S6 Lite"] },
    { brand: "Microsoft", models: ["Surface Pro 9", "Surface Go 3", "Surface Pro X"] },
    { brand: "Amazon", models: ["Fire HD 10", "Fire HD 8", "Fire 7"] },
    { brand: "Lenovo", models: ["Tab P11", "Tab M10", "Yoga Tab 13"] }
  ],
  monitor: [
    { brand: "Dell", models: ["UltraSharp U2723QE", "S2722DZ", "Alienware AW3423DW"] },
    { brand: "LG", models: ["27UP850", "34WN80C", "27GL850"] },
    { brand: "Samsung", models: ["Odyssey G7", "M7 Smart Monitor", "CF396"] },
    { brand: "ASUS", models: ["ROG Swift PG279Q", "ProArt PA278QV", "VG248QE"] },
    { brand: "Acer", models: ["Predator X27", "Nitro XV272U", "SB220Q"] },
    { brand: "BenQ", models: ["PD3220U", "EX2780Q", "GW2480"] }
  ],

  // Mobile Devices
  smartphone: [
    { brand: "Apple", models: ["iPhone 15 Pro", "iPhone 15", "iPhone 14", "iPhone SE"] },
    { brand: "Samsung", models: ["Galaxy S24 Ultra", "Galaxy S24", "Galaxy A54", "Galaxy Z Fold5", "Galaxy Z Flip5"] },
    { brand: "Google", models: ["Pixel 8 Pro", "Pixel 8", "Pixel 7a", "Pixel Fold"] },
    { brand: "OnePlus", models: ["11 Pro", "Nord 3", "10T"] },
    { brand: "Xiaomi", models: ["13 Pro", "Redmi Note 12", "POCO X5"] },
    { brand: "Huawei", models: ["P60 Pro", "Nova 11", "Mate 50"] }
  ],
  smartwatch: [
    { brand: "Apple", models: ["Watch Series 9", "Watch Ultra 2", "Watch SE"] },
    { brand: "Samsung", models: ["Galaxy Watch6", "Galaxy Watch6 Classic", "Galaxy Watch5"] },
    { brand: "Garmin", models: ["Forerunner 955", "Venu 3", "Fenix 7"] },
    { brand: "Fitbit", models: ["Versa 4", "Sense 2", "Charge 5"] },
    { brand: "Amazfit", models: ["GTR 4", "GTS 4", "Bip 3"] }
  ],

  // Input Devices
  mouse: [
    { brand: "Logitech", models: ["MX Master 3S", "G502 X", "M705 Marathon", "G Pro X Superlight"] },
    { brand: "Razer", models: ["DeathAdder V3", "Basilisk V3", "Viper V2 Pro", "Orochi V2"] },
    { brand: "SteelSeries", models: ["Rival 650", "Sensei Ten", "Aerox 3"] },
    { brand: "Corsair", models: ["Dark Core RGB Pro", "M65 RGB Elite", "Harpoon RGB"] },
    { brand: "Microsoft", models: ["Surface Precision Mouse", "Sculpt Ergonomic"] }
  ],
  keyboard: [
    { brand: "Logitech", models: ["MX Keys", "G915 TKL", "K380", "G Pro X"] },
    { brand: "Corsair", models: ["K95 RGB Platinum", "K70 RGB", "K65 RGB Mini"] },
    { brand: "Razer", models: ["BlackWidow V4", "Huntsman V2", "DeathStalker V2"] },
    { brand: "SteelSeries", models: ["Apex Pro", "Apex 7", "Apex 3"] },
    { brand: "Keychron", models: ["K2", "K8", "Q1"] },
    { brand: "Apple", models: ["Magic Keyboard", "Magic Keyboard with Touch ID"] }
  ],
  gamepad: [
    { brand: "Microsoft", models: ["Xbox Wireless Controller", "Xbox Elite Series 2"] },
    { brand: "Sony", models: ["DualSense", "DualSense Edge", "DualShock 4"] },
    { brand: "Nintendo", models: ["Pro Controller", "Joy-Con"] },
    { brand: "Razer", models: ["Wolverine V2", "Kishi V2"] },
    { brand: "8BitDo", models: ["SN30 Pro+", "Ultimate Controller"] }
  ],

  // Gaming Devices
  gaming_console: [
    { brand: "Sony", models: ["PlayStation 5", "PlayStation 5 Digital", "PlayStation 4 Pro"] },
    { brand: "Microsoft", models: ["Xbox Series X", "Xbox Series S", "Xbox One X"] },
    { brand: "Nintendo", models: ["Switch OLED", "Switch", "Switch Lite"] },
    { brand: "Valve", models: ["Steam Deck"] }
  ],
  gaming_headset: [
    { brand: "SteelSeries", models: ["Arctis 7P", "Arctis Pro", "Arctis 1"] },
    { brand: "HyperX", models: ["Cloud Alpha", "Cloud Flight", "Cloud Stinger"] },
    { brand: "Razer", models: ["BlackShark V2", "Kraken X", "Nari Ultimate"] },
    { brand: "Corsair", models: ["Virtuoso RGB", "HS70 Pro", "HS35"] },
    { brand: "Logitech", models: ["G Pro X", "G935", "G432"] }
  ],

  // Entertainment Devices
  smart_tv: [
    { brand: "Samsung", models: ["QN90B Neo QLED", "Frame TV", "TU7000", "Q60A QLED"] },
    { brand: "LG", models: ["C2 OLED", "A2 OLED", "UP7000", "NanoCell 85"] },
    { brand: "Sony", models: ["A95K OLED", "X90K", "X80K", "A80J OLED"] },
    { brand: "TCL", models: ["6-Series", "5-Series", "4-Series"] },
    { brand: "Hisense", models: ["U8G", "U7G", "A6G"] }
  ],
  streaming_device: [
    { brand: "Amazon", models: ["Fire TV Stick 4K Max", "Fire TV Cube", "Fire TV Stick Lite"] },
    { brand: "Roku", models: ["Ultra", "Streaming Stick 4K+", "Express 4K+"] },
    { brand: "Apple", models: ["Apple TV 4K", "Apple TV HD"] },
    { brand: "Google", models: ["Chromecast with Google TV", "Chromecast Ultra"] },
    { brand: "NVIDIA", models: ["Shield TV Pro", "Shield TV"] }
  ],

  // Office Equipment
  printer: [
    { brand: "HP", models: ["OfficeJet Pro 9015e", "LaserJet Pro M404n", "Envy 6055e"] },
    { brand: "Canon", models: ["PIXMA TR8620", "imageCLASS MF445dw", "PIXMA G7020"] },
    { brand: "Epson", models: ["EcoTank ET-4760", "WorkForce Pro WF-3730", "Expression Home XP-4100"] },
    { brand: "Brother", models: ["HL-L2350DW", "MFC-L3770CDW", "DCP-L2550DW"] }
  ],
  scanner: [
    { brand: "Epson", models: ["Perfection V850", "WorkForce ES-500W", "Expression 12000XL"] },
    { brand: "Canon", models: ["CanoScan LiDE 400", "imageFORMULA DR-C225", "CanoScan 9000F"] },
    { brand: "Brother", models: ["ADS-1700W", "ADS-2700W"] },
    { brand: "Fujitsu", models: ["ScanSnap iX1600", "fi-7160"] }
  ],
  webcam: [
    { brand: "Logitech", models: ["Brio 4K", "C920s Pro", "C922 Pro Stream", "StreamCam"] },
    { brand: "Razer", models: ["Kiyo Pro", "Kiyo", "Kiyo X"] },
    { brand: "Microsoft", models: ["LifeCam HD-3000", "LifeCam Studio"] },
    { brand: "Anker", models: ["PowerConf C300", "PowerConf C200"] }
  ],

  // Photography
  camera: [
    { brand: "Canon", models: ["EOS R6 Mark II", "EOS R5", "EOS 90D", "PowerShot G7X Mark III"] },
    { brand: "Nikon", models: ["Z9", "Z6 II", "D850", "COOLPIX P950"] },
    { brand: "Sony", models: ["A7 IV", "A7R V", "FX6", "ZV-1"] },
    { brand: "Fujifilm", models: ["X-T5", "X-S10", "X100V", "GFX100S"] },
    { brand: "Panasonic", models: ["GH6", "S5", "FZ2500"] }
  ],
  action_camera: [
    { brand: "GoPro", models: ["HERO12 Black", "HERO11 Black", "HERO10 Black"] },
    { brand: "DJI", models: ["Action 3", "Pocket 2", "Action 2"] },
    { brand: "Insta360", models: ["X3", "GO 3", "ONE RS"] },
    { brand: "Sony", models: ["FDR-X3000", "HDR-AS300"] }
  ],

  // Storage & Networking
  external_hdd: [
    { brand: "Western Digital", models: ["My Passport", "Elements Desktop", "Black P10"] },
    { brand: "Seagate", models: ["Backup Plus Slim", "Expansion Desktop", "Game Drive"] },
    { brand: "Toshiba", models: ["Canvio Basics", "Canvio Advance"] },
    { brand: "Samsung", models: ["T7 Portable SSD", "T5 Portable SSD"] },
    { brand: "SanDisk", models: ["Extreme Portable SSD", "Ultra 3D SSD"] }
  ],
  router: [
    { brand: "ASUS", models: ["AX6000", "RT-AX88U", "RT-AC86U"] },
    { brand: "Netgear", models: ["Nighthawk AX12", "Orbi WiFi 6", "Nighthawk AC1900"] },
    { brand: "TP-Link", models: ["Archer AX73", "Deco X60", "Archer C7"] },
    { brand: "Linksys", models: ["Velop AX4200", "MR9000", "EA7500"] }
  ],
  usb_drive: [
    { brand: "SanDisk", models: ["Ultra USB 3.0", "Extreme Pro", "iXpand Flash Drive"] },
    { brand: "Kingston", models: ["DataTraveler 100", "HyperX Savage", "DataTraveler Elite G2"] },
    { brand: "Samsung", models: ["BAR Plus", "FIT Plus"] },
    { brand: "PNY", models: ["Turbo 3.0", "Elite-X"] }
  ],

  // Home Automation
  smart_speaker: [
    { brand: "Amazon", models: ["Echo Dot 5th Gen", "Echo 4th Gen", "Echo Show 10", "Echo Studio"] },
    { brand: "Google", models: ["Nest Audio", "Nest Mini", "Nest Hub Max"] },
    { brand: "Apple", models: ["HomePod mini", "HomePod 2nd Gen"] },
    { brand: "Sonos", models: ["One", "Beam", "Arc"] }
  ],
  smart_home_hub: [
    { brand: "SmartThings", models: ["Hub v3", "Station"] },
    { brand: "Hubitat", models: ["Elevation C-7", "Elevation C-5"] },
    { brand: "Amazon", models: ["Echo Plus", "Echo Show 15"] },
    { brand: "Aqara", models: ["Hub M2", "Camera Hub G3"] }
  ]
};