"use client";
import Image from "next/image";
import { AiOutlineTrademark } from "react-icons/ai";
import PrimaryButton from "./components/PrimaryButton";
import { SiInteractiondesignfoundation } from "react-icons/si";
import { MdDesignServices } from "react-icons/md";
import SecondaryButton from "./components/SecondaryButton";
import Carousel from "./components/Carousel";
import ServicesHorizontalScroll from "./components/ServicesHorizontalScroll";
import Typewriter from "./components/Typewriter";

export default function Home() {
  const services = [
    {
      id: 1,
      image: "/services1.jpg",
      alt: "Availability Search",
      title: "Availability Search",
      description:
        "Check if your Mark, Title, or Idea is available. Search existing Trademarks, Patents, or Designs before filing.",
      buttonText: "Search Now",
    },
    {
      id: 2,
      image: "/services2.jpg",
      alt: "Publication Journal",
      title: "Publication Journal",
      description:
        "Stay updated on published applications.  Browse our official journal to view recently accepted Trademarks, Patents, and Designs.",
      buttonText: "Register Now",
    },
    {
      id: 3,
      image: "/services3.jpg",
      alt: "Trademark Registration",
      title: "Trademark Registration",
      description:
        "Protect your brand identity.  Register your trademark online to secure exclusive rights to your brand name, logo, or  slogan.",
      buttonText: "Register Now",
    },
    {
      id: 4,
      image: "/services4.jpg",
      alt: "Trademark Opposition",
      title: "Trademark Opposition",
      description:
        "Dispute conflicting trademark applications.  File an opposition against any published trademark that conflicts with your rights or interests  before it is registered.",
      buttonText: "File Now",
    },
  ];
  return (
    <main>
      <section className="w-5/6 mx-auto lg:mt-40 mt-24 ">
        <div>
          <p className="lg:text-5xl text-3xl text-green-700 font-bold text-center">
            Protect Your Ideas{" "}
            <span className="text-black block">Strengthen Your Business</span>
          </p>
          <p className="mt-2 text-center">
            Register and manage Trademarks, Patents, and Industrial Designs{" "}
            <span className="lg:block">
              with Nigeria’s official Intellectual Property Office.
            </span>
          </p>
          <div className="flex justify-center mt-7 gap-3">
            <PrimaryButton>Check Availability</PrimaryButton>
            <SecondaryButton>Fill an Application</SecondaryButton>
          </div>
        </div>
        <div className="mt-14">
          <Carousel />
        </div>
      </section>

      <section className="w-5/6 mx-auto my-20">
        <div className="lg:flex justify-between">
          <div className="text-center lg:text-left">
            <p className="lg:text-5xl text-3xl text-green-600 font-semibold mb-2">
              Our Mandate
            </p>
            <Typewriter
              text={[
                "To protect intellectual property rights in Nigeria",
                "To promote innovation, creativity, and fair competition",
                "To empower businesses.",
              ]}
              className="text-2xl lg:text-2xl font-semibold text-black"
            />
          </div>
          <p className="lg:w-3/6 mt-3 lg:text-right text-center lg:mt-0">
            We are responsible for the registration and protection of
            Trademarks, Patents, and Industrial Designs in Nigeria. Through our
            intellectual property portal, individuals, businesses, and
            innovators can file new applications, renew registrations, and
            manage their IP rights from anywhere.
          </p>
        </div>
      </section>

      <section className="my-20 mx-auto w-5/6">
       
        <p className="text-2xl lg:text-5xl font-semibold mt-1 text-center">
          Explore the IPO Nigeria Portal
        </p>
        <div className="mt-10 grid lg:grid-cols-3 gap-5 grid-cols-1">
          {/* services */}
          <div className="rounded-2xl text-center bg-green-50 p-7 shadow-xl">
            <AiOutlineTrademark className="text-6xl mx-auto text-green-700" />
            <p className="text-xl mt-2 font-semibold">TradeMarks</p>
            <p>
              Register a business name, logo, or slogan to prevent unauthorized
              use and build brand trust in Nigeria.
            </p>
            <PrimaryButton className="mt-5">File Application</PrimaryButton>
          </div>

          <div className="rounded-2xl text-center bg-green-800 text-white p-7 shadow-xl">
            <SiInteractiondesignfoundation className="text-6xl mx-auto text-white" />
            <p className="text-xl mt-2 font-semibold">Patents</p>
            <p>
              Protect your inventions with a patent giving you exclusive rights
              to your innovations in Nigeria.
            </p>
            <SecondaryButton className="mt-5">File Application</SecondaryButton>
          </div>

          <div className="rounded-2xl text-center bg-green-50 p-7 shadow-xl">
            <MdDesignServices className="text-6xl mx-auto text-green-700" />
            <p className="text-xl mt-2 font-semibold">Industrial Designs</p>
            <p>
              Protect your product’s unique look with industrial design
              registration in Nigeria.
            </p>
            <PrimaryButton className="mt-5">File Application</PrimaryButton>
          </div>
        </div>
      </section>

      <section className="my-20 mx-auto w-5/6">
        <p className="text-green-700 text-center text-3xl lg:text-5xl font-bold">
          Register and Get{" "}
          <span className="text-black block">Approved in Record Time</span>
        </p>

        <div className="mt-10">
          {/* <ItemSlider services={services} /> */}
          <ServicesHorizontalScroll services={services} />
        </div>
      </section>
    </main>
  );
}
