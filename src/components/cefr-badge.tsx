import { Badge } from "./ui/badge";

type CEFRLevel = "A1" | "A2" | "B1" | "B2" | "C1" | "C2";

interface Props {
  level: CEFRLevel;
}

const levelColors: Record<
  CEFRLevel,
  { bg: string; text: string; name: string }
> = {
  A1: { bg: "bg-blue-500/20", text: "text-blue-300", name: "Beginner" },
  A2: { bg: "bg-cyan-500/20", text: "text-cyan-300", name: "Elementary" },
  B1: { bg: "bg-green-500/20", text: "text-green-300", name: "Intermediate" },
  B2: {
    bg: "bg-emerald-500/20",
    text: "text-emerald-300",
    name: "Upper Inter.",
  },
  C1: { bg: "bg-orange-500/20", text: "text-orange-300", name: "Advanced" },
  C2: { bg: "bg-red-500/20", text: "text-red-300", name: "Mastery" },
};

export default function CEFRBadge({ level }: Props) {
  const colors = levelColors[level];

  return (
    <Badge className={`${colors.bg} ${colors.text}`}>
      {level} • {colors.name}
    </Badge>
  );
}
