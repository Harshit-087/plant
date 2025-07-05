import React from 'react'
import Image from "next/image"
import Hero3 from './Hero3'

const Hero2 = () => {
  return (
    <>
     <div className=" w-screen h-[20%] flex justify-evenly gap-2  items-center mt-24 ">
         <div className="border-white  border-b-2 w-[40%] "></div>
         <h1 className="text-6xl text-center whitespace-nowrap">How to train your free plant</h1>
         <div className="border-white  border-b-2 w-[40%] "></div>
        </div>

        <div className=' h-screen  pt-16 pr-7 pb-12 pl-16  m-5 '>
          <div className='rounded-[5rem]  bg-[radial-gradient(circle_at_right,_#142518_12%,_#324733_40%,_#72916D_50%,_#8FB287_60%,#D2FFC3_100%)] h-full  flex overflow-hidden'>
            {/* <div className="w-[30%] h-full  backdrop-blur-[7rem] rounded-l-full absolute top-0 right-0 border-opacity-5">ghvh</div> */}

             <div className="w-[55%] h-full      m-8  text-black flex flex-col gap-6 whitespace-nowrap">
            
            <div className="text-lg font-bold flex "> <span className='rounded-full w-10 h-10 my-auto bg-black text-white  flex justify-center items-center'>01. </span>
            <span className="w-full  font-bold  pl-6">Sign up with your mobile number
              <ul className='font-normal list-disc'>
                <li>Register on Greenspire using your mobile number & OTP Verification.</li>
                <li>This ensures a fair and limited distribution of free plants</li>
              </ul>
            </span>
            </div>
            
            
            <div className="text-lg font-bold flex">
              <span className='rounded-full w-10 h-10 my-auto  0 bg-black text-white  flex justify-center items-center'>02. </span>
               <span className="w-full font-bold pl-6">Browse & Choose Your Plant
                <ul className='list-disc font-normal '>
                  <li>Select from the available free plants in your region.</li>
                  <li>Only 3 plants per user to enuser fair distribution.</li>
                </ul>
                </span></div>

            <div className="text-lg font-bold  flex ">
              <span className='rounded-full w-10 h-10 my-auto  bg-black text-white  flex justify-center items-center'>03. </span>
               <span className="w-full font-bold  pl-6">Book a Pickup Slot
                <ul className='list-disc font-normal'>
                  <li>Choose a nearby partner nursery for collection.</li>
                  <li>Pick a date & time that suits you.</li>
                </ul>
                </span></div>

            <div className="text-lg font-bold  flex">
              <span className='rounded-full w-10 h-10 my-auto bg-black text-white   flex justify-center items-center'>04. </span>
               <span className="w-full font-bold  pl-6">Visit & Collect Your Plant
                <ul className='list-disc font-normal'>
                  <li>Show your confirmation code at the nursery</li>
                  <li>Take home your new green buddy!</li>
                </ul>
                </span></div>

            <div className="text-lg font-bold flex">
              <span className='rounded-full w-10 h-10 my-auto  bg-black text-white  flex justify-center items-center'>05. </span>
              <span className="w-full pl-6 font-bold ">Help Us Grow the Green Movement!
                <ul className="list-disc font-normal">
                  <li>If you loved the initative,you can support us in any way you like.</li>
                  <li>Buy a premium plant , donate a little, or just spread the word -It's totally up to you!</li>
                </ul>
                </span></div>
          </div>


            <div >
                  <Image src="/images/plant2.png" alt="#" width={600} height={100}  className='scale-[1.15] -translate-x-10'/>
                </div>

          </div>


          </div>
          <Hero3/>
    </>
  )
}

export default Hero2