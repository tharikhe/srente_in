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

interface ExpandableChatToggleProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    icon?: React.ReactNode;
    isOpen: boolean;
    toggleChat: () => void;
}

// Premium Animated Chat Icon
const AnimatedChatIcon = () => (
    <svg
        viewBox="0 0 24 24"
        className="w-7 h-7"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        {/* Chat bubble with gradient */}
        <defs>
            <linearGradient id="chatGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#ffffff" />
                <stop offset="100%" stopColor="#C4960C" />
            </linearGradient>
        </defs>

        {/* Main chat bubble */}
        <path
            d="M12 2C6.48 2 2 5.92 2 10.7c0 2.53 1.24 4.81 3.2 6.35V21l3.8-2.13c.95.26 1.96.4 3 .4 5.52 0 10-3.92 10-8.27S17.52 2 12 2z"
            fill="url(#chatGradient)"
            className="drop-shadow-sm"
        />

        {/* Animated dots */}
        <circle cx="8" cy="10.5" r="1.2" fill="#0D5C5C" className="animate-pulse" style={{ animationDelay: '0ms' }} />
        <circle cx="12" cy="10.5" r="1.2" fill="#0D5C5C" className="animate-pulse" style={{ animationDelay: '150ms' }} />
        <circle cx="16" cy="10.5" r="1.2" fill="#0D5C5C" className="animate-pulse" style={{ animationDelay: '300ms' }} />
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
        {/* Animated pulse ring - only when closed */}
        {!isOpen && (
            <>
                <span className="absolute inset-0 rounded-full bg-gradient-to-r from-brand-teal to-brand-gold opacity-40 animate-ping" />
                <span className="absolute -inset-1 rounded-full bg-gradient-to-r from-brand-teal via-brand-gold to-brand-teal opacity-20 blur-md animate-pulse" />
            </>
        )}

        {/* Main button with squeeze animation */}
        <button
            onClick={toggleChat}
            className={cn(
                "chat-toggle-btn relative w-16 h-16 rounded-full flex items-center justify-center transition-all duration-300",
                "bg-gradient-to-br from-brand-teal via-brand-teal-light to-brand-teal",
                "border-2 border-brand-gold/50",
                "shadow-lg shadow-brand-teal/30",
                "hover:shadow-xl hover:shadow-brand-gold/40",
                "hover:border-brand-gold",
                "active:scale-95",
                "group",
                isOpen ? "hidden sm:flex" : "",
                className,
            )}
            {...props}
        >
            {/* Glow effect on hover */}
            <span className="absolute inset-0 rounded-full bg-gradient-to-tr from-brand-gold/0 via-brand-gold/20 to-brand-gold/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            {/* Icon container with animation */}
            <span className={cn(
                "relative z-10 text-white transition-transform duration-300",
                isOpen ? "rotate-0" : ""
            )}>
                {isOpen ? (
                    <X className="h-7 w-7 drop-shadow-md" />
                ) : (
                    icon || <AnimatedChatIcon />
                )}
            </span>

            {/* Online indicator dot */}
            {!isOpen && (
                <span className="absolute top-0.5 right-0.5 w-4 h-4 bg-green-400 rounded-full border-2 border-white shadow-sm">
                    <span className="absolute inset-0 rounded-full bg-green-400 animate-ping opacity-75" />
                </span>
            )}
        </button>

        {/* Squeeze animation styles */}
        <style jsx>{`
            .chat-toggle-btn {
                animation: float 3s ease-in-out infinite;
            }

            .chat-toggle-btn:hover {
                animation: squeeze 0.9s ease-out;
            }

            @keyframes float {
                0%, 100% {
                    transform: translateY(0px);
                }
                50% {
                    transform: translateY(-6px);
                }
            }

            @keyframes squeeze {
                0% {
                    transform: scale3d(1, 1, 1);
                }
                30% {
                    transform: scale3d(1.2, 0.8, 1);
                }
                40% {
                    transform: scale3d(0.8, 1.2, 1);
                }
                50% {
                    transform: scale3d(1.1, 0.9, 1);
                }
                65% {
                    transform: scale3d(0.95, 1.05, 1);
                }
                75% {
                    transform: scale3d(1.03, 0.97, 1);
                }
                100% {
                    transform: scale3d(1, 1, 1);
                }
            }
        `}</style>
    </div>
);

ExpandableChatToggle.displayName = "ExpandableChatToggle";

export {
    ExpandableChat,
    ExpandableChatHeader,
    ExpandableChatBody,
    ExpandableChatFooter,
};

