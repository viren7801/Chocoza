import Image from "next/image";
import logo from "../public/Images/logo.png";

export default function Footer() {
  return (
    <>
      <div>
        <div>
          <Image src={logo} alt="logo" />
        </div>
      </div>
    </>
  );
}
