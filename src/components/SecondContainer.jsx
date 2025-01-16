import Image from "next/image";
import cartoonImg from "../public/Images/cartoon.png";

export default function SecondContainer() {
  return (
    <>
      <div>
        <h1 className="text-8xl text-center mb-10 animate-pulse">Taste The Magic!</h1>
      </div>
      
      <div className="flex justify-center items-center space-x-10">
      
        <div className="w-1/2">
          <div>
            <h1 className="text-[#713f12] text-2xl">CRAFTED TO PERFECTION</h1>
            <h2 className="text-[#a16207]">
              Every Chocoza creation is a masterpiece, blending premium ingredients with meticulous care to deliver an unforgettable experience.
            </h2>
          </div>
          <div>
            <h1 className="text-[#713f12] text-2xl">FROM OUR KITCHEN TO YOUR HEART</h1>
            <h2 className="text-[#a16207]">
              We believe in spreading joy through the irresistible taste of our chocolates, cakes, and cupcakes, made with love for every occasion.
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
          <div>
            <h1 className="text-[#713f12] text-2xl">FLAVORS THAT TELL A STORY</h1>
            <h2 className="text-[#a16207]">
              Each bite of Chocoza is a journey of flavors, crafted with inspiration, passion, and a dash of magic.
            </h2>
          </div>
          <div>
            <h1 className="text-[#713f12] text-2xl">YOUR MOMENT, OUR TREASURE</h1>
            <h2 className="text-[#a16207]">
              Whether it’s a birthday, celebration, or a sweet craving, Chocoza adds a special touch to your cherished moments.
            </h2>
          </div>
        </div>
      </div>
    </>
  );
}
