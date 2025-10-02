import React from 'react'
import {FaStar} from "react-icons/fa"
import Image from "next/image"
import person1 from "../../../public/images/person1.png"

const Comp6 = () => {
  return (
    <>
    {/* 60 */}
    <div className='w-[30rem] h-[7rem] p-2 flex  rounded-3xl mx-[7rem]'>
        <div className='w-24 h-24 rounded-full  p-1 '>
            <Image src={person1} alt="#" width={100} height={100}/>
        </div>
        {/* <div className='w-[5%] bg-white h-8 rounded-tl-lg rounded-bl-[5rem]'></div> */}
    <div  className='w-full flex flex-col bg-[radial-gradient(ellipse_at_left,_#72916D,_#203625)] px-2 py-2 rounded-r-lg rounded-b-lg'>
        <h1 className='font-bold text-xl w-full flex gap-2  items-center'>Ankita.
            <FaStar size={22} color="yellow" />
            <FaStar size={22} color="yellow" />
            <FaStar size={22} color="yellow" />
            <FaStar size={22} color="yellow" />
            <FaStar size={22} color="yellow" />

        </h1>
        <p className='w-full '>The free plant program is amazing! I got a beautiful basil plant, and now I&apos;m more into gardening.</p>
        </div> 
    </div>
   
    </>
  )
}

export default Comp6