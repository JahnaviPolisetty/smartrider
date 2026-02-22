import { motion } from "framer-motion";
import { Clock, Users, MapPin, CheckCircle2 } from "lucide-react";
import { RideOption, driverNames } from "@/data/mockData";
import { useMemo } from "react";

interface RideSummaryProps {
  ride: RideOption;
  pickup: string;
  drop: string;
  seats: number;
  onCancel: () => void;
}

const RideSummary = ({ ride, pickup, drop, seats, onCancel }: RideSummaryProps) => {
  const driverName = useMemo(
    () => driverNames[Math.floor(Math.random() * driverNames.length)],
    []
  );

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ type: "spring", damping: 25, stiffness: 300 }}
      className="space-y-4"
    >
      {/* Driver assigned banner */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="flex items-center gap-3 p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/20"
      >
        <CheckCircle2 className="w-5 h-5 text-emerald-500" />
        <div>
          <p className="text-sm font-bold text-foreground">Driver assigned!</p>
          <p className="text-xs text-muted-foreground">{driverName} is on the way</p>
        </div>
      </motion.div>

      {/* Ride details card */}
      <div className="p-5 rounded-2xl glass-elevated space-y-4">
        <div className="flex items-center gap-4">
          <span className="text-4xl">{ride.icon}</span>
          <div className="flex-1">
            <h3 className="font-bold text-lg text-foreground">{ride.type}</h3>
            <p className="text-sm text-muted-foreground">{ride.description}</p>
          </div>
          <div className="text-right">
            <p className="text-2xl font-extrabold text-primary">₹{ride.price}</p>
          </div>
        </div>

        <div className="h-px bg-border" />

        <div className="grid grid-cols-3 gap-4">
          <div className="flex flex-col items-center gap-1">
            <Clock className="w-4 h-4 text-primary" />
            <span className="text-xs text-muted-foreground">ETA</span>
            <span className="text-sm font-bold text-foreground">{ride.eta}</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <Users className="w-4 h-4 text-primary" />
            <span className="text-xs text-muted-foreground">Seats</span>
            <span className="text-sm font-bold text-foreground">{seats}</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <MapPin className="w-4 h-4 text-primary" />
            <span className="text-xs text-muted-foreground">Distance</span>
            <span className="text-sm font-bold text-foreground">~8 km</span>
          </div>
        </div>

        <div className="h-px bg-border" />

        <div className="space-y-2">
          <div className="flex items-start gap-3">
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 ring-4 ring-emerald-500/20 mt-1.5 shrink-0" />
            <div>
              <p className="text-xs text-muted-foreground">Pickup</p>
              <p className="text-sm font-semibold text-foreground">{pickup}</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-2.5 h-2.5 rounded-full bg-primary ring-4 ring-primary/20 mt-1.5 shrink-0" />
            <div>
              <p className="text-xs text-muted-foreground">Drop</p>
              <p className="text-sm font-semibold text-foreground">{drop}</p>
            </div>
          </div>
        </div>
      </div>

      <button
        onClick={onCancel}
        className="w-full py-3.5 rounded-2xl border border-destructive/30 text-destructive font-semibold text-sm hover:bg-destructive/5 transition-colors"
      >
        Cancel Ride
      </button>
    </motion.div>
  );
};

export default RideSummary;
