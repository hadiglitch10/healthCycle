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
    <footer className="bg-[#022120] text-white py-16 px-6 md:px-12">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Left Section - About */}
        <div className="space-y-4">
          <h1 className="text-2xl font-bold text-[#fbbf3c]">ThriveCycle</h1>
          <p className="text-gray-300 leading-relaxed">
            We help healthcare professionals manage their practice efficiently. 
            Stay ahead with our smart solutions.
          </p>
        </div>

        {/* Middle Section - Quick Links */}
        <div className="grid grid-cols-2 gap-6 text-sm">
          <div className="space-y-2">
            <h2 className="font-bold text-[#fbbf3c]">Company</h2>
            <Link to="/" className="hover:text-[#fbbf3c] transition-all">Home</Link>
            <Link to="/about" className="hover:text-[#fbbf3c] transition-all">About Us</Link>
            <Link to="/contact" className="hover:text-[#fbbf3c] transition-all">Contact</Link>
          </div>
          <div className="space-y-2">
            <h2 className="font-bold text-[#fbbf3c]">Legal</h2>
            <Link to="/privacy" className="hover:text-[#fbbf3c] transition-all">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-[#fbbf3c] transition-all">Terms of Service</Link>
          </div>
        </div>

        {/* Right Section - Newsletter & Socials */}
        <div className="space-y-4">
          <h2 className="font-bold text-[#fbbf3c]">Stay Informed</h2>
          <p className="text-gray-300">Subscribe to get the latest updates and insights.</p>
          <div className="flex items-center bg-white rounded-md overflow-hidden">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="flex-1 p-3 text-black outline-none"
            />
            <button
              onClick={handleSubscribe}
              className="bg-[#fbbf3c] p-3 text-black font-bold transition-all hover:bg-[#d98e24]"
            >
              <PiArrowFatLineRightFill className="text-2xl" />
            </button>
          </div>

          {/* Social Icons */}
          <div className="flex space-x-4">
            <a href="#" className="p-3 bg-gray-800 rounded-full hover:bg-[#fbbf3c] transition-all">
              <FaFacebookF />
            </a>
            <a href="#" className="p-3 bg-gray-800 rounded-full hover:bg-[#fbbf3c] transition-all">
              <FaInstagram />
            </a>
            <a href="#" className="p-3 bg-gray-800 rounded-full hover:bg-[#fbbf3c] transition-all">
              <FaTwitter />
            </a>
            <a href="#" className="p-3 bg-gray-800 rounded-full hover:bg-[#fbbf3c] transition-all">
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center mt-12 text-sm text-gray-400 border-t border-gray-700 pt-6">
        © {new Date().getFullYear()} ThriveCycle. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
