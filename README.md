

🚀 Smart Rider — Airport Ride Booking App
📌 Overview

Smart Rider is a modern airport ride booking web application that allows users to authenticate, choose ride options, and manage airport travel through a clean and responsive interface.

The app focuses on simplicity, usability, and real-world deployment using modern web technologies.

✨ Features

🔐 Google authentication using Supabase

🚗 Select and manage airport rides

🎯 Seat selection interface

📱 Fully responsive UI

⚡ Smooth animations with Framer Motion

🌙 Light/Dark theme support

☁️ Deployed frontend & backend services

🛠️ Tech Stack
Frontend

React (Vite + TypeScript)

Tailwind CSS

Framer Motion

shadcn/ui components

Backend / Services

Supabase (Authentication & Database)

Render (API hosting, if applicable)

Deployment

Vercel — Frontend hosting

Render — Backend hosting

📂 Project Structure
airport-ride-pool/
│
├── app/ (Frontend)
│   ├── src/
│   ├── components/
│   ├── pages/
│   └── lib/
│
└── backend/ (if applicable)
⚙️ Environment Variables

Create a .env file inside the frontend root:

VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_anon_key
VITE_API_URL=your_backend_url
🚀 Getting Started
1️⃣ Clone the repository
git clone https://github.com/JahnaviPolisetty/smartrider.git
cd smartrider/app
2️⃣ Install dependencies
npm install
3️⃣ Run the development server
npm run dev

App runs at:

http://localhost:8080
🌐 Live Demo

Frontend: https://your-vercel-url.vercel.app

Backend: https://your-render-url.onrender.com

(Update with your actual links)

🎯 Future Improvements

Ride history tracking

Payment integration

Real-time ride updates

Shared ride matching (optional future feature)

👩‍💻 Author

Jahnavi Polisetty

GitHub: https://github.com/JahnaviPolisetty

📜 License

This project is for educational and portfolio purposes.
