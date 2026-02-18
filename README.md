Airport Ride Pool — Smart Ride Sharing Platform

An Uber-style airport ride pooling web application that allows users to share rides to the airport, reduce travel costs, and optimize vehicle usage through smart ride matching.

Built using Next.js, Node.js, Express, and Supabase, this project demonstrates full-stack development, authentication, real-time data handling, and modern UI design.

🌐 Live Demo

🚀 Frontend: https://vercel.com/jahnavi-polisettys-projects/airport-ride-pool
🔗 Backend API: https://airport-ride-pool.onrender.com/

✨ Features
🔐 Authentication

Google OAuth login using Supabase

Secure session handling

Personalized welcome message

🚖 Ride Pooling System

Create ride requests

Smart ride matching algorithm

Seat availability tracking

Automatic ride grouping

📍 Smart Inputs

Autocomplete for pickup locations & airports

Real-time search suggestions

📊 Ride Details

Estimated price calculation

Estimated arrival time

Random cab number generation

Live seat availability

🎨 Modern UI (Uber/Rapido Style)

Responsive design

Light/Dark mode toggle

Mobile-friendly layout

Clean, modern ride cards

⚡ Real-Time Updates

Supabase real-time database sync

Instant ride matching feedback

🛠 Tech Stack
Frontend

Next.js 16

React

Tailwind CSS

Supabase Client

Backend

Node.js

Express.js

Supabase (PostgreSQL)

REST API

Database

Supabase PostgreSQL

Row Level Security (RLS)

Real-time subscriptions

🗂 Project Structure
airport-ride-pool/
│
├── app/                 # Next.js frontend
│   ├── page.tsx
│   └── lib/
│
├── backend/             # Node.js API
│   ├── server.js
│   ├── routes/
│   └── supabaseClient.js
│
├── .env.local
└── README.md

⚙️ Setup Instructions
1️⃣ Clone Repository
git clone https://github.com/JahnaviPolisetty/AIRPORT-RIDE-POOL.git
cd AIRPORT-RIDE-POOL

2️⃣ Backend Setup
cd backend
npm install
node server.js


Create .env in backend:

SUPABASE_URL=your_url
SUPABASE_SERVICE_ROLE_KEY=your_key
PORT=5000

3️⃣ Frontend Setup
cd ..
npm install
npm run dev


Create .env.local:

NEXT_PUBLIC_SUPABASE_URL=your_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_key
NEXT_PUBLIC_API_URL=http://localhost:5000

🔐 Database Tables

ride_requests

rides

ride_passengers

Includes foreign keys, RLS policies, and real-time triggers.

📸 Screenshots

(Add screenshots later to impress recruiters)

🎯 What I Learned

Full-stack architecture

Google OAuth integration

Supabase real-time database

Ride matching logic

REST API design

Modern UI/UX principles

Deployment with Vercel & Render

🚀 Future Improvements

Payment integration

Driver app

Push notifications

Map integration (Google Maps)

AI-based ride optimization

👩‍💻 Author

Jahnavi Polisetty
B.Tech CSE | Full Stack Developer | AI Enthusiast
