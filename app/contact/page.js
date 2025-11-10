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
            <p className=" mb-5 font-bold text-2xl">Get in Touch with <span className="block text-green-700">IPO Nigeria</span></p>
            <input
              className="bg-white px-3 py-2 w-full mb-5 rounded-md placeholder:text-gray-400 outline-none"
              type="text"
              id="name"
              placeholder="Select Registry"
              name="name"
              required
            />
            <div className="grid gap-5 grid-cols-2">
              <input
                className="bg-white px-3 py-2 w-full mb-5 rounded-md placeholder:text-gray-400 outline-none"
                type="text"
                id="name"
                placeholder="First Name"
                name="firstName"
                required
              />
              <input
                className="bg-white px-3 py-2 w-full mb-5 rounded-md placeholder:text-gray-400 outline-none"
                type="text"
                id="name"
                placeholder="Last Name"
                name="name"
                required
              />
            </div>

            <div className="grid gap-5 grid-cols-2">
              <input
                className="bg-white px-3 py-2 w-full mb-5 rounded-md placeholder:text-gray-400 outline-none"
                type="text"
                id="name"
                placeholder="Email Address"
                name="email"
                required
              />
              <input
                className="bg-white px-3 py-2 w-full mb-5 rounded-md placeholder:text-gray-400 outline-none"
                type="text"
                id="name"
                placeholder="Phone Number"
                name="name"
                required
              />
            </div>
            <input
                className="bg-white px-3 py-2 w-full mb-5 rounded-md placeholder:text-gray-400 outline-none"
                type="text"
                id="name"
                placeholder="Subject"
                name="subject"
                required
              />
              <textarea
              className="w-full px-3 py-2  bg-white mt-2 lg:mt-5 rounded-md placeholder:text-gray-400 outline-none"
              cols="20"
              rows="6"
              name="message"
              placeholder="Message"
              required
            ></textarea>
            <PrimaryButton className="mt-5">Submit</PrimaryButton>
          </div>

          <div className="bg-[#166534] mt-10 lg:mt-0 rounded-2xl text-white">
            <div className="w-5/6 mx-auto py-10">
              <p className="text-xl font-semibold">Address</p>
              <p>Block D, Old secretariat, Area 1, Garki, Abuja, Nigeria</p>

              <p className="text-xl font-semibold mt-10">Contact</p>
              <p className="font-semibold mt-1">Trademark Registry</p>
              <p className="">trademark@iponigeria.com</p>
              <p>08034351514</p>

              <p className="font-semibold mt-4">Patent and Design Registry</p>
              <p>patent.design@iponigeria.com</p>
              <p>09163570744</p>

              <p className="text-xl font-semibold mt-10">Open time</p>
              <p>Monday - Friday: 9:00am - 5:00pm</p>
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
