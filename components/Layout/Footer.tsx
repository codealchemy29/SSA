import Image from "next/image";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaXTwitter,
} from "react-icons/fa6";
import { Mail, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#F7F7F7]">
      <div className="mx-auto max-w-6xl px-6 py-16">

        {/* Top Links */}
        <div className="mb-12 flex flex-wrap justify-center gap-x-16 gap-y-6 text-sm text-black">
          <a href="#">About Us</a>
          <a href="#">Coaches</a>
          <a href="#">News</a>
          <a href="#">Matches</a>
          <a href="#">Events</a>
          <a href="#">FAQs</a>
          <a href="#">Programs</a>
          <a href="#">Amenities</a>
          <a href="#">Blogs</a>
        </div>

        {/* Divider */}
        <div className="mx-auto mb-12 max-w-4xl border-t border-gray-300" />

        {/* Main Footer */}
        <div className="grid gap-12 md:grid-cols-3">

          {/* Logo */}
          <div>
            <Image
              src="/logo.png"
              alt="SSA"
              width={250}
              height={80}
              className="object-contain"
            />
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-6 text-2xl font-semibold text-[#A7C520]">
              Signature Slam Academy
            </h3>

            <p className="mb-6 text-gray-800">
              30 Wills Hill Road, Lovedale, NSW
            </p>

            <div className="space-y-4">

              <div className="flex items-center gap-3">
                <Phone
                  size={16}
                  className="text-[#A7C520]"
                />
                <span>+91 5642589752</span>
              </div>

              <div className="flex items-center gap-3">
                <Mail
                  size={16}
                  className="text-[#A7C520]"
                />
                <span>info@ssagroup.com</span>
              </div>

            </div>
          </div>

          {/* Social */}
          <div>
            <h3 className="mb-6 text-2xl font-semibold text-[#A7C520]">
              Connect with us
            </h3>

            <div className="flex items-center gap-5 text-xl">
  <FaFacebookF />
  <FaXTwitter />
  <FaInstagram />
  <FaYoutube />
</div>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-gradient-to-r from-[#003D67] to-[#8CB320] py-4 text-white">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-6 text-xs md:flex-row">
          <p>Terms And Condition</p>

          <p>
            © 2023 All Rights Reserved
            www.signatureslamacademy.com
          </p>

          <p>Privacy Policy</p>
        </div>
      </div>
    </footer>
  );
}