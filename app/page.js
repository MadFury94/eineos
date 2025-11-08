import Image from "next/image";
import { AiOutlineTrademark } from "react-icons/ai";
import PrimaryButton from "./components/PrimaryButton";
import SecondaryButton from "./components/SecondaryButton";

export default function Home() {
  return (
    <main>
      <section className="w-5/6 mx-auto my-14 ">
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
            <SecondaryButton>Learn More</SecondaryButton>
          </div>
        </div>
      </section>

      <section className="my-20 mx-auto w-5/6">
        <div className="flex justify-center">
          <p className="text-xs bg-green-50 w-fit rounded-xl px-3 py-1.5">
            Our Services
          </p>
        </div>
        <p className="text-2xl font-semibold mt-1 text-center">
          Explore the IPO Nigeria Portal
        </p>
        <div className="mt-10 grid lg:grid-cols-3 gap-5 grid-cols-1">
          {/* services */}
          <div className="rounded-2xl text-center bg-green-50 p-7 shadow-xl">
            <AiOutlineTrademark className="text-6xl mx-auto text-green-700" />
            <p className="text-xl mt-2 font-semibold">TradeMarks</p>
            <p>
              Secure your brand identity with trademark protection in Nigeria.
              Register a business name, logo, or slogan to prevent unauthorized
              use and build brand trust in Nigeria. You can also file a
              Trademark Opposition against any published mark that conflicts
              with your registered mark.
            </p>
            <PrimaryButton className="mt-5">Get Started</PrimaryButton>
          </div>
          
        </div>
      </section>
    </main>
  );
}
