"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import React from "react";
import { BiBadgeCheck } from "react-icons/bi";
import aboutHero2 from "../../public/aboutHero2.jpg";
import PrimaryButton from "../components/PrimaryButton";
import about1 from "../../public/about6.png";
import about2 from "../../public/about5.png";
import TeamSection from "../components/TeamSection";
import ReusableHerosection from "../components/ReusableHerosection";
import aboutmain from "../../public/aboutmain.png";

const page = () => {
  return (
    <main>
      <ReusableHerosection title="About Us" />

      <section className="bg-[#166534] w-5/6 mx-auto mt-5 text-white rounded-lg">
        <div className="lg:flex justify-between w-11/12 mx-auto py-10 ">
          <div>
            <p className="text-sm mb-1">Protecting Innovation in Nigeria</p>
            <p className="text-2xl font-semibold lg:w-4/6">
              Nigeria’s Official Digital Platform for Trademarks, Patents, and
              Industrial Designs.
            </p>
          </div>
          <p className="lg:text-right lg:w-8/12 mt-4 lg:mt-0">
            The Intellectual Property Office (IPO) Nigeria, under the Commercial
            Law Department of the Federal Ministry of Industry, Trade and
            Investment, helps individuals, businesses, and innovators protect
            their ideas with ease. Our digital-first system simplifies filing
            and management of IP rights making it faster and more accessible to
            secure your brand, invention, or design.
          </p>
        </div>

        <Image src={aboutmain} alt="picture depicting property law" className="w-11/12 py-5 lg:py-10 mx-auto"/>
      </section>

      <section className="w-5/6 mx-auto my-20">
        <div className="grid lg:grid-cols-2 gap-20">
          <div className="">
            {/* Background/Base Image */}
            <Image
              src={about1}
              alt="About Us"
              className="rounded-3xl shadow-lg"
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

        <div className="grid lg:grid-cols-2 items-center mt-32 gap-20">
          <div className="">
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
                Recordal of assignments, licenses, and other post registration
                services.
              </p>
            </div>
            <p>
              The Registry plays a key role in fostering innovation and
              protecting the intellectual property rights of inventors,
              creatives, startups, and businesses across Nigeria.
            </p>
          </div>

          <div className="">
            {/* Background/Base Image */}
            <Image
              src={about2}
              alt="About Us"
              width={600}
              height={400}
              className="rounded-3xl shadow-lg "
            />
          </div>
        </div>
      </section>

      <section className="w-5/6 mx-auto my-20">
        {/* meet our team */}
        <TeamSection />
      </section>
    </main>
  );
};

export default page;
