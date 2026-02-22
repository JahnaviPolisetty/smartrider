import { motion } from "framer-motion";
import { MapPin, ArrowRight } from "lucide-react";
import logo from "@/assets/logo.png";
import heroBg from "@/assets/hero-bg.jpg";
import ThemeToggle from "./ThemeToggle";

interface LandingScreenProps {
  onLogin: () => void;
}

const LandingScreen = ({ onLogin }: LandingScreenProps) => {
  return (
    <div className="min-h-screen relative flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <img
        src={heroBg}
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />

      {/* Theme toggle - top right */}
      <div className="absolute top-4 right-4 z-20 sm:top-6 sm:right-6">
        <ThemeToggle variant="landing" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex flex-col items-center gap-8 w-full max-w-sm px-6 relative z-10 md:max-w-md lg:max-w-lg"
      >
        {/* Logo */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
          className="animate-float"
        >
          <img src={logo} alt="RideGo" className="w-24 h-24 rounded-3xl shadow-[var(--shadow-glow)] md:w-28 md:h-28" />
        </motion.div>

        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-white tracking-tight md:text-5xl lg:text-6xl">
            Ride<span className="text-primary">Go</span>
          </h1>
          <p className="text-sm text-white/60 mt-2 font-medium md:text-base">
            Your premium ride, one tap away
          </p>
        </div>

        {/* Where to search bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="w-full"
        >
          <button
            onClick={onLogin}
            className="w-full flex items-center gap-3 px-5 py-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/10 text-white/50 hover:bg-white/15 transition-all"
          >
            <MapPin className="w-5 h-5 text-primary" />
            <span className="text-sm font-medium flex-1 text-left">Where to?</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </motion.div>

        {/* Login button */}
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          onClick={onLogin}
          className="w-full flex items-center justify-center gap-3 px-5 py-4 rounded-2xl gradient-primary text-primary-foreground font-bold text-sm shadow-[var(--shadow-glow)] hover:brightness-110 transition-all active:scale-[0.98] md:text-base md:py-5"
        >
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" />
            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
          </svg>
          Continue with Google
        </motion.button>

        <p className="text-xs text-white/30 text-center">
          By continuing, you agree to our Terms & Privacy Policy
        </p>
      </motion.div>
    </div>
  );
};

export default LandingScreen;
