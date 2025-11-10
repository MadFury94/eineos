"use client"
import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import contacthero from '../../public/contactHero.jpg'
import PrimaryButton from '@/app/components/PrimaryButton'

const page = () => {
  return (
    <main>
        <motion.section
        initial={{ opacity: 0, y: -70 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative mb-20"
      >
        <Image
          src={contacthero}
          alt="carousel image"
          className="w-screen object-cover h-[70vh] lg:h-[87.5vh] transition-all duration-700"
        />
        {/* Purple overlay for darkening the image */}
        <div
          className="absolute top-0 left-0 w-full h-[70vh] lg:h-[87.5vh]  bg-black/40 z-10 pointer-events-none"
          style={{ mixBlendMode: "multiply" }}
        ></div>
        <div
          className="absolute flex flex-col justify-center 
              items-center top-0 right-0 left-0 
              bottom-0 text-white w-5/6 mx-auto text-center z-20"
        >
          {/* <p className='border border-sky-700 bg-sky-200 px-2 py-0.5 text-xs rounded-xl text-sky-800'>Advanced Technology</p> */}
          <p className=" text-4xl mt-2 lg:text-5xl font-bold">Our Services</p>
          <p className="mt-1 lg:mt-3 lg:w-5/6 mx-auto lg:text-xl text-base text-center mb-5 lg:mb-10">
            We manage your creative ideas through expert trademark, patent, and copyright
            solutions. We help you secure your innovations, prevent
            infringement, and strengthen your brand’s value.
          </p>

          <PrimaryButton>Get Started</PrimaryButton>
        </div>
      </motion.section>
    </main>
  )
}

export default page