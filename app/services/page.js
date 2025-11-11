"use client";
import React from "react";
import PrimaryButton from "../components/PrimaryButton";
import Image from "next/image";
import trademark from "../../public/trademark.jpg";
import patent from "../../public/patent.jpg";
import advice from "../../public/advice.jpg";
import design from "../../public/design.jpg";
import ReusableHerosection from "../components/ReusableHerosection";
import ScrollAnimation from "../components/ScrollAnimation";
import { BiBadgeCheck } from "react-icons/bi";

const page = () => {
  return (
    <main>
      <ReusableHerosection title="Our Services" />

      <ScrollAnimation>
        <section className="mx-auto mt-10 w-5/6">
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
      </ScrollAnimation>

      <ScrollAnimation delay={0.2}>
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
                <p className="flex gap-2 items-center">
                  <BiBadgeCheck />
                  New Trademark/Application Filings
                </p>

                <p className="flex gap-2 items-center">
                  <BiBadgeCheck />
                  Certificate Issuance.
                </p>
                <p className="flex gap-2 items-center">
                  <BiBadgeCheck />
                  Amendments/Clerical Update.
                </p>
                <p className="flex gap-2 items-center">
                  <BiBadgeCheck />
                  Publication of Marks and Opposition.
                </p>
                <p className="flex gap-2 items-center">
                  <BiBadgeCheck />
                  Renewals.
                </p>
                <p className="flex gap-2 items-center">
                  <BiBadgeCheck />
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
                use or reproduction for up to 20 years. Note that it is subject
                to annual filings/renewal.
              </p>
              <div className="space-y-3 mt-6">
                <p className="flex gap-2 items-center">
                  <BiBadgeCheck />
                  New Patent Application Filings.
                </p>
                <p className="flex gap-2 items-center">
                  <BiBadgeCheck />
                  Grant of Patent.
                </p>
                <p className="flex gap-2 items-center">
                  <BiBadgeCheck />
                  Amendments/Clerical Update.
                </p>
                <p className="flex gap-2 items-center">
                  <BiBadgeCheck />
                  Annuity (Renewals).
                </p>
                <p className="flex gap-2 items-center">
                  <BiBadgeCheck />
                  Post-registration Services (Merger, Renewal, Assignment,
                  Change of Applicant Name, and Change of Applicant Address.)
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
                Not sure if your idea or brand qualifies for protection? We
                offer preliminary advice on eligibility, classification, and
                documentation requirements to help you make informed decisions
                before filing.
              </p>
              <div className="space-y-3 mt-6">
                <p className="flex gap-2 items-center">
                  <BiBadgeCheck />
                  Availability Checks.
                </p>
                <p className="flex gap-2 items-center">
                  <BiBadgeCheck />
                  Classification guidance.
                </p>
                <p className="flex gap-2 items-center">
                  <BiBadgeCheck />
                  Filing Eligibility requirements overview.
                </p>
                <p className="flex gap-2 items-center">
                  <BiBadgeCheck />
                  Application readiness support.
                </p>
              </div>
              <PrimaryButton className="mt-6" href="/contact">
                Request Advice
              </PrimaryButton>
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
                <p className="flex gap-2 items-center">
                  <BiBadgeCheck />
                  New Industrial Application Filings
                </p>
                <p className="flex gap-2 items-center">
                  <BiBadgeCheck />
                  Certificate Issuance.
                </p>
                <p className="flex gap-2 items-center">
                  <BiBadgeCheck />
                  Design renewals.
                </p>
                <p className="flex gap-2 items-center">
                  <BiBadgeCheck />
                  Post-registration Services (Transfer and licensing of design
                  rights, Change of Applicant Name, and Change of Applicant
                  Address.)
                </p>
              </div>
              <PrimaryButton className="mt-6">Get Started</PrimaryButton>
            </div>
          </div>
        </section>
      </ScrollAnimation>
    </main>
  );
};

export default page;
