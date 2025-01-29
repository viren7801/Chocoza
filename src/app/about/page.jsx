import cartoonImg from "@/images/cartoon.png";
import Image from "next/image";

export default function AboutUs() {
  return (
    <div className="px-8 sm:px-32 py-10 bg-[#faf3e4]">
      {/* Our Story Section */}
      <section className="flex flex-col sm:flex-row justify-center items-center h-screen space-y-10 sm:space-y-0">
        {/* Left: Image Section */}
        <div className="w-full sm:w-1/2 flex justify-center">
          <Image
            src={cartoonImg}
            alt="cartoon-image"
            className="rounded-2xl shadow-lg"
            width={500}
            height={500}
          />
        </div>

        {/* Right: Text Section */}
        <div className="w-full sm:w-1/2 space-y-6">
          <h1 className="text-[#713f12] text-4xl font-semibold text-center sm:text-left">
            Our Story
          </h1>
          <p className="text-[#a16207] text-lg sm:text-xl leading-relaxed">
            Chocoza began as a simple homemade venture fueled by a passion for
            creating delightful chocolates and cupcakes. With a love for
            crafting unique treats, we’ve grown into a brand cherished by many.
            From our kitchen to your homes, we’ve been on a journey to make
            every celebration sweeter with creations like our iconic Chocoblast
            and Strawberry Vanilla Dream Cake. Now, we’re taking the next step –
            opening our very first outlets to bring Chocoza closer to you!
          </p>
        </div>
      </section>

      {/* Mission and Vision Section */}
      <section className="py-20">
        <div className="text-center mb-10">
          <h1 className="text-[#713f12] text-4xl font-semibold">
            Our Mission and Vision
          </h1>
        </div>
        <div className="space-y-16">
          {/* Mission */}
          <div className="space-y-4">
            <h2 className="text-[#713f12] text-2xl font-semibold text-center">
              Our Mission
            </h2>
            <p className="text-[#a16207] text-lg sm:text-xl leading-relaxed text-center sm:text-justify">
              At Chocoza, our mission is to spread happiness through the art of
              crafting chocolates and cupcakes. We believe that desserts are
              more than just sweet treats—they are expressions of joy, love, and
              togetherness. With this belief, we are committed to creating
              products that not only taste exceptional but also bring a sense of
              warmth and delight to every occasion.
              <br />
              We take pride in using high-quality ingredients and combining them
              with creativity and passion to craft unique and memorable flavors.
              Whether it’s a cozy celebration at home or a grand event, we want
              to be the brand you trust to make your moments extra special.
            </p>
          </div>

          {/* Vision */}
          <div className="space-y-4">
            <h2 className="text-[#713f12] text-2xl font-semibold text-center">
              Our Vision
            </h2>
            <p className="text-[#a16207] text-lg sm:text-xl leading-relaxed text-center sm:text-justify">
              Our vision is to grow Chocoza into a household name synonymous
              with excellence in chocolates and cupcakes. While we’ve started as
              a homemade business, we dream of becoming a brand with a strong
              presence, both locally and beyond.
              <br />
              We envision opening outlets that reflect the essence of
              Chocoza—welcoming, warm, and full of delicious creations. With
              these outlets, we aim to create spaces where customers can not
              only purchase their favorite treats but also experience the joy
              and creativity behind our brand. As we expand, we remain dedicated
              to maintaining the personal touch and quality that have defined
              Chocoza from the beginning.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
