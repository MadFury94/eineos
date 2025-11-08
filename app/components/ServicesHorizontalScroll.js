import React from "react";
import Image from "next/image";
import SecondaryButton from "./SecondaryButton";

// Single Service Card Component
const ServiceCard = ({ 
  image, 
  alt, 
  title, 
  description, 
  buttonText = "Learn More",
  onButtonClick,
  className = ""
}) => {
  return (
    <div className={`relative h-[350px] w-[350px] shrink-0 ${className}`}>
      {/* IMAGE */}
      <Image
        src={image}
        alt={alt}
        width={350}
        height={350}
        className="rounded-2xl shadow-xl h-[350px] w-[350px] object-cover"
      />

      {/* OVERLAY (darken image only) */}
      <div
        className="absolute top-0 left-0 w-full h-full rounded-2xl bg-black/50 z-10 pointer-events-none"
        style={{ mixBlendMode: "multiply" }}
      ></div>

      {/* CONTENT (on top of overlay) */}
      <div className="absolute inset-0 z-20 p-4 flex flex-col justify-end">
        {/* TEXTS at bottom half */}
        <div className="text-gray-100 w-47/48 mx-auto">
          <p className="text-xl font-semibold text-gray-200 mb-2">{title}</p>
          <p className="text-xs mb-4">
            {description}
          </p>
          <SecondaryButton onClick={onButtonClick}>
            {buttonText}
          </SecondaryButton>
        </div>
      </div>
    </div>
  );
};

// Main Horizontal Scroll Container Component
const ServicesHorizontalScroll = ({ 
  services = [], 
  className = "",
  onServiceClick,
  ...props 
}) => {
  // Default data if no services provided
  const defaultServices = [
    {
      id: 1,
      image: "/services1.jpg", // Update this path as needed
      alt: "Availability Search",
      title: "Availability Search",
      description: "Check if your Mark, Title, or Idea is available. Search existing Trademarks, Patents, or Designs before filing to ensure your application stands out.",
      buttonText: "Search Now"
    }
  ];

  const servicesToRender = services.length > 0 ? services : defaultServices;

  const handleServiceClick = (service) => {
    if (onServiceClick) {
      onServiceClick(service);
    } else {
      console.log(`${service.title} clicked`);
    }
  };

  return (
    <div className={`flex gap-6 overflow-x-auto scrollbar-hide ${className}`} {...props}>
      {servicesToRender.map((service) => (
        <ServiceCard
          key={service.id}
          image={service.image}
          alt={service.alt}
          title={service.title}
          description={service.description}
          buttonText={service.buttonText}
          onButtonClick={() => handleServiceClick(service)}
        />
      ))}
    </div>
  );
};

export default ServicesHorizontalScroll;
