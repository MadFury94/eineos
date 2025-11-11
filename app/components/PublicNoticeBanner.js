"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const PublicNoticeBanner = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if this is a page load (including refresh) vs navigation within the app
    const isFirstLoad =
      !performance.getEntriesByType("navigation")[0] ||
      performance.getEntriesByType("navigation")[0].type === "reload" ||
      performance.getEntriesByType("navigation")[0].type === "navigate";

    // Only check session storage to prevent showing during same-session navigation
    const hasSeenNoticeThisSession = sessionStorage.getItem(
      "hasSeenPublicNotice"
    );

    if (isFirstLoad && !hasSeenNoticeThisSession) {
      setIsVisible(true);
    }
  }, []);

  const closeBanner = () => {
    setIsVisible(false);
    // Mark that user has seen the notice for this session
    sessionStorage.setItem("hasSeenPublicNotice", "true");
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ x: "-100%" }}
          animate={{ x: 0 }}
          exit={{ x: "-100%" }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className="bg-green-700 text-white py-3 px-4 relative z-40 overflow-hidden"
        >
          <div className="max-w-7xl mx-auto">
            {/* Top row: Scrolling text and close button */}
            <div className="flex items-center justify-between gap-4 mb-2">
              {/* Scrolling content */}
              <div className="flex-1 overflow-hidden">
                <motion.div
                  animate={{ x: ["100%", "-100%"] }}
                  transition={{
                    duration: 50,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                  className="whitespace-nowrap"
                >
                  <span className="text-sm lg:text-base font-medium">
                    🔔 Public Notice: Update to the Trademark Act - The general public and all stakeholders are hereby informed that the Trademark Act has been updated in accordance with recent legislative and regulatory provisions. Users are advised to review the updated Act to familiarize themselves with the new provisions and requirements.
                  </span>
                </motion.div>
              </div>

              {/* Close button */}
              <button
                onClick={closeBanner}
                className="w-7 h-7 md:w-8 md:h-8 bg-green-600 hover:bg-green-800 rounded-full flex items-center justify-center transition-colors duration-200 shrink-0"
                aria-label="Close banner"
              >
                <svg
                  className="w-4 h-4 md:w-5 md:h-5 text-white font-bold"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth={3}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            {/* Bottom row: Action Button */}
            <div className="flex justify-center">
              <a
                href="#"
                className="bg-white text-green-700 px-4 py-2 rounded-full text-sm font-semibold hover:bg-gray-100 transition-colors duration-200 whitespace-nowrap"
                onClick={closeBanner}
              >
                Click here to read the Updated Trademark Act
              </a>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PublicNoticeBanner;