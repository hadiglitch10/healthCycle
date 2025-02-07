import { MdKeyboardDoubleArrowDown } from "react-icons/md";
import { PiArrowFatLineRightFill } from "react-icons/pi";
import { motion, AnimatePresence } from 'framer-motion';
import image1 from "../images/section2.jpeg";
import image3 from "../images/section3.jpeg";
import image4 from "../images/section4.jpeg";
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
    <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6 text-[#21c78f]">
      We Are RCM <br /> Healthcare
    </h1>
    <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
      RCM Healthcare is dedicated to providing high-quality business process
      outsourcing services to physicians and practices of all specialties.
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
      <section className="bg-gradient-to-br from-green-400 to-green-700 flex flex-col items-center py-[100px]">
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
</section>

<style>
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
</style>
        {/* Section 5 */}
        <section className="flex xl:flex-row flex-col items-center mb-[100px] opacity-0 translate-y-10 animate-fadeIn">
  <img
    src={image4}
    className="md:max-w-[700px] md:max-h-[700px] max-w-[100%] rounded-xl shadow-lg transform transition-transform duration-500 hover:scale-105"
    alt="RCM Healthcare"
  />
  <div className="ml-[50px] max-w-[600px]">
    <h1 className="text-[50px] font-bold leading-none mb-[20px] pt-[80px] md:pt-0 text-[#21c78f]">
      Why Choose RCM <br /> Healthcare
    </h1>
    <p className="md:text-[18px] text-[15px] mb-[20px]">
      RCM Healthcare has been providing medical billing, credentialing, 
      pre-authorization, and front-office management services to physicians. 
      We’re experts in our field, and our team is passionate about helping doctors.
    </p>
    <p className="md:text-[18px] text-[15px]">
      Our goal is to provide you with the support you need so you can 
      focus on what you do best: caring for your patients.
    </p>
    <p className="md:text-[18px] text-[15px] mt-[20px]">
      Contact us today to learn more about how we can help improve your 
      practice’s operations and increase your revenue.
    </p>
    <Link className="flex mt-[20px] items-center group" to={"/contact"}>
      <PiArrowFatLineRightFill className="mr-[10px] text-[20px] text-[#21c78f] transition-all duration-300 group-hover:translate-x-2" /> 
      <span className="font-bold text-[#21c78f] transition-all duration-300 group-hover:text-[#16a56f]">
        Contact Us
      </span>
    </Link>
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
        {/* services */}
        <section className="flex flex-col items-center bg-gray-100 py-16">
  <div className="container px-6">
    <h1 className="font-extrabold text-[40px] text-gray-900 mb-10 text-center leading-tight">
      Discover the possibilities that lie ahead of you
    </h1>
    <div className="flex flex-wrap justify-center gap-6">
      {[
        {
          title: "Evaluation",
          text: "We understand that every practice has unique needs and challenges...",
        },
        {
          title: "Planning",
          text: "Our experienced teams are ready to take the reins and bring your strategy into play...",
        },
        {
          title: "Execution",
          text: "We help you stay on top of the ever-changing healthcare landscape...",
        },
        {
          title: "Support",
          text: "We provide the necessary tools and offer ongoing support...",
        },
      ].map((service, index) => (
        <div
          key={index}
          className="relative w-[90%] md:w-[48%] xl:w-[23%] p-6 text-center rounded-3xl shadow-2xl bg-white border-4 border-gray-300 transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-[5px_5px_15px_rgba(0,0,0,0.3)] hover:border-[#21c78f] hover:bg-gradient-to-r hover:from-[#21c78f] hover:to-[#218fc7]"
        >
          <div className="absolute inset-0 rounded-3xl border-4 border-white opacity-50"></div>
          <h1 className="text-gray-900 font-bold text-[24px] mb-4 transition-colors duration-300 hover:text-white">
            {service.title}
          </h1>
          <p className="text-gray-700 transition-colors duration-300 hover:text-white">
            {service.text}
          </p>
        </div>
      ))}
    </div>
  </div>
</section>
  <Footer />
  </div>
  );
};
export default Home;
