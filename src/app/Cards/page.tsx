import React from 'react';
import Image from 'next/image';
import shoe from 'Public/nike.jpg';
import sweeter from 'public/sweeter.jpg';
import airpod from 'public/pods.jpg';
import watch from 'public/watch.jpg';
import glasses from 'Public/glasses.png';

const Cards = () => {
  return (
    <div className="mt-10">
      {/* Title Section */}
      <p className="text-center text-lg sm:text-xl md:text-2xl text-gray-700 font-medium mb-10">
        Popular Products From <br /> All Brands
      </p>

      {/* Card Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 mx-4 sm:mx-10">
        {/* Card 1 */}
        <div className="hover:scale-105 transform transition duration-300 flex flex-col items-center">
          <Image src={shoe} alt="Nike shoes" width={150} height={150} className="rounded-lg" />
          <p className="text-center mt-2 text-sm sm:text-base">Nike Shoes</p>
        </div>

        {/* Card 2 */}
        <div className="hover:scale-105 transform transition duration-300 flex flex-col items-center">
          <Image src={sweeter} alt="Sweater" width={150} height={150} className="rounded-lg" />
          <p className="text-center mt-2 text-sm sm:text-base">White Sweater</p>
        </div>

        {/* Card 3 */}
        <div className="hover:scale-105 transform transition duration-300 flex flex-col items-center">
          <Image src={airpod} alt="Apple Airpods" width={150} height={150} className="rounded-lg" />
          <p className="text-center mt-2 text-sm sm:text-base">Apple Airpods</p>
        </div>

        {/* Card 4 */}
        <div className="hover:scale-105 transform transition duration-300 flex flex-col items-center">
          <Image src={watch} alt="Smart Watch" width={150} height={150} className="rounded-lg" />
          <p className="text-center mt-2 text-sm sm:text-base">Smart Watch</p>
        </div>

        {/* Card 5 */}
        <div className="hover:scale-105 transform transition duration-300 flex flex-col items-center">
          <Image src={glasses} alt="Women Glasses" width={150} height={150} className="rounded-lg" />
          <p className="text-center mt-2 text-sm sm:text-base">Women Glasses</p>
        </div>
      </div>
    </div>
  );
};

export default Cards;
