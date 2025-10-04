"use client"
import React, { useState } from "react"
import Image from "next/image"
import Hero from "@/components/home/hero"
import { FaHeart } from "react-icons/fa"

const Home = () => {
  const [isOpen, setIsOpen] = useState(false)

  const handleOpen = () => {
    setIsOpen((prev) => !prev)
  }

  return (
    <>
      {/* ellipse_at_40%_20%: centers the gradient 40% from the left, 20% down from the top */}
      {/* radial-gradient(...)  ---> radial (circular or elliptical) color gradient. */}
      <div className="min-h-screen w-screen bg-[radial-gradient(circle_at_50%_20%,_#5f8d5f_0%,_#3a593a_10%,_#1f2e1f_30%)] text-white overflow-x-hidden">
        <nav className="relative z-50 w-screen p-2 flex justify-evenly items-center">
          {/* Logo */}
          <div className="w-[5%] sm:w-[8%] md:w-[10%] rounded-full h-[3rem] flex justify-center items-center">
            <Image
              src="/images/logo.png"
              alt="logo"
              width={60}
              height={50}
              className="scale-[1.2] sm:scale-[1.3] md:scale-[1.5]"
            />
          </div>

          {/* Nav links */}
          <div className="flex justify-evenly gap-2 text-xs sm:text-sm lg:text-base w-[70%] sm:w-[65%] md:w-[60%] m-2 sm:m-3 md:m-4" style={{fontFamily:'Monsterrat'}}>
            <p className="whitespace-nowrap">HOME</p>
            <p className="whitespace-nowrap">NURSERIES</p>
            <p className="whitespace-nowrap">GET PLANTS</p>
            <p className="flex gap-1 ">
              DONATE <FaHeart size={12} className="my-auto"/>
            </p>
            <p className="whitespace-nowrap">HOW IT WORKS?</p>
            <p className="whitespace-nowrap">FAQ</p>
          </div>

          {/* Sign in button (hidden on small) */}
          <div className="w-10 sm:w-12 md:w-16">
            <p className="max-lg:hidden  w-[4rem] md:w-[6rem] px-2 py-1 text-xs md:text-sm h-[2rem] text-white border-white border-2 rounded-full justify-center items-center">
              SIGN IN
            </p>
          </div>

          {/* Avatar / menu */}
          <div className="relative">
            <div
              onClick={handleOpen}
              className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 border-white border-2 rounded-full flex justify-center items-center scale-[1.15] md:scale-[1.25] cursor-pointer"
            >
              🧞
            </div>

            {isOpen ? (
              <div className="absolute top-full mt-2 right-0 bg-white text-black w-24 h-32 p-4 rounded shadow-lg z-50 flex flex-col">
                <ul>
                  <li className="leading-5 whitespace-nowrap text-sm text-black">
                    SIGN IN
                  </li>
                  <li className="leading-5 whitespace-nowrap text-sm text-black">
                    LOG OUT
                  </li>
                </ul>
              </div>
            ) : null}
          </div>
        </nav>

        {/* Hero title */}
        <div className="w-screen">
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-center scale-[1.25] sm:scale-[1.4] md:scale-[1.6] lg:scale-[1.75] mt-4 lg:translate-y-4 "  style={{ fontFamily: 'Galins' }}>
            greenspire
          </h1>
        </div>

        {/* Plant section */}
        <div className="relative flex justify-center">
          <Image
            src="/images/plant1.png"
            alt="plant image"
            width={400}
            height={300}
            className="scale-[1.3] sm:scale-[1.4] md:scale-[1.5]"
          />
          <button className="w-[70%] sm:w-[50%] md:w-[36%] h-[12%] absolute top-[60%] backdrop-blur-sm border-2 border-gray-400 mx-auto rounded-full">
            CLAIM YOUR PLANT
          </button>
        </div>

        {/* Tagline */}
        <div className="w-screen h-[5rem] -translate-y-[120%] flex justify-between items-center p-8">
          <div className="ml-6 sm:ml-10 md:ml-12">
            <p>GRAB</p>
            <p>GROW</p>
            <p>GREEN</p>
          </div>
          <div className="mr-6 sm:mr-10 md:mr-12 flex flex-col">
            <p>BRINGING</p>
            <p>GREEN TO</p>
            <p>EVERY HOME</p>
          </div>
        </div>

        <Hero />
      </div>
    </>
  )
}

export default Home
