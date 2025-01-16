import Image from "next/image";
import logo from "../public/Images/logo.png";
import Link from "next/link";
import { navlinks } from "@/utils/textUtils";

export default function Navbar() {
  return (
    <div className="bg-gray-100">
      <div className="flex items-center justify-between w-[90%] m-auto">
        <div className="justify-center flex">
          <Image src={logo} alt="logo" className="w-[100px] h-auto" />
        </div>
        <div className="flex gap-4">
          {navlinks.map((link) => {
            return (
              <Link
                key={link._id}
                className="text-base font-medium"
                href={link.path}
              >
                {link.title}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
