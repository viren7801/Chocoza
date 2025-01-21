import cartoonImg from "@/images/cartoon.png";
import Image from "next/image";

export default function AboutUs() {
  return (
    <>
      <div className="px-32">
        <div className="flex flex-col sm:flex-row justify-center items-center  h-screen">
          {/* Left: Image Section */}
          <div className="w-full sm:w-1/2 flex justify-start mb-8 sm:mb-0">
            <Image
              src={cartoonImg}
              alt="cartoon-image"
              className="w-full sm:max-w-[500px] max-w-[500px] m-auto"
              width={500}
              height={500}
            />
          </div>

          {/* Right: Text Section */}
          <div className="w-full sm:w-1/2 text-center sm:text-left">
            <h1 className="text-[#713f12] text-3xl font-semibold">Our Story</h1>
            <h2 className="text-[#a16207] text-lg sm:text-xl">
              Chocoza began as a simple homemade venture fueled by a passion for
              creating delightful chocolates and cupcakes. With a love for
              crafting unique treats, we’ve grown into a brand cherished by
              many. From our kitchen to your homes, we’ve been on a journey to
              make every celebration sweeter with creations like our iconic
              Chocoblast and Strawberry Vanilla Dream Cake. Now, we’re taking
              the next step – opening our very first outlets to bring Chocoza
              closer to you!
            </h2>
          </div>
        </div>
        <div className="mb-10">
          <h1 className="text-3xl text-center text-[#713f12] font-semibold mb-5">
            Our Mission and Vision
          </h1>
          <h2 className=" text-[#a16207] text-lg sm:text-xl">
            At Chocoza, our mission is to spread happiness through the art of
            crafting chocolates and cupcakes. We believe that desserts are more
            than just sweet treats—they are expressions of joy, love, and
            togetherness. With this belief, we are committed to creating
            products that not only taste exceptional but also bring a sense of
            warmth and delight to every occasion.
            <br /> We take pride in using high-quality ingredients and combining
            them with creativity and passion to craft unique and memorable
            flavors. Whether it’s a cozy celebration at home or a grand event,
            we want to be the brand you trust to make your moments extra
            special.
          </h2>
          <h2 className="text-[#a16207] text-lg sm:text-xl">
            Our vision is to grow Chocoza into a household name synonymous with
            excellence in chocolates and cupcakes. While we’ve started as a
            homemade business, we dream of becoming a brand with a strong
            presence, both locally and beyond.
            <br /> We envision opening outlets that reflect the essence of
            Chocoza—welcoming, warm, and full of delicious creations. With these
            outlets, we aim to create spaces where customers can not only
            purchase their favorite treats but also experience the joy and
            creativity behind our brand. As we expand, we remain dedicated to
            maintaining the personal touch and quality that have defined Chocoza
            from the beginning.
          </h2>
        </div>
      </div>
    </>
  );
}
