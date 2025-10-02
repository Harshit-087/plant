import React from 'react'
import Image from "next/image"
import Hero4 from './hero4'

const Hero3 = () => {
  return (
    <>
    <div className=" w-screen h-[20%] flex justify-evenly gap-2  items-center  ">
         <div className="border-white  border-b-2 w-64 "></div>
         <h1 className="text-6xl text-center whitespace-nowrap">why choose greenspire</h1>
         <div className="border-white  border-b-2 w-64 "></div>
        </div>

        <div className=' w-screen mt-24 '>
           <h2 className='font-bold text-center text-2xl'>&quot;More Than Just a Plant Store&quot;</h2>
           <p className='mx-28 text-center text-xl xl:text-[1rem]'>At Greenspire, we are not just about selling plants-we are about creating a greener future.Our mission is to make plants accessible to everyone while promoting sustainability and community involvement. </p>
        </div>

        <div className='grid grid-cols-4 w-screen h-[32rem]  mb-16 p-12 xl:w-[80rem] xl:mx-auto'>
            <div className='w-[14rem] h-[25rem] xl:w-[16rem]  m-4 relative top-0 left-0 rounded-[2rem]  gap-3 flex flex-col  bg-[radial-gradient(ellipse_at_center,_#D2FFC3,_#142518)] text-black   '>
              <div className='w-full h-10  absolute top-0 flex justify-center'>
          <Image src="/images/Eco.png" alt="#" width={50} height={10} className='absolute -top-6   scale-[1.5] '/>
              </div>

                  <div className='flex flex-col    gap-3 justify-center items-center  absolute top-10 pl-3 pr-3 '>
                <h2 className='h-10 w-full font-bold text-center text-2xl'>Eco-friendly mission</h2>
                <p className='h-full p-5 text-sm xl:text-[1rem]' >We believe in giving back to nature. That&apos;s why we provide free plants to encourage people to adopt greener lifestyles. Whether you want to improve air quality, enhance your home decor, or contribute to a healthier planet — Greenspire makes it easy.     </p>
            </div>
          

            </div>
            
            <div className='w-[14rem] h-[25rem] xl:w-[16rem] m-4 relative top-0 left-0 rounded-[2rem]  gap-3 flex flex-col bg-[radial-gradient(ellipse_at_center,_#D2FFC3,_#142518)]   text-black'>
               <div className='w-full h-10  absolute top-0 flex justify-center'>
          <Image src="/images/discount.png" alt="#" width={50} height={10} className='absolute -top-6   scale-[1.5] '/>
              </div>

                <div className='flex flex-col gap-3 justify-center items-center  absolute top-10 pl-3 pr-3  '>
                <h2 className='h-10 w-full font-bold text-center text-2xl'>Affordable pricing</h2>
                <p className='h-full  p-5 text-sm xl:text-[1rem]'>We ensure that our premium plants are more affordable than other marketplaces. By working directly with nurseries, we cut down unnecessary costs, passing the savings on to you.</p>
            </div>
           </div>

            <div className='w-[14rem] h-[25rem] xl:w-[16rem] m-4 relative top-0 left-0 rounded-[2rem]   gap-3 flex flex-col    bg-[radial-gradient(ellipse_at_center,_#D2FFC3,_#142518)] text-black '>
              <div className='w-full h-10  absolute top-0 flex justify-center'>
          <Image src="/images/verify.png" alt="#" width={50} height={10} className='absolute -top-6   scale-[1.5] '/>
              </div>
            
                <div className=' flex flex-col  gap-3 justify-center items-center absolute top-10 pl-3 pr-3 '>
                <h2 className='h-10 w-full text-center font-bold text-2xl'>Verified nurseries</h2>
                <p className='h-full p-5 text-sm xl:text-[1rem]'>We partner only with trusted and high-quality suppliers. Every plant you buy comes from experienced nurseries that follow ethical and sustainable practices. </p>
            </div>

            </div>
           <div className=' w-[14rem] h-[25rem] xl:w-[16rem] m-4 relative top-0 left-0 rounded-[2rem]  gap-3 flex flex-col  bg-[radial-gradient(ellipse_at_center,_#D2FFC3,_#142518)] text-black'>
                <div className='w-full h-10  absolute top-0 flex justify-center'>
          <Image src="/images/money.png" alt="#" width={50} height={10} className='absolute -top-6   scale-[1.5] '/>
              </div>

                <div className=' flex flex-col gap-3 justify-center items-center  absolute top-10 pl-3 pr-3 '>
                <h2 className='h-10 w-full font-bold text-2xl text-center '>Donation program</h2>
                <p className='h-full p-5 text-sm xl:text-[1rem]'>Want to support the movement? You can donate to help us distribute more free plants to schools, NGOs, and underprivileged communities. Even a small contribution can make a big difference in greening the world!  </p>
            </div>
            </div>

            
        </div>
        <Hero4/>
    </>
  )
}

export default Hero3