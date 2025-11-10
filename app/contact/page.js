"use client"
import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import contacthero from '../../public/contactHero.jpg'
import PrimaryButton from '@/app/components/PrimaryButton'
import ReusableHerosection from '../components/ReusableHerosection'

const page = () => {
  return (
    <main>
        <ReusableHerosection title="Contact Us" />

        <section className='bg-gray-100 w-5/6 mx-auto'>
          <div>
            <p>Get in Touch with IPO Nigeria</p>
            <input
              className="bg-white px-3 py-1 w-full mb-5 rounded-md placeholder:text-gray-400 outline-none"
              type="text"
              id="name"
              placeholder="Enter your name"
              name="name"
              required
            />
          </div>
        </section>
    </main>
  )
}

export default page