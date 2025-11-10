// app/components/ServicesCarousel.jsx
"use client";

import React from "react";
import Image from "next/image";
import SecondaryButton from "./SecondaryButton";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

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
    <div className={`relative h-[350px] w-[350px] shrink-0 ${className}`}>
      <Image
        src={image}
        alt={alt}
        width={350}
        height={350}
        className="rounded-2xl shadow-xl h-[350px] w-[350px] object-cover"
      />
      <div
        className="absolute top-0 left-0 w-full h-full rounded-2xl bg-black/50 z-10 pointer-events-none"
        style={{ mixBlendMode: "multiply" }}
      />
      <div className="absolute inset-0 z-20 p-4 flex flex-col justify-end">
        <div className="text-gray-100 w-47/48 mx-auto">
          <p className="text-2xl font-semibold text-gray-200 mb-2">{title}</p>
          <p className="text-lg mb-4">{description}</p>
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
  interval = 2500,
  autoplay = true,
  pauseOnHover = true,
  loop = true,
}) => {
  const data =
    services.length > 0
      ? services
      : [
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

  const [emblaApi, setEmblaApi] = React.useState(null);
  const timerRef = React.useRef(null);
  const pausedRef = React.useRef(false);

  React.useEffect(() => {
    if (!emblaApi) return;
    const canPlay =
      autoplay &&
      loop &&
      data.length > 1 &&
      emblaApi.scrollSnapList().length > 1 &&
      !(
        window.matchMedia &&
        window.matchMedia("(prefers-reduced-motion: reduce)").matches
      );

    const tick = () => {
      if (!pausedRef.current) emblaApi.scrollNext();
    };
    const start = () => {
      if (!canPlay || timerRef.current) return;
      timerRef.current = setInterval(tick, Math.max(1000, interval));
    };
    const stop = () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
        timerRef.current = null;
      }
    };

    const onPointerDown = () => {
      pausedRef.current = true;
      stop();
    };
    const onPointerUp = () => {
      pausedRef.current = false;
      start();
    };

    emblaApi.on("pointerDown", onPointerDown);
    emblaApi.on("pointerUp", onPointerUp);
    start();

    const onVisibility = () => (document.hidden ? stop() : start());
    document.addEventListener("visibilitychange", onVisibility);

    return () => {
      stop();
      document.removeEventListener("visibilitychange", onVisibility);
      emblaApi.off("pointerDown", onPointerDown);
      emblaApi.off("pointerUp", onPointerUp);
    };
  }, [emblaApi, autoplay, interval, loop, data.length]);

  const hoverHandlers = pauseOnHover
    ? {
        onMouseEnter: () => {
          pausedRef.current = true;
          if (timerRef.current) {
            clearInterval(timerRef.current);
            timerRef.current = null;
          }
        },
        onMouseLeave: () => {
          pausedRef.current = false;
          if (emblaApi && !timerRef.current) {
            timerRef.current = setInterval(
              () => emblaApi.scrollNext(),
              Math.max(1000, interval)
            );
          }
        },
      }
    : {};

  const handleServiceClick = (service) =>
    onServiceClick
      ? onServiceClick(service)
      : console.log(`${service.title} clicked`);

  return (
    <div className={className} {...hoverHandlers}>
      <Carousel
        opts={{ loop, align: "start" }}
        setApi={setEmblaApi}
        className="relative px-4"
      >
        {/* ✅ gap-based spacing, override default -ml-4 */}
        <CarouselContent className="ml-0 gap-6">
          {data.map((service) => (
            <CarouselItem
              key={service.id}
              className="pl-0 basis-[350px] grow-0 shrink-0"
            >
              <ServiceCard
                image={service.image}
                alt={service.alt}
                title={service.title}
                description={service.description}
                buttonText={service.buttonText}
                onButtonClick={() => handleServiceClick(service)}
              />
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselPrevious className="left-4" />
        <CarouselNext className="right-4" />
      </Carousel>
    </div>
  );
};

export default ServicesCarousel;
