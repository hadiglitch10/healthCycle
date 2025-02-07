import { motion, AnimatePresence } from 'framer-motion';
import { act, useState } from "react";
import { section3data } from "../utils/data";
import image3 from "../images/section3.jpeg";
const SectionThreee = () => {
    const [active, setActive] = useState(1);
  
    const fadeVariant = {
      hidden: { opacity: 0, y: 20 },
      visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
      exit: { opacity: 0, y: -20, transition: { duration: 0.3 } },
    };
  
    return (
      <section className="flex flex-col items-center pb-[150px]">
        <div className="container">
          <motion.h1
            className="text-[50px] text-center font-bold leading-none mb-[20px] text-[#21c78f]"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            Transform your <br /> practice with our <br /> top-tier services
          </motion.h1>
  
          <div className="flex justify-between font-bold text-[18px] pt-[30px]">
            {['Medical Billing Services', 'Credentialing Services', 'Pre-Authorization Services', 'Front Office Services'].map((label, index) => (
              <button
                key={index}
                onClick={() => setActive(index + 1)}
                className={`border-b-[3px] w-[100%] text-[12px] md:text-[18px] hover:text-[#21c78f] hover:border-b-[#21c78f] ${
                  active === index + 1 ? "text-[#21c78f] border-b-[#21c78f]" : ""
                }`}
              >
                {label}
              </button>
            ))}
          </div>
  
          <div className="mt-[50px] flex md:flex-row flex-col items-center">
            <motion.img
              key={active}
              src={image3}
              alt=""
              className="rounded-r-lg md:max-w-[500px] max-w-[200px] mr-[90px]"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 50 }}
              transition={{ duration: 0.5 }}
            />
  
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                variants={fadeVariant}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="md:text-[18px] text-[15px]"
              >
                <h1 className="font-bold">
                  {active === 1 && "Medical Billing Services"}
                  {active === 2 && "Credentialing Services"}
                  {active === 3 && "Pre-Authorization Services"}
                  {active === 4 && "Front Office Services"}
                </h1>
  
                <p className="mb-[20px]">
                  {active === 1 &&
                    "Secure your practice’s financial position with RCM Healthcare’s comprehensive medical billing services"}
                  {active === 2 &&
                    "When you outsource your credentialing/recredentialing needs to RCM Healthcare’s team of experts, you’ll be able to:"}
                  {active === 3 &&
                    "We know that specific medical procedures require approval from your patients’ insurance companies before they can receive them. And to that end,"}
                  {active === 4 &&
                    "RCM Healthcare’s front-office services entail handling and managing all of the following:"}
                </p>
  
                <ul className="text-black list-disc marker:text-[#21c78f]">
                  {(active === 1 ? section3data.section1 : 
                    active === 2 ? section3data.section2 : 
                    active === 3 ? section3data.section3 : 
                    section3data.section4
                  ).map((item, i) => (
                    <li key={i} className="my-[10px] text-[15px] md:text-[18px]">
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>
    );
  };
  export default SectionThreee;