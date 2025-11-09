"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import React from "react";
import { BiBadgeCheck } from "react-icons/bi";
import aboutHero2 from "../../public/aboutHero2.jpg";
import PrimaryButton from "../components/PrimaryButton";

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
          src={aboutHero2}
          alt="carousel image"
          className="w-screen object-cover transition-all h-screen duration-700"
        />
        {/* Purple overlay for darkening the image */}
        <div
          className="absolute top-0 left-0 w-full h-full  bg-black/40 z-10 pointer-events-none"
          style={{ mixBlendMode: "multiply" }}
        ></div>
        <div
          className="absolute flex flex-col justify-center 
              items-center top-0 right-0 left-0 
              bottom-0 text-white w-5/6 mx-auto text-center z-20"
        >
          {/* <p className='border border-sky-700 bg-sky-200 px-2 py-0.5 text-xs rounded-xl text-sky-800'>Advanced Technology</p> */}
          <p className=" text-4xl mt-2 lg:text-5xl font-bold">About us</p>
          <p className="mt-1 lg:mt-3 lg:w-5/6 mx-auto lg:text-xl text-base text-center mb-5 lg:mb-10">
            We help individuals, businesses, and innovators protect their ideas
            with ease. Our digital-first system simplifies filing and management
            of IP rights making it faster and more accessible to secure your
            brand, invention, or design.
          </p>

          <PrimaryButton>Get Started</PrimaryButton>
        </div>
      </motion.section>

      <section className="w-5/6 mx-auto my-20">
        <div className="grid lg:grid-cols-2 gap-20">
          <div className="relative">
            {/* Background/Base Image */}
            <Image
              src="/about2.jpg"
              alt="About Us"
              width={600}
              height={400}
              className="rounded-3xl shadow-lg"
            />

            {/* Overlay Image - positioned on top */}
            <Image
              src="/servicesExtra.jpg"
              width={300}
              height={300}
              alt="Service Extra"
              className="absolute -left-7 top-14 lg:-left-14 rounded-2xl shadow-2xl shadow-white z-10 border-4 border-white"
            />
          </div>
          <div>
            <p className="text-2xl font-semibold">Trademark Registry</p>
            <p className="my-2">
              The Trademark Registry, under the Commercial Law Department of the
              Federal Ministry of Industry, Trade and Investment, oversees the
              registration and regulation of trademarks in Nigeria. Registering
              your trademark grants you exclusive rights to your brand’s name,
              logo, or slogan, protecting it within the Nigerian market.
            </p>
            <p className="font-semibold mb-1">Core Functions</p>

            <div className="space-y-1 mb-3 ml-3">
              <p className="flex gap-2 items-center">
                <BiBadgeCheck />
                Examination and registration of trademarks.
              </p>
              <p className="flex gap-2 items-center">
                <BiBadgeCheck />
                Publication in the Trademark Journal.
              </p>
              <p className="flex gap-2 items-center">
                <BiBadgeCheck />
                Issuance of certificates of registration.
              </p>
              <p className="flex gap-2 items-center">
                <BiBadgeCheck />
                Renewal, assignment, and other recordal/post registration
                services.
              </p>
              <p className="flex gap-2 items-center">
                <BiBadgeCheck />
                Handling of oppositions and disputes.
              </p>
            </div>
            <p>
              Trademark protection is valid for 7 years initially, renewable
              every 14 years thereafter.
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 mt-32 gap-20">
          <div>
            <p className="text-2xl font-semibold">Patent & Design Registry</p>
            <p className="my-2">
              The Patent and Design Registry, under the Commercial Law
              Department of the Federal Ministry of Industry, Trade and
              Investment, oversees the registration and protection of inventions
              and industrial designs in Nigeria. Patents grant inventors
              exclusive rights for up to 20 years, while industrial designs
              protect a product’s visual features for up to 15 years.
            </p>
            <p className="font-semibold mb-1">Core Functions</p>

            <div className="space-y-1 mb-3 ml-3">
              <p className="flex gap-2 items-center">
                <BiBadgeCheck />
                Examination and grant of Patent rights.
              </p>
              <p className="flex gap-2 items-center">
                <BiBadgeCheck />
                Registration of industrial designs.
              </p>
              <p className="flex gap-2 items-center">
                <BiBadgeCheck />
                Issuance of Patent and Design certificates.
              </p>
              <p className="flex gap-2 items-center">
                <BiBadgeCheck />
                Maintenance and renewal of rights.
              </p>
              <p className="flex gap-2 items-center">
                <BiBadgeCheck />
                Recordal of assignments, licenses, and other post registration services.
              </p>
            </div>
            <p>
              The Registry plays a key role in fostering innovation and protecting the intellectual property  rights of inventors, creatives, startups, and businesses across Nigeria.
            </p>
          </div>

          <div className="relative">
            {/* Background/Base Image */}
            <Image
              src="/about4.jpg"
              alt="About Us"
              width={600}
              height={400}
              className="rounded-3xl shadow-lg"
            />

            {/* Overlay Image - positioned on top */}
            <Image
              src="/aboutExtra2.jpg"
              width={300}
              height={300}
              alt="Service Extra"
              className="absolute -left-7 top-14 lg:-left-14 rounded-2xl shadow-2xl shadow-white z-10 border-4 border-white"
            />
          </div>
        </div>
      </section>

      <section className="w-5/6 mx-auto my-20">
        
      </section>
    </main>
  );
};

export default page;
