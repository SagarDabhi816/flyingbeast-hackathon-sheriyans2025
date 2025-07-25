import React from "react";

import {
  FaRegArrowAltCircleRight,
  FaFacebookF,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";

const Footer = () => {
  // Clean, concise company links for Rosier Foods
  const companyLinks = [
    { label: "About Rosier Foods", icon: FaRegArrowAltCircleRight, link: "/aboutus" },
    { label: "Contact Us", icon: FaRegArrowAltCircleRight, link: "/contact" },
    { label: "Shop Products", icon: FaRegArrowAltCircleRight, link: "/products" },
    { label: "Privacy Policy", icon: FaRegArrowAltCircleRight, link: "/privacy" },
    { label: "Terms & Conditions", icon: FaRegArrowAltCircleRight, link: "/terms" },
  ];

  // Rosier Foods contact info with subtle icons
  const contactInfo = [
    { icon: "map-marker-alt", text: "Rosier Foods HQ, New Delhi, India" },
    { icon: "phone-alt", text: "+91 98765 43210" },
    { icon: "envelope", text: "support@rosierfoods.com" },
  ];

  // Social media links with recognizable official URLs
  const socialLinks = [
    { icon: BsTwitterX, url: "https://twitter.com/rosierfoods" },
    { icon: FaFacebookF, url: "https://facebook.com/rosierfoods" },
    { icon: FaYoutube, url: "https://youtube.com/rosierfoods" },
    { icon: FaLinkedin, url: "https://linkedin.com/company/rosierfoods" },
  ];

  return (
    <footer className="bg-white text-gray-700 pt-12 select-none border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pb-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Rosier Foods Info */}
          <div>
            <h4 className="text-2xl font-semibold text-rose-600 mb-6 tracking-wide">Rosier Foods</h4>
            <p className="text-gray-600 leading-relaxed max-w-xs">
              Nourishing wellness inspired by nature and tradition. Crafted with love, for your wholesome life.
            </p>
           
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-xl font-semibold mb-6 text-gray-900">Company</h4>
            <ul className="space-y-3">
              {companyLinks.map(({ label, icon, link }, idx) => (
                <li key={idx}>
                  <a
                    href={link}
                    className="flex items-center text-gray-600 hover:text-rose-600 transition"
                  >
                    {React.createElement(icon, { className: "mr-3 text-rose-600 text-lg" })}
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-semibold mb-6 text-gray-900">Contact</h4>
            <ul className="space-y-4">
              {contactInfo.map(({ icon, text }, idx) => (
                <li key={idx} className="flex items-center text-gray-600">
                  <i className={`fas fa-${icon} mr-4 text-rose-600 text-lg`}></i>
                  <span>{text}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter Subscription */}
          <div>
            <h4 className="text-xl font-semibold mb-6 text-gray-900">Follow Us on </h4>
            <div className="flex space-x-4 mt-8">
              {socialLinks.map(({ icon: Icon, url }, idx) => (
                <a
                  key={idx}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Follow Rosier Foods on ${
                    Icon.displayName || "social media"
                  }`}
                  className="text-rose-600 hover:text-rose-800 transition text-4xl"
                >
                  <Icon />
                </a>
              ))}
            </div>
           
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-gray-50 py-6 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500 space-y-3 md:space-y-0">
          <div>
            &copy; {new Date().getFullYear()} Rosier Foods Private Limited. All rights reserved.
          </div>
          <div className="flex space-x-8">
            <a href="/" className="hover:text-rose-600 transition">
              Home
            </a>
            <a href="/terms" className="hover:text-rose-600 transition">
              Terms
            </a>
            <a href="/privacy" className="hover:text-rose-600 transition">
              Privacy
            </a>
            <a href="/help" className="hover:text-rose-600 transition">
              Help
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
