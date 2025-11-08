import React from 'react'
import PrimaryButton from './PrimaryButton'
import SecondaryButton from './SecondaryButton'

const OurServicesCard = ({ 
  icon: Icon, 
  title, 
  description, 
  buttonText = "Get Started",
  isInverted = false,
  onButtonClick,
  className = "",
  ...props 
}) => {
  const cardClasses = isInverted 
    ? `rounded-2xl text-center bg-green-700 p-7 shadow-xl text-white ${className}` 
    : `rounded-2xl text-center bg-green-50 p-7 shadow-xl ${className}`
  
  const iconClasses = isInverted 
    ? "text-6xl mx-auto text-white" 
    : "text-6xl mx-auto text-green-700"

  const titleClasses = isInverted 
    ? "text-xl mt-2 font-semibold text-white" 
    : "text-xl mt-2 font-semibold"

  const descriptionClasses = isInverted 
    ? "text-green-50" 
    : ""

  return (
    <div className={cardClasses} {...props}>
      {Icon && <Icon className={iconClasses} />}
      <p className={titleClasses}>{title}</p>
      <p className={descriptionClasses}>
        {description}
      </p>
      <div className="mt-5">
        {isInverted ? (
          <SecondaryButton 
            onClick={onButtonClick}
            textColor="text-green-700"
            className="bg-white hover:bg-green-50"
          >
            {buttonText}
          </SecondaryButton>
        ) : (
          <PrimaryButton onClick={onButtonClick}>
            {buttonText}
          </PrimaryButton>
        )}
      </div>
    </div>
  )
}

export default OurServicesCard