import React from 'react'
import Image from 'next/image';
import shoe from 'Public/nike.jpg'
import sweeter from 'Public/sweeter.jpg'
import airpod from 'Public/apple-airpods.jpg'
import watch from 'Public/watch.jpg'
import  glasses from 'Public/glasses.jpg'

const Cards = () => {
  return (
    <div>
 
      <p className='text-base text-gray-700 mt-20'>
        Popular Products From <br />All Brands
      </p>
      <div className='flex  justify-between mt-5 mx-5 p-2'>
      <div className='hover:scale-125'>
        <Image src={shoe} alt='nike shoes' width={100} height={100} className='rounded-lg '/>
        Nike shoes</div>
        <div className='hover:scale-125'>
        <Image src={sweeter} alt='sweeter' width={100} height={100} className='rounded-lg'/>
        White Sweeter</div>
        <div className='hover:scale-125'>
        <Image src={airpod} alt='Airpods' width={100} height={100} className='rounded-lg'/>
        Apple Airpods</div>

        <div className='hover:scale-125'>
        <Image src={watch} alt='watch' width={100} height={100} className='rounded-lg '/>
         Smart Watch</div>
          <div className='hover:scale-125'>
         <Image src={glasses} alt='glasses' width={100} height={100} className='rounded-lg '/>
         women Glasses</div>
         </div>
    </div>
  )
}

export default Cards;
