import React from 'react'
import { motion } from "framer-motion"
import Link from "next/link"

const SecondaryButton = ({ 
  children, 
  onClick, 
  disabled = false, 
  type = "button", 
  className = "", 
  size = "md",
  textColor = "text-black",
  href = "https://portal.iponigeria.com/auth/",
  asLink = true,
  ...props 
}) => {
  // Size variants
  const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3",
    lg: "px-8 py-4 text-lg"
  }

  const baseClasses = `inline-block text-center cursor-pointer font-semibold ${textColor} bg-white border-2 border-gray-200 rounded-full shadow-lg hover:bg-green-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-700 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-white`

  const buttonClasses = `${baseClasses} ${sizeClasses[size]} ${className}`

  if (asLink && href && !disabled) {
    return (
      <Link href={href} {...props}>
        <motion.div
          className={buttonClasses}
          whileTap={{ scale: 0.7 }}
        >
          {children}
        </motion.div>
      </Link>
    )
  }

  return (
    <motion.button 
      className={buttonClasses}
      onClick={onClick}
      disabled={disabled}
      type={type}
      whileTap={{ scale: 0.7 }}
      {...props}
    >
      {children}
    </motion.button>
  )
}

export default SecondaryButton