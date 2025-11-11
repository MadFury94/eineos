"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const PublicNoticeModal = () => {
  const [isOpen, setIsOpen] = useState(false);

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
      setIsOpen(true);
    }
  }, []);

  const closeModal = () => {
    setIsOpen(false);
    // Mark that user has seen the notice for this session
    sessionStorage.setItem("hasSeenPublicNotice", "true");
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black bg-opacity-20 z-50 flex items-center justify-center p-4"
          onClick={closeModal}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 w-10 h-10 bg-green-100 hover:bg-green-200 rounded-full flex items-center justify-center transition-colors duration-200 z-10"
              aria-label="Close modal"
            >
              <svg
                className="w-6 h-6 text-green-700"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            {/* Modal content */}
            <div className="p-8">
              <div className="mb-6">
                <h2 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-4">
                  Public Notice: Update to the Trademark Act
                </h2>

                <p className="text-gray-600 leading-relaxed text-lg">
                  The general public and all stakeholders are hereby informed
                  that the Trademark Act has been updated in accordance with
                  recent legislative and regulatory provisions. Users are
                  advised to review the updated Act to familiarize themselves
                  with the new provisions and requirements.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-4 border-t border-gray-100">
                <a
                  href="#"
                  className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-green-900 via-green-700 to-green-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl hover:from-green-700 hover:to-green-500 transition-all duration-200 text-center"
                  onClick={closeModal}
                >
                  Click here to read the Updated Trademark Act
                </a>

                <button
                  onClick={closeModal}
                  className="inline-flex items-center justify-center px-6 py-3 border-2 border-gray-300 text-gray-700 font-semibold rounded-full hover:border-gray-400 hover:bg-gray-50 transition-all duration-200"
                >
                  Close
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PublicNoticeModal;
