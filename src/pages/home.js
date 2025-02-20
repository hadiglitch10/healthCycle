import { MdKeyboardDoubleArrowDown } from "react-icons/md";
import { PiArrowFatLineRightFill } from "react-icons/pi";
import { motion, AnimatePresence } from 'framer-motion';
import image1 from "../images/new .jpg";
import image3 from "../images/section3.jpeg";
import image4 from "../images/new doctor.png";
import { act, useState } from "react";
import { section3data } from "../utils/data";
import hex from "../images/hexagon.png";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import ServiceSection from "../components/ServiceSection";
import HeroSection from "../components/HeroSection";
const Home = () => {
  const [active, setActive] = useState(1);

  return (
    <div className="homeBg w-[100vw]">
      {/* Hero Section */}
      < HeroSection/>
{/* End Hero Section */}

     {/* Section 2 */}
<section className="xl:flex bg-gray-100 items-center mb-[100px] p-8 md:p-16 lg:p-24 rounded-2xl shadow-lg">
  {/* Image */}
  <img
    src={image1}
    className="max-w-[600px] max-h-[600px] rounded-xl shadow-md hidden md:block"
    alt="RCM Healthcare"
  />

  {/* Text Content */}
  <div className="md:ml-10 mt-8 md:mt-0">
    <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6 text-[#022120e9]">
    Your Trusted Partner
    </h1>
    <p className="text-lg md:text-xl text-black leading-relaxed">
    Let us at Thrive Cycle Handle the  revenue recovery hassle, while you focus on what’s important, Patient Care.
    </p>
    
  </div>
</section>
{/* End Section 2 */}
      {/* Section 3 */}
      <div>
      {/* Other Sections */}
      <ServiceSection />
    </div>
      {/* KPI's */}
      {/* <section className="bg-gradient-to-br from-green-400 to-green-700 flex flex-col items-center py-[100px]">
  <div className="container flex flex-col xl:flex-row w-[100%] justify-between items-center px-6">
    <h1 className="text-[35px] font-bold leading-none mb-[20px] text-white xl:text-left text-center">
      We know what it <br /> takes to boost your <br />
      bottom line, and <br /> we have the <br /> numbers to prove it.
    </h1>

    <div className="flex flex-wrap xl:flex-nowrap justify-center relative w-[60%] gap-6">
      {[
        "30 Days in A/R (Goal)",
        "15 Days to receive payments",
        "99% Clean Claim Submission",
        "30% Revenue increase with clean claims submission",
      ].map((text, index) => (
        <div
          key={index}
          className="relative w-[200px] h-[200px] flex items-center justify-center bg-white/10 
                     backdrop-blur-lg border border-white/20 rounded-2xl shadow-[0_4px_20px_rgba(255,255,255,0.2)] 
                     transition-all duration-500 ease-in-out transform hover:scale-110 
                     hover:shadow-[0_10px_30px_rgba(255,255,255,0.3)] hover:bg-gradient-to-br 
                     hover:from-green-300 hover:to-green-600 animate-floating opacity-0 translate-y-10"
          style={{
            animationDelay: `${index * 0.3}s`, // Delayed animations for staggered effect
            animationFillMode: "forwards",
          }}
        >
          <p className="text-white font-bold text-center">{text}</p>
        </div>
      ))}
    </div>
  </div>
</section> */}

{/* <style>
{`
  @keyframes floating {
    0% { transform: translateY(0); }
    50% { transform: translateY(-5px); }
    100% { transform: translateY(0); }
  }
  
  .animate-floating {
    animation: floating 3s infinite ease-in-out;
  }
  
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .opacity-0 {
    animation: fadeInUp 0.8s ease-out forwards;
  }
`}
</style> */}
{/* Section 5 */}
<section className="flex flex-col xl:flex-row items-center mb-[100px] opacity-0 translate-y-10 animate-fadeIn">
  <div className="xl:ml-[50px] mt-8 xl:mt-0 max-w-[600px] text-center xl:text-left px-4">
    <h1 className="text-[40px] md:text-[50px] font-bold leading-tight mb-[20px] text-[#022120d4]">
      Why Choose ThriveCycle?
    </h1>
    <p className="md:text-[18px] text-[16px] leading-relaxed">
      We understand that billing challenges take time away from patient care. That’s why ThriveCycle handles the hassle, so you can focus on what matters—your patients.
    </p>
    <p className="md:text-[18px] text-[16px] leading-relaxed mt-[10px]">
      Your practice’s success is our priority. We simplify medical billing, reduce administrative burdens, and ensure smooth cash flow—so you can provide the best care without distractions.
    </p>
    <p className="md:text-[18px] text-[16px] leading-relaxed mt-[10px]">
      Our modular solutions streamline workflows, reduce errors, and optimize revenue—so your practice can thrive.
    </p>
    <Link className="flex mt-[20px] items-center justify-center xl:justify-start group" to={"/contact"}>
      <PiArrowFatLineRightFill className="mr-[10px] text-[20px] text-[#022120e0] transition-all duration-300 group-hover:translate-x-2" /> 
      <span className="font-bold text-[#022120] transition-all duration-300 group-hover:text-[#fbbf3c]">
        Contact Us
      </span>
    </Link>
  </div>

  <div className="relative w-full xl:w-auto">
    <img
      src={image4}
      className="md:max-w-[700px] md:max-h-[700px] w-full rounded-tl-[50px] rounded-tr-xl rounded-bl-xl rounded-br-xl shadow-lg transform transition-transform duration-500 hover:scale-105"
      alt="RCM Healthcare"
    />
  </div>
</section>

<style>
{`
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .animate-fadeIn {
    animation: fadeInUp 0.8s ease-out forwards;
  }
`}
</style>
  <div><Footer /></div>
  
  </div>
  );
};
export default Home;
