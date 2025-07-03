import React from "react"
import Image from "next/image"

const Home=()=>{

    return(
      <>
        <div className="min-h-screen w-screen bg-[radial-gradient(circle_at_center,_#5f8d5f_0%,_#3a593a_40%,_#1f2e1f_100%)] text-white ">
        <nav className=" w-screen  p-2 flex justify-evenly items-center  ">
           <div className=" w-[10%] rounded-full h-[3rem] flex justify-center items-center "> 
            <Image src="/images/logo.png" alt="logo" width={60} height={50} className="scale-[1.5]" />
              </div>
           <div className="flex justify-evenly  w-[70%] m-4">
            <p className="">HOME</p>
            <p>NURSERIES</p>
            <p>GET PLANTS</p>
            <p>DONATE ❤️</p>
            <p>HOW IT WORKS?</p>
            <p>FAQ</p>
             <p className="w-[6rem]  h-[2rem] text-sm text-white border-white border-2   rounded-full flex justify-center items-center">SIGN IN</p>
           </div>
        
           <div className="w-[2%]  border-white border-2 rounded-full flex justify-center items-center scale-[1.25]">🧞</div>
        </nav>
        {/* In React/JSX, attributes like width, height, etc. are treated as JavaScript expressions, not string */}
       <div className=" w-screen ">
         <h1 className="text-8xl text-center scale-[1.75]">greenspire</h1>
       </div>
        <div className="relative  top-0 bottom-0 flex justify-center  ">
           
             <Image src="/images/plant1.png" alt="plant image" width={400} height={300} className="scale-[1.5]"/>
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
        
        <div className=" w-screen h-[20%] flex justify-evenly items-center mb-12">
         <div className="border-white  border-b-2 w-[40%] "></div>
         <h1 className="text-6xl text-center w-[60%] ">find your plants</h1>
         <div className="border-white  border-b-2 w-[40%] "></div>
        </div>

        {/* <div className="w-screen flex  justify-evenly items-center  mt-8">
        <h2 className="text-2xl text-green">EASY MAINTENANCE</h2>
        <h2 className="text-2xl text-green">SPECIAL SELECTIONS</h2>
        <h2 className="text-2xl text-green">DECOR ITEM</h2>
        </div> */}

        <div className="w-screen grid grid-cols-3  mt-8 gap-4 ">

            {/* 1 */}
            <div className="w-full h-10 flex flex-col text-green ">
             <h2 className="text-2xl text-green text-center">EASY MAINTENANCE</h2>
             
            <div className=" flex flex-col gap-8 p-4 m-8 justify-center items-center text-black">

                <div className="w-[70%] h-[40%] rounded-2xl border-2 border-gray flex  justify-center gap-2  ">
                    <div className="  w-[40%] flex justify-center  items-center">
                         <Image src="/images/pic11.png" alt="#" width={80} height={50} className="scale-[1.75] "/>
                    </div>
                   
                    <div className=" w-[60%] h-full m-4 flex flex-col">
                        <h3 className="text-white bold">Garden croton</h3>
                          <p className="text-sm text-right text-gray-200">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo praesentium reiciendis, ip  </p>
                     <p className="texxt-2xl  text-right ">Rs 199/-</p>
                   <button className="bg-white rounded-2xl text-black w-[5rem] h-[2rem] ">Buy Now</button>
                    </div>
                </div>

                <div className="w-[70%] h-[40%] rounded-2xl border-2 border-gray flex  justify-center gap-2  ">
                    <div className="  w-[40%] flex justify-center  items-center">
                         <Image src="/images/pic21.png" alt="#" width={80} height={50} className="scale-[1.75] "/>
                    </div>
                   
                    <div className=" w-[60%] h-full m-4 flex flex-col">
                        <h3 className="text-white bold">Monterey cypress</h3>
                        <p className="text-sm text-right text-gray-200">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo praesentium reiciendis, ip  </p>
                        <p className="texxt-2xl  text-right ">Rs 199/-</p>
                    
                   <button className="bg-white rounded-2xl text-black w-[5rem] h-[2rem] ">Buy Now</button>
                    </div>
                </div>

                <div className="w-[70%] h-[40%] rounded-2xl border-2 border-gray flex  justify-center gap-2  ">
                    <div className="  w-[40%] flex justify-center  items-center">
                         <Image src="/images/pic31.png" alt="#" width={80} height={50} className="scale-[1.75] "/>
                    </div>
                   
                    <div className=" w-[60%] h-full m-4 flex flex-col">
                        <h3 className="text-white bold">Dwarf umbrella</h3>
                         <p className="text-sm text-right text-gray-200">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo praesentium reiciendis, ip  </p>
                     <p className="texxt-2xl  text-right ">Rs 199/-</p>
                   <button className="bg-white rounded-2xl text-black w-[5rem] h-[2rem] ">Buy Now</button>
                    </div>
                </div>
                
            </div>
            </div>

            {/* 2 */}
            <div className="w-full h-10 flex flex-col text-green ">
             <h2 className="text-2xl text-green text-center">SPECIAL SELECTIONS</h2>

            <div className=" flex flex-col gap-8 p-4 m-8 justify-center items-center">
              <div className="w-[70%] h-[40%] rounded-2xl border-2 border-gray flex  justify-center gap-2  ">
                    <div className="  w-[40%] flex justify-center  items-center">
                         <Image src="/images/pic12.png" alt="#" width={80} height={50} className="scale-[1.75] "/>
                    </div>
                   
                    <div className=" w-[60%] h-full m-4 flex flex-col">
                        <h3 className="text-white bold">Fiddle leaf-fig</h3>
                          <p className="text-sm text-right text-gray-200">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo praesentium reiciendis, ip  </p>
                     <p className="texxt-2xl  text-right ">Rs 199/-</p>
                   <button className="bg-white rounded-2xl text-black w-[5rem] h-[2rem] ">Buy Now</button>
                    </div>
                </div>

                <div className="w-[70%] h-[40%] rounded-2xl border-2 border-gray flex  justify-center gap-2  ">
                    <div className="  w-[40%] flex justify-center  items-center">
                         <Image src="/images/pic22.png" alt="#" width={80} height={50} className="scale-[1.75] "/>
                    </div>
                   
                    <div className=" w-[60%] h-full m-4 flex flex-col">
                        <h3 className="text-white bold">Bird of paradise</h3>
                          <p className="text-sm text-right text-gray-200">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo praesentium reiciendis, ip  </p>
                    <p className="texxt-2xl  text-right ">Rs 199/-</p>
                   <button className="bg-white rounded-2xl text-black w-[5rem] h-[2rem] ">Buy Now</button>
                    </div>
                </div>

                <div className="w-[70%] h-[40%] rounded-2xl border-2 border-gray flex  justify-center gap-2  ">
                    <div className="  w-[40%] flex justify-center  items-center">
                         <Image src="/images/pic32.png" alt="#" width={80} height={50} className="scale-[1.75] "/>
                    </div>
                   
                    <div className=" w-[60%] h-full m-4 flex flex-col">
                        <h3 className="text-white bold">Dragon tree</h3>
                        <p className="text-sm text-right text-gray-200">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo praesentium reiciendis, ip  </p>
                     <p className="texxt-2xl  text-right ">Rs 199/-</p>
                   <button className="bg-white rounded-2xl text-black w-[5rem] h-[2rem] ">Buy Now</button>
                    </div>
                </div>
            </div>
            </div>

{/* 3 */}
           <div className="w-full h-10 flex flex-col text-green ">
             <h2 className="text-2xl text-green text-center">DECOR ITEM</h2>

            <div className=" p-4 m-8 flex flex-col gap-8 justify-center items-center">
                <div className="w-[70%] h-[40%] rounded-2xl border-2 border-gray flex  justify-center gap-2  ">
                    <div className="  w-[40%] flex justify-center  items-center">
                         <Image src="/images/pic13.png" alt="#" width={80} height={50} className="scale-[1.75] "/>
                    </div>
                   
                    <div className=" w-[60%] h-full m-4 flex flex-col">
                        <h3 className="text-white bold">Succulent combo</h3>
                         <p className="text-sm text-right text-gray-200">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo praesentium reiciendis, ip  </p>
                    <p className="texxt-2xl  text-right ">Rs 199/-</p>
                   <button className="bg-white rounded-2xl text-black w-[5rem] h-[2rem] ">Buy Now</button>
                    </div>
                </div>

                <div className="w-[70%] h-[40%] rounded-2xl border-2 border-gray flex  justify-center gap-2  ">
                    <div className="  w-[40%] flex justify-center  items-center">
                         <Image src="/images/pic23.png" alt="#" width={80} height={50} className="scale-[1.75] "/>
                    </div>
                   
                    <div className=" w-[60%] h-full m-4 flex flex-col">
                        <h3 className="text-white bold">Algaonema red</h3>
                          <p className="text-sm text-right text-gray-200">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo praesentium reiciendis, ip  </p>
                     <p className="texxt-2xl  text-right ">Rs 199/-</p>
                   <button className="bg-white rounded-2xl text-black w-[5rem] h-[2rem] ">Buy Now</button>
                    </div>
                </div>

                <div className="w-[70%] h-[40%] rounded-2xl border-2 border-gray flex  justify-center gap-2  ">
                    <div className="  w-[40%] flex justify-center  items-center">
                         <Image src="/images/pic33.png" alt="#" width={80} height={50} className="scale-[1.75] "/>
                    </div>
                   
                    <div className=" w-[60%] h-full m-4 flex flex-col">
                        <h3 className="text-white bold">Fittonia</h3>
                        <p className="text-sm text-right text-gray-200">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo praesentium reiciendis, ip  </p>
                         <p className="texxt-2xl  text-right ">Rs 199/-</p>
                   <button className="bg-white rounded-2xl text-black w-[5rem] h-[2rem] ">Buy Now</button>
                    </div>
                </div>
            </div>
            
            </div>

        </div>
        </div>
      </>
    )
}

export default Home