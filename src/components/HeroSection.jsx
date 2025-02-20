import { MdKeyboardDoubleArrowDown } from "react-icons/md";
import mainbg from "../images/mainbg.jpg"

const HeroSection = () => {
  return (
    <div
      className="relative h-screen w-full bg-cover bg-center text-white"
      style={{ backgroundImage: `url(${mainbg})` }}
    >
    {/* Overlay with Blur Effect */}
    <div className="absolute inset-0 bg-white bg-opacity-10 "></div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 md:px-16 flex flex-col items-center justify-center h-full space-y-8">
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-[#ffbf3c] drop-shadow-lg">
        “Smarter Billing, Better Care”
        </h1>
        <p className="text-lg md:text-2xl leading-relaxed max-w-3xl mx-auto">
        ThriveCycle eliminates the hassle so you can focus on patient care.
        </p>

        {/* Cards Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8 w-full max-w-6xl px-4 md:px-0">
{/* Card 1 */}
<div className="group relative bg-[#022120] rounded-2xl p-8 shadow-lg transition-all duration-500 hover:bg-[#ffbf3c] hover:shadow-2xl transform">
  <h2 className="text-2xl font-bold mb-3 text-white transition-colors duration-500 group-hover:text-black">
  How Precise Billing Can Enhance Revenue Recovery
  </h2>
</div>

{/* Card 2 */}
<div className="group relative bg-[#022120] rounded-2xl p-8 shadow-lg transition-all duration-500 hover:bg-[#ffbf3c] hover:shadow-2xl transform">
  <h2 className="text-2xl font-bold mb-3 text-white transition-colors duration-500 group-hover:text-black">
  Why You Need to Automate Your Medical Billing Process
  </h2>
</div>

{/* Card 3 */}
<div className="group relative bg-[#022120] rounded-2xl p-8 shadow-lg transition-all duration-500 hover:bg-[#ffbf3c] hover:shadow-2xl transform">
  <h2 className="text-2xl font-bold mb-3 text-white transition-colors duration-500 group-hover:text-black">
  How Medical Billing Enhances Patient Care
  </h2>
</div>
        </div>
      </div>

      {/* Scroll Down Button */}
      <button className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-4xl animate-bounce text-white">
        <MdKeyboardDoubleArrowDown />
      </button>
    </div>
  );
};

export default HeroSection;
