import Image from 'next/image'
import React from 'react'
import Link from 'next/link'

const Footer = () => {
  return (
    <section className="bg-green-950 text-white py-10 lg:py-20">
      <div className="lg:flex w-4/5 mx-auto justify-between">
        
        <div className="lg:w-2/6 mb-16 lg:mb-0">
          <p>Logo</p>
          <p>
            Federal Ministry of Industry, Trade & InvestmentCommercial Law Department
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-14 lg:gap-28">
          <div className="flex flex-col gap-2">
            <p className="font-semibold">Work</p>
            <p>Buy Today</p>
            <p>Get Quotation</p>
            <p>Consultation</p>
            <p>Installation</p>
          </div>
          <div className="flex flex-col gap-2">
            <p className="font-semibold">Company</p>
            <Link href="/" className='cursor-pointer'><p>Home</p></Link>
            <Link href="/about" className='cursor-pointer'><p>About</p></Link>
            <Link href="/technology" className='cursor-pointer'><p>Technology</p></Link>
            <Link href="/contact" className='cursor-pointer'><p>Contact</p></Link>
            
          </div>
          <div className="flex flex-col gap-2 ">
            <p className="font-semibold">Socials</p>
            <p>Instagram</p>
            <p>Facebook</p>
            <p>Tiktok</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Footer