import React from "react"
import Image from "next/image"
import { FaCircle } from "react-icons/fa"
import Hero2 from "./hero2"
import {Inter} from "next/font/google"

function Hero() {
  return (
    <>
      {/* Section Heading */}
      <div className="w-screen h-[20%] flex justify-evenly gap-2 items-center">
        <div className="border-white border-b-2 w-[6rem] sm:w-[12rem] md:w-[20rem] lg:w-[30rem]" />
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-center whitespace-nowrap" style={{fontFamily:'Galins'}}>
          find your plants
        </h1>
        <div className="border-white border-b-2 w-[6rem] sm:w-[12rem] md:w-[20rem] lg:w-[30rem]" />
      </div>

      {/* Product Grid */}
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12 sm:mt-16 md:mt-20 lg:mt-28 max-w-[70rem] mx-auto">
        {/* CATEGORY 1 */}
        <div className="w-full flex flex-col text-green">
          <h2 className="text-lg sm:text-xl md:text-2xl text-green text-center whitespace-nowrap mb-4 " style={{fontFamily:"Inter"}}>
            EASY MAINTENANCE
          </h2>

          <div className="flex flex-col gap-6 sm:gap-8 p-4 justify-center items-center text-black">
            {[
              { img: "/images/pic11.png", name: "Garden croton" },
              { img: "/images/pic21.png", name: "Monterey cypress" },
              { img: "/images/pic31.png", name: "Dwarf umbrella" },
            ].map((item, i) => (
              <div
                key={i}
                className="w-56 h-56 sm:w-72 sm:h-72 md:w-64 md:h-64 rounded-2xl border-2 border-gray-200 flex justify-center gap-2"
              >
                <div className="w-28 sm:w-40 md:w-44 flex justify-center items-center">
                  <Image
                    src={item.img}
                    alt={item.name}
                    width={100}
                    height={100}
                    className="scale-[2.25]"
                  />
                </div>
                <div className="w-32 h-full m-2 sm:m-3 md:m-4 flex flex-col">
                  <h3 className="text-white font-bold whitespace-nowrap">
                    {item.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-right text-gray-200">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo praesentium reiciendis, ip
                  </p>
                  <p className="text-sm sm:text-base md:text-lg text-right text-white">
                    Rs 199/-
                  </p>
                  <button className="bg-white rounded-2xl text-black w-[5rem] h-[2rem] ml-auto">
                    Buy Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CATEGORY 2 */}
        <div className="w-full flex flex-col text-green">
          <h2 className="text-lg sm:text-xl md:text-2xl text-green text-center whitespace-nowrap mb-4" style={{fontFamily:"Inter",fontWeight:400}}>
            SPECIAL SELECTIONS
          </h2>

          <div className="flex flex-col gap-6 sm:gap-8 p-4 justify-center items-center">
            {[
              { img: "/images/pic12.png", name: "Fiddle leaf-fig" },
              { img: "/images/pic22.png", name: "Bird of paradise" },
              { img: "/images/pic32.png", name: "Dragon tree" },
            ].map((item, i) => (
              <div
                key={i}
                className="w-56 h-56 sm:w-72 sm:h-72 md:w-64 md:h-64 rounded-2xl border-2 border-gray-200 flex justify-center gap-2"
              >
                <div className="w-28 sm:w-40 md:w-44 flex justify-center items-center">
                  <Image
                    src={item.img}
                    alt={item.name}
                    width={100}
                    height={100}
                    className="scale-[2.25]"
                  />
                </div>
                <div className="w-32 h-full m-2 sm:m-3 md:m-4 flex flex-col">
                  <h3 className="text-white font-bold whitespace-nowrap">
                    {item.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-right text-gray-200">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo praesentium reiciendis, ip
                  </p>
                  <p className="text-sm sm:text-base md:text-lg text-right text-white">
                    Rs 199/-
                  </p>
                  <button className="bg-white rounded-2xl text-black w-[5rem] h-[2rem] ml-auto">
                    Buy Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CATEGORY 3 */}
        <div className="w-full flex flex-col text-green">
          <h2 className="text-lg sm:text-xl md:text-2xl text-green text-center whitespace-nowrap mb-4" style={{fontFamily:"Inter",fontWeight:400}}>
            DECOR ITEM
          </h2>

          <div className="flex flex-col gap-6 sm:gap-8 p-4 justify-center items-center">
            {[
              { img: "/images/pic13.png", name: "Succulent combo" },
              { img: "/images/pic23.png", name: "Algaonema red" },
              { img: "/images/pic33.png", name: "Fittonia" },
            ].map((item, i) => (
              <div
                key={i}
                className="w-56 h-56 sm:w-72 sm:h-72 md:w-64 md:h-64 rounded-2xl border-2 border-gray-200 flex justify-center gap-2"
              >
                <div className="w-28 sm:w-40 md:w-44 flex justify-center items-center">
                  <Image
                    src={item.img}
                    alt={item.name}
                    width={100}
                    height={100}
                    className="scale-[2.25]"
                  />
                </div>
                <div className="w-32 h-full m-2 sm:m-3 md:m-4 flex flex-col">
                  <h3 className="text-white font-bold whitespace-nowrap">
                    {item.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-right text-gray-200">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo praesentium reiciendis, ip
                  </p>
                  <p className="text-sm sm:text-base md:text-lg text-right text-white">
                    Rs 199/-
                  </p>
                  <button className="bg-white rounded-2xl text-black w-[5rem] h-[2rem] ml-auto">
                    Buy Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Explore More */}
      <p className="w-screen mt-6 flex gap-3 justify-center items-center text-sm sm:text-base md:text-lg" style={{fontFamily:'Galins'}}>
        <FaCircle size={10} color="white" /> explore more{" "}
        <FaCircle size={10} color="white" />
      </p>

      <Hero2 />
    </>
  )
}

export default Hero
