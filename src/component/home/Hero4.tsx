import React from 'react'
import {FaCircle} from "react-icons/fa"
import Comp1  from "../roll/Comp1"
import Marquee from 'react-fast-marquee'
import Comp2 from '../roll/Comp2'

const Hero4 = () => {
  return (
    <>
    <div className='  w-screen mb-16'>
        <h1 className='text-3xl flex justify-center items-center gap-3'>
            <FaCircle size={16} color="white"/>What People Say About Greenspire
            <FaCircle size={16} color="white"/></h1>
    </div>

    
        <Marquee>
            <Comp1/>
            <Comp2/>
        </Marquee>
        
    
    </>
    
  )
}

export default Hero4