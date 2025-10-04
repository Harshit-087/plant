import React from "react"
import Image from "next/image"
import Hero4 from "./hero4"

const Hero3 = () => {
  return (
    <>
      {/* Heading */}
      <div className="w-screen h-[20%] flex justify-evenly gap-2 items-center mt-24">
        <div className="border-white border-b-2 w-24 sm:w-48 md:w-64" />
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-center whitespace-nowrap" style={{fontFamily:'Galins'}}>
          why choose greenspire
        </h1>
        <div className="border-white border-b-2 w-24 sm:w-48 md:w-64" />
      </div>

      {/* Subheading */}
      <div className="w-screen mt-16 px-4 sm:px-8 md:px-16">
        <h2 className="font-bold text-center text-lg sm:text-xl md:text-2xl">
          &quot;More Than Just a Plant Store&quot;
        </h2>
        <p className="mt-2 text-center text-sm sm:text-base md:text-lg lg:text-xl max-w-5xl mx-auto">
          At Greenspire, we are not just about selling plants — we are about creating a greener future. 
          Our mission is to make plants accessible to everyone while promoting sustainability and 
          community involvement.
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mt-16 mb-16 p-6 md:p-12 max-w-[80rem] mx-auto">
        {[
          {
            title: "Eco-friendly mission",
            img: "/images/Eco.png",
            text: "We believe in giving back to nature. That's why we provide free plants to encourage people to adopt greener lifestyles. Whether you want to improve air quality, enhance your home decor, or contribute to a healthier planet — Greenspire makes it easy.",
          },
          {
            title: "Affordable pricing",
            img: "/images/discount.png",
            text: "We ensure that our premium plants are more affordable than other marketplaces. By working directly with nurseries, we cut down unnecessary costs, passing the savings on to you.",
          },
          {
            title: "Verified nurseries",
            img: "/images/verify.png",
            text: "We partner only with trusted and high-quality suppliers. Every plant you buy comes from experienced nurseries that follow ethical and sustainable practices.",
          },
          {
            title: "Donation program",
            img: "/images/money.png",
            text: "Want to support the movement? You can donate to help us distribute more free plants to schools, NGOs, and underprivileged communities. Even a small contribution can make a big difference in greening the world!",
          },
        ].map((card, idx) => (
          <div
            key={idx}
            className="relative w-full max-sm:w-[20rem] sm:w-[20rem] lg:w-[16rem] h-[28rem] m-auto rounded-[2rem] bg-[radial-gradient(ellipse_at_center,_#D2FFC3,_#142518)] text-black flex flex-col items-center"
          >
            {/* Icon */}
            <div className="w-full flex justify-center absolute -top-6">
              <Image
                src={card.img}
                alt={card.title}
                width={50}
                height={50}
                className="scale-[1.5]"
              />
            </div>

            {/* Content */}
            <div className="flex flex-col gap-3 justify-start items-center mt-12 px-5">
              <h2 className="font-bold text-xl sm:text-2xl text-center whitespace-nowrap">{card.title}</h2>
              <p className="text-base sm:text-lg md:text-xl lg:text-xl text-center">
                {card.text}
              </p>
            </div>
          </div>
        ))}
      </div>

      <Hero4 />
    </>
  )
}

export default Hero3
