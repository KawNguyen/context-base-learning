import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Play, Pause, RotateCcw } from "lucide-react";

interface AudioPlayerProps {
  isSpeaking: boolean;
  isPaused: boolean;
  speed: number;
  onPlay: () => void;
  onPause: () => void;
  onReplay: () => void;
  onSpeedChange: (speed: number) => void;
}

export function AudioPlayer({
  isSpeaking,
  isPaused,
  speed,
  onPlay,
  onPause,
  onReplay,
  onSpeedChange,
}: AudioPlayerProps) {
  return (
    <div className="flex flex-col items-center justify-center p-8 bg-muted/40 rounded-2xl border-2 border-dashed border-primary/20">
      <div className="flex items-center gap-6 mb-8">
        <Button
          variant={isSpeaking && !isPaused ? "secondary" : "default"}
          size="icon"
          className="h-16 w-16 rounded-full shadow-lg active:scale-95 transition-all"
          onClick={isSpeaking && !isPaused ? onPause : onPlay}
        >
          {isSpeaking && !isPaused ? (
            <Pause className="h-8 w-8 text-primary-foreground" />
          ) : (
            <Play className="h-8 w-8 ml-1 text-primary-foreground" />
          )}
        </Button>

        <Button
          variant="outline"
          size="icon"
          className="h-12 w-12 rounded-full hover:bg-muted"
          onClick={onReplay}
          disabled={!isSpeaking && !isPaused}
        >
          <RotateCcw className="h-5 w-5" />
        </Button>
      </div>

      <div className="w-full max-w-xs space-y-4">
        <div className="flex justify-between text-xs font-semibold uppercase tracking-wider text-muted-foreground">
          <span>Speed Boost</span>
          <span className="text-primary font-bold">{speed}x</span>
        </div>
        <Slider
          value={[speed]}
          min={0.5}
          max={1.5}
          step={0.25}
          onValueChange={(val) => onSpeedChange(val[0])}
        />
      </div>
    </div>
  );
}
