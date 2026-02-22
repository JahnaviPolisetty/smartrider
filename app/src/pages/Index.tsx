import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import LandingScreen from "@/components/LandingScreen";
import MainRideScreen from "@/components/MainRideScreen";
import { supabase } from "../lib/supabaseClient";

const Index = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check session on load
    supabase.auth.getSession().then(({ data }) => {
      setIsLoggedIn(!!data.session);
      setLoading(false);
    });

    // Listen for auth changes
    const { data: listener } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        setIsLoggedIn(!!session);
      }
    );

    return () => listener.subscription.unsubscribe();
  }, []);

  const handleLogin = async () => {
    await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: window.location.origin,
      },
    });
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
  };

  if (loading) return <div>Loading...</div>;

  return (
    <AnimatePresence mode="wait" initial={false}>
      {!isLoggedIn ? (
        <motion.div key="landing" exit={{ opacity: 0, scale: 0.95 }}>
          <LandingScreen onLogin={handleLogin} />
        </motion.div>
      ) : (
        <motion.div key="main" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <MainRideScreen onLogout={handleLogout} />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Index;