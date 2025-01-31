import Image from "next/image";
import logo from "../images/logo_new.png";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

export default function Footer() {
  return (
    <footer className="bg-[#e6ccb2] text-[#7f5539] py-12">
      <div className="w-[90%] m-auto">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Column 1: Logo (Left side) */}
          <div className="flex flex-col items-center md:items-start mb-6 md:mb-0 md:col-span-1">
            <Image src={logo} alt="Chocoza Logo" width={150} height={150} />
          </div>

          {/* Columns 2 and 3 (Quick Links & Connect with Us) */}
          <div className="hidden md:flex flex-col space-y-8 md:flex-row md:justify-end md:space-y-0 md:space-x-8 md:col-span-2">
            {/* Contact Information Section */}
            <div className="md:text-left md:m-0 text-sm text-[#7f5539] m-auto text-center">
              <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
              <p>
                <strong>Email:</strong>{" "}
                <a
                  href="mailto:chocoza.chocolates@gmail.com"
                  className="hover:text-[#5d3f2f] transition-colors"
                >
                  chocoza.chocolates@gmail.com
                </a>
              </p>
              <p>
                <strong>Phone:</strong>{" "}
                <a
                  href="tel:+919409664446"
                  className="hover:text-[#5d3f2f] transition-colors"
                >
                  +91 94096 64446
                </a>
              </p>
            </div>
            {/* Column 2: Quick Links */}
            <div className="flex flex-col items-center md:items-start space-y-4">
              <h3 className="text-lg font-semibold">Quick Links</h3>
              <div className="flex flex-col space-y-2">
                <Link
                  href="/contact"
                  className="text-[#7f5539] hover:text-[#5d3f2f] transition-colors text-sm"
                  aria-label="Contact Us"
                >
                  Contact Us
                </Link>
                <Link
                  href="/about"
                  className="text-[#7f5539] hover:text-[#5d3f2f] transition-colors text-sm"
                  aria-label="About Us"
                >
                  About Us
                </Link>
              </div>
            </div>
            {/* Column 3: Connect with Us */}
            <div className="flex flex-col items-center md:items-start space-y-4">
              <h3 className="text-lg font-semibold">Connect with Us</h3>
              <div className="flex space-x-4">
                <a
                  href="https://www.facebook.com/profile.php?id=61571436689470"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#7f5539] hover:text-[#5d3f2f]"
                  aria-label="Facebook"
                >
                  <FontAwesomeIcon icon={faFacebook} size="xl" />
                </a>
                <a
                  href="https://www.instagram.com/__chocoza__/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#7f5539] hover:text-[#5d3f2f]"
                  aria-label="Instagram"
                >
                  <FontAwesomeIcon icon={faInstagram} size="xl" />
                </a>
                <a
                  href="mailto:chocoza.chocolates@gmail.com"
                  className="text-[#7f5539] hover:text-[#5d3f2f]"
                  aria-label="Email"
                >
                  <FontAwesomeIcon icon={faEnvelope} size="xl" />
                </a>
              </div>
            </div>{" "}
          </div>
        </div>

        {/* Small screen code starts from here --->  */}

        <div className="md:hidden flex justify-between mb-5">
          <div className="flex flex-col items-center md:items-start space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <div className="flex flex-col w-[100%] space-y-2">
              <Link
                href="/contact"
                className="text-[#7f5539] hover:text-[#5d3f2f] transition-colors text-sm"
                aria-label="Contact Us"
              >
                Contact Us
              </Link>
              <Link
                href="/about"
                className="text-[#7f5539] hover:text-[#5d3f2f] transition-colors text-sm"
                aria-label="About Us"
              >
                About Us
              </Link>
            </div>
          </div>
          {/* Column 3: Connect with Us */}
          <div className="flex flex-col items-center md:items-start space-y-4">
            <h3 className="text-lg font-semibold">Connect with Us</h3>
            <div className="flex space-x-4 w-[100%]">
              <a
                href="https://www.facebook.com/profile.php?id=61571436689470"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#7f5539] hover:text-[#5d3f2f]"
                aria-label="Facebook"
              >
                <FontAwesomeIcon icon={faFacebook} size="xl" />
              </a>
              <a
                href="https://www.instagram.com/__chocoza__/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#7f5539] hover:text-[#5d3f2f]"
                aria-label="Instagram"
              >
                <FontAwesomeIcon icon={faInstagram} size="xl" />
              </a>
              <a
                href="mailto:chocoza.chocolates@gmail.com"
                className="text-[#7f5539] hover:text-[#5d3f2f]"
                aria-label="Email"
              >
                <FontAwesomeIcon icon={faEnvelope} size="xl" />
              </a>
            </div>
          </div>{" "}
        </div>

        <div className="md:hidden md:text-left md:m-0 text-sm text-[#7f5539] m-auto text-center">
          <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
          <p>
            <strong>Email:</strong>{" "}
            <a
              href="mailto:chocoza.chocolates@gmail.com"
              className="hover:text-[#5d3f2f] transition-colors"
            >
              chocoza.chocolates@gmail.com
            </a>
          </p>
          <p>
            <strong>Phone:</strong>{" "}
            <a
              href="tel:+919409664446"
              className="hover:text-[#5d3f2f] transition-colors"
            >
              +91 94096 64446
            </a>
          </p>
        </div>

        {/* Bottom Section: Copyright */}
        <div className="mt-4 md:mt-12 text-center text-sm text-[#7f5539] ">
          <p>&copy; {new Date().getFullYear()} Chocoza. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
