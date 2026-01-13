import React from "react";
import { Button } from "@/components/ui/button";
import { CheckCircle2, XCircle } from "lucide-react";
import { cn } from "@/lib/utils";

export type AnswerButtonVariant = "toeic" | "standard" | "compact";

export interface AnswerButtonProps {
  /** Nội dung hiển thị của option */
  children: React.ReactNode;
  /** Label cho option (A, B, C, D hoặc (A), (B), etc.) */
  label?: string;
  /** Option đã được chọn */
  isSelected: boolean;
  /** Đây có phải là đáp án đúng không */
  isCorrect?: boolean;
  /** Đã submit bài chưa (hiển thị kết quả) */
  isSubmitted: boolean;
  /** Handler khi click vào option */
  onClick: () => void;
  /** Disabled button */
  disabled?: boolean;
  /** Kiểu hiển thị */
  variant?: AnswerButtonVariant;
  /** Class name tùy chỉnh */
  className?: string;
  /** Hiển thị icon check/x */
  showIcon?: boolean;
}

export function AnswerButton({
  children,
  label,
  isSelected,
  isCorrect = false,
  isSubmitted,
  onClick,
  disabled,
  variant = "standard",
  className,
  showIcon = true,
}: AnswerButtonProps) {
  // Xác định trạng thái hiển thị
  const showAsCorrect = isSubmitted && isCorrect;
  const showAsWrong = isSubmitted && isSelected && !isCorrect;
  const showAsNeutral = isSubmitted && !isSelected && !isCorrect;

  // Base classes theo variant
  const variantClasses = {
    toeic: "w-full text-left p-3 rounded-md justify-start h-auto font-normal",
    standard: "text-left p-3 rounded-lg border-2 transition-all w-full",
    compact: "text-left p-2 rounded-md w-full text-sm",
  };

  // Xác định Button variant dựa trên state
  const getButtonVariant = ():
    | "default"
    | "destructive"
    | "outline"
    | "secondary"
    | "ghost" => {
    if (showAsCorrect) return "default"; // Màu xanh lá (success) - dùng default với custom class
    if (showAsWrong) return "destructive"; // Màu đỏ
    if (isSelected && !isSubmitted) return "default"; // Đang chọn - màu primary
    if (showAsNeutral) return "ghost"; // Không chọn sau khi submit - mờ đi
    return "outline"; // Mặc định
  };

  // Custom classes cho trạng thái correct (vì shadcn không có variant success)
  const getCustomClasses = () => {
    if (showAsCorrect) {
      return "bg-green-600 hover:bg-green-700 text-white border-green-600 dark:bg-green-700 dark:hover:bg-green-800";
    }
    if (showAsNeutral) {
      return "opacity-50";
    }
    return "";
  };

  return (
    <Button
      onClick={onClick}
      disabled={disabled || isSubmitted}
      variant={getButtonVariant()}
      className={cn("cursor-pointer",
        variantClasses[variant],
        getCustomClasses(),
        isSubmitted && "cursor-not-allowed",
        className
      )}
    >
      <div className="flex items-center justify-between w-full gap-2">
        <span className="flex items-center gap-2 flex-1">
          {label && <span className="font-semibold">{label}</span>}
          <span
            className={cn(variant === "toeic" ? "font-normal" : "font-medium")}
          >
            {children}
          </span>
        </span>
        {showIcon && showAsCorrect && (
          <CheckCircle2 className="size-5 shrink-0" />
        )}
        {showIcon && showAsWrong && <XCircle className="size-5 shrink-0" />}
      </div>
    </Button>
  );
}
