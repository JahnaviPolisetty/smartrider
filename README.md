#### 🚀 SMART RIDER
## ✈️ Airport Ride Booking Web Application
## 📌 Overview

Smart Rider is a modern airport ride booking web application that allows users to authenticate, select ride options, and manage airport travel through a clean, responsive interface.

This project demonstrates real-world deployment using modern frontend technologies and cloud services.

#### ✨ Features
## 🔐 Authentication

Google login using Supabase Auth

## 🚗 Ride Booking

Select airport ride options

Seat selection interface

Smooth booking flow

## 🎨 User Experience

Fully responsive design 📱

## Light & Dark theme 🌙

Smooth animations with Framer Motion ⚡

## ☁️ Deployment

Frontend hosted on Vercel

Backend services via Supabase / Render

### Tech Stack
### 🎯 Frontend

React + Vite + TypeScript

Tailwind CSS

Framer Motion

shadcn/ui

## 🔧 Backend / Services

Supabase (Authentication & Database)

Render (API hosting, if used)

## 📂 Project Structure
airport-ride-pool/
│
├── app/            # Frontend
│   ├── src/
│   ├── components/
│   ├── pages/
│   └── lib/
│
└── backend/        # Backend (if applicable)
## ⚙️ Environment Variables

# Create .env inside frontend:

VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_key
VITE_API_URL=your_backend_url
🚀 Getting Started
git clone https://github.com/JahnaviPolisetty/smartrider.git
cd smartrider/app
npm install
npm run dev

## App runs at:

http://localhost:8080
🌐 Live Demo

## Frontend: https://your-vercel-url.vercel.app

## Backend: https://your-render-url.onrender.com

## 🖼️ Screenshots
Landing Page

Ride Selection

Seat Selection

(Create a screenshots/ folder and add images)

### 🏗️ Architecture Overview
User Browser
     │
     ▼
Frontend (React + Vite) ───► Supabase Auth & Database
     │
     └──────► Render API (if used)
## 🎯 Future Improvements

Ride history tracking

Payment integration

Real-time ride updates

Shared ride matching

## 👩‍💻 Author

Jahnavi Polisetty
GitHub: https://github.com/JahnaviPolisetty

## 📜 License

Educational & portfolio use.
