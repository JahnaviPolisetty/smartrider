import { motion } from "framer-motion";
import { Clock, ChevronRight } from "lucide-react";
import { RideOption } from "@/data/mockData";

interface RideOptionsProps {
  options: RideOption[];
  selectedId: string | null;
  onSelect: (option: RideOption) => void;
  seats: number;
}

const RideOptions = ({ options, selectedId, onSelect, seats }: RideOptionsProps) => {
  const available = options.filter((o) => o.maxSeats >= seats);

  return (
    <motion.div
      initial={{ y: "100%" }}
      animate={{ y: 0 }}
      exit={{ y: "100%" }}
      transition={{ type: "spring", damping: 28, stiffness: 300 }}
      className="space-y-2"
    >
      <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider px-1 mb-3">
        Choose your ride
      </p>
      {available.map((option, index) => (
        <motion.button
          key={option.id}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: index * 0.08 }}
          onClick={() => onSelect(option)}
          className={`w-full flex items-center gap-4 p-4 rounded-2xl border transition-all duration-200 ${
            selectedId === option.id
              ? "border-primary bg-accent glow-primary"
              : "border-border bg-card hover:border-primary/30 hover:bg-accent/30"
          }`}
        >
          <span className="text-3xl">{option.icon}</span>
          <div className="flex-1 text-left">
            <div className="flex items-center gap-2">
              <span className="font-bold text-foreground">{option.type}</span>
              <span className="text-xs px-2 py-0.5 rounded-full bg-muted text-muted-foreground">
                {option.maxSeats} seats
              </span>
            </div>
            <p className="text-xs text-muted-foreground mt-0.5">{option.description}</p>
          </div>
          <div className="text-right">
            <p className="font-bold text-foreground">₹{option.price}</p>
            <div className="flex items-center gap-1 text-xs text-muted-foreground">
              <Clock className="w-3 h-3" />
              {option.eta}
            </div>
          </div>
          <ChevronRight className={`w-4 h-4 transition-colors ${selectedId === option.id ? "text-primary" : "text-muted-foreground/40"}`} />
        </motion.button>
      ))}
      {available.length === 0 && (
        <p className="text-center text-sm text-muted-foreground py-6">
          No rides available for {seats} passengers
        </p>
      )}
    </motion.div>
  );
};

export default RideOptions;
