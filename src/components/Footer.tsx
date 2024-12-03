import React from 'react';
import Image from 'next/image';


const Footer = () => {
  return (
    <div className="mt-10 bg-slate-200">
      <div className="container mx-auto py-6 px-4 sm:px-6 lg:px-8">
        {/* Footer content container */}
        <div className="flex flex-col sm:flex-row sm:justify-between gap-6">
          {/* Logo and description */}
          <div className="flex-1">
            <ul>
              <li>
                <Image src={"/logo1.jpg"} alt="logo" width={65} height={65} />
              </li>
              <li>
                <p className="font-light text-sm mt-2">
                  Bachira is an online store dealing in all products. <br />
                  We provide affordable, high-quality products to customers.
                </p>
              </li>
            </ul>
          </div>

          {/* Links Section */}
          <div className="flex flex-col sm:flex-row gap-6 flex-1 justify-between">
            <div>
              <ul className="text-sm font-light space-y-2">
                <li className="font-medium text-gray-800">For Beginners</li>
                <li className="hover:text-green-600">About</li>
                <li className="hover:text-green-600">Career</li>
                <li className="hover:text-green-600">Promotion</li>
              </ul>
            </div>
            <div>
              <ul className="text-sm font-light space-y-2">
                <li className="font-medium text-gray-800">Overview</li>
                <li className="hover:text-green-600">Products</li>
                <li className="hover:text-green-600">Categories</li>
                <li className="hover:text-green-600">Prices</li>
              </ul>
            </div>
            <div>
              <ul className="text-sm font-light space-y-2">
                <li className="font-medium text-gray-800">Explore Us</li>
                <li className="hover:text-green-600">Our Career</li>
                <li className="hover:text-green-600">Privacy</li>
                <li className="hover:text-green-600">Terms & Conditions</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Footer bottom text */}
        <div className="mt-6 text-center text-sm text-gray-600">
          &copy; 2024 Bachira. All rights reserved.
        </div>
      </div>
    </div>
  );
};

export default Footer;
