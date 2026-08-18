'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Cookie } from 'lucide-react';
import Link from 'next/link';

export default function CookieConsent() {
  const [showConsent, setShowConsent] = useState(false);

  useEffect(() => {
    // Check if user has already consented
    const consent = localStorage.getItem('serente_cookie_consent');
    if (!consent) {
      // Delay showing it slightly for better UX
      const timer = setTimeout(() => {
        setShowConsent(true);
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('serente_cookie_consent', 'accepted');
    setShowConsent(false);
  };

  const declineCookies = () => {
    localStorage.setItem('serente_cookie_consent', 'declined');
    setShowConsent(false);
  };

  return (
    <AnimatePresence>
      {showConsent && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: 'spring', damping: 25, stiffness: 200 }}
          className="fixed bottom-0 left-0 right-0 md:bottom-6 md:left-6 md:right-auto z-[9999] p-4 md:max-w-md w-full"
        >
          <div className="bg-[#111111] border border-white/10 shadow-2xl rounded-2xl p-6 relative overflow-hidden">
            {/* Subtle glow effect */}
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#FFB800]/10 rounded-full blur-2xl pointer-events-none" />

            <button 
              onClick={declineCookies}
              className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-[#FFB800]/10 flex items-center justify-center flex-shrink-0 mt-1 text-[#FFB800]">
                <Cookie className="w-5 h-5" />
              </div>
              <div className="space-y-3">
                <h3 className="text-lg font-bold text-white leading-tight">We value your privacy</h3>
                <p className="text-sm text-gray-300 leading-relaxed">
                  We use cookies to enhance your browsing experience, serve personalized content, and analyze our traffic. By clicking &quot;Accept All&quot;, you consent to our use of cookies.
                </p>
                <div className="flex flex-wrap gap-3 pt-2">
                  <button
                    onClick={acceptCookies}
                    className="flex-1 bg-[#FFB800] text-[#1A1A1A] hover:bg-white px-4 py-2.5 rounded-xl font-bold text-sm transition-all duration-300 shadow-[0_0_15px_rgba(255,184,0,0.2)]"
                  >
                    Accept All
                  </button>
                  <button
                    onClick={declineCookies}
                    className="flex-1 bg-white/5 hover:bg-white/10 text-white border border-white/10 px-4 py-2.5 rounded-xl font-bold text-sm transition-all duration-300"
                  >
                    Decline
                  </button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
