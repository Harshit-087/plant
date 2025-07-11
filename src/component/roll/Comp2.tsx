import React from 'react'
import {FaStar} from "react-icons/fa"
import Image from "next/image"
import person2 from "../../../public/images/person2.png"

const Comp2 = () => {
  return (
   <>
    {/* 60 */}
    <div className='w-52 h-32  p-2 flex bg-white rounded-3xl'>
        <div className='w-[25%] h-[25%] rounded-full  p-1'>
            <Image src={person2} alt="#" width={100} height={100}/>
        </div>
        {/* <div className='w-[5%] bg-white h-8 rounded-tl-lg rounded-bl-[5rem]'></div> */}
    <div  className='w-full flex flex-col bg-[radial-gradient(ellipse_at_left,_#72916D,_#203625)] px-2 py-2 rounded-lg'>
        <h1 className='font-bold text-xl w-full flex gap-2  items-center'>Kunal M.
            <FaStar size={22} color="yellow" />
            <FaStar size={22} color="yellow" />
            <FaStar size={22} color="yellow" />
            <FaStar size={22} color="yellow" />
            <FaStar size={22} color="yellow" />

        </h1>
        <p className='w-full '>Their customer service and plant quality are top-notch. Highly recommend!</p>
        </div> 
    </div>
   
    </>
  )
}

export default Comp2