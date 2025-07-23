import React from "react";
import {
  FaRegArrowAltCircleRight,
  FaFacebookF,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  const companyLinks = [
    { label: "About Us", icon: FaRegArrowAltCircleRight, link: "/about" },
    { label: "Contact Us", icon: FaRegArrowAltCircleRight, link: "/contact" },
    { label: "Reservation", icon: FaRegArrowAltCircleRight, link: "/reservation" },
    { label: "Privacy Policy", icon: FaRegArrowAltCircleRight, link: "/privacy" },
    { label: "Terms & Conditions", icon: FaRegArrowAltCircleRight, link: "/terms" },
  ];

  const contactInfo = [
    { icon: "fa-map-marker-alt", text: "123 Street, New York, USA" },
    { icon: "fa-phone-alt", text: "+012 345 67890" },
    { icon: "fa-envelope", text: "info@example.com" },
  ];

  const socialLinks = [
    { icon: FaTwitter, url: "#" },
    { icon: FaFacebookF, url: "#" },
    { icon: FaYoutube, url: "#" },
    { icon: FaLinkedin, url: "#" },
  ];

  

  return (
    <footer className="bg-gray-900 text-white pt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Company Links */}
          <div>
            <h4 className="text-xl text-primary font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              {companyLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.link}
                    className="flex items-center text-gray-300 hover:text-white transition"
                  >
                    {React.createElement(link.icon, { className: "mr-2 text-lg" })}
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl text-primary font-semibold mb-4">Contact</h4>
            <ul className="space-y-2">
              {contactInfo.map((info, index) => (
                <li key={index} className="flex items-center text-gray-300">
                  <i className={`fas ${info.icon} mr-3`}></i>
                  {info.text}
                </li>
              ))}
            </ul>
            <div className="flex space-x-3 mt-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white text-lg transition"
                >
                  {React.createElement(social.icon)}
                </a>
              ))}
            </div>
          </div>

         

          {/* Newsletter */}
          <div>
            <h4 className="text-xl text-primary font-semibold mb-4">Newsletter</h4>
            <p className="text-gray-300 mb-4">
              Dolor amet sit justo amet elitr clita ipsum elitr est.
            </p>
            <div className="relative max-w-xs">
              <input
                type="email"
                placeholder="Your email"
                className="w-full py-2 px-4 pr-20 rounded bg-gray-800 text-white border border-primary focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <button
                type="button"
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-primary text-white px-4 py-1 rounded hover:bg-opacity-80 transition"
              >
                SignUp
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="bg-gray-800 py-4">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-evenly items-center text-sm text-gray-400">
          <div className="mb-2 md:mb-0 text-center md:text-left">
            © <a className="text-white hover:underline" href="#">Rosier Foods Private Limited</a>. All Rights Reserved.
          </div>
          <div className="space-x-4 text-center md:text-right">
            <a href="#" className="hover:underline">Home</a>
            <a href="#" className="hover:underline">Cookies</a>
            <a href="#" className="hover:underline">Help</a>
            <a href="#" className="hover:underline">FAQs</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
