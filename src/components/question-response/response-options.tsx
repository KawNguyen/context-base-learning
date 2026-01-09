import { Button } from "@/components/ui/button";

interface ResponseOption {
  label: string;
  selected: boolean;
  disabled: boolean;
}

interface ResponseOptionsProps {
  options: ResponseOption[];
  onSelect: (index: number) => void;
}

export function ResponseOptions({ options, onSelect }: ResponseOptionsProps) {
  return (
    <div className="space-y-4 text-center">
      <p className="text-sm font-bold uppercase tracking-widest text-primary/70 mb-4">
        Select the best response
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {options.map((option, index) => (
          <Button
            key={index}
            variant={option.selected ? "default" : "outline"}
            className={`h-24 text-2xl font-bold transition-all ${
              option.selected
                ? "shadow-md bg-primary text-primary-foreground scale-[1.02]"
                : "bg-card/30 hover:border-primary/50"
            } `}
            onClick={() => onSelect(index)}
            disabled={option.disabled}
          >
            {option.label}
          </Button>
        ))}
      </div>
    </div>
  );
}
