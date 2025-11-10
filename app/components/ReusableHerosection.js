import React from 'react'

const ReusableHerosection = () => {
  return (
    <section
        initial={{ opacity: 0, y: -70 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative mb-20"
      >
        <Image
          src={aboutHero2}
          alt="carousel image"
          className="w-screen object-cover transition-all duration-700"
        />
        {/* Purple overlay for darkening the image */}
        <div
          className="absolute top-0 left-0 w-full h-[70vh] lg:h-[87.5vh]  bg-black/40 z-10 pointer-events-none"
          style={{ mixBlendMode: "multiply" }}
        ></div>
        <div
          className="absolute flex flex-col justify-center 
              items-center top-0 right-0 left-0 
              bottom-0 text-white w-5/6 mx-auto text-center z-20"
        >
          {/* <p className='border border-sky-700 bg-sky-200 px-2 py-0.5 text-xs rounded-xl text-sky-800'>Advanced Technology</p> */}
          <p className=" text-4xl mt-2 lg:text-5xl font-bold">About us</p>
          
        </div>
      </section>
  )
}

export default ReusableHerosection