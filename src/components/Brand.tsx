import React from 'react';
import Image from 'next/image';

const marqueeArray = [
  '/01.png',
  '/02.png',
  '/04.png',
  '/05.png',
  '/06.png',
  '/07.png',
  '/09.png',
  '/10.png',
  '/11.png',
  '/12.png',
  '/13.png',
  '/14.png',
];

const Brand = () => {
  return (
    <div className="overflow-hidden py-10">
      {/* Marquee Container */}
      <div className="flex items-center animate-marquee space-x-8">
        {/* Map Over Images */}
        {marqueeArray.map((image, index) => (
          <div key={index} className="flex-shrink-0">
            <Image
              src={image}
              alt={`Brand logo ${index + 1}`}
              width={100} // Adjust width
              height={70} // Adjust height
              className="object-contain"
            />
          </div>
        ))}
        {/* Duplicate Images for Smooth Scrolling */}
        {marqueeArray.map((image, index) => (
          <div key={`dup-${index}`} className="flex-shrink-0">
            <Image
              src={image}
              alt={`Brand logo duplicate ${index + 1}`}
              width={100}
              height={70}
              className="object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Brand;
