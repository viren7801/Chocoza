import Image from "next/image";
import logo from "../images/logo.png";
import Link from "next/link";
import { navlinks } from "@/utils/textUtils";

export default function Navbar() {
  return (
    <div className="bg-[#e6ccb2] fixed top-0 left-0 w-full z-50">
      <div className="flex items-center justify-between w-[90%] m-auto">
        <div className="justify-center flex">
          <Link href="/" aria-label="Go to homepage">
            <Image
              src={logo}
              alt="Logo"
              className="w-[100px] h-auto cursor-pointer"
              priority
            />
          </Link>
        </div>
        <div className="flex gap-4">
          {navlinks.map((link) => (
            <Link
              key={link._id}
              href={link.path}
              className="text-base font-medium text-[#7f5539] hover:text-[#5d3f2f] transition-colors"
              aria-label={link.title}
            >
              {link.title}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
