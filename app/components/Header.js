"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  MdClose,
  MdOutlineWorkspaces,
  MdOutlineTrackChanges,
} from "react-icons/md";
import { IoMenu } from "react-icons/io5";
import { MdOutlineLibraryBooks } from "react-icons/md";
import { FaRegCircleQuestion } from "react-icons/fa6";
import { TiHomeOutline } from "react-icons/ti";
import { LuMessageSquareText } from "react-icons/lu";
import { GrProjects } from "react-icons/gr";
import {
  BsInstagram,
  BsTwitter,
  BsFacebook,
  BsLinkedin,
  BsWhatsapp,
} from "react-icons/bs";
import { usePathname } from "next/navigation";
import Image from "next/image";
import PrimaryButton from "./PrimaryButton";
import ipologo from "../../public/IPOLogo.png";
import coatofarms from "../../public/coa.png";

const Header = () => {
  const [open, setOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  const handleMenu = () => {
    setOpen(!open);
  };

  // Handle scroll event to change header appearance
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/90 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="flex justify-between items-center w-5/6 mx-auto py-6">
        <Link href="/" className="font-bold">
          <div className="flex gap-1 items-center">
            <Image
              src={coatofarms}
              alt="Eineos Logo"
              className="h-[43] w-[55]"
            />
            <Image src={ipologo} alt="ipo Logo" className="h-[45] w-[45]" />
            <div className="text-[10px]">
              <p>
                FEDERAL MINISTRY OF{" "}
                <span className="block">INDUSTRY TRADE & INVESTMENT</span>
              </p>
              <p className="text-green-700">COMMERCIAL LAW DEPARTMENT</p>
            </div>
          </div>
        </Link>
        <div className="hidden lg:flex gap-10">
          <Link
            href="/"
            className={
              pathname === "/" ? "text-black font-semibold" : "text-gray-500"
            }
          >
            Home
          </Link>
          <Link
            href="/about"
            className={
              pathname === "/about"
                ? "text-black font-semibold"
                : "text-gray-500"
            }
          >
            About Us
          </Link>
          <Link
            href="/services"
            className={
              pathname === "/services"
                ? "text-black font-semibold"
                : "text-gray-500"
            }
          >
            Our Services
          </Link>

          <Link
            href="/faqs"
            className={
              pathname === "/faqs"
                ? "text-black font-semibold"
                : "text-gray-500"
            }
          >
            FAQs
          </Link>

          <Link
            href="/resources"
            className={
              pathname === "/resources"
                ? "text-black font-semibold"
                : "text-gray-500"
            }
          >
            Resources
          </Link>
          <Link
            href="/contact"
            className={
              pathname === "/contact"
                ? "text-black font-semibold"
                : "text-gray-500"
            }
          >
            Contact Us
          </Link>
        </div>

        <div className="hidden lg:flex gap-8">
          <PrimaryButton>Login</PrimaryButton>
        </div>

        <div className="flex lg:hidden" onClick={handleMenu}>
          <IoMenu className="text-2xl text-green-700 font-light cursor-pointer" />
        </div>
        {open && (
          <div className="fixed bg-green-50 text-black top-0 left-0 w-full z-[60] h-screen">
            <div className="w-10/12 py-8 mx-auto">
              <div className="flex justify-between items-center">
                <div className="flex gap-1 items-center">
                  <Image
                    src={coatofarms}
                    alt="Eineos Logo"
                    className="h-[32] w-[40]"
                  />
                  <Image
                    src={ipologo}
                    alt="ipo Logo"
                    className="h-[35] w-[35]"
                  />
                  <div className="text-[8px]">
                    <p>
                      FEDERAL MINISTRY OF{" "}
                      <span className="block">INDUSTRY TRADE & INVESTMENT</span>
                    </p>
                    <p className="text-green-700">COMMERCIAL LAW DEPARTMENT</p>
                  </div>
                </div>

                <div
                  onClick={handleMenu}
                  className="flex cursor-pointer justify-end text-2xl"
                >
                  <MdClose />
                </div>
              </div>

              <div className="text-2xl flex flex-col gap-6 mt-12">
                <Link href="/">
                  <p
                    className="flex gap-3 items-center"
                    onClick={() => setOpen(false)}
                  >
                    <TiHomeOutline /> Home
                  </p>
                </Link>
                <Link href="/about">
                  <p
                    className="flex gap-3 items-center"
                    onClick={() => setOpen(false)}
                  >
                    <GrProjects /> About Us
                  </p>
                </Link>
                <Link href="/services">
                  <p
                    className="flex gap-3 items-center"
                    onClick={() => setOpen(false)}
                  >
                    <MdOutlineWorkspaces /> Our Services
                  </p>
                </Link>
                <Link href="/faqs">
                  <p
                    className="flex gap-3 items-center"
                    onClick={() => setOpen(false)}
                  >
                    <FaRegCircleQuestion /> FAQs
                  </p>
                </Link>
                <Link href="/resources">
                  <p
                    className="flex gap-3 items-center"
                    onClick={() => setOpen(false)}
                  >
                    <MdOutlineLibraryBooks /> Resources
                  </p>
                </Link>
                <Link href="/contact">
                  <p
                    className="flex gap-3 items-center"
                    onClick={() => setOpen(false)}
                  >
                    <LuMessageSquareText /> Contact Us
                  </p>
                </Link>
              </div>

              <div className="flex justify-center text-2xl gap-7 mt-24"></div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
