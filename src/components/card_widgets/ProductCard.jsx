import Image from "next/image";

export default function ProductCard({ category, title, image, isBestSeller }) {
  const phoneNumber = "9409664446";
  const predefinedMessage = `I want to buy the ${title} from Chocoza!`;
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    predefinedMessage
  )}`;

  return (
    <div className="flex flex-col bg-white rounded-lg shadow-lg overflow-hidden relative">
      <div className="w-full h-auto relative">
        {image ? (
          <Image
            src={image}
            alt={`Image of ${title}`}
            width={300}
            height={300}
            className="bg-[#f4ebe5] object-cover"
            priority
          />
        ) : (
          <div className="bg-[#f4ebe5] w-full h-[300px] flex items-center justify-center text-gray-500">
            No Image Available
          </div>
        )}
        {/* Conditionally render 'Best Seller' tag */}
        {isBestSeller && (
          <div className="absolute top-2 left-2 bg-[#713f12] text-white text-xs font-semibold px-2 py-1 rounded-lg shadow-lg">
            Best Seller
          </div>
        )}
      </div>
      <div className="flex flex-col p-4 bg-[#ede0d4] text-[#713f12] rounded-b-lg h-full">
        <span className="block text-sm opacity-75">{category}</span>
        <h2 className="mt-1 font-semibold md:text-xl">{title}</h2>
        <div className="mt-4 flex justify-between items-center">
          {/* Button opens WhatsApp message */}
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2 text-white bg-[#713f12] rounded-lg hover:bg-[#a75c32] transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#713f12]"
          >
            Buy Now
          </a>
        </div>
      </div>
    </div>
  );
}
