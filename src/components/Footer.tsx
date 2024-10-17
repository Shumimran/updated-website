import React from 'react'
import Image from 'next/image';
import logo from 'Public/logo1.jpg'
const Footer = () => {
  return (
    <div>
        <div className='flex justify-between mt-20 mx-5 bg-gray-200'>
        <div>
          <ul>
            <li><Image src={logo} alt='logo' width={65} height={65}/></li>
            <li><p className='font-light text-sm'>Bachira is an online store dealing in all products <br /> Bachira provide cheep, high quality products to customer. </p></li>
          </ul>
          
        </div>
        <div>
          <ul className='text-sm font-light'>
            <li className='font-medium'>For Beginners</li>
            <li>About</li>
            <li>Career</li>
            <li>Promotion</li>
          </ul>
        </div>
        <div>
          <ul className='text-sm font-light'>
            <li className='font-medium'>Overview</li>
            <li>Products</li>
            <li>Catagaries</li>
            <li>Prices</li>
          </ul>
        </div>
        <div>
          <ul className='text-sm font-light'>
            <li className='font-medium'>Explore Us</li>
            <li>Our career</li>
            <li>Privacy</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>
        </div>
    </div>
  )
}

export default Footer;
