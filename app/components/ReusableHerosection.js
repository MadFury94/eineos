import React from 'react'
import Image from "next/image";
import { motion } from "framer-motion";
import aboutHero2 from "../../public/reuseheader.png";

const ReusableHerosection = ({ title = "Page Title" }) => {
  return (
    <motion.section
        initial={{ opacity: 0, y: -70 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative mb-20"
      >
        <Image
          src={aboutHero2}
          alt="Hero background"
          width={1920}
          height={1080}
          className="object-cover w-11/12 mx-auto transition-all duration-700"
        />
        {/* Overlay for darkening the image */}
        <div
          className="absolute top-0 left-0 w-full bg-black/40 z-10 pointer-events-none"
          style={{ mixBlendMode: "multiply" }}
        ></div>
        <div
          className="absolute flex flex-col justify-center 
              items-center top-0 right-0 left-0 
              bottom-0 text-white w-5/6 mx-auto text-center z-20"
        >
          <p className="text-2xl mt-2 lg:text-5xl font-bold">{title}</p>
        </div>
      </motion.section>
  )
}

export default ReusableHerosection