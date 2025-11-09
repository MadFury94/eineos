"use client";
import Link from "next/link";
import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  MdClose,
  MdOutlineWorkspaces,
  MdOutlineTrackChanges,
} from "react-icons/md";
import { IoMenu } from "react-icons/io5";
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

const Header = () => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  // Check if we're on the about page to apply white text
  const isAboutPage = pathname === "/about";

  const handleMenu = () => {
    setOpen(!open);
  };
  return (
    <div className="absolute top-0 left-0 w-full z-50">
      
      <div className="flex justify-between items-center w-5/6 mx-auto py-6">
        <Link href="/" className={`font-bold ${isAboutPage ? 'text-white' : 'text-black'}`}>
          <p>Logo</p>
        </Link>
        <div className="hidden lg:flex gap-10">
          <Link
            href="/"
            className={
              pathname === "/"
                ? "border-b-2 border-green-600 px-4 py-1"
                : isAboutPage ? "text-white" : "text-black"
            }
          >
            Home
          </Link>
          <Link
            href="/about"
            className={
              pathname === "/about"
                ? "border-b-2 border-green-600 px-4 py-1"
                : isAboutPage ? "text-white" : "text-black"
            }
          >
            About Us
          </Link><Link
            href="/services"
            className={
              pathname === "/services"
                ? "border-b-2 border-green-600 px-4 py-1"
                : isAboutPage ? "text-white" : "text-black"
            }
          >
            Our Services
          </Link><Link
            href="/resources"
            className={
              pathname === "/resources"
                ? "border-b-2 border-green-600 px-4 py-1"
                : isAboutPage ? "text-white" : "text-black"
            }
          >
            Resources
          </Link>
          <Link
            href="/contact"
            className={
              pathname === "/contact"
                ? "border-b-2 border-green-600 px-4 py-1"
                : isAboutPage ? "text-white" : "text-black"
            }
          >
            Contact Us
          </Link>
        </div>

        <div className="hidden lg:flex gap-8">
          <Link href="/contact">
          <PrimaryButton>
              Login
            </PrimaryButton>
          </Link>
        </div>

        <div className="flex lg:hidden" onClick={handleMenu}>
          <IoMenu className={`text-2xl font-light cursor-pointer ${isAboutPage ? 'text-white' : 'text-green-700'}`} />
        </div>
        {open && (
          <div className="absolute bg-green-950 text-white top-0 left-0 w-full z-50 h-screen">
            <div className="w-10/12 py-8 mx-auto">
              <div
                onClick={handleMenu}
                className="flex cursor-pointer justify-end text-2xl"
              >
                <MdClose />
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
                <Link href="about">
                  <p
                    className="flex gap-3 items-center"
                    onClick={() => setOpen(false)}
                  >
                    <GrProjects /> About Us
                  </p>
                </Link>
                <Link href="about">
                  <p
                    className="flex gap-3 items-center"
                    onClick={() => setOpen(false)}
                  >
                    <MdOutlineWorkspaces /> Our Services
                  </p>
                </Link>
                <Link href="about">
                  <p
                    className="flex gap-3 items-center"
                    onClick={() => setOpen(false)}
                  >
                    <MdOutlineWorkspaces /> Resources
                  </p>
                </Link>
                <Link href="contact">
                  <p
                    className="flex gap-3 items-center"
                    onClick={() => setOpen(false)}
                  >
                    <LuMessageSquareText /> Contact Us
                  </p>
                </Link>
              </div>

              <div className="flex justify-center text-2xl gap-7 mt-24">
                <Link target="_blank" href="">
                  <BsInstagram className="cursor-pointer" />
                </Link>
                <Link target="_blank" href="">
                  <BsTwitter className="cursor-pointer" />
                </Link>
                <Link target="_blank" href="">
                  <BsFacebook className="cursor-pointer" />
                </Link>
                <Link target="_blank" href="">
                  <BsLinkedin className="cursor-pointer" />
                </Link>
                <Link target="_blank" href="">
                  <BsWhatsapp />
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;