"use client";

import { useState } from "react";
import ProductCard from "@/components/card_widgets/ProductCard";
import { productsCard } from "@/utils/textUtils";

export default function Products() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", "Chocolate", "Dream Cake", "Gift Hamper"];

  const filteredProducts =
    selectedCategory === "All"
      ? productsCard
      : productsCard.filter((card) => card.category === selectedCategory);

  return (
    <div className="flex flex-col items-center bg-[#fcecdb] py-10">
      <div className="w-[90%] m-auto">
        <h1 className="md:mb-10 mb-6 md:text-4xl text-3xl font-semibold text-[#713f12]">
          Products
        </h1>

        {/* Filter Buttons */}
        <div className="flex gap-4 mb-6">
          {categories.map((category) => (
            <button
              key={category}
              className={`px-3 md:px-4 md:py-2 rounded-md font-semibold ${
                selectedCategory === category
                  ? "bg-[#713f12] text-white"
                  : "bg-[#f5deb3] text-[#713f12] hover:bg-[#e5c28f]"
              }`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <div className="grid lg:grid-cols-5 grid-cols-2 gap-4 md:grid-cols-4 md:gap-6 rounded-md">
          {filteredProducts.map((card) => (
            <ProductCard
              key={card.slug}
              slug={card.slug}
              category={card.category}
              title={card.title}
              image={card.image}
              isBestSeller={card.isBestSeller}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
