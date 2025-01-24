import Image from "next/image";
import cartoonImg from "../images/cartoon.png";
import Cards_widget from "./Cards_widget";
import { cardData } from "@/utils/CardData";

export default function SecondContainer() {
  return (
    <>
      <div>
        <h1 className="text-8xl text-center my-10 animate-pulse text-[#774936] ">
          Taste The Magic!
        </h1>
      </div>

      <div className="flex justify-center items-center space-x-10 mx-20 my-10">
        <div className="w-1/2">
          <div className="mb-10">
            <h1 className="text-[#713f12] text-2xl">CRAFTED TO PERFECTION</h1>
            <h2 className="text-[#a16207]">
              Every Chocoza creation is a masterpiece, blending premium
              ingredients with meticulous care to deliver an unforgettable
              experience.
            </h2>
          </div>
          <div>
            <h1 className="text-[#713f12] text-2xl">
              FROM OUR KITCHEN TO YOUR HEART
            </h1>
            <h2 className="text-[#a16207]">
              We believe in spreading joy through the irresistible taste of our
              chocolates, cakes, and cupcakes, made with love for every
              occasion.
            </h2>
          </div>
        </div>

        <div className="w-[80vh]">
          <Image
            src={cartoonImg}
            alt="cartoon-image"
            className="w-full m-auto"
          />
        </div>

        <div className="w-1/2">
          <div className="mb-10">
            <h1 className="text-[#713f12] text-2xl">
              FLAVORS THAT TELL A STORY
            </h1>
            <h2 className="text-[#a16207]">
              Each bite of Chocoza is a journey of flavors, crafted with
              inspiration, passion, and a dash of magic.
            </h2>
          </div>
          <div>
            <h1 className="text-[#713f12] text-2xl">
              YOUR MOMENT, OUR TREASURE
            </h1>
            <h2 className="text-[#a16207]">
              Whether it’s a birthday, celebration, or a sweet craving, Chocoza
              adds a special touch to your cherished moments.
            </h2>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center h-[90vh] bg-[#e6ccb2]">
        <h1 className="my-10 text-5xl text-[#713f12]">Top Picks</h1>
        <div className="flex flex-wrap justify-center bg-orange-50 rounded-md p-10">
          {/* Map through cardData and render CardsWidget */}
          {cardData.map((card, index) => (
            <Cards_widget
              key={index}
              category={card.category}
              title={card.title}
              image={card.image}
            />
          ))}
        </div>
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-between mx-4 sm:mx-20 py-10 h-screen">
        {/* Left: Text Section */}
        <div className="w-full sm:w-1/2 text-center sm:text-left mb-8 sm:mb-0 max-w-[50%]">
          <h1 className="text-[#713f12] text-3xl font-semibold">
            Exclusive Hampers for Unforgettable Moments!
          </h1>
          <h2 className="text-[#a16207] text-lg sm:text-xl ">
            Packed with care, love, and all your favorites, our special gift
            hampers are perfect for creating memories.
          </h2>
        </div>

        {/* Right: Image Section */}
        <div className="w-full sm:w-1/2 flex justify-end">
          <Image
            src={cartoonImg}
            alt="cartoon-image"
            className="w-full sm:max-w-[600px] max-w-[500px]"
            width={500}
            height={500}
          />
        </div>
      </div>

      {/* Second Section: Image on Left, Text on Right */}
      <div className="flex flex-col sm:flex-row justify-center items-center sm:mx-20 py-10 h-screen">
        {/* Left: Image Section */}
        <div className="w-full sm:w-1/2 flex justify-start mb-8 sm:mb-0">
          <Image
            src={cartoonImg}
            alt="cartoon-image"
            className="w-full sm:max-w-[600px] max-w-[500px]"
            width={500}
            height={500}
          />
        </div>

        {/* Right: Text Section */}
        <div className="w-full sm:w-1/2 text-center sm:text-left max-w-[50%]">
          <h1 className="text-[#713f12] text-3xl font-semibold">
            Exclusive Hampers for Unforgettable Moments!
          </h1>
          <h2 className="text-[#a16207] text-lg sm:text-xl">
            Packed with care, love, and all your favorites, our special gift
            hampers are perfect for creating memories.
          </h2>
        </div>
      </div>
    </>
  );
}
