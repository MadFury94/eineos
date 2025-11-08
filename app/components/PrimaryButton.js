import React from 'react'

const PrimaryButton = ({ 
  children, 
  onClick, 
  disabled = false, 
  type = "button", 
  className = "", 
  size = "md",
  textColor = "text-white",
  ...props 
}) => {
  // Size variants
  const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3",
    lg: "px-8 py-4 text-lg"
  }

  const baseClasses = `cursor-pointer font-semibold ${textColor} bg-gradient-to-r from-green-900 via-green-700 to-green-600 rounded-full shadow-2xl hover:shadow-lg hover:from-green-700 hover:to-green-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-700 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:shadow-2xl`

  const buttonClasses = `${baseClasses} ${sizeClasses[size]} ${className}`

  return (
    <button 
      className={buttonClasses}
      onClick={onClick}
      disabled={disabled}
      type={type}
      {...props}
    >
      {children}
    </button>
  )
}

export default PrimaryButton