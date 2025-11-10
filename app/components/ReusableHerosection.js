import React from 'react'
import { motion } from "framer-motion";
import Image from "next/image";
import PrimaryButton from "./PrimaryButton";
import SecondaryButton from "./SecondaryButton";

const ReusableHerosection = ({
  backgroundImage,
  title,
  subtitle,
  description,
  primaryButtonText,
  secondaryButtonText,
  onPrimaryClick,
  onSecondaryClick,
  showPrimaryButton = true,
  showSecondaryButton = false,
  overlayOpacity = "bg-black/40",
  className = ""
}) => {
  return (
    <motion.section
      initial={{ opacity: 0, y: -70 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`relative mb-20 ${className}`}
    >
      <Image
        src={backgroundImage}
        alt="Hero background"
        className="w-screen object-cover h-[70vh] lg:h-[87.5vh] transition-all duration-700"
      />
      
      {/* Overlay for darkening the image */}
      <div
        className={`absolute top-0 left-0 w-full h-[70vh] lg:h-[87.5vh] ${overlayOpacity} z-10 pointer-events-none`}
        style={{ mixBlendMode: "multiply" }}
      ></div>
      
      <div
        className="absolute flex flex-col justify-center 
            items-center top-0 right-0 left-0 
            bottom-0 text-white w-5/6 mx-auto text-center z-20"
      >
        {/* Subtitle/Badge */}
        {subtitle && (
          <p className="border border-sky-700 bg-sky-200 px-2 py-0.5 text-xs rounded-xl text-sky-800 mb-2">
            {subtitle}
          </p>
        )}
        
        {/* Main Title */}
        <p className="text-4xl mt-2 lg:text-5xl font-bold">
          {title}
        </p>
        
        {/* Description */}
        <p className="mt-1 lg:mt-3 lg:w-5/6 mx-auto lg:text-xl text-base text-center mb-5 lg:mb-10">
          {description}
        </p>

        {/* Buttons */}
        <div className="flex gap-4 flex-wrap justify-center">
          {showPrimaryButton && primaryButtonText && (
            <PrimaryButton onClick={onPrimaryClick}>
              {primaryButtonText}
            </PrimaryButton>
          )}
          
          {showSecondaryButton && secondaryButtonText && (
            <SecondaryButton onClick={onSecondaryClick}>
              {secondaryButtonText}
            </SecondaryButton>
          )}
        </div>
      </div>
    </motion.section>
  )
}

export default ReusableHerosection