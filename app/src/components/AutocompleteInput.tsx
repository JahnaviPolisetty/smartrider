import { useState, useRef, useEffect } from "react";
import { MapPin, Navigation } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface Suggestion {
  id: string;
  name: string;
  address: string;
}

interface AutocompleteInputProps {
  placeholder: string;
  suggestions: Suggestion[];
  value: string;
  onChange: (value: string) => void;
  onSelect: (suggestion: Suggestion) => void;
  icon: "pickup" | "drop";
}

const AutocompleteInput = ({
  placeholder,
  suggestions,
  value,
  onChange,
  onSelect,
  icon,
}: AutocompleteInputProps) => {
  const [isFocused, setIsFocused] = useState(false);
  const [filtered, setFiltered] = useState<Suggestion[]>([]);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (value.length > 0) {
      setFiltered(
        suggestions.filter(
          (s) =>
            s.name.toLowerCase().includes(value.toLowerCase()) ||
            s.address.toLowerCase().includes(value.toLowerCase())
        )
      );
    } else {
      setFiltered(suggestions);
    }
  }, [value, suggestions]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
        setIsFocused(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={wrapperRef} className="relative">
      <div
        className={`flex items-center gap-3 px-4 py-3.5 rounded-xl border transition-all duration-200 ${
          isFocused
            ? "border-primary bg-accent/50 shadow-[0_0_0_3px_hsl(var(--primary)/0.1)]"
            : "border-border bg-muted/50"
        }`}
      >
        {icon === "pickup" ? (
          <div className="w-3 h-3 rounded-full bg-emerald-500 ring-4 ring-emerald-500/20 shrink-0" />
        ) : (
          <Navigation className="w-4 h-4 text-primary shrink-0" />
        )}
        <input
          type="text"
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onFocus={() => setIsFocused(true)}
          className="w-full bg-transparent outline-none text-foreground placeholder:text-muted-foreground text-sm font-medium"
        />
      </div>

      <AnimatePresence>
        {isFocused && filtered.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: -4, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -4, scale: 0.98 }}
            transition={{ duration: 0.15 }}
            className="absolute z-50 w-full mt-2 rounded-xl glass-elevated overflow-hidden"
          >
            {filtered.map((suggestion, index) => (
              <motion.button
                key={suggestion.id}
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.03 }}
                onClick={() => {
                  onSelect(suggestion);
                  onChange(suggestion.name);
                  setIsFocused(false);
                }}
                className="w-full flex items-start gap-3 px-4 py-3 hover:bg-accent/60 transition-colors text-left"
              >
                <MapPin className="w-4 h-4 text-muted-foreground mt-0.5 shrink-0" />
                <div>
                  <p className="text-sm font-semibold text-foreground">{suggestion.name}</p>
                  <p className="text-xs text-muted-foreground">{suggestion.address}</p>
                </div>
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AutocompleteInput;
