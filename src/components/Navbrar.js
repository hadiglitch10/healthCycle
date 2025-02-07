import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [loginStatus, setLoginStatus] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem("userData"));
    setLoginStatus(!!userInfo);
  }, []);

  return (
    <nav className="bg-[#1f2937] text-white shadow-lg fixed w-full z-10">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link
          to="/"
          className="font-extrabold text-2xl md:text-3xl hover:scale-105 transition-transform duration-300"
        >
          RCM Health
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 items-center">
          <Link
            to="/"
            className="text-lg hover:text-gray-300 transition-colors duration-300"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="text-lg hover:text-gray-300 transition-colors duration-300"
          >
            About Us
          </Link>
          <Link
            to="/contact"
            className="text-lg hover:text-gray-300 transition-colors duration-300"
          >
            Contact Us
          </Link>

          {/* Right Side */}
          {!loginStatus ? (
            <Link
              to="/login"
              className="px-4 py-2 bg-blue-500 rounded-lg hover:bg-blue-600 transition-colors duration-300"
            >
              Login
            </Link>
          ) : (
            <Link
              to="/profile"
              className="px-4 py-2 bg-green-500 rounded-lg hover:bg-green-600 transition-colors duration-300"
            >
              Profile
            </Link>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#1f2937] text-center space-y-4 py-4">
          <Link
            to="/"
            className="block text-lg hover:text-gray-300 transition-colors duration-300"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/about"
            className="block text-lg hover:text-gray-300 transition-colors duration-300"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            About Us
          </Link>
          <Link
            to="/contact"
            className="block text-lg hover:text-gray-300 transition-colors duration-300"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Contact Us
          </Link>

          {!loginStatus ? (
            <Link
              to="/login"
              className="block px-4 py-2 bg-blue-500 rounded-lg hover:bg-blue-600 transition-colors duration-300"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Login
            </Link>
          ) : (
            <Link
              to="/profile"
              className="block px-4 py-2 bg-green-500 rounded-lg hover:bg-green-600 transition-colors duration-300"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Profile
            </Link>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
