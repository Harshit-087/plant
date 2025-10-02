import React from "react"
import Image from "next/image"
import Hero from "@/components/home/hero"
import { FaHeart } from "react-icons/fa";


const Home=()=>{

    return(
      <>
                    {/* ellipse_at_40%_20%: centers the gradient 40% from the left, 20% down from the top */}
                    {/* radial-gradient(...)  ---> radial (circular or elliptical) color gradient. */}
                    
        <div className="min-h-screen w-screen bg-[radial-gradient(circle_at_50%_20%,_#5f8d5f_0%,_#3a593a_10%,_#1f2e1f_30%)] text-white overflow-x-hidden">
        <nav className=" w-screen  p-2 flex justify-evenly items-center  ">
           <div className=" w-[10%] rounded-full h-[3rem] flex justify-center items-center "> 
            <Image src="/images/logo.png" alt="logo" width={60} height={50} className="scale-[1.5]" />
              </div>
           <div className="flex justify-evenly  w-[60%] m-4">
            <p className="">HOME</p>
            <p>NURSERIES</p>
            <p>GET PLANTS</p>
            <p className=" flex gap-1 ">DONATE <FaHeart size={18} className="translate-y-1"  /></p>
            <p>HOW IT WORKS?</p>
            <p>FAQ</p>
            
           </div>
        <div className="w-16 "> <p className="w-[6rem]  h-[2rem] text-sm text-white border-white border-2   rounded-full flex justify-center items-center">SIGN IN</p></div>
           <div className="w-8 h-8   border-white border-2 rounded-full flex justify-center items-center scale-[1.25]">🧞</div>
        </nav>
        {/* In React/JSX, attributes like width, height, etc. are treated as JavaScript expressions, not string */}
       <div className=" w-screen ">
         <h1 className="text-8xl text-center scale-[1.75]">greenspire</h1>
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