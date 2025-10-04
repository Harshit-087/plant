import React from "react"
import Image from "next/image"
import Hero3 from "./hero3"

const Hero2 = () => {
  return (
    <>
      {/* Heading */}
      <div className="w-screen h-4 flex justify-evenly gap-2 items-center mt-24">
        <div className="border-white border-b-2 w-24 sm:w-48 md:w-72 lg:w-96" />
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-center whitespace-nowrap" style={{fontFamily:'Galins'}}>
          How to train your free plant
        </h1>
        <div className="border-white border-b-2 w-24 sm:w-48 md:w-72 lg:w-96" />
      </div>

      {/* Content Section */}
      <div className="w-full mt-16 px-4">
        <div className="max-lg:w-[40rem] lg:w-[60rem] mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 bg-[radial-gradient(circle_at_right,_#142518_12%,_#324733_40%,_#72916D_50%,_#8FB287_60%,#D2FFC3_100%)] rounded-[2rem] sm:rounded-[4rem] lg:rounded-[3rem] p-6 sm:p-10 md:p-12 relative overflow-hidden">
          
          {/* Steps */}
          <div className="flex flex-col gap-6 text-black">
            {[
              {
                num: "01.",
                title: "Sign up with your mobile number",
                points: [
                  "Register on Greenspire using your mobile number & OTP Verification.",
                  "This ensures a fair and limited distribution of free plants.",
                ],
              },
              {
                num: "02.",
                title: "Browse & Choose Your Plant",
                points: [
                  "Select from the available free plants in your region.",
                  "Only 3 plants per user to ensure fair distribution.",
                ],
              },
              {
                num: "03.",
                title: "Book a Pickup Slot",
                points: [
                  "Choose a nearby partner nursery for collection.",
                  "Pick a date & time that suits you.",
                ],
              },
              {
                num: "04.",
                title: "Visit & Collect Your Plant",
                points: [
                  "Show your confirmation code at the nursery.",
                  "Take home your new green buddy!",
                ],
              },
              {
                num: "05.",
                title: "Help Us Grow the Green Movement!",
                points: [
                  "If you loved the initiative, support us in any way you like.",
                  "Buy a premium plant, donate a little, or just spread the word!",
                ],
              },
            ].map((step, i) => (
              <div key={i} className="text-base sm:text-lg font-bold flex">
                <span className="rounded-full w-8 h-8 sm:w-9 sm:h-9 my-auto bg-black text-white flex justify-center items-center p-1">
                  {step.num}
                </span>
                <span className="w-full font-bold pl-4 sm:pl-6 whitespace-nowrap">
                  {step.title}
                  <ul className="list-disc font-normal text-sm sm:text-base mt-1">
                    {step.points.map((p, idx) => (
                      <li key={idx} className="whitespace-nowrap">{p}</li>
                    ))}
                  </ul>
                </span>
              </div>
            ))}
          </div>

          {/* Image */}
          <div className="flex justify-center items-center relative ">
            <Image
              src="/images/plant2.png"
              alt="Plant"
              width={600}
              height={400}
              className="w-64 max-lg:hidden md:w-[24rem] lg:w-[28rem] xl:w-[32rem] scale-90 md:scale-125"
            />
          </div>
        </div>
      </div>

      <Hero3 />
    </>
  )
}

export default Hero2
