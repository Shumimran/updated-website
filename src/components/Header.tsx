'use client';
import Link from 'next/link';
import React, { useState } from 'react';
import Image from 'next/image';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-slate-200 h-auto sm:h-16 flex flex-col sm:flex-row justify-between items-center py-2 px-5">
      {/* Logo Section */}
      <div className="mb-4 sm:mb-0">
        <Image src={"/logo1.jpg"} alt="logo" height={50} width={120} />
      </div>

      {/* Hamburger Menu Icon */}
      <button
        className="sm:hidden text-gray-800 text-3xl focus:outline-none"
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        ☰
      </button>

      {/* Links Section */}
      <div
        className={`w-full sm:w-auto ${
          isOpen ? 'block' : 'hidden'
        } sm:flex flex-col sm:flex-row gap-12 justify-between items-center py-3 text-xl font-semibold text-gray-800`}
      >
        <ul className="flex flex-col sm:flex-row gap-8 items-center">
          <li className="hover:text-green-600 hover:scale-110">
            <Link href="/">Home</Link>
          </li>
          <li className="hover:text-green-600 hover:scale-110">
            <Link href="/Products">Products</Link>
          </li>
          <li className="hover:text-green-600 hover:scale-110">
            <Link href="/About">About</Link>
          </li>
          <li className="hover:text-green-600 hover:scale-110">
            <Link href="/contact-us">Contact-us</Link>
          </li>
          <li>
            <button className="bg-green-900 text-center rounded-md text-white font-semibold px-3 py-0.5 hover:text-gray-800 hover:bg-slate-200">
              <Link href="/Button">My Cart</Link>
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
