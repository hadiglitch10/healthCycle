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
const Home = () => {
  const [active, setActive] = useState(1);

  return (
    <div className="homeBg w-[100vw]">
      {/* Hero Section */}
<div className="relative h-screen w-full bg-cover bg-center text-white" style={{ backgroundImage: 'url(/path-to-your-image.jpg)' }}>
  <div className="absolute inset-0 bg-black bg-opacity-50"></div> {/* Overlay for better text visibility */}

  <div className="relative z-10 text-center px-6 md:px-16 flex flex-col items-center justify-center h-full space-y-8">
    <h1 className="text-4xl md:text-6xl font-extrabold leading-tight drop-shadow-lg">
      Welcome to RCM <br /> HealthCare
    </h1>
    <p className="text-lg md:text-2xl leading-relaxed max-w-3xl mx-auto">
      Your trusted partner in optimizing your practice's medical billing <br />
      and streamlining your day-to-day operations.
    </p>

    {/* Cards Section */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8 w-full max-w-6xl px-4 md:px-0">
      {/* Card 1 */}
      <div className="bg-white bg-opacity-90 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 text-black">
        <h3 className="text-2xl font-bold mb-3">Efficient Billing</h3>
        <p className="text-base">Streamline your medical billing process with our cutting-edge solutions.</p>
      </div>

      {/* Card 2 */}
      <div className="bg-white bg-opacity-90 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 text-black">
        <h3 className="text-2xl font-bold mb-3">Credentialing Services</h3>
        <p className="text-base">Ensure smooth onboarding and compliance with our credentialing support.</p>
      </div>

      {/* Card 3 */}
      <div className="bg-white bg-opacity-90 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 text-black">
        <h3 className="text-2xl font-bold mb-3">24/7 Support</h3>
        <p className="text-base">Our team is always ready to assist you with any operational challenges.</p>
      </div>
    </div>
  </div>

  {/* Scroll Down Button */}
  <button className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-4xl animate-bounce text-white">
    <MdKeyboardDoubleArrowDown />
  </button>
</div>
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
      <section className="flex flex-col items-center pb-36 bg-gray-50">
  <div className="container px-4">
    <h1 className="text-4xl md:text-5xl text-center font-extrabold leading-tight mb-8 text-[#21c78f] transition-all duration-500 ease-in-out">
      Transform your <br /> practice with our <br /> top-tier services
    </h1>

    {/* Navigation Buttons with Transitions */}
    <div className="flex flex-wrap justify-center gap-4 font-semibold text-lg pt-6">
      {[
        { id: 1, label: "Medical Billing Services" },
        { id: 2, label: "Credentialing Services" },
        { id: 3, label: "Pre-Authorization Services" },
        { id: 4, label: "Front Office Services" }
      ].map((service) => (
        <button
          key={service.id}
          onClick={() => setActive(service.id)}
          className={`px-4 py-2 border-b-4 transition-all duration-300 ease-in-out transform 
            ${
              active === service.id
                ? "text-[#21c78f] border-b-[#21c78f] scale-105"
                : "text-gray-700 border-b-transparent hover:text-[#21c78f] hover:border-b-[#21c78f] hover:scale-105"
            }`}
        >
          {service.label}
        </button>
      ))}
    </div>

    {/* Content Section with Fade Transition */}
    <div className="mt-12 flex flex-col md:flex-row items-center md:items-start gap-8 transition-all duration-500 ease-in-out">
      <img
        src={image3}
        alt="Service Illustration"
        className="rounded-lg shadow-md md:max-w-md w-full transition-transform duration-500 ease-in-out hover:scale-105"
      />

      <div className="max-w-2xl">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 transition-opacity duration-300 ease-in-out">
          {active === 1 && "Medical Billing Services"}
          {active === 2 && "Credentialing Services"}
          {active === 3 && "Pre-Authorization Services"}
          {active === 4 && "Front Office Services"}
        </h2>

        <p className="text-gray-600 text-base md:text-lg mb-6 leading-relaxed transition-opacity duration-500 ease-in-out">
          {active === 1 &&
            "Secure your practice’s financial position with RCM Healthcare’s comprehensive medical billing services."}
          {active === 2 &&
            "Outsource your credentialing/recredentialing needs to RCM Healthcare’s team of experts and experience seamless operations."}
          {active === 3 &&
            "Certain medical procedures require approval from patients’ insurance companies. We ensure smooth pre-authorization processes."}
          {active === 4 &&
            "RCM Healthcare’s front-office services handle and manage all essential administrative tasks to optimize your workflow."}
        </p>

        {/* Dynamic List with Transition */}
        <ul className="list-disc list-inside text-gray-700 space-y-3 marker:text-[#21c78f] transition-all duration-500 ease-in-out">
          {active === 1 &&
            section3data.section1.map((item, i) => (
              <li key={i} className="text-base md:text-lg">
                {item}
              </li>
            ))}
          {active === 2 &&
            section3data.section2.map((item, i) => (
              <li key={i} className="text-base md:text-lg">
                {item}
              </li>
            ))}
          {active === 3 &&
            section3data.section3.map((item, i) => (
              <li key={i} className="text-base md:text-lg">
                {item}
              </li>
            ))}
          {active === 4 &&
            section3data.section4.map((item, i) => (
              <li key={i} className="text-base md:text-lg">
                {item}
              </li>
            ))}
        </ul>
      </div>
    </div>
  </div>
</section>

      {/* Section 4 */}
      <section className="bg-grad flex flex-col items-center py-[100px]">
        <div className="container items-center flex flex-col xl:flex-row w-[100%] justify-between">
          <h1 className="text-[35px] text-left font-bold leading-none mb-[20px]  text-white">
            We know what it <br /> takes to boost your <br />
            bottom line, and <br /> we have the <br /> numbers to prove it.
          </h1>
          <div className="flex flex-wrap xl:flex-nowrap md:justify-between  relative w-[60%]">
            <span className="relative">
              <img src={hex} className="max-w-[200px]" alt=""></img>
              <p className="absolute top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%] font-bold leading-none">
                30 Days in <br /> A/R (Goal)
              </p>
            </span>
            <span className="relative">
              <img src={hex} className="max-w-[200px]" alt=""></img>
              <p className="absolute top-[50%] translate-y-[-50%] text-center left-[50%] translate-x-[-50%] font-bold leading-none">
                15 Days to <br /> receive <br /> payments
              </p>
            </span>
            <span className="relative">
              <img src={hex} className="max-w-[200px]" alt=""></img>
              <p className="absolute top-[50%] translate-y-[-50%] left-[50%] text-center translate-x-[-50%] font-bold leading-none">
                99% Clean <br /> Claim Submission
              </p>
            </span>
            <span className="relative">
              <img src={hex} className="max-w-[200px]" alt=""></img>
              <p className="absolute top-[50%] translate-y-[-50%] text-center left-[50%] translate-x-[-50%] font-bold leading-none">
                30% Revenue increase with clean claims submission
              </p>
            </span>
          </div>
        </div>
      </section>
      {/* Section 5 */}
      <section className="flex xl:flex-row flex-col    items-center mb-[100px]">
        <img
          src={image4}
          className="md:max-w-[700px] md:max-h-[700px] max-w-[100%]"
          alt=""
        />
        <div className="ml-[50px]">
          <h1 className="text-[50px] font-bold leading-none mb-[20px] pt-[80px] md:pt-0 text-[#21c78f]">
            Why Choose RCM <br></br>Healthcare
          </h1>
          <p className="md:text-[18px] text-[15px] mb-[20px]">
            RCM Healthcare has been providing medical billing, credentialing,
            pre-authorization, and front-office management services to
            physicians. We’re experts in our field, and our team is passionate
            about helping doctors
          </p>
          <p className="md:text-[18px] text-[15px]">
            Our goal is to provide you with the support you need so you can
            focus on what you do best: caring for your patients.
          </p>
          <p className="md:text-[18px] text-[15px] mt-[20px]">
            Contact us today to learn more about how we can help improve your
            practice’s operations and increase your revenue.
          </p>
          <Link className="flex mt-[20px] items-center" to={"/contact"}>
            <PiArrowFatLineRightFill className="mr-[10px] text-[20px] text-[#21c78f]" />{" "}
            <span className="font-bold">Contact Us</span>
          </Link>
        </div>
      </section>
      {/* Section 6 */}
      <section className="flex flex-col items-center ">
        <div className="container">
          <h1 className="font-bold text-[35px] mb-[33px] text-center">
            Discover the possibilities that lie ahead of you
          </h1>
          <div className="flex md:flex-row flex-col justify-between">
            <div className="bg-[#21c78f] w-[100%] xl:w-[25%] m-3 text-center p-[20px] ">
              <h1 className="text-white font-bold text-[22px] mb-[15px]">
                Evaluation
              </h1>
              <p>
                We understand that every practice has unique needs and
                challenges. That’s why we take the time to sit down with you and
                assess your practice’s current standing in order to develop a
                customized plan tailored to your needs.
              </p>
            </div>
            <div className="bg-[#21c78f] w-[100%] xl:w-[25%] m-3 text-center p-[20px]">
              <h1 className="text-white font-bold text-[22px] mb-[15px]">
                Planning
              </h1>
              <p>
                Our experienced teams are ready to take the reins and bring your
                strategy into play. We work with your existing systems to craft
                solutions and deliver the best results.
              </p>
            </div>
            <div className="bg-[#21c78f] w-[100%] xl:w-[25%] m-3 text-center p-[20px]">
              <h1 className="text-white font-bold text-[22px] mb-[15px]">
                Execution
              </h1>
              <p>
                We help you stay on top of the ever-changing healthcare
                landscape and ensure your strategies are implemented efficiently
                to boost your practice’s bottom line.
              </p>
            </div>
            <div className="bg-[#21c78f] w-[100%] xl:w-[25%] m-3 text-center p-[20px]">
              <h1 className="text-white font-bold text-[22px] mb-[15px]">
                Support
              </h1>
              <p>
                We provide the necessary tools and offer ongoing support to
                ensure everything stays on track. We troubleshoot problems and
                make adjustments as required to accommodate your changing needs.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="flex flex-col items-center pb-[100px]">
        <div className="container mt-[120px] flex md:flex-row justify-between">
          <div>
            <h1 className="text-[#21c78f] text-[50px] font-bold">Start Now</h1>
            <p className="text-[18px]">
              To operate more efficiently and maximize <br /> your revenue
              potentially
            </p>
          </div>
          <Link className="flex mt-[20px] items-center" to={"/contact"}>
            <PiArrowFatLineRightFill className="mr-[10px] text-[60px] text-[#21c78f]" />{" "}
            <span className="font-[900] text-[50px]">Contact Us</span>
          </Link>
        </div>
      </section>
      <Footer />
    </div>
  );
};
export default Home;
