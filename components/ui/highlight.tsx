"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface HighlightContextValue {
  hoveredId: string | null;
  setHoveredId: (id: string | null) => void;
}

const HighlightContext = React.createContext<HighlightContextValue | null>(null);

export function Highlight({
  children,
  className,
  containerClassName,
  style,
  mode = "parent",
  controlledItems = false,
  hover = true,
}: {
  children?: React.ReactNode;
  className?: string;
  containerClassName?: string;
  style?: React.CSSProperties;
  mode?: "parent" | "standalone";
  controlledItems?: boolean;
  hover?: boolean;
}) {
  const [hoveredId, setHoveredId] = React.useState<string | null>(null);

  return (
    <HighlightContext.Provider value={{ hoveredId, setHoveredId }}>
      <div
        className={cn("relative", containerClassName)}
        onPointerLeave={() => hover && setHoveredId(null)}
        style={style}
      >
        {children}
      </div>
    </HighlightContext.Provider>
  );
}

export function HighlightItem({
  children,
  className,
  asChild = false,
  value,
  id,
}: {
  children?: React.ReactNode;
  className?: string;
  asChild?: boolean;
  value?: string;
  id?: string;
}) {
  const context = React.useContext(HighlightContext);
  const itemId = id || value || React.useId();

  const handlePointerEnter = () => {
    context?.setHoveredId(itemId);
  };

  if (asChild && React.isValidElement(children)) {
    return React.cloneElement(children as React.ReactElement<any>, {
      onPointerEnter: (e: React.PointerEvent) => {
        handlePointerEnter();
        (children.props as any)?.onPointerEnter?.(e);
      },
      className: cn((children.props as any)?.className, className),
    });
  }

  return (
    <div
      className={cn("relative cursor-pointer", className)}
      onPointerEnter={handlePointerEnter}
    >
      {context?.hoveredId === itemId && (
        <motion.div
          layoutId="highlight-backdrop"
          className="absolute inset-0 bg-[#2DAA9E]/10 rounded-md border border-[#2DAA9E]/20 -z-10 pointer-events-none"
          transition={{ type: "spring", stiffness: 400, damping: 30 }}
        />
      )}
      {children}
    </div>
  );
}
