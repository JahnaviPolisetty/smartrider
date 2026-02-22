import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";

const ThemeToggle = ({ variant = "default" }: { variant?: "default" | "landing" }) => {
  const { theme, setTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <motion.button
      whileTap={{ scale: 0.9 }}
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className={`relative w-10 h-10 rounded-xl flex items-center justify-center transition-all ${
        variant === "landing"
          ? "bg-white/10 backdrop-blur-md border border-white/10 text-white hover:bg-white/20"
          : "bg-secondary text-muted-foreground hover:text-foreground hover:bg-secondary/80"
      }`}
      aria-label="Toggle theme"
    >
      <Sun className={`w-4 h-4 absolute transition-all ${isDark ? "opacity-0 rotate-90 scale-0" : "opacity-100 rotate-0 scale-100"}`} />
      <Moon className={`w-4 h-4 absolute transition-all ${isDark ? "opacity-100 rotate-0 scale-100" : "opacity-0 -rotate-90 scale-0"}`} />
    </motion.button>
  );
};

export default ThemeToggle;
