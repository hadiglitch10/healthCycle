import { useState } from "react";
import image3 from "D:/thriveCycle/shifo/Helathcare/src/images/section3.jpeg"; // Adjust the path based on your folder structure

const section3data = {
  section1: [
    "Comprehensive medical billing solutions.",
    "Optimized claim submission and reimbursement.",
    "Real-time tracking and reporting."
  ],
  section2: [
    "Hassle-free credentialing and recredentialing.",
    "Ensuring compliance with insurance providers.",
    "Reducing administrative burden."
  ],
  section3: [
    "Expert pre-authorization services.",
    "Speeding up insurance approvals.",
    "Minimizing claim denials."
  ],
  section4: [
    "Efficient front-office management.",
    "Streamlined patient scheduling.",
    "Improved customer experience."
  ]
};

const ServiceSection = () => {
  const [active, setActive] = useState(1);

  return (
    <section className="flex flex-col items-center pb-36 bg-gray-50">
      <div className="container px-4">
        <h1 className="text-4xl md:text-5xl text-center font-extrabold leading-tight mb-8 text-[#022120e2] transition-all duration-500 ease-in-out">
          Transform your <br /> practice with our <br /> top-tier services
        </h1>

        {/* Navigation Buttons with Hover Effect */}
        <div className="flex flex-wrap justify-center gap-4 font-semibold text-lg pt-6">
          {[
            { id: 1, label: "Medical Billing Services" },
            { id: 2, label: "Credentialing Services" },
            { id: 3, label: "Pre-Authorization Services" },
            { id: 4, label: "Front Office Services" }
          ].map((service) => (
            <button
              key={service.id}
              onMouseEnter={() => setActive(service.id)}
              className={`px-4 py-2 border-b-4 transition-all duration-300 ease-in-out transform 
                ${
                  active === service.id
                    ? "text-[#fbbf3c] border-b-[#fbbf3c] scale-110"
                    : "text-black border-b-transparent hover:text-[#fbbf3c] hover:border-b-[#fbbf3c] hover:scale-105"
                }`}
            >
              {service.label}
            </button>
          ))}
        </div>

        {/* Content Section with Hover Effect */}
        <div className="mt-12 flex flex-col md:flex-row items-center md:items-start gap-8 transition-all duration-500 ease-in-out">
          <img
            src={image3}
            alt="Service Illustration"
            className="rounded-lg shadow-md md:max-w-md w-full transition-transform duration-500 ease-in-out hover:scale-110"
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

            {/* Dynamic List */}
            <ul className="list-disc list-inside text-gray-700 space-y-3 marker:text-[#21c78f] transition-all duration-500 ease-in-out">
              {active === 1 &&
                section3data.section1.map((item, i) => (
                  <li key={i} className="text-base md:text-lg">{item}</li>
                ))}
              {active === 2 &&
                section3data.section2.map((item, i) => (
                  <li key={i} className="text-base md:text-lg">{item}</li>
                ))}
              {active === 3 &&
                section3data.section3.map((item, i) => (
                  <li key={i} className="text-base md:text-lg">{item}</li>
                ))}
              {active === 4 &&
                section3data.section4.map((item, i) => (
                  <li key={i} className="text-base md:text-lg">{item}</li>
                ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
