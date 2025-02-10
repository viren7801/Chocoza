import ProductCard from "@/components/card_widgets/ProductCard";
import { productsCard } from "@/utils/textUtils";

export default function Products() {
  return (
    <div className="flex flex-col items-center bg-[#fcecdb] py-10">
      <div className="w-[90%] m-auto">
        <h1 className="md:mb-10 mb-6 md:text-4xl text-3xl font-semibold text-[#713f12]">
          Products
        </h1>
        <div className="grid lg:grid-cols-5 grid-cols-2 gap-4 md:grid-cols-4 md:gap-6 rounded-md">
          {productsCard.map((card) => (
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
