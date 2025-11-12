"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const PublicNoticeBanner = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const isFirstLoad =
      !performance.getEntriesByType("navigation")[0] ||
      performance.getEntriesByType("navigation")[0].type === "reload" ||
      performance.getEntriesByType("navigation")[0].type === "navigate";

    const hasSeenNoticeThisSession = sessionStorage.getItem("hasSeenPublicNotice");

    if (isFirstLoad && !hasSeenNoticeThisSession) {
      setIsVisible(true);
    }
  }, []);

  const closeBanner = () => {
    setIsVisible(false);
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
            <div className="flex items-center justify-center gap-4 mb-2 relative">
              <span className="text-sm lg:text-base font-semibold text-center">
                ⚠️ Public Notice: System Maintenance Update
              </span>
              <button
                onClick={closeBanner}
                className="absolute right-0 w-7 h-7 md:w-8 md:h-8 bg-green-600 hover:bg-green-700 rounded-full flex items-center justify-center transition-colors duration-200 shrink-0"
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

            <div className="flex-1 overflow-hidden mb-2">
              <motion.div
                animate={{ x: ["100%", "-100%"] }}
                transition={{
                  duration: 25,
                  repeat: Infinity,
                  ease: "linear"
                }}
                className="whitespace-nowrap"
              >
                <span className="text-sm lg:text-base font-medium">
                  Our portal is currently undergoing maintenance, and you may experience difficulty logging in. We are working to restore full functionality as quickly as possible. Thank you for your patience and understanding.
                </span>
              </motion.div>
            </div>

            <div className="flex justify-center">
              <a
                href="#"
                className="bg-white text-black px-4 py-2 rounded-full text-sm font-semibold hover:bg-gray-100 transition-colors duration-200 whitespace-nowrap"
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
