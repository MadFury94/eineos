"use client";
import React from "react";
import PrimaryButton from "../components/PrimaryButton";
import Image from "next/image";
import trademark from "../../public/trademark.jpg";
import patent from "../../public/patent.jpg";
import advice from "../../public/advice.jpg";
import design from "../../public/design.jpg";
import { motion } from "framer-motion";
import servicehero from "../../public/servicehero.jpg";
import ReusableHerosection from "../components/ReusableHerosection";

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
          src={servicehero}
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

      <section className="mx-auto mt-32 w-5/6">
        <div>
          <p className="lg:text-5xl text-3xl text-green-700 font-bold text-center">
            Comprehensive Intellectual
            <span className="text-black block">Property Service</span>
          </p>
          <p className="mt-2 text-center">
            Register and manage Trademarks, Patents, and Industrial Designs{" "}
            <span className="lg:block">
              with Nigeria’s official Intellectual Property Office.
            </span>
          </p>
        </div>
      </section>

      <section className="mx-auto my-20 w-5/6">
        <div className="lg:flex gap-20 mb-20">
          <div className="lg:w-1/3">
            <p className="font-semibold text-2xl mb-3">Trademarks</p>
            <Image
              src={trademark}
              alt="main project image"
              className="rounded-3xl"
            />
            <p className="mt-2">Protect Your Brand Identity.</p>
          </div>

          <div className="mt-5 lg:mt-0 lg:w-2/3 bg-gray-50 p-8 rounded-3xl">
            <p>
              We provide a simple, secure way to register your business name,
              logo, slogan, or symbol as a trademark in Nigeria. Trademark
              registration grants you exclusive legal rights and helps build
              brand trust and market distinction.
            </p>
            <div className="space-y-3 mt-6">
              <p>New Trademark/Application Filings</p>
              <p>Certificate Issuance.</p>
              <p>Amendments/Clerical Update.</p>
              <p>Publication of Marks and Opposition.</p>
              <p>Renewals.</p>
              <p>
                Recordal/Post-registration Services (Registered User, Merger,
                Renewal, Assignment, Change of Applicant Name, and Change of
                Applicant Address.)
              </p>
            </div>
            <PrimaryButton className="mt-6">Get Started</PrimaryButton>
          </div>
        </div>

        <hr className="border border-green-600" />

        <div className="lg:flex gap-20 my-20">
          <div className="lg:w-1/3">
            <p className="font-semibold text-2xl mb-3">Patent</p>
            <Image
              src={patent}
              alt="main project image"
              className="rounded-3xl"
            />
            <p className="mt-2">Secure exclusive rights to your invention.</p>
          </div>
          <div className="mt-5 lg:mt-0 lg:w-2/3 bg-gray-50 p-8 rounded-3xl">
            <p>
              Our patent service ensures your new product, process, or
              technological innovation is legally protected from unauthorized
              use or reproduction for up to 20 years. Note that it is subject to
              annual filings/renewal.
            </p>
            <div className="space-y-3 mt-6">
              <p>New Patent Application Filings.</p>
              <p>Grant of Patent.</p>
              <p>Amendments/Clerical Update.</p>
              <p>Annuity (Renewals).</p>
              <p>
                Post-registration Services (Merger, Renewal, Assignment, Change
                of Applicant Name, and Change of Applicant Address.)
              </p>
            </div>
            <PrimaryButton className="mt-6">Get Started</PrimaryButton>
          </div>
        </div>

        <hr className="border border-green-600" />

        <div className="lg:flex gap-20 my-20">
          <div className="lg:w-1/3">
            <p className="font-semibold text-2xl mb-3">Preliminary Advice</p>
            <Image
              src={advice}
              alt="main project image"
              className="rounded-3xl"
            />
            <p className="mt-2">Get expert guidance before you file.</p>
          </div>
          <div className="mt-5 lg:mt-0 lg:w-2/3 bg-gray-50 p-8 rounded-3xl">
            <p>
              Not sure if your idea or brand qualifies for protection? We offer
              preliminary advice on eligibility, classification, and
              documentation requirements to help you make informed decisions
              before filing.
            </p>
            <div className="space-y-3 mt-6">
              <p>Availability Checks.</p>
              <p>Classification guidance.</p>
              <p>Filing Eligibility requirements overview.</p>
              <p>Application readiness support.</p>
            </div>
            <PrimaryButton className="mt-6">Request Advice</PrimaryButton>
          </div>
        </div>

        <hr className="border border-green-600" />

        <div className="lg:flex gap-20 my-20">
          <div className="lg:w-1/3">
            <p className="font-semibold text-2xl mb-3">Design</p>
            <Image
              src={design}
              alt="main project image"
              className="rounded-3xl"
            />
            <p className="mt-2">Protect the Visual Design of your Product.</p>
          </div>
          <div className="mt-5 lg:mt-0 lg:w-2/3 bg-gray-50 p-8 rounded-3xl">
            <p>
              If your product has a unique shape, pattern, or appearance, you
              can register its design to prevent imitation and enhance market
              value. Designs are protected for up to 15 years with renewals.
            </p>
            <div className="space-y-3 mt-6">
              <p>New Industrial Application Filings</p>
              <p>Certificate Issuance.</p>
              <p>Design renewals.</p>
              <p>
                Post-registration Services (Transfer and licensing of design
                rights, Change of Applicant Name, and Change of Applicant
                Address.)
              </p>
            </div>
            <PrimaryButton className="mt-6">Request Advice</PrimaryButton>
          </div>
        </div>
      </section>
    </main>
  );
};

export default page;
