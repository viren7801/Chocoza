import Image from "next/image";
import { notFound } from "next/navigation";
import { productsCard } from "@/utils/textUtils";

export default function ProductDetail({ params }) {
  const product = productsCard.find((p) => p.slug === params.slug);

  if (!product) return notFound(); // Show 404 if product not found

  const phoneNumber = "+919409664446";
  const message = `I want to buy the ${product.title} from Chocoza!`;
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#fcecdb] py-10 px-4">
      <div className="w-[90%] md:w-3/4 bg-white p-6 rounded-lg shadow-lg flex flex-col md:flex-row gap-8">
        {/* Left Side - Product Image */}
        <div className="w-full md:w-1/2">
          <Image
            src={product.image}
            alt={product.title}
            width={500}
            height={500}
            className="rounded-lg object-cover w-full h-auto"
            priority
          />
        </div>

        {/* Right Side - Product Details */}
        <div className="w-full md:w-1/2 flex flex-col justify-center">
          <h1 className="text-3xl font-bold text-[#713f12] mb-4">
            {product.title}
          </h1>
          <p className="text-gray-700 text-lg">{product.category}</p>

          {/* Description */}
          <p className="mt-4 text-gray-600">{product.description}</p>

          {/* Best Seller Tag */}
          {product.isBestSeller && (
            <span className="mt-2 text-xs bg-yellow-400 px-2 py-1 rounded-full inline-block">
              Best Seller
            </span>
          )}

          {/* WhatsApp Button */}
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 px-6 py-3 text-white bg-[#713f12] rounded-lg hover:bg-[#a75c32] transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#713f12] text-center w-full md:w-auto"
          >
            Buy Now
          </a>
        </div>
      </div>
    </div>
  );
}
