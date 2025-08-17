# 🏋️‍♂️ AI-Powered Fitness Tracker

An advanced **AI-powered fitness tracker** with **body fat estimation**, **personalized workout & diet recommendations**, **progress tracking**, and a **modern responsive dashboard**.  

👉 **Live Demo:** [https://ai-fitness-tracker-lime.vercel.app/](https://ai-fitness-tracker-lime.vercel.app/)

---

## 📌 Tech Stack
![React](https://img.shields.io/badge/Frontend-React-61DBFB?style=flat&logo=react&logoColor=white)  
![Vite](https://img.shields.io/badge/Build-Vite-646CFF?style=flat&logo=vite&logoColor=yellow)  
![TailwindCSS](https://img.shields.io/badge/Styling-TailwindCSS-38B2AC?style=flat&logo=tailwind-css&logoColor=white)  
![TypeScript](https://img.shields.io/badge/Language-TypeScript-3178C6?style=flat&logo=typescript&logoColor=white)  
![Recharts](https://img.shields.io/badge/Charts-Recharts-F97316?style=flat&logo=chart-dot-js&logoColor=white)  
![Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-000000?style=flat&logo=vercel&logoColor=white)  

---

## 🚀 Features
- 📷 **AI Body Fat Estimation** from uploaded images  
- 💪 Personalized **Workout Recommendations**  
- 🥗 Customized **Nutrition Plans**  
- 📊 **Progress Tracking** with interactive charts  
- 👤 **User Authentication & Profile Management**  
- 📱 **Responsive Design** (Mobile, Tablet, Desktop)  
- ⚡ Smooth animations & micro-interactions with Framer Motion  

---

## 🏗️ Project Architecture

### 🔹 Frontend Flow
User Upload Image → AI Body Fat Analysis → Recommendations Engine
↓
Progress Tracking & Charts ← Profile & History
↓
Dashboard with Real-time Insights

---
FOLDER

```bash
AI-FITNESS-TRACKER/
├── public/                 # Static assets (images, icons, etc.)
├── src/
│   ├── assets/             # Local images, fonts, and static files
│   ├── components/         # Reusable UI components
│   │   ├── Navigation.tsx
│   │   ├── Dashboard.tsx
│   │   ├── BodyFatAnalysis.tsx
│   │   ├── WorkoutRecommendations.tsx
│   │   ├── NutritionPlan.tsx
│   │   ├── ProgressCharts.tsx
│   │   └── Profile.tsx
│   ├── hooks/              # Custom React hooks
│   ├── utils/              # Helper functions & mock data
│   │   └── mockData.ts
│   ├── types/              # TypeScript type definitions
│   │   └── index.ts
│   ├── App.tsx             # Root component
│   ├── main.tsx            # Entry point
│   └── index.css           # Tailwind/global styles
├── .gitignore
├── package.json
├── tsconfig.json
├── tailwind.config.js
├── vite.config.ts
└── README.md

---

## 🎨 Design Highlights
- **Color Scheme:** Fitness blues (#3B82F6), greens (#10B981), orange accents (#F97316)  
- **UI Layout:** Card-based with rounded corners & soft shadows  
- **Animations:** Smooth hover effects & transitions via Framer Motion  
- **Typography:** Clean, professional, and highly readable  
- **Responsive:** Mobile-first breakpoints for `<768px`, `768–1024px`, `>1024px`  

---

## ⚙️ Installation & Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/vignesh-2424/AI-FITNESS-TRACKER.git
   cd AI-FITNESS-TRACKER
Install dependencies


npm install
Run development server


npm run dev
👉 Open browser at: http://localhost:5173

Build for production


npm run build
🌍 Deployment
The project is deployed on Vercel.

👉 Live Demo: https://ai-fitness-tracker-lime.vercel.app/

Manual Deployment
Build Command: npm run build

Output Directory: dist

Can also be deployed with:

Vercel

Netlify

📊 Future Enhancements
🔐 Integration with OAuth (Google/GitHub login)

🤖 AI-powered meal recognition from food images

📱 Mobile app (React Native) version

🏆 Gamification with fitness challenges

👨‍💻 Author
Vignesh R S
