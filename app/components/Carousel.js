"use client"
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import contact1 from '../../public/carousel1.jpg'
import contact2 from '../../public/carousel2.jpg'
import contact3 from '../../public/carousel3.jpg'

const Carousel = () => {
  const images = [contact1, contact2, contact3];
  const [current, setCurrent] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3500); // 3.5 seconds per slide
    return () => clearInterval(interval);
  }, []);
  return (
    <div>
        <Image
          src={images[current]}
          alt="carousel image"
          className="w-screen lg:h-96 lg:object-cover rounded-3xl transition-all duration-700"
        />
    </div>
  )
}

export default Carousel