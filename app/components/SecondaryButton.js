import React from 'react'

const SecondaryButton = ({ 
  children, 
  onClick, 
  disabled = false, 
  type = "button", 
  className = "", 
  size = "md",
  textColor = "text-black",
  ...props 
}) => {
  // Size variants
  const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3",
    lg: "px-8 py-4 text-lg"
  }

  const baseClasses = `cursor-pointer font-semibold ${textColor} bg-white border-2 border-gray-200 rounded-full shadow-lg hover:bg-green-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-700 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-white`

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

export default SecondaryButton