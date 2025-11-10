"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import contacthero from "../../public/contactHero.jpg";
import PrimaryButton from "@/app/components/PrimaryButton";
import ReusableHerosection from "../components/ReusableHerosection";

const page = () => {
  return (
    <main>
      <ReusableHerosection title="Contact Us" />

      <section className="bg-gray-100 w-5/6 my-5 py-10 mx-auto">
        <div className="lg:flex justify-between mx-auto w-11/12">
          <div className="">
            <p>Get in Touch with IPO Nigeria</p>
            <input
              className="bg-white px-3 py-1 w-full mb-5 rounded-md placeholder:text-gray-400 outline-none"
              type="text"
              id="name"
              placeholder="Enter your name"
              name="name"
              required
            />
            <div className="grid gap-5 grid-cols-2">
              <input
                className="bg-white px-3 py-1 w-full mb-5 rounded-md placeholder:text-gray-400 outline-none"
                type="text"
                id="name"
                placeholder="First Name"
                name="firstName"
                required
              />
              <input
                className="bg-white px-3 py-1 w-full mb-5 rounded-md placeholder:text-gray-400 outline-none"
                type="text"
                id="name"
                placeholder="Last Name"
                name="name"
                required
              />
            </div>

            <div className="grid gap-5 grid-cols-2">
              <input
                className="bg-white px-3 py-1 w-full mb-5 rounded-md placeholder:text-gray-400 outline-none"
                type="text"
                id="name"
                placeholder="Email Address"
                name="email"
                required
              />
              <input
                className="bg-white px-3 py-1 w-full mb-5 rounded-md placeholder:text-gray-400 outline-none"
                type="text"
                id="name"
                placeholder="Phone Number"
                name="name"
                required
              />
            </div>
          </div>

          <div className="bg-[#166534] w- rounded-2xl text-white">
            <div className="w-11/12 mx-auto py-10">
              <p className="text-lg font-semibold">Address</p>
              <p>Block D, Old secretariat, Area 1, Garki, Abuja, Nigeria</p>
            </div>
          </div>
        </div>

        <div className="bg-white w-11/12 mt-10 mx-auto">
          <div className="mx-auto w-11/12 py-5">
            <p className="text-2xl font-semibold mb-2">Technical Support</p>
            <p>
              For technical support, please submit a support ticket (hyperlink)
              through our portal. You may also contact us via phone or WhatsApp
              for urgent assistance: <span className="text-green-700">09038979681</span>
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default page;
