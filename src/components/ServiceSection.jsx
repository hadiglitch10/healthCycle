import { useState } from "react";
import image1 from "D:/thriveCycle/shifo/Helathcare/src/images/5.png";
import image2 from "D:/thriveCycle/shifo/Helathcare/src/images/4.png";
import image3 from "D:/thriveCycle/shifo/Helathcare/src/images/3.png";
import image4 from "D:/thriveCycle/shifo/Helathcare/src/images/1.png";

// Mapping active section to corresponding image
const images = {
  1: image1,
  2: image2,
  3: image3,
  4: image4,
};

const ServiceSection = () => {
  const [active, setActive] = useState(1);

  return (
    <section className="flex flex-col items-center pb-36 bg-gray-50">
      <div className="container px-4">
        <h1 className="text-4xl md:text-5xl text-center font-extrabold leading-tight mb-8 text-[#022120e2] transition-all duration-500 ease-in-out">
          Focus on Patient Care while we offer our services
        </h1>

        {/* Navigation Buttons */}
        <div className="flex flex-wrap justify-center gap-4 font-semibold text-lg pt-6">
          {[
            { id: 1, label: "Claims Management" },
            { id: 2, label: "Insurance Verification" },
            { id: 3, label: "Detailed Reports & Analytics" },
            { id: 4, label: "Denial Management" }
          ].map((service) => (
            <button
              key={service.id}
              onMouseEnter={() => setActive(service.id)}
              className={`px-4 py-2 border-b-4 transition-all duration-300 ease-in-out transform ${
                active === service.id
                  ? "text-[#fbbf3c] border-b-[#fbbf3c] scale-110"
                  : "text-black border-b-transparent hover:text-[#fbbf3c] hover:border-b-[#fbbf3c] hover:scale-105"
              }`}
            >
              {service.label}
            </button>
          ))}
        </div>

        {/* Content Section */}
        <div className="mt-12 flex flex-col items-center gap-8 transition-all duration-500 ease-in-out">
          
          {/* Text Content */}
          <div className="text-center max-w-2xl">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 transition-opacity duration-300 ease-in-out">
              {active === 1 && "Streamline claim processing and get paid faster."}
              {active === 2 && "Avoid delays with real-time insurance verification."}
              {active === 3 && "Make data-driven decisions to maximize revenue."}
              {active === 4 && "Reduce denials and improve your cash flow."}
            </h2>

            <p className="text-gray-600 text-base md:text-lg mb-6 leading-relaxed transition-opacity duration-500 ease-in-out">
  {active === 1 && (
    <>
      Claim Automation to reduce errors and speed up reimbursements.<br />
      Claim tracking in real-time ensuring timely processing.<br />
      Minimum rejections with built-in compliance checks.
    </>
  )}
  {active === 2 && (
    <>
      Instant patient coverage verification before appointments.<br />
      Ensures accurate eligibility checks to prevent billing delays.
    </>
  )}
  {active === 3 && (
    <>
      Gain insights into revenue trends and billing performance.<br />
      Customizable dashboards for financial and operational tracking.<br />
      Identify inefficiencies and optimize revenue cycle strategies.
    </>
  )}
  {active === 4 && (
    <>
      Detects and categorizes claim denials for quick resolution.<br />
      Provides actionable insights to prevent future denials.<br />
      Automates appeal processes to recover lost revenue.
    </>
  )}
</p>
          </div>

          {/* Dynamic Image Section */}
          <img
  src={images[active]}
  alt="Service Illustration"
  className="w-full max-w-[900px] h-[200px] rounded-t-3xl rounded-tl-3xl shadow-md transition-transform duration-500 ease-in-out hover:scale-105 object-cover"
/>
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
