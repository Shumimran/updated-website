import React from 'react'
import Image from "next/image";
import pic2 from "../../public/pic2.jpg";


const Hero = () => {
  return (
    <div>
      <main className="px-4 sm:px-10 lg:px-20">
        {/* Hero Section */}
        <div className="mt-10 flex flex-col lg:flex-row gap-10 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left">
            <p className="text-3xl sm:text-4xl lg:text-5xl font-bold text-green-900">
              Best Place to Buy
            </p>
            <p className="text-3xl sm:text-4xl lg:text-5xl font-bold">
              Everything
            </p>
            <p className="mt-3 text-gray-600 text-sm sm:text-base lg:text-lg indent-4 sm:indent-8">
              At Bachira, you can shop for all your favorite beauty brands,
              clothes, household products <br className="hidden sm:block" /> and
              more at a single place.
            </p>
            <button className="bg-green-900 px-4 py-2 font-medium text-white rounded-md text-sm sm:text-base mt-7 hover:scale-105 transition transform">
              Shopping Now
            </button>
          </div>

          {/* Image */}
          <div>
            <Image
              src={pic2}
              alt="shopping image"
              width={350}
              height={350}
              className="rounded-lg"
            />
          </div>
        </div>

        {/* Collaboration Section */}
        <div className="mt-16 text-gray-800 text-center">
          <p className="text-sm sm:text-base lg:text-lg">
            We Collaborate With 250++ Leading <br className="hidden sm:block" />
            E-Commerce and Brands
          </p>
        </div>
        </main>

    </div>
  )
}


export default Hero
