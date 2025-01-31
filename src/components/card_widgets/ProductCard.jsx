import Image from "next/image";

export default function ProductCard({ category, title, image }) {
  return (
    <div className="flex flex-col bg-white rounded-lg shadow-lg">
      <div className="w-[100%] h-[auto]">
        <Image src={image} alt={title} />
      </div>
      <div className="flex flex-col p-4 bg-[#ede0d4] text-[#713f12] rounded-b-lg h-[100%]">
        <span className="block text-sm opacity-75">{category}</span>
        <h2 className="mt-1 font-semibold md:text-xl">{title}</h2>
      </div>
    </div>
  );
}
