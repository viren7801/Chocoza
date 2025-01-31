import Image from "next/image";

export default function CardsWidget({ category, title, image }) {
  return (
    <div className="m-4 relative overflow-hidden bg-white rounded-lg shadow-lg max-w-xs">
      {/* Decorative Background SVG */}
      <svg
        className="absolute bottom-0 left-0"
        viewBox="0 0 375 283"
        fill="none"
        style={{ transform: "scale(1.2)", opacity: 0.1 }}
      >
        <rect
          x="159.52"
          y="175"
          width="152"
          height="152"
          rx="8"
          transform="rotate(-45 159.52 175)"
          fill="white"
        />
        <rect
          y="107.48"
          width="152"
          height="152"
          rx="8"
          transform="rotate(-45 0 107.48)"
          fill="white"
        />
      </svg>

      {/* Image Section */}
      <div className="relative flex items-center justify-center overflow-hidden h-48 bg-[#f4ebe5]">
        <Image
          src={image}
          alt={title}
          width={200}
          height={300}
          className="object-contain" // Ensures the image fits without distortion
        />
      </div>

      {/* Text Section */}
      <div className="relative p-4 bg-[#ede0d4] text-[#713f12]">
        <span className="block text-sm opacity-75">{category}</span>
        <h2 className="mt-1 font-semibold text-xl">{title}</h2>
      </div>
    </div>
  );
}
// export default function CardsWidget({ category, title, image }) {
//   return (
//     <div className="flex flex-col bg-white rounded-lg shadow-lg">
//       <div className="w-[100%] h-[auto]">
//         <Image src={image} alt={title} />
//       </div>
//       <div className="flex flex-col p-4 bg-[#ede0d4] text-[#713f12] rounded-b-lg h-[100%]">
//         <span className="block text-sm opacity-75">{category}</span>
//         <h2 className="mt-1 font-semibold md:text-xl">{title}</h2>
//       </div>
//     </div>
//   );
// }
