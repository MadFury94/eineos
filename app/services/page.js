import React from 'react'
import PrimaryButton from '../components/PrimaryButton'
import Image from 'next/image'
import trademark from '../../public/trademark.jpg'
import patent from '../../public/patent.jpg'
import advice from '../../public/advice.jpg'
import design from '../../public/design.jpg'

const page = () => {
  return (
    <main>
        <section className="w-5/6 mx-auto lg:mt-40 mt-24 ">
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
          <div className="flex justify-center mt-7 gap-3">
            <PrimaryButton>Get Started</PrimaryButton>
           
          </div>
        </div>
        <div className="mt-28 flex justify-center gap-3 lg:gap-40">
          <div className='text-center'>
            <p className="font-bold text-4xl">17K+</p>
            <p className="text-gray-700">Satisfied Clients</p>
          </div>

          <div className='text-center'>
            <p className=" font-bold text-4xl">250+</p>
            <p className="text-gray-700">Trusted Partners</p>
          </div>

          <div className='text-center'>
            <p className="font-bold text-4xl">20yrs</p>
            <p className="text-gray-700">Core Experience</p>
          </div>
        </div>
      </section>
      
      <section className='mx-auto lg:my-32 my-20 w-5/6'>
        <div className="lg:flex gap-20 my-20">
          <div className="lg:w-1/3">
            <p className="font-semibold text-2xl mb-3">Trademarks</p>
            <Image src={trademark} alt="main project image" className="rounded-3xl" />
            <p className="mt-2">Branding is more than just a logo — it’s the story, emotion, and experience that define how people see your business. </p>
        
          </div>
          <Image src={trademark} alt="project images" className="mt-5 lg:mt-0 lg:w-2/3 rounded-3xl" />
        </div>

        <hr className="border border-green-600" />

        <div className="lg:flex gap-20 my-20">
          <div className="lg:w-1/3">
            <p className="font-semibold text-2xl mb-3">Patent</p>
            <Image src={patent} alt="main project image" className="rounded-3xl" />
            <p className="mt-2">Branding is more than just a logo — it’s the story, emotion, and experience that define how people see your business. </p>
        
          </div>
          <Image src={patent} alt="project images" className="mt-5 lg:mt-0  lg:w-2/3 rounded-3xl" />
        </div>

        <hr className="border border-green-600" />

        <div className="lg:flex gap-20 my-20">
          <div className="lg:w-1/3">
            <p className="font-semibold text-2xl mb-3">Preliminary Advice</p>
            <Image src={advice} alt="main project image" className="rounded-3xl" />
            <p className="mt-2">Branding is more than just a logo — it’s the story, emotion, and experience that define how people see your business. </p>
        
          </div>
          <Image src={advice} alt="project images" className="mt-5 lg:mt-0 lg:w-2/3 rounded-3xl" />
        </div>

        <hr className="border border-green-600" />

        <div className="lg:flex gap-20 my-20">
          <div className="lg:w-1/3">
            <p className="font-semibold text-2xl mb-3">Design</p>
            <Image src={design} alt="main project image" className="rounded-3xl" />
            <p className="mt-2">Protect the Visual Design of your Product.</p>
        
          </div>
          <Image src={design} alt="project images" className="mt-5 lg:mt-0 lg:w-2/3 rounded-3xl" />
        </div>
      </section>
    </main>
  )
}

export default page