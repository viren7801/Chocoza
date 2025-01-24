import Image from "next/image";
import logo from "../images/logo.png";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

export default function Footer() {
  return (
    <footer className="bg-[#e6ccb2] text-[#7f5539] py-5">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Column 1: Logo (Left side) */}
        <div className="flex flex-col items-start mb-6 md:mb-0 md:col-span-1">
          <Image src={logo} alt="Chocoza Logo" width={200} height={150} />
        </div>

        {/* Columns 2 and 3 (Quick Links & Connect with Us) moved to the right */}
        <div className="flex flex-col md:flex-row justify-end space-x-8 md:col-span-2">
          {/* Column 2: Quick Links */}
          <div className="flex flex-col items-start space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <div className="flex flex-col space-y-2">
              <Link
                href="/contact"
                className="text-[#7f5539] hover:text-[#5d3f2f] transition-colors text-sm "
                aria-label="Contact Us"
              >
                Contact Us
              </Link>
              <Link
                href="/about"
                className="text-[#7f5539] hover:text-[#5d3f2f] transition-colors text-sm "
                aria-label="About Us"
              >
                About Us
              </Link>
            </div>
          </div>

          {/* Column 3: Connect with Us */}
          <div className="flex flex-col items-start space-y-4">
            <h3 className="text-lg font-semibold">Connect with Us</h3>
            <div className="flex space-x-4 m-auto">
              <a
                href="https://www.facebook.com/profile.php?id=61571436689470"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#7f5539] hover:text-[#5d3f2f] "
                aria-label="Facebook"
              >
                <FontAwesomeIcon icon={faFacebook} size="xl" />
              </a>
              <a
                href="https://www.instagram.com/__chocoza__/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#7f5539] hover:text-[#5d3f2f] "
                aria-label="Instagram"
              >
                <FontAwesomeIcon icon={faInstagram} size="xl" />
              </a>
              <a
                href="mailto:chocoza.chocolates@gmail.com"
                className="text-[#7f5539] hover:text-[#5d3f2f] "
                aria-label="Email"
              >
                <FontAwesomeIcon icon={faEnvelope} size="xl" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Information Section moved above Copyright */}
      <div className="mt-8 md:mt-0 text-center text-sm text-[#7f5539] ">
        <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
        <p>
          <strong>Email:</strong>{" "}
          <a
            href="mailto:chocoza.chocolates@gmail.com"
            className="hover:text-[#5d3f2f] transition-colors "
          >
            chocoza.chocolates@gmail.com
          </a>
        </p>
        <p>
          <strong>Phone:</strong>{" "}
          <a
            href="tel:+919409664446"
            className="hover:text-[#5d3f2f] transition-colors "
          >
            +91 94096 64446
          </a>
        </p>
      </div>

      {/* Bottom Section: Copyright */}
      <div className="mt-6 text-center text-sm text-[#7f5539] ">
        <p>&copy; {new Date().getFullYear()} Chocoza. All Rights Reserved.</p>
      </div>
    </footer>
  );
}
