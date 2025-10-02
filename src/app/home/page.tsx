"use client"
import React,{useState,useEffect} from "react"
import Image from "next/image"
import Hero from "@/components/home/hero"
import { FaHeart } from "react-icons/fa";


const Home=()=>{
  const [isOpen,setIsOpen] = useState<boolean>(false)

  const handleOpen=()=>{
    setIsOpen(prev=>!prev)
  }

    return(
      <>
                    {/* ellipse_at_40%_20%: centers the gradient 40% from the left, 20% down from the top */}
                    {/* radial-gradient(...)  ---> radial (circular or elliptical) color gradient. */}
                    
        <div className="min-h-screen w-screen bg-[radial-gradient(circle_at_50%_20%,_#5f8d5f_0%,_#3a593a_10%,_#1f2e1f_30%)] text-white overflow-x-hidden">
        <nav className="relative z-50 w-screen  p-2 flex justify-evenly items-center  ">
           <div className=" w-[10%] md:w-[5%] rounded-full h-[3rem] flex justify-center items-center "> 
            <Image src="/images/logo.png" alt="logo" width={60} height={50} className="lg:scale-[1.5] md:scale-[1.2]" />
              </div>
           <div className="flex justify-evenly  w-[60%] m-4 md:text-sm md:gap-3 md:[70%]">
            <p className="whitespace-nowrap">HOME</p>
            <p className="whitespace-nowrap">NURSERIES</p>
            <p className="whitespace-nowrap">GET PLANTS</p>
            <p className=" flex gap-1 ">DONATE <FaHeart size={18} className="translate-y-1"  /></p>
            <p className="whitespace-nowrap">HOW IT WORKS?</p>
            <p className="whitespace-nowrap">FAQ</p>
            
           </div>
        <div className="w-16 md:w-10"> <p className="w-[6rem] md:w-[4rem] max-lg:hidden md:px-2 md:py-1 md:text-xs md:mx-2 h-[2rem] text-sm text-white border-white border-2   rounded-full flex justify-center items-center">SIGN IN</p></div>
          <div className="relative">
  <div
    onClick={handleOpen}
    className="w-8 h-8 md:w-6 md:h-6 z-0 md:scale-[1.15] md:ml-2 bg-pink-200 border-white border-2 rounded-full flex justify-center items-center scale-[1.25] cursor-pointer"
  >
    🧞
  </div>

  {isOpen ? (
    <div className="absolute top-full mt-2 right-0 bg-white text-black w-24 h-32 p-4 rounded shadow-lg z-50 flex flex-col">
     <ul>
      <li className="w-4 leading-5 whitespace-nowrap text-sm text-black">SIGN IN</li>
       <li className="w-4 leading-5 whitespace-nowrap text-sm text-black">LOG OUT</li>
     </ul> 
    </div>
  ):null}
</div>

        
        </nav>
        {/* In React/JSX, attributes like width, height, etc. are treated as JavaScript expressions, not string */}
       <div className=" w-screen ">
         <h1 className="text-8xl text-center scale-[1.75] md:scale-[1.45]">greenspire</h1>
       </div>
        <div className="relative  top-0 bottom-0 flex justify-center  ">
           
             <Image src="/images/plant1.png" alt="plant image" width={400} height={300}  className=" scale-[1.5]"/>
        <button className="w-[36%] h-[15%] absolute top-[60%] backdrop-blur-sm border-2 border-gray-400 mx-auto rounded-full ">CLAIM YOUR PLANT</button>
        </div>
        <div className=" w-screen h-[5rem] -translate-y-[120%] flex justify-between items-center p-8">
            <div className=" ml-12">
                <p>GRAB</p>
                <p>GROW</p>
                <p>GREEN</p>

            </div>
            <div className=" mr-12 flex  flex-col">
                <p className="">BRINGING</p>
                <p>GREEN TO</p>
                <p>EVERY HOME</p>

            </div>
        </div>
        
         <Hero/>
        
        </div>
       
      </>
    )
}

export default Home