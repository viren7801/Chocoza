import Image from "next/image";
import logo from "../images/logo.png";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <footer className="bg-[#e6ccb2] text-[#7f5539] py-5">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Column 1: Logo (Left side) */}
        <div className="flex flex-col items-start mb-6 md:mb-0 md:col-span-1">
          <Image src={logo} alt="Chocoza Logo" width={150} height={50} />
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
            <div className="flex space-x-4 mb-6">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#7f5539] hover:text-[#5d3f2f] "
                aria-label="Facebook"
              >
                <i className="fab fa-facebook"></i>{" "}
                {/* Assuming FontAwesome is set up */}
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#7f5539] hover:text-[#5d3f2f] "
                aria-label="Instagram"
              >
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a
                href="mailto:chocoza.chocolates@gmail.com"
                className="text-[#7f5539] hover:text-[#5d3f2f] "
                aria-label="Email"
              >
                <i className="fas fa-envelope"></i>{" "}
                {/* Assuming FontAwesome is set up */}
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
