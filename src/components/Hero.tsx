import React from 'react';
import Image from 'next/image';
import pic2 from '../../public/pic2.jpg';

const Hero = () => {
  return (
    <div>
      <main className="px-4 sm:px-10 lg:px-20">
        {/* Hero Section */}
        <div className="mt-10 flex flex-col lg:flex-row justify-between items-center gap-10 lg:gap-16">
          {/* Text Content */}
          <div className="text-center lg:text-left max-w-lg">
            <p className="text-3xl sm:text-4xl lg:text-5xl font-bold text-green-900">
              Best Place to Buy
            </p>
            <p className="text-3xl sm:text-4xl lg:text-5xl font-bold">
              Everything
            </p>
            <p className="mt-3 text-gray-600 text-sm sm:text-base lg:text-lg leading-relaxed indent-4 sm:indent-8">
              At Bachira, you can shop for all your favorite beauty brands,
              clothes, household products,{' '}
              <span className="block sm:inline">
                and more at a single place.
              </span>
            </p>
            <button className="bg-green-900 px-6 py-3 font-medium text-white rounded-md text-sm sm:text-base mt-7 hover:scale-105 transition transform">
              Start Shopping
            </button>
          </div>

          {/* Image */}
          <div className="w-full max-w-xs sm:max-w-sm lg:max-w-md">
            <Image
              src={pic2}
              alt="shopping image"
              width={400}
              height={400}
              className="rounded-lg w-full h-auto"
            />
          </div>
        </div>

        {/* Collaboration Section */}
        <div className="mt-16 text-gray-800 text-center">
          <p className="text-sm sm:text-base lg:text-lg leading-relaxed">
            We Collaborate With 250++ Leading{' '}
            <span className="block sm:inline">E-Commerce and Brands</span>
          </p>
        </div>
      </main>
    </div>
  );
};

export default Hero;
