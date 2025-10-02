import React from 'react'
import {FaCircle} from "react-icons/fa"
import Comp1  from "../roll/comp1"
import Marquee from 'react-fast-marquee'
import Comp2 from '../roll/comp2'
import Comp3 from '../roll/comp3'
import Comp4 from '../roll/comp4'
import Comp5 from '../roll/comp5'
import Comp6 from '../roll/comp6'

const Hero4 = () => {
  return (
    <>
    <div className='  w-screen mb-16'>
        <h1 className='text-3xl flex justify-center items-center gap-3'>
            <FaCircle size={16} color="white"/>What People Say About Greenspire
            <FaCircle size={16} color="white"/></h1>
    </div>

    
        <Marquee direction="right" speed={150} pauseOnHover className=" overflow-x-auto w-max">
            <Comp1/>
            <Comp2/>
        </Marquee>
          <Marquee speed={90} pauseOnHover className=" overflow-x-auto w-max ">
            <Comp3/>
            <Comp4/>
        </Marquee>
         <Marquee direction="right" pauseOnHover speed={125} className=" overflow-x-auto w-max ">
            <Comp5/>
            <Comp6/>
        </Marquee>
        
    
    </>
    
  )
}

export default Hero4