"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import {
  Menu,
  ChevronDown,
  ArrowRight,
  Zap,
  Cpu,
  Activity,
  Battery,
  Plug,
  Share2,
  Speaker,
  Gem,
  Monitor,
  Fan,
  ZapOff,
  Lightbulb,
  Sliders,
  ToggleLeft,
  Eye,
  Wrench,
  Repeat,
  Layers,
  Box,
} from "lucide-react";
import { categories } from "@/data/products";
import { getCategoryPath } from "@/lib/category-url";

const getCategoryIcon = (category: string) => {
  switch (category) {
    case "Resistors":
      return Activity;
    case "Capacitors":
      return Battery;
    case "ICs":
      return Cpu;
    case "Diodes":
      return Layers;
    case "Connectors":
      return Plug;
    case "Inductors":
      return Activity;
    case "Transistors":
      return Share2;
    case "Audio":
      return Speaker;
    case "Crystals":
      return Gem;
    case "Displays":
      return Monitor;
    case "Fans":
      return Fan;
    case "Fuses":
      return ZapOff;
    case "LEDs":
      return Lightbulb;
    case "Potentiometers":
      return Sliders;
    case "Power":
      return Zap;
    case "Relays":
      return ToggleLeft;
    case "Sensors":
      return Eye;
    case "Tools":
      return Wrench;
    case "Transformers":
      return Repeat;
    case "Modules":
      return Box;
    default:
      return Box;
  }
};

export default function ProductCatalogMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (isOpen) {
      const originalStyle = window.getComputedStyle(document.body).overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = originalStyle;
      };
    }
  }, [isOpen]);

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsOpen(false);
    }, 250);
  };

  const toggleOpen = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div
      className="relative z-50 inline-block"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Trigger Button */}
      <button
        type="button"
        onClick={toggleOpen}
        className="w-56 bg-[#2DAA9E] hover:bg-[#258B82] text-white font-bold py-2.5 px-4 rounded-lg flex items-center justify-between transition-all duration-300 shadow-sm relative z-50 cursor-pointer"
        aria-expanded={isOpen}
      >
        <div className="flex items-center gap-2">
          <Menu className="w-4 h-4" />
          <span className="tracking-wide text-sm font-bold">Product Catalog</span>
        </div>
        <ChevronDown
          className={`w-4 h-4 transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {/* Invisible Bridge to prevent mouse gap issues */}
      {isOpen && (
        <div className="absolute top-full left-0 w-[620px] h-3 bg-transparent z-50" />
      )}

      {/* Animated Dropdown Viewport */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 6, scale: 0.98 }}
            transition={{ type: "spring", stiffness: 400, damping: 30 }}
            className="absolute top-full left-0 mt-2 w-[620px] bg-white rounded-2xl shadow-2xl border border-gray-100 p-4 z-50 origin-top-left"
          >
            <div className="grid grid-cols-12 gap-5">
              {/* Left Column: Categories List */}
              <div className="col-span-7 space-y-1 border-r border-gray-100 pr-3">
                <div className="flex items-center justify-between px-2 mb-2.5 pb-2 border-b border-gray-100">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#2DAA9E]">
                    Component Categories
                  </span>
                  <span className="text-[10px] font-semibold bg-[#2DAA9E]/10 text-[#2DAA9E] px-2 py-0.5 rounded-full">
                    {categories.length} Types
                  </span>
                </div>

                <div className="max-h-[320px] overflow-y-auto overscroll-contain pr-2 space-y-0.5 pointer-events-auto [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-thumb]:bg-gray-200 [&::-webkit-scrollbar-thumb]:rounded-full hover:[&::-webkit-scrollbar-thumb]:bg-[#2DAA9E]/40 [&::-webkit-scrollbar-track]:bg-transparent">
                  {categories.map((category) => {
                    const Icon = getCategoryIcon(category);
                    return (
                      <Link
                        key={category}
                        href={getCategoryPath(category)}
                        onClick={() => setIsOpen(false)}
                        className="flex items-center gap-2.5 p-2 rounded-lg hover:bg-[#2DAA9E]/10 transition-all duration-200 group/cat"
                      >
                        <div className="w-7 h-7 rounded-lg bg-[#2DAA9E]/10 flex items-center justify-center text-[#2DAA9E] group-hover/cat:bg-[#2DAA9E] group-hover/cat:text-white transition-colors flex-shrink-0">
                          <Icon className="w-3.5 h-3.5" />
                        </div>
                        <div className="flex-grow min-w-0">
                          <p className="text-xs font-bold text-[#1A1A1A] group-hover/cat:text-[#2DAA9E] transition-colors truncate">
                            {category}
                          </p>
                        </div>
                        <ArrowRight className="w-3.5 h-3.5 text-gray-400 group-hover/cat:text-[#2DAA9E] opacity-0 group-hover/cat:opacity-100 group-hover/cat:translate-x-0.5 transition-all flex-shrink-0" />
                      </Link>
                    );
                  })}
                </div>
              </div>

              {/* Right Column: Featured Solutions & Quick Actions */}
              <div className="col-span-5 flex flex-col justify-between space-y-3">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#F39800] block mb-2.5 px-1">
                    Featured Solutions
                  </span>

                  <div className="space-y-2">
                    <Link
                      href="/products"
                      onClick={() => setIsOpen(false)}
                      className="block p-2.5 rounded-xl bg-gradient-to-br from-[#2DAA9E]/10 to-[#2DAA9E]/5 border border-[#2DAA9E]/20 hover:border-[#2DAA9E]/40 transition-all group/feat"
                    >
                      <div className="flex items-center gap-2 mb-1">
                        <Cpu className="w-4 h-4 text-[#2DAA9E]" />
                        <span className="text-xs font-bold text-[#1A1A1A] group-hover/feat:text-[#2DAA9E]">
                          Power Semiconductors
                        </span>
                      </div>
                      <p className="text-[11px] text-gray-600 line-clamp-2 leading-relaxed">
                        MOSFETs, IGBTs, Diodes & SiC Modules for EV & Power systems.
                      </p>
                    </Link>

                    <Link
                      href="/bom"
                      onClick={() => setIsOpen(false)}
                      className="block p-2.5 rounded-xl bg-gradient-to-br from-[#F39800]/10 to-[#F39800]/5 border border-[#F39800]/20 hover:border-[#F39800]/40 transition-all group/bom"
                    >
                      <div className="flex items-center gap-2 mb-1">
                        <Zap className="w-4 h-4 text-[#F39800]" />
                        <span className="text-xs font-bold text-[#1A1A1A] group-hover/bom:text-[#F39800]">
                          BOM Sourcing Tool
                        </span>
                      </div>
                      <p className="text-[11px] text-gray-600 line-clamp-2 leading-relaxed">
                        Upload your Bill of Materials for instant bulk quote pricing.
                      </p>
                    </Link>
                  </div>
                </div>

                {/* View All Button */}
                <Link
                  href="/products"
                  onClick={() => setIsOpen(false)}
                  className="w-full py-2.5 px-3 bg-[#1A1A1A] hover:bg-[#2DAA9E] text-white rounded-xl font-bold text-xs flex items-center justify-center gap-2 transition-colors duration-300 shadow-md group/all"
                >
                  <span>Explore Full Catalog</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover/all:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
