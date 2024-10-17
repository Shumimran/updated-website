import Login from '@/app/Login/page';
import Link from 'next/link';
import React from 'react'

const Navbar = () => {
  return (
    <div className=' mx-5 h-12 bg-gray-100 bg-blend-hard-light  '>
      <ul className='flex p-2'>
        <li className='font-bold text-3xl text-gray-800 '>Ba</li>
        <li className='font-bold text-3xl text-green-900'>chira</li>
      <ul className='flex justify-center gap-14 p-2 text-xl font-medium text-gray-800 '>
        <li className='ml-36 hover:text-green-600 hover:scale-110'><Link href="/">Home</Link></li>
        <li className='hover:text-green-600 hover:scale-110'><Link href="/Products">Products</Link></li>
        <li className='hover:text-green-600 hover:scale-110'><Link href="/Catagaies">Catagaries</Link></li>
        <li className='hover:text-green-600 hover:scale-110'><Link href="/Pricing">Prices</Link></li>
        <li className='hover:text-green-600 hover:scale-110'><Link href="/About">About</Link></li>
        <li className='hover:text-green-600 hover:scale-110'><Link href="/contact-us">Contact-us</Link></li>
        <ul className='flex gap-2'>
          <li className='mr-3 hover:text-green-600 hover:scale-110'><Link href="/Login">Login</Link></li>
          <li><button className='bg-green-900 text-center rounded-md text-white font-normal px-2 hover:text-gray-800 hover:bg-slate-200'><Link href="/Button">Register</Link></button></li>
        </ul>
      </ul>
      </ul>
    </div>
  )
}

export default Navbar;
