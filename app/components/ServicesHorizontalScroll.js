import React from "react";
import services1 from "../../public/services1.jpg";
import Image from "next/image";

const ServicesHorizontalScroll = () => {
  return (
    <div className="relative">
      {/* IMAGE */}
      <Image
        src={services1}
        alt="pictures of people in an office"
        className="rounded-2xl shadow-xl w-full"
      />

      {/* OVERLAY (darken image only) */}
      <div
        className="absolute top-0 left-0 w-full h-full bg-green-400/40 z-10 pointer-events-none"
        style={{ mixBlendMode: "multiply" }}
      ></div>

      {/* CONTENT (on top of overlay) */}
      <div className="absolute inset-0 z-20 flex flex-col justify-between p-4">
        {/* TAG at top right */}
        <p className="bg-gray-300/80 text-gray-800 px-2 py-1 rounded-2xl text-xs self-end">
          Technology
        </p>

        {/* TEXTS at bottom half */}
        <div className="text-gray-100 w-11/12 mx-auto">
          <p className="text-xs text-gray-200 mb-2">08.08.2021</p>
          <p className="text-base font-semibold mb-2">
            Richard Norton photorealistic rendering as real photos
          </p>
          <p className="text-xs">
            Progressively incentivize cooperative systems through technically
            sound functionalities. The credibly productivate seamless data.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ServicesHorizontalScroll;
