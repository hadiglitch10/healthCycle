import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../images/Main.png";

const Navbar = () => {
  const [loginStatus, setLoginStatus] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem("userData"));
    setLoginStatus(!!userInfo);
  }, []);

  return (
    <nav className="bg-[#022120] text-white shadow-lg fixed w-full z-50 py-2">
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img src={logo} alt="RCM Health Logo" className="h-14 w-auto mr-2" /> 
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 items-center">
          {["Home", "About Us","Services", "Contact Us"].map((item, index) => (
            <Link
              key={index}
              to={item === "Home" ? "/" : `/${item.toLowerCase().replace(" ", "")}`}
              className="relative text-lg font-medium transition-all duration-300 hover:text-gray-300 before:absolute before:left-0 before:bottom-[-3px] before:h-[2px] before:w-0 before:bg-[#fbbf3c] before:transition-all before:duration-300 hover:before:w-full"
            >
              {item}
            </Link>
          ))}

          {/* Right Side */}
          {!loginStatus ? (
            <Link
              to="/login"
              className="px-5 py-2 rounded-lg bg-[#fbbf3c] hover:bg-[#c2973a] transition-all duration-300"
            >
              <span className="text-black font-bold">Get started</span>
            </Link>
          ) : (
            <Link
              to="/profile"
              className="px-5 py-2 rounded-lg bg-green-500 hover:bg-green-600 transition-all duration-300"
            >
              Profile
            </Link>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <div
            className={`w-6 h-[3px] bg-white mb-1 transition-all ${
              isMobileMenuOpen ? "rotate-45 translate-y-[5px]" : ""
            }`}
          ></div>
          <div
            className={`w-6 h-[3px] bg-white mb-1 transition-all ${
              isMobileMenuOpen ? "opacity-0" : ""
            }`}
          ></div>
          <div
            className={`w-6 h-[3px] bg-white transition-all ${
              isMobileMenuOpen ? "-rotate-45 -translate-y-[5px]" : ""
            }`}
          ></div>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed top-0 left-0 w-full h-screen bg-[#1f2937] flex flex-col items-center justify-center space-y-6 text-xl transition-transform duration-500 ${
          isMobileMenuOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
        }`}
      >
        {["Home", "About Us", "Contact Us"].map((item, index) => (
          <Link
            key={index}
            to={item === "Home" ? "/" : `/${item.toLowerCase().replace(" ", "")}`}
            className="relative hover:text-gray-300 transition-colors duration-300 before:absolute before:left-0 before:bottom-[-3px] before:h-[2px] before:w-0 before:bg-blue-500 before:transition-all before:duration-300 hover:before:w-full"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            {item}
          </Link>
        ))}

        {!loginStatus ? (
          <Link
            to="/login"
            className="px-5 py-2 rounded-lg bg-blue-500 hover:bg-blue-600 transition-all duration-300"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Login
          </Link>
        ) : (
          <Link
            to="/profile"
            className="px-5 py-2 rounded-lg bg-green-500 hover:bg-green-600 transition-all duration-300"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Profile
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
