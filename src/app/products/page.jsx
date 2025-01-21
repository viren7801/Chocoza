import CardsWidget from "@/components/Cards_widget";
import { productsCard } from "@/utils/CardData";

export default function Products({ category, title, image }) {
  return (
    <>
      <div className="flex flex-col items-center bg-[#e6ccb2]">
        <h1 className="my-10 text-5xl text-[#713f12]">Top Picks</h1>
        <div className="flex flex-wrap justify-center bg-orange-50 rounded-md p-10">
          {/* Map through cardData and render CardsWidget */}
          {productsCard.map((card, index) => (
            <CardsWidget
              key={index}
              category={card.category}
              title={card.title}
              image={card.image}
            />
          ))}
        </div>
      </div>
    </>
  );
}
