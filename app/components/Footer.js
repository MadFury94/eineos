import Image from "next/image";
import React from "react";
import Link from "next/link";
import poweredby from "../../public/Poweredby.png";

const Footer = () => {
  return (
    <section className="bg-[#166534] text-white py-10">
      <div className="w-5/6 lg:w-11/12 mx-auto font-light text-sm">
        <div className="lg:flex">
          <div>
            <p className="mb-4 text-3xl font-semibold">Contact Us</p>
            <div className="lg:flex gap-10">
              <div className="lg:w-2/6">
                <p className="font-semibold text-base">
                  Federal Ministry of Industry, Trade & Investment Commercial
                  Law Department
                </p>
                <p className="mt-5">
                  Block D, Old secretariat, Area 1, Garki, Abuja, Nigeria
                </p>
              </div>

              <div className="space-y-2 mt-8 lg:mt-0">
                <p className="font-semibold text-base">Trademark Registry</p>
                <p>trademark@iponigeria.com</p>
                <p>080 3435 1514</p>
              </div>

              <div className="space-y-2 mt-8 lg:mt-0">
                <p className="font-semibold text-base">
                  Patent and Design Registry
                </p>
                <p>patent.design@iponigeria.com</p>
                <p>091 6357 0744</p>
              </div>
            </div>
          </div>

          <div className="mt-10 lg:mt-0">
            <div className="flex flex-col gap-2">
              <p className="font-semibold text-2xl">Quick Links</p>
              <Link href="/" className="cursor-pointer">
                <p>Home</p>
              </Link>
              <Link href="/about" className="cursor-pointer">
                <p>About Us</p>
              </Link>
              <Link href="/services" className="cursor-pointer">
                <p>Our Services</p>
              </Link>
              <Link href="/services" className="cursor-pointer">
                <p>Resources</p>
              </Link>
              <Link href="/contact" className="cursor-pointer">
                <p>Contact Us</p>
              </Link>
            </div>
          </div>
        </div>

        <hr className="border border-gray-100 my-10" />

        <div className="flex items-center justify-between">
          <p>© 2025 IPO Nigeria</p>
          <div className="flex flex-col items-center gap-2">
            <p className="text-sm">Powered by</p>
            <Image src={poweredby} alt="Logo" className="h-10 w-24" />
          </div>
          <p className="text-right">All Rights Reserved</p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
