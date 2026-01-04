"use client";

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";

const CollapsibleContext = React.createContext<{
  open: boolean;
  setOpen: (v: boolean) => void;
} | null>(null);

export function Collapsible({
  children,
  defaultOpen = false,
  className,
  asChild = false,
  ...props
}: React.ComponentPropsWithoutRef<"div"> & {
  defaultOpen?: boolean;
  asChild?: boolean;
}) {
  const [open, setOpen] = React.useState(defaultOpen);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const Comp: any = asChild ? Slot : "div";

  return (
    <CollapsibleContext.Provider value={{ open, setOpen }}>
      <Comp className={className} {...props}>
        {children}
      </Comp>
    </CollapsibleContext.Provider>
  );
}

export function CollapsibleTrigger({
  asChild = false,
  children,
  ...props
// eslint-disable-next-line @typescript-eslint/no-explicit-any
}: any) {
  const ctx = React.useContext(CollapsibleContext);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const Comp: any = asChild ? Slot : "button";

  return (
    <Comp
      {...props}

      onClick={(e: unknown) => {
        ctx?.setOpen(!ctx.open);
        if (props.onClick) props.onClick(e);
      }}
    >
      {children}
    </Comp>
  );
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function CollapsibleContent({ children, className, ...props }: any) {
  const ctx = React.useContext(CollapsibleContext);
  if (!ctx) return null;
  return (
    <div
      {...props}
      className={className}
      style={{ display: ctx.open ? undefined : "none" }}
    >
      {children}
    </div>
  );
}

export { Slot };
