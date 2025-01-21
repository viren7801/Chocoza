import Image from "next/image";
import logo from "../images/logo.png";

export default function Footer() {
  return (
    <footer className="bg-[#e6ccb2] text-white py-10">
      <div className="flex flex-col items-center">
        <div className="mb-6">
          <Image src={logo} alt="Logo" width={150} height={50} />
        </div>
        <div className="flex space-x-6 mb-6">
          <a
            href="#"
            className="text-[#7f5539] hover:text-[#5d3f2f] transition-colors"
          >
            Home
          </a>
          <a
            href="#"
            className="text-[#7f5539] hover:text-[#5d3f2f] transition-colors"
          >
            About Us
          </a>
          <a
            href="#"
            className="text-[#7f5539] hover:text-[#5d3f2f] transition-colors"
          >
            Contact
          </a>
        </div>
      </div>
      <div className="text-center text-sm">
        <p>&copy; {new Date().getFullYear()} Chocoza. All Rights Reserved.</p>
      </div>
    </footer>
  );
}
