import { MdKeyboardDoubleArrowDown } from "react-icons/md";

const HeroSection = () => {
  return (
    <div
      className="relative h-screen w-full bg-cover bg-center text-white"
      style={{ backgroundImage: 'url(/D:\thriveCycle\shifo\Helathcare\src\images\landingImg.jpg)' }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Content */}
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
          <div className="group relative bg-gradient-to-r from-green-400 to-blue-500 rounded-2xl p-8 shadow-lg transition-all duration-500 hover:scale-105 hover:shadow-2xl transform hover:-translate-y-3 hover:rotate-1">
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-white bg-opacity-10 blur-md rounded-2xl"></div>
            <h3 className="text-2xl font-bold mb-3">Efficient Billing</h3>
            <p className="text-base">Streamline your medical billing process with our cutting-edge solutions.</p>
          </div>

          {/* Card 2 */}
          <div className="group relative bg-gradient-to-r from-purple-500 to-indigo-500 rounded-2xl p-8 shadow-lg transition-all duration-500 hover:scale-105 hover:shadow-2xl transform hover:-translate-y-3 hover:-rotate-1">
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-white bg-opacity-10 blur-md rounded-2xl"></div>
            <h3 className="text-2xl font-bold mb-3">Credentialing Services</h3>
            <p className="text-base">Ensure smooth onboarding and compliance with our credentialing support.</p>
          </div>

          {/* Card 3 */}
          <div className="group relative bg-gradient-to-r from-pink-500 to-red-500 rounded-2xl p-8 shadow-lg transition-all duration-500 hover:scale-105 hover:shadow-2xl transform hover:-translate-y-3 hover:rotate-2">
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-white bg-opacity-10 blur-md rounded-2xl"></div>
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
  );
};

export default HeroSection;
