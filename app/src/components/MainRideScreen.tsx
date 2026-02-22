import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, LogOut } from "lucide-react";
import AutocompleteInput from "./AutocompleteInput";
import SeatSelector from "./SeatSelector";
import LoadingSpinner from "./LoadingSpinner";
import RideOptions from "./RideOptions";
import RideSummary from "./RideSummary";
import ThemeToggle from "./ThemeToggle";
import { pickupSuggestions, dropSuggestions, rideOptions, RideOption } from "@/data/mockData";
import logo from "@/assets/logo.png";
import heroBg from "@/assets/hero-bg.jpg";

type RideState = "search" | "loading" | "options" | "summary";

interface MainRideScreenProps {
  onLogout: () => void;
}

const MainRideScreen = ({ onLogout }: MainRideScreenProps) => {
  const [pickup, setPickup] = useState("");
  const [drop, setDrop] = useState("");
  const [seats, setSeats] = useState(1);
  const [rideState, setRideState] = useState<RideState>("search");
  const [selectedRide, setSelectedRide] = useState<RideOption | null>(null);

  const handleSearch = useCallback(() => {
    if (!pickup || !drop) return;
    setRideState("loading");
    setTimeout(() => setRideState("options"), 2000);
  }, [pickup, drop]);

  const handleSelectRide = useCallback((option: RideOption) => {
    setSelectedRide(option);
    setRideState("summary");
  }, []);

  const handleCancel = useCallback(() => {
    setSelectedRide(null);
    setRideState("search");
  }, []);

  const canSearch = pickup.length > 0 && drop.length > 0;

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="" className="w-full h-72 object-cover lg:h-96" />
        <div className="absolute inset-0 h-72 bg-gradient-to-b from-black/40 via-black/20 to-background lg:h-96" />
      </div>

      {/* Subtle gradient below hero */}
      <div className="absolute top-72 inset-x-0 bottom-0 bg-background lg:top-96" />

      <div className="relative z-10 max-w-md mx-auto min-h-screen flex flex-col md:max-w-xl lg:max-w-2xl xl:max-w-3xl">
        {/* Header */}
        <motion.header
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center justify-between px-5 py-4 sm:px-6 md:px-8"
        >
          <div className="flex items-center gap-3">
            <img src={logo} alt="RideGo" className="w-9 h-9 rounded-xl" />
            <h1 className="text-lg font-extrabold text-white">
              Ride<span className="text-primary">Go</span>
            </h1>
          </div>
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <button
              onClick={onLogout}
              className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-secondary/80 transition-all"
            >
              <LogOut className="w-4 h-4" />
            </button>
          </div>
        </motion.header>

        {/* Main Content */}
        <div className="flex-1 px-5 pb-8 sm:px-6 md:px-8">
          <AnimatePresence mode="wait">
            {rideState === "search" && (
              <motion.div
                key="search"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="space-y-5"
              >
                {/* Greeting */}
                <div className="pt-2 pb-2">
                  <h2 className="text-2xl font-extrabold text-white md:text-3xl">
                    Where are you going?
                  </h2>
                  <p className="text-sm text-white/60 mt-1">Book a ride in seconds</p>
                </div>

                {/* Search card */}
                <div className="p-5 rounded-3xl glass-elevated space-y-3 md:p-6">
                  <AutocompleteInput
                    placeholder="Pickup location"
                    suggestions={pickupSuggestions}
                    value={pickup}
                    onChange={setPickup}
                    onSelect={(s) => setPickup(s.name)}
                    icon="pickup"
                  />

                  {/* Connector line */}
                  <div className="flex items-center pl-6">
                    <div className="w-px h-4 bg-border" />
                  </div>

                  <AutocompleteInput
                    placeholder="Drop location"
                    suggestions={dropSuggestions}
                    value={drop}
                    onChange={setDrop}
                    onSelect={(s) => setDrop(s.name)}
                    icon="drop"
                  />

                  <SeatSelector value={seats} onChange={setSeats} />

                  <motion.button
                    whileTap={{ scale: 0.97 }}
                    onClick={handleSearch}
                    disabled={!canSearch}
                    className={`w-full flex items-center justify-center gap-2 py-4 rounded-2xl font-bold text-sm transition-all md:py-5 md:text-base ${
                      canSearch
                        ? "gradient-primary text-primary-foreground shadow-[var(--shadow-glow)] hover:brightness-110"
                        : "bg-muted text-muted-foreground cursor-not-allowed"
                    }`}
                  >
                    <Search className="w-4 h-4" />
                    Search Rides
                  </motion.button>
                </div>

                {/* Quick suggestions */}
                <div className="space-y-2">
                  <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider px-1">
                    Recent places
                  </p>
                  {pickupSuggestions.slice(0, 3).map((place, i) => (
                    <motion.button
                      key={place.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 + i * 0.05 }}
                      onClick={() => setPickup(place.name)}
                      className="w-full flex items-center gap-3 p-3 rounded-xl hover:bg-accent/60 transition-colors text-left"
                    >
                      <div className="w-10 h-10 rounded-xl bg-muted flex items-center justify-center">
                        <span className="text-muted-foreground text-sm">📍</span>
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-semibold text-foreground truncate">{place.name}</p>
                        <p className="text-xs text-muted-foreground truncate">{place.address}</p>
                      </div>
                    </motion.button>
                  ))}
                </div>
              </motion.div>
            )}

            {rideState === "loading" && (
              <motion.div
                key="loading"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex items-center justify-center min-h-[60vh]"
              >
                <LoadingSpinner />
              </motion.div>
            )}

            {rideState === "options" && (
              <motion.div
                key="options"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="space-y-5"
              >
                <div className="pt-2 pb-2">
                  <h2 className="text-2xl font-extrabold text-foreground md:text-3xl">
                    Available rides
                  </h2>
                  <p className="text-sm text-muted-foreground mt-1">
                    {pickup} → {drop}
                  </p>
                </div>

                <RideOptions
                  options={rideOptions}
                  selectedId={selectedRide?.id ?? null}
                  onSelect={handleSelectRide}
                  seats={seats}
                />

                <button
                  onClick={handleCancel}
                  className="w-full py-3 text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  ← Back to search
                </button>
              </motion.div>
            )}

            {rideState === "summary" && selectedRide && (
              <motion.div
                key="summary"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="space-y-5"
              >
                <div className="pt-2 pb-2">
                  <h2 className="text-2xl font-extrabold text-foreground md:text-3xl">
                    Ride confirmed! 🎉
                  </h2>
                  <p className="text-sm text-muted-foreground mt-1">Your driver is on the way</p>
                </div>

                <RideSummary
                  ride={selectedRide}
                  pickup={pickup}
                  drop={drop}
                  seats={seats}
                  onCancel={handleCancel}
                />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default MainRideScreen;
