import { Users, Minus, Plus } from "lucide-react";

interface SeatSelectorProps {
  value: number;
  onChange: (value: number) => void;
  max?: number;
}

const SeatSelector = ({ value, onChange, max = 6 }: SeatSelectorProps) => {
  return (
    <div className="flex items-center justify-between px-4 py-3 rounded-xl border border-border bg-muted/50">
      <div className="flex items-center gap-3">
        <Users className="w-4 h-4 text-primary" />
        <span className="text-sm font-medium text-foreground">Passengers</span>
      </div>
      <div className="flex items-center gap-3">
        <button
          onClick={() => onChange(Math.max(1, value - 1))}
          disabled={value <= 1}
          className="w-8 h-8 rounded-lg bg-secondary flex items-center justify-center text-foreground disabled:opacity-30 transition-all active:scale-90"
        >
          <Minus className="w-3.5 h-3.5" />
        </button>
        <span className="text-sm font-bold text-foreground w-4 text-center">{value}</span>
        <button
          onClick={() => onChange(Math.min(max, value + 1))}
          disabled={value >= max}
          className="w-8 h-8 rounded-lg bg-primary text-primary-foreground flex items-center justify-center disabled:opacity-30 transition-all active:scale-90"
        >
          <Plus className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};

export default SeatSelector;
