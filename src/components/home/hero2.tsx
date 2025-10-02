import React from 'react'
import Image from "next/image"
import Hero3 from './hero3'

const Hero2 = () => {
  return (
    <>
     <div className=" w-screen h-4 flex justify-evenly gap-2  items-center mt-24 ">
         <div className="border-white  border-b-2 w-96 "></div>
         <h1 className="text-6xl text-center whitespace-nowrap">How to train your free plant</h1>
         <div className="border-white  border-b-2 w-96 "></div>
        </div>

        <div className=' h-[45rem] w-screen    '>
          <div className='w-[55rem] xl:w-[70rem] h-[35rem] relative inset-0 rounded-[5rem]  bg-[radial-gradient(circle_at_right,_#142518_12%,_#324733_40%,_#72916D_50%,_#8FB287_60%,#D2FFC3_100%)]   mx-auto mt-20 flex overflow-hidden'>
            {/* <div className="w-[30%] h-full  backdrop-blur-[7rem] rounded-l-full absolute top-0 right-0 border-opacity-5">ghvh</div> */}

             <div className="w-64 h-full     m-8  text-black flex flex-col gap-6 whitespace-nowrap">
            
            <div className="text-lg font-bold flex "> <span className='rounded-full w-8 h-8 my-auto bg-black text-white  flex justify-center items-center p-1'>01. </span>
            <span className="w-full  font-bold  pl-6">Sign up with your mobile number
              <ul className='font-normal list-disc'>
                <li>Register on Greenspire using your mobile number & OTP Verification.</li>
                <li>This ensures a fair and limited distribution of free plants</li>
              </ul>
            </span>
            </div>
            
            
            <div className="text-lg font-bold flex">
              <span className='rounded-full w-8 h-8 my-auto bg-black text-white  flex justify-center items-center p-1'>02. </span>
               <span className="w-full font-bold pl-6">Browse & Choose Your Plant
                <ul className='list-disc font-normal '>
                  <li>Select from the available free plants in your region.</li>
                  <li>Only 3 plants per user to enuser fair distribution.</li>
                </ul>
                </span></div>

            <div className="text-lg font-bold  flex ">
              <span className='rounded-full w-8 h-8 my-auto bg-black text-white  flex justify-center items-center p-1'>03. </span>
               <span className="w-full font-bold  pl-6">Book a Pickup Slot
                <ul className='list-disc font-normal'>
                  <li>Choose a nearby partner nursery for collection.</li>
                  <li>Pick a date & time that suits you.</li>
                </ul>
                </span></div>

            <div className="text-lg font-bold  flex">
              <span className='rounded-full w-8 h-8 my-auto bg-black text-white  flex justify-center items-center p-1'>04. </span>
               <span className="w-full font-bold  pl-6">Visit & Collect Your Plant
                <ul className='list-disc font-normal'>
                  <li>Show your confirmation code at the nursery</li>
                  <li>Take home your new green buddy!</li>
                </ul>
                </span></div>

            <div className="text-lg font-bold flex">
              <span className='rounded-full w-8 h-8 my-auto bg-black text-white  flex justify-center items-center p-1'>05. </span>
              <span className="w-full pl-6 font-bold ">Help Us Grow the Green Movement!
                <ul className="list-disc font-normal">
                  <li>If you loved the initative,you can support us in any way you like.</li>
                  <li>Buy a premium plant , donate a little, or just spread the word -It&apos;s totally up to you!</li>
                </ul>
                </span></div>
          </div>


            <div className=" absolute top-0 right-0 ">
                  <Image src="/images/plant2.png" alt="#" width={600} height={100}  className='scale-[0.75] translate-x-12 '/>
                </div>

          </div>


          </div>
          <Hero3/>
    </>
  )
}

export default Hero2