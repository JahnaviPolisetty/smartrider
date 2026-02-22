import { motion } from "framer-motion";

const LoadingSpinner = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-6 py-12">
      <div className="relative w-16 h-16">
        <motion.div
          className="absolute inset-0 rounded-full border-[3px] border-primary/20"
          animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.2, 0.5] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute inset-0 rounded-full border-[3px] border-transparent border-t-primary"
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
        />
        <div className="absolute inset-3 rounded-full bg-primary/10 flex items-center justify-center">
          <span className="text-lg">🚗</span>
        </div>
      </div>
      <div className="text-center">
        <p className="text-sm font-semibold text-foreground">Finding your ride</p>
        <p className="text-xs text-muted-foreground mt-1">Matching you with nearby drivers...</p>
      </div>
    </div>
  );
};

export default LoadingSpinner;
