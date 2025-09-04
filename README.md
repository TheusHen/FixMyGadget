# FixMyGadget 🛠️

**Your AI-powered gadget troubleshooting assistant**

FixMyGadget is a comprehensive web application that helps users diagnose and fix common issues with their electronic devices. With support for 25+ device categories and hundreds of brand/model combinations, it provides instant troubleshooting guidance, step-by-step repair instructions, and curated video tutorials.

![FixMyGadget Demo](https://via.placeholder.com/800x400/4F46E5/FFFFFF?text=FixMyGadget+Demo)

## ✨ Features

### 🎯 **Comprehensive Device Support**
- **25+ Device Categories**: From smartphones to smart home devices
- **Popular Brands**: Apple, Samsung, Sony, Dell, HP, Logitech, and many more
- **Hundreds of Models**: Extensive database of specific device models

### 🔍 **Intelligent Diagnosis**
- **AI-Powered Analysis**: Analyzes symptoms to identify likely issues
- **Pattern Recognition**: Matches user descriptions to known problems
- **Instant Results**: Get diagnosis and solutions in seconds

### 📚 **Multi-Modal Solutions**
- **Step-by-Step Guides**: Detailed repair instructions
- **Video Tutorials**: Curated YouTube tutorials for visual learners
- **Official Documentation**: Links to manufacturer manuals when available

### 🌐 **Modern Web Experience**
- **Responsive Design**: Works on desktop, tablet, and mobile
- **Smooth Animations**: Built with Framer Motion for fluid interactions
- **User-Friendly Interface**: Intuitive form with smart suggestions

## 🚀 Quick Start

### Prerequisites
- Node.js 16+ and npm
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/TheusHen/FixMyGadget.git
   cd FixMyGadget
   ```

2. **Install Backend Dependencies**
   ```bash
   cd backend
   npm install
   ```

3. **Install Frontend Dependencies**
   ```bash
   cd ../frontend-web
   npm install
   ```

4. **Start the Backend Server**
   ```bash
   cd ../backend
   npm run dev
   ```
   The backend will start at `http://localhost:3000`

5. **Start the Frontend Development Server**
   ```bash
   cd ../frontend-web
   npm run dev
   ```
   The frontend will start at `http://localhost:5173`

## 📱 Supported Device Categories

### 🎧 Audio Devices
- Headphones & Earbuds
- Speakers & Soundbars
- Gaming Headsets
- Smart Speakers

### 💻 Computing Devices
- Laptops & Notebooks
- Desktop Computers
- Tablets
- Monitors & Displays

### 📱 Mobile Devices
- Smartphones
- Smartwatches

### 🎮 Gaming
- Gaming Consoles
- Gaming Controllers
- Gaming Headsets

### ⌨️ Input Devices
- Mice & Trackpads
- Keyboards
- Webcams

### 📺 Entertainment
- Smart TVs
- Streaming Devices

### 🖨️ Office Equipment
- Printers & Scanners
- External Storage
- Networking Equipment

### 🏠 Smart Home
- Smart Speakers
- Home Automation Hubs

## 🛠️ How It Works

1. **Select Device Type**: Choose from 25+ categories
2. **Enter Brand & Model**: Use smart suggestions for accuracy
3. **Describe the Issue**: Detailed problem description
4. **Get Instant Help**: Receive diagnosis, steps, and video tutorials

## 🏗️ Architecture

### Frontend (`/frontend-web`)
- **React 18**: Modern React with hooks
- **Vite**: Fast build tool and dev server
- **Framer Motion**: Smooth animations
- **React Icons**: Comprehensive icon library
- **Axios**: HTTP client for API communication

### Backend (`/backend`)
- **Node.js + Express**: RESTful API server
- **AI Diagnosis Engine**: Pattern matching for issue identification
- **External Services**: YouTube video recommendations, documentation lookup
- **CORS Enabled**: Cross-origin resource sharing

## 📊 API Documentation

### Diagnosis Endpoint
```http
POST /api/diagnosis
Content-Type: application/json

{
  "gadget": "laptop",
  "brand": "Apple",
  "model": "MacBook Pro 14",
  "symptoms": "not turning on and screen is black"
}
```

**Response:**
```json
{
  "gadget": "laptop",
  "brand": "Apple",
  "model": "MacBook Pro 14",
  "symptoms": "not turning on and screen is black",
  "diagnosis": "Power supply or battery issue",
  "docUrl": "https://support.apple.com/macbook-pro",
  "youtubeVideo": {
    "videoId": "dQw4w9WgXcQ",
    "title": "MacBook Won't Turn On - Complete Fix Guide",
    "channel": "Tech Repair Pro"
  },
  "tutorial": {
    "id": 5,
    "gadget": "laptop",
    "problem": "laptop-power-issue",
    "steps": "1. Connect to power adapter\n2. Check the charger and cable...",
    "videoUrl": "https://www.youtube.com/results?search_query=laptop+not+turning+on+fix"
  }
}
```

### Tutorials Endpoint
```http
GET /api/tutorials?gadget=laptop&problem=laptop-power-issue
```

## 🔧 Configuration

### Environment Variables

Create `.env` files in both frontend and backend directories:

**Backend `.env`:**
```env
PORT=3000
NODE_ENV=development
PUPPETEER_SKIP_DOWNLOAD=true
```

**Frontend `.env`:**
```env
VITE_API_BASE_URL=http://localhost:3000
```

## 🚀 Deployment

### Backend Deployment (Vercel)
```bash
cd backend
npm run build
vercel --prod
```

### Frontend Deployment (Vercel)
```bash
cd frontend-web
npm run build
vercel --prod
```

### Docker Deployment
```bash
# Build and run with Docker Compose
docker-compose up --build
```

## 🤝 Contributing

We welcome contributions! Here's how to get started:

1. **Fork the repository**
2. **Create a feature branch**: `git checkout -b feature/amazing-feature`
3. **Make your changes**:
   - Add new device types in `/frontend-web/src/data/gadgets.js`
   - Add brand/model data in `/frontend-web/src/data/brandsModels.js`
   - Add diagnosis rules in `/backend/src/services/diagnosisAI.js`
   - Add tutorial steps in `/backend/src/controllers/tutorialController.js`
4. **Test your changes**: Run both frontend and backend locally
5. **Commit your changes**: `git commit -m 'Add amazing feature'`
6. **Push to the branch**: `git push origin feature/amazing-feature`
7. **Open a Pull Request**

### Adding New Devices

To add support for a new device category:

1. **Add to gadgets list:**
   ```javascript
   // frontend-web/src/data/gadgets.js
   { value: "new_device", label: "New Device Category" }
   ```

2. **Add brand/model data:**
   ```javascript
   // frontend-web/src/data/brandsModels.js
   new_device: [
     { brand: "Brand1", models: ["Model1", "Model2"] },
     { brand: "Brand2", models: ["Model3", "Model4"] }
   ]
   ```

3. **Add diagnosis rules:**
   ```javascript
   // backend/src/services/diagnosisAI.js
   {
     gadget: "new_device",
     symptoms: ["symptom1", "symptom2"],
     diagnosis: "Issue description",
     tutorialKey: "new-device-issue"
   }
   ```

4. **Add tutorial steps:**
   ```javascript
   // backend/src/controllers/tutorialController.js
   {
     id: nextId,
     gadget: "new_device",
     problem: "new-device-issue",
     steps: "1. Step one\n2. Step two...",
     videoUrl: "YouTube search URL"
   }
   ```

## 📋 Testing

### Frontend Testing
```bash
cd frontend-web
npm run test
```

### Backend Testing
```bash
cd backend
npm run test
```

### End-to-End Testing
```bash
npm run test:e2e
```

## 📈 Performance

- **Lightning Fast**: Vite for instant hot reload
- **Optimized Builds**: Tree shaking and code splitting
- **Responsive**: Works on all screen sizes
- **Accessible**: WCAG 2.1 compliant

## 🐛 Troubleshooting

### Common Issues

**Frontend won't start:**
```bash
cd frontend-web
rm -rf node_modules package-lock.json
npm install
npm run dev
```

**Backend API errors:**
```bash
cd backend
npm install
PUPPETEER_SKIP_DOWNLOAD=true npm install
npm run dev
```

**CORS errors:**
- Ensure backend is running on port 3000
- Check frontend `.env` file has correct API URL

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🌟 Support

- **Issues**: [GitHub Issues](https://github.com/TheusHen/FixMyGadget/issues)
- **Discussions**: [GitHub Discussions](https://github.com/TheusHen/FixMyGadget/discussions)
- **Email**: support@fixmygadget.com

## 🙏 Acknowledgments

- **React Team** for the amazing framework
- **Vite Team** for the lightning-fast build tool
- **Community Contributors** for device data and troubleshooting guides
- **YouTube Creators** for educational repair content

---

**Made with ❤️ by the FixMyGadget Team**

*Help us make technology more accessible and repairable for everyone!*