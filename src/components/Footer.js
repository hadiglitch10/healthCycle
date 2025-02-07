import { useState } from "react";
import { PiArrowFatLineRightFill } from "react-icons/pi";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = () => {
    if (!email.includes("@") || !email.includes(".com")) {
      toast.error("Please insert a correct email");
    } else {
      setEmail("");
      toast.success("You have been subscribed to our newsletter!");
    }
  };

  return (
    <footer className="bg-gray-900 text-white">
      {/* Newsletter Section */}
      <div className="bg-[#21c78f] py-10 px-6 md:px-12 text-center md:text-left">
        <h1 className="text-3xl font-bold">Stay Informed</h1>
        <p className="text-gray-100 mt-2">Keep up to date on our latest stories and blogs.</p>

        <div className="mt-5 flex flex-col md:flex-row items-center md:items-stretch">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="w-full md:w-[60%] p-3 rounded-l-md text-black outline-none"
          />
          <button
            onClick={handleSubscribe}
            className="bg-[#1d7b5c] flex items-center justify-center px-6 py-3 rounded-r-md transition-all duration-300 hover:bg-[#166d4e]"
          >
            <PiArrowFatLineRightFill className="text-2xl mr-2" />
            <span className="font-bold">Subscribe</span>
          </button>
        </div>
      </div>

      {/* Footer Links & Socials */}
      <div className="container mx-auto py-10 px-6 md:px-12 flex flex-col md:flex-row justify-between items-center border-t border-gray-700">
        {/* Left Side - Navigation Links */}
        <div className="flex flex-wrap justify-center md:justify-start space-x-6 md:space-x-12 text-sm md:text-md">
          <Link to="/" className="hover:text-gray-400 transition-all duration-300">
            Home
          </Link>
          <Link to="/about" className="hover:text-gray-400 transition-all duration-300">
            About Us
          </Link>
          <Link to="/contact" className="hover:text-gray-400 transition-all duration-300">
            Contact
          </Link>
          <Link to="/privacy" className="hover:text-gray-400 transition-all duration-300">
            Privacy Policy
          </Link>
        </div>

        {/* Right Side - Social Media Icons */}
        <div className="mt-6 md:mt-0 flex space-x-4">
          <a href="#" className="p-3 bg-gray-800 rounded-full hover:bg-[#21c78f] transition-all duration-300">
            <FaFacebookF />
          </a>
          <a href="#" className="p-3 bg-gray-800 rounded-full hover:bg-[#21c78f] transition-all duration-300">
            <FaInstagram />
          </a>
          <a href="#" className="p-3 bg-gray-800 rounded-full hover:bg-[#21c78f] transition-all duration-300">
            <FaTwitter />
          </a>
          <a href="#" className="p-3 bg-gray-800 rounded-full hover:bg-[#21c78f] transition-all duration-300">
            <FaLinkedinIn />
          </a>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center py-6 text-sm bg-gray-800">
        © {new Date().getFullYear()} RCM Health. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
