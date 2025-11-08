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
          <p className='mt-5'>Block D, Old secretariat, Area 1, Garki, Abuja, Nigeria</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-28">
          <div className="flex flex-col gap-2">
            <p className="font-semibold">Trademark Registry</p>
            <p>trademark@iponigeria.com</p>
            <p>080 3435 1514</p>
            <p className='font-semibold mt-5'>Patent and Design Registry</p>
            <p>patent.design@iponigeria.com</p>
            <p>091 6357 0744</p>
          </div>
          <div className="flex flex-col gap-2">
            <p className="font-semibold">Quick Links</p>
            <Link href="/" className='cursor-pointer'><p>Home</p></Link>
            <Link href="/about" className='cursor-pointer'><p>About Us</p></Link>
            <Link href="/technology" className='cursor-pointer'><p>Our Services</p></Link>
            <Link href="/contact" className='cursor-pointer'><p>Resources</p></Link>
            <Link href="/contact" className='cursor-pointer'><p>Contact Us</p></Link>
            
          </div>
          
        </div>
      </div>
    </section>
  )
}

export default Footer