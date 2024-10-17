import React from "react";
import Image from "next/image";
import pic2 from "../../Public/pic2.jpg"
import Cards from "./Cards/page";
import Footer from "@/components/Footer";
export default function Home() {
  return (
    <div >
      <main className="mx-20">
      <div className="mt-20 flex gap-20" >
        <div>    <p className=" text-4xl text-left font-bold text-green-900">Best Place to Buy</p> 
       <p className="text-4xl text-left font-bold">Everything</p>
       <p className="mt-3 text-gray-600">At Bachira, you can shop for all your favorite beauty brands, clothes, household products <br /> and more at a single place.</p>
       <button className="bg-green-900 px-2 font-medium text-white  rounded-md text-base mt-7 ml-20 hover:scale-y-125"> Shopping Now</button>
       </div>
   
       <div>
        <Image src={pic2}
                alt="shopping image"
                width={300}
                height={300}
                className="absolute rounded-lg"/>
       </div>
      </div>
       <div className=" mt-10 text-xl text-gray-800 align-middle">
        <p className="text-center text-base">We Collaborate With 250++ Leading <br />
        E Commerce and Brands</p>
       </div>
       <div>
        <ul className="flex justify-between mt-20 font-bold text-xl">
          <li className="text-green-500 font-mono font-semibold 3xl">tokopedia</li>
          <li className="text-gray-800 font-mono font-bold 3xl">BELANCIAGA</li>
          <li className="text-gray-900 font-mono font-extrabold 3xl">adidas</li>
          <li className="text-gray-700 font-sans font-base 2xl">GUCCI</li>
          <li className="text-gray-800 font-mono font-semibold 2xl">bukalapak</li>
        
        </ul>
       </div>
       <Cards/>
      </main>
       <Footer/>
     
    </div>
  );
}
