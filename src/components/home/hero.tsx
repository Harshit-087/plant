import React from 'react'
import Image from "next/image"
import {FaCircle} from "react-icons/fa";
import Hero2 from "./hero2"

function Hero() {
  return (
    <>
    
    <div className=" w-screen h-[20%] flex justify-evenly gap-2 items-center ">
         <div className="border-white  border-b-2 w-[30rem] "></div>
         <h1 className="text-6xl text-center  whitespace-nowrap">find your plants</h1>
         <div className="border-white  border-b-2 w-[30rem] "></div>
        </div>

        {/* <div className="w-screen flex  justify-evenly items-center  mt-8">
        <h2 className="text-2xl text-green">EASY MAINTENANCE</h2>
        <h2 className="text-2xl text-green">SPECIAL SELECTIONS</h2>
        <h2 className="text-2xl text-green">DECOR ITEM</h2>
        </div> */}

        <div className="w-screen h-[60rem] grid grid-cols-3  mt-28 gap-4 xl:w-[70rem] xl:mx-auto">

            {/* 1 */}
            <div className="w-full  flex flex-col text-green ">
             <h2 className="text-2xl text-green text-center">EASY MAINTENANCE</h2>
             
            <div className=" flex flex-col gap-8 p-4 m-8 justify-center items-center text-black ">

                <div className="w-64 h-64 rounded-2xl border-2 border-gray-200 flex  justify-center gap-2  ">
                    <div className="  w-48 flex justify-center  items-center">
                         <Image src="/images/pic11.png" alt="#" width={80} height={70} className="scale-[2.25] "/>
                    </div>
                   
                    <div className=" w-32 h-full m-4 flex flex-col">
                        <h3 className="w-max text-white font-bold whitespace-nowrap ">Garden croton</h3>
                          <p className="text-sm text-right text-gray-200">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo praesentium reiciendis, ip  </p>
                     <p className="text-lg  text-right text-white ">Rs 199/-</p>
                   <button className="bg-white rounded-2xl text-black w-[5rem] h-[2rem] ml-auto ">Buy Now</button>
                    </div>
                </div>

                <div className="w-64 h-64 rounded-2xl border-2 border-gray-200 flex  justify-center gap-2  ">
                    <div className="  w-48 flex justify-center  items-center">
                         <Image src="/images/pic21.png" alt="#" width={80} height={70} className="scale-[2.25] "/>
                    </div>
                   
                    <div className=" w-32 h-full m-4 flex flex-col">
                        <h3 className="text-white font-bold whitespace-nowrap">Monterey cypress</h3>
                        <p className="text-sm text-right text-gray-200">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo praesentium reiciendis, ip  </p>
                        <p className="text-lg  text-right text-white">Rs 199/-</p>
                    
                   <button className="bg-white rounded-2xl text-black w-[5rem] h-[2rem] ml-auto ">Buy Now</button>
                    </div>
                </div>

                <div className="w-64 h-64 rounded-2xl border-2 border-gray-200 flex  justify-center gap-2  ">
                    <div className="  w-48 flex justify-center  items-center">
                         <Image src="/images/pic31.png" alt="#" width={80} height={70} className="scale-[2.25] "/>
                    </div>
                   
                    <div className=" w-32 h-full m-4 flex flex-col">
                        <h3 className="text-white font-bold whitespace-nowrap">Dwarf umbrella</h3>
                         <p className="text-sm text-right text-gray-200">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo praesentium reiciendis, ip  </p>
                     <p className="texxt-2xl  text-white text-right ">Rs 199/-</p>
                   <button className="bg-white rounded-2xl text-black w-[5rem] h-[2rem] ml-auto">Buy Now</button>
                    </div>
                </div>
                
            </div>
            </div>

            {/* 2 */}
            <div className="w-full  flex flex-col text-green ">
             <h2 className="text-2xl text-green text-center">SPECIAL SELECTIONS</h2>

            <div className=" flex flex-col gap-8 p-4 m-8 justify-center items-center">
              <div className="w-64 h-64 rounded-2xl border-2 border-gray-200 flex  justify-center gap-2  ">
                    <div className="  w-48 flex justify-center  items-center">
                         <Image src="/images/pic12.png" alt="#" width={80} height={70} className="scale-[2.25] "/>
                    </div>
                   
                    <div className=" w-32 h-full m-4 flex flex-col">
                        <h3 className="text-white font-bold whitespace-nowrap">Fiddle leaf-fig</h3>
                          <p className="text-sm text-right text-gray-200">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo praesentium reiciendis, ip  </p>
                     <p className="texxt-2xl  text-right ">Rs 199/-</p>
                   <button className="bg-white rounded-2xl text-black w-[5rem] h-[2rem] ml-auto">Buy Now</button>
                    </div>
                </div>

                <div className="w-64 h-64 rounded-2xl border-2 border-gray flex  justify-center gap-2  ">
                    <div className="  w-48 flex justify-center  items-center">
                         <Image src="/images/pic22.png" alt="#" width={90} height={100} className="scale-[2.25] "/>
                    </div>
                   
                    <div className=" w-32 h-full m-4 flex flex-col">
                        <h3 className="text-white font-bold whitespace-nowrap">Bird of paradise</h3>
                          <p className="text-sm text-right text-gray-200">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo praesentium reiciendis, ip  </p>
                    <p className="texxt-2xl  text-right ">Rs 199/-</p>
                   <button className="bg-white rounded-2xl text-black w-[5rem] h-[2rem] ml-auto">Buy Now</button>
                    </div>
                </div>

                <div className="w-64 h-64 rounded-2xl border-2 border-gray flex  justify-center gap-2  ">
                    <div className="  w-48 flex justify-center  items-center">
                         <Image src="/images/pic32.png" alt="#" width={80} height={70} className="scale-[2.25] "/>
                    </div>
                   
                    <div className=" w-32 h-full m-4 flex flex-col">
                        <h3 className="text-white font-bold whitespace-nowrap">Dragon tree</h3>
                        <p className="text-sm text-right text-gray-200">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo praesentium reiciendis, ip  </p>
                     <p className="texxt-2xl  text-right ">Rs 199/-</p>
                   <button className="bg-white rounded-2xl text-black w-[5rem] h-[2rem] ml-auto">Buy Now</button>
                    </div>
                </div>
            </div>
            </div>

{/* 3 */}
           <div className="w-full  flex flex-col text-green ">
             <h2 className="text-2xl text-green text-center">DECOR ITEM</h2>

            <div className=" p-4 m-8 flex flex-col gap-8 justify-center items-center">
                <div className="w-64 h-64 rounded-2xl border-2 border-gray flex  justify-center gap-2  ">
                    <div className="  w-48 flex justify-center  items-center">
                         <Image src="/images/pic13.png" alt="#" width={80} height={70} className="scale-[2.25] "/>
                    </div>
                   
                    <div className=" w-32 h-full m-4 flex flex-col">
                        <h3 className="text-white font-bold whitespace-nowrap">Succulent combo</h3>
                         <p className="text-sm text-right text-gray-200">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo praesentium reiciendis, ip  </p>
                    <p className="texxt-2xl  text-right ">Rs 199/-</p>
                   <button className="bg-white rounded-2xl text-black w-[5rem] h-[2rem] ml-auto">Buy Now</button>
                    </div>
                </div>

                <div className="w-64 h-64 rounded-2xl border-2 border-gray flex  justify-center gap-2  ">
                    <div className="  w-48 flex justify-center  items-center">
                         <Image src="/images/pic23.png" alt="#" width={90} height={80} className="scale-[2.25] "/>
                    </div>
                   
                    <div className=" w-32 h-full m-4 flex flex-col">
                        <h3 className="text-white font-bold whitespace-nowrap">Algaonema red</h3>
                          <p className="text-sm text-right text-gray-200">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo praesentium reiciendis, ip  </p>
                     <p className="texxt-2xl  text-right ">Rs 199/-</p>
                   <button className="bg-white rounded-2xl text-black w-[5rem] h-[2rem] ml-auto">Buy Now</button>
                    </div>
                </div>

                <div className="w-64 h-64 rounded-2xl border-2 border-gray flex  justify-center gap-2  ">
                    <div className="  w-48 flex justify-center  items-center">
                         <Image src="/images/pic33.png" alt="#" width={80} height={80} className="scale-[2.25] "/>
                    </div>
                   
                    <div className=" w-32 h-full m-4 flex flex-col">
                        <h3 className="text-white font-bold">Fittonia</h3>
                        <p className="text-sm text-right text-gray-200">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo praesentium reiciendis, ip  </p>
                         <p className="texxt-2xl  text-right ">Rs 199/-</p>
                   <button className="bg-white rounded-2xl text-black w-[5rem] h-[2rem] ml-auto">Buy Now</button>
                    </div>
                </div>
            </div>
            
            </div>
         
            </div>
               <p className=' w-screen -mt-4 flex gap-3 justify-center items-center '><FaCircle size={10} color="white" />explore more <FaCircle size={10} color="white" /></p>

            <Hero2/>
    
    </>

    
  )
}

export default Hero