import Image from "next/image";

export default function ProductCard({ category, title, image }) {
  // Replace these with your actual WhatsApp number and message
  const phoneNumber = "9409664446"; // Replace with your WhatsApp number
  const predefinedMessage = `I want to buy the ${title} from Chocoza!`; // Customize the message

  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    predefinedMessage
  )}`;

  return (
    <div className="flex flex-col bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="w-full h-auto">
        <Image src={image} alt={title} className="bg-[#f4ebe5]" />
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
