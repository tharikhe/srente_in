"use client";

import React, { useRef, useState } from "react";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export type ChatPosition = "bottom-right" | "bottom-left";
export type ChatSize = "sm" | "md" | "lg" | "xl" | "full";

const chatConfig = {
    dimensions: {
        sm: "sm:max-w-sm sm:max-h-[500px]",
        md: "sm:max-w-md sm:max-h-[600px]",
        lg: "sm:max-w-lg sm:max-h-[700px]",
        xl: "sm:max-w-xl sm:max-h-[800px]",
        full: "sm:w-full sm:h-full",
    },
    positions: {
        "bottom-right": "bottom-5 right-5",
        "bottom-left": "bottom-5 left-5",
    },
    chatPositions: {
        "bottom-right": "sm:bottom-[calc(100%+10px)] sm:right-0",
        "bottom-left": "sm:bottom-[calc(100%+10px)] sm:left-0",
    },
    states: {
        open: "pointer-events-auto opacity-100 visible scale-100 translate-y-0",
        closed:
            "pointer-events-none opacity-0 invisible scale-100 sm:translate-y-5",
    },
};

interface ExpandableChatProps extends React.HTMLAttributes<HTMLDivElement> {
    position?: ChatPosition;
    size?: ChatSize;
    icon?: React.ReactNode;
}

const ExpandableChat: React.FC<ExpandableChatProps> = ({
    className,
    position = "bottom-right",
    size = "md",
    icon,
    children,
    ...props
}) => {
    const [isOpen, setIsOpen] = useState(false);
    const chatRef = useRef<HTMLDivElement>(null);

    const toggleChat = () => setIsOpen(!isOpen);

    return (
        <div
            className={cn(`fixed ${chatConfig.positions[position]} z-50`, className)}
            {...props}
        >
            <div
                ref={chatRef}
                onWheel={(e) => e.stopPropagation()}
                className={cn(
                    "flex flex-col bg-background border sm:rounded-lg shadow-md overflow-hidden transition-all duration-250 ease-out sm:absolute sm:w-[90vw] sm:h-[80vh] fixed inset-0 w-full h-full sm:inset-auto",
                    chatConfig.chatPositions[position],
                    chatConfig.dimensions[size],
                    isOpen ? chatConfig.states.open : chatConfig.states.closed,
                    className,
                )}
            >
                {children}
                <Button
                    variant="ghost"
                    size="icon"
                    className="absolute top-2 right-2 sm:hidden"
                    onClick={toggleChat}
                >
                    <X className="h-4 w-4" />
                </Button>
            </div>
            <ExpandableChatToggle
                icon={icon}
                isOpen={isOpen}
                toggleChat={toggleChat}
            />
        </div>
    );
};

ExpandableChat.displayName = "ExpandableChat";

const ExpandableChatHeader: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
    className,
    ...props
}) => (
    <div
        className={cn("flex items-center justify-between p-4 border-b", className)}
        {...props}
    />
);

ExpandableChatHeader.displayName = "ExpandableChatHeader";

const ExpandableChatBody = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
    ({ className, ...props }, ref) => (
        <div ref={ref} className={cn("flex-1 w-full overflow-y-auto overscroll-contain min-h-0", className)} {...props} />
    )
);

ExpandableChatBody.displayName = "ExpandableChatBody";

const ExpandableChatFooter: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
    className,
    ...props
}) => <div className={cn("border-t p-4", className)} {...props} />;

ExpandableChatFooter.displayName = "ExpandableChatFooter";

// Premium Minimalist Chat Icon
const AnimatedChatIcon = () => (
    <svg
        viewBox="0 0 24 24"
        className="w-6 h-6 text-gray-700 dark:text-gray-300 group-hover:text-[#2DAA9E] transition-colors duration-300"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
    >
        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
    </svg>
);

const ExpandableChatToggle: React.FC<ExpandableChatToggleProps> = ({
    className,
    icon,
    isOpen,
    toggleChat,
    ...props
}) => (
    <div className="relative">
        {/* Main glassmorphic button */}
        <button
            onClick={toggleChat}
            className={cn(
                "relative w-14 h-14 rounded-full flex items-center justify-center transition-all duration-400",
                "bg-white/80 dark:bg-black/60 backdrop-blur-xl border border-white/50 dark:border-white/10",
                "shadow-[0_8px_32px_rgba(0,0,0,0.1)]",
                "hover:shadow-[0_8px_32px_rgba(45,170,158,0.2)] hover:scale-105 active:scale-95",
                "group",
                isOpen ? "hidden sm:flex" : "",
                className,
            )}
            {...props}
        >
            {/* Icon container */}
            <span className={cn(
                "relative z-10 transition-transform duration-300",
                isOpen ? "rotate-90 scale-0 opacity-0 absolute" : "rotate-0 scale-100 opacity-100"
            )}>
                {icon || <AnimatedChatIcon />}
            </span>

            {/* Close Icon */}
            <span className={cn(
                "absolute inset-0 flex items-center justify-center transition-transform duration-300",
                isOpen ? "rotate-0 scale-100 opacity-100 text-gray-700 dark:text-gray-300" : "-rotate-90 scale-0 opacity-0"
            )}>
                <X className="h-6 w-6" />
            </span>

            {/* Online indicator dot */}
            {!isOpen && (
                <span className="absolute top-0 right-0 w-3.5 h-3.5 bg-green-500 rounded-full border-2 border-white dark:border-black shadow-sm">
                    <span className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-75" />
                </span>
            )}
        </button>
    </div>
);

ExpandableChatToggle.displayName = "ExpandableChatToggle";

export {
    ExpandableChat,
    ExpandableChatHeader,
    ExpandableChatBody,
    ExpandableChatFooter,
};

