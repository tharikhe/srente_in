import { useEffect, useState } from 'react';

export function Preloader() {
  const [visible, setVisible] = useState(true);
  const [fade, setFade] = useState(false);

  useEffect(() => {
    // Hide the loader once all assets are ready, or after a safety timeout
    const handleLoad = () => {
      // Begin fade out
      setFade(true);
      // Remove element completely after animation completes
      setTimeout(() => {
        setVisible(false);
      }, 700);
    };

    if (document.readyState === 'complete') {
      // If already loaded, stay visible for a brief moment to show the clean logo animation
      const initialDelay = setTimeout(handleLoad, 1000);
      return () => clearTimeout(initialDelay);
    } else {
      window.addEventListener('load', handleLoad);
      // Safety timeout of 5 seconds
      const safetyTimeout = setTimeout(handleLoad, 5000);
      return () => {
        window.removeEventListener('load', handleLoad);
        clearTimeout(safetyTimeout);
      };
    }
  }, []);

  if (!visible) return null;

  return (
    <div
      className={`fixed inset-0 bg-black z-[99999] flex items-center justify-center transition-all duration-700 ease-in-out ${
        fade ? 'opacity-0 pointer-events-none scale-105' : 'opacity-100'
      }`}
    >
      <div className="loader-wrapper">
        <span className="loader-letter">S</span>
        <span className="loader-letter">e</span>
        <span className="loader-letter">r</span>
        <span className="loader-letter">e</span>
        <span className="loader-letter">n</span>
        <span className="loader-letter">t</span>
        <span className="loader-letter">e</span>
        <span className="loader-letter">.</span>
        <span className="loader-letter">.</span>
        <span className="loader-letter">.</span>
        <div className="loader-ring" />
      </div>
    </div>
  );
}
