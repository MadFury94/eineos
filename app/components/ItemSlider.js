// app/components/ServicesCarousel.jsx
"use client";

import React from "react";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import SecondaryButton from "./SecondaryButton";

// ✅ Responsive card: fills slide width
const ServiceCard = ({
  image,
  alt,
  title,
  description,
  buttonText = "Learn More",
  onButtonClick,
  className = "",
}) => {
  return (
    <div className={`relative w-full aspect-square ${className}`}>
      {/* Why: use fill so the image adapts to slide width */}
      <Image
        src={image}
        alt={alt}
        fill
        sizes="(max-width: 640px) 85vw, (max-width: 768px) 60vw, (max-width: 1024px) 50vw, 33vw"
        className="rounded-2xl shadow-xl object-cover"
      />
      <div
        className="absolute inset-0 rounded-2xl bg-black/50 z-10 pointer-events-none"
        style={{ mixBlendMode: "multiply" }}
      />
      <div className="absolute inset-0 z-20 p-4 flex flex-col justify-end">
        <div className="text-gray-100 w-47/48 mx-auto">
          <p className="text-xl font-semibold text-gray-200 mb-2">{title}</p>
          <p className="text-xs mb-4">{description}</p>
          <SecondaryButton onClick={onButtonClick}>
            {buttonText}
          </SecondaryButton>
        </div>
      </div>
    </div>
  );
};

const ServicesCarousel = ({
  services = [],
  className = "",
  onServiceClick,
  autoplayDelay = 2000,
  loop = true,
  showControls = true,
}) => {
  const defaultServices = [
    {
      id: 1,
      image: "/services1.jpg",
      alt: "Availability Search",
      title: "Availability Search",
      description:
        "Check if your Mark, Title, or Idea is available. Search existing Trademarks, Patents, or Designs before filing to ensure your application stands out.",
      buttonText: "Search Now",
    },
  ];

  const data = services.length > 0 ? services : defaultServices;

  const plugin = React.useRef(
    Autoplay({
      delay: Math.max(1000, autoplayDelay),
      stopOnInteraction: true,
      stopOnMouseEnter: false,
    })
  );

  const handleServiceClick = (service) =>
    onServiceClick
      ? onServiceClick(service)
      : console.log(`${service.title} clicked`);

  return (
    <Carousel
      opts={{ align: "start", loop }}
      plugins={[plugin.current]}
      className={`w-full ${className}`}
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent className="-ml-3">
        {data.map((service) => (
          <CarouselItem
            key={service.id}
            className="
              pl-3
              basis-[85%]
              sm:basis-[60%]
              md:basis-1/2
              lg:basis-1/3
              xl:basis-1/4
              2xl:basis-1/5
            "
          >
            <div className="p-1">
              <ServiceCard
                image={service.image}
                alt={service.alt}
                title={service.title}
                description={service.description}
                buttonText={service.buttonText}
                onButtonClick={() => handleServiceClick(service)}
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>

      {showControls && (
        <>
          <CarouselPrevious className="hidden sm:flex" />
          <CarouselNext className="hidden sm:flex" />
        </>
      )}
    </Carousel>
  );
};

export default ServicesCarousel;
