import { FaRegLightbulb, FaHandHoldingUsd, FaHandshake, FaChartPie, FaShieldAlt, FaPrayingHands } from "react-icons/fa";
import { motion } from "framer-motion";

// Animation variants for services
const serviceVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

// Data array for Financial Advisory Services
const financialServices = [
  {
    title: "Financial Planning & Strategy",
    icon: <FaRegLightbulb className="text-4xl text-indigo-500 mb-4" />,
    image: "https://i.pinimg.com/736x/7a/23/3b/7a233b21322e1acceecceb8f4fc84d1e.jpg", // Replace with actual image URLs
    description: "We develop customized financial plans that align with your long-term goals and business vision."
  },
  {
    title: "Investment Advisory & Wealth Management",
    icon: <FaHandHoldingUsd className="text-4xl text-green-500 mb-4" />,
    image: "https://i.pinimg.com/564x/4b/7b/b7/4b7bb706ab17d9c5862a91f39570b3f6.jpg",
    description: "Our experts offer guidance on investment portfolios and wealth management strategies for sustainable growth."
  },
  {
    title: "Mergers & Acquisitions",
    icon: <FaHandshake className="text-4xl text-blue-500 mb-4" />,
    image: "https://i.pinimg.com/564x/ec/fc/01/ecfc01622d9c5021096496e606fcc82a.jpg",
    description: "We assist businesses with strategic mergers, acquisitions, and due diligence to unlock new opportunities."
  },
  {
    title: "Corporate Finance & Restructuring",
    icon: <FaChartPie className="text-4xl text-purple-500 mb-4" />,
    image: "https://i.pinimg.com/736x/65/a9/af/65a9afd9dd56ca4759b03220f8c1c547.jpg",
    description: "Our team helps businesses restructure finances to improve liquidity and financial health."
  },
  {
    title: "Risk Management & Hedging",
    icon: <FaShieldAlt className="text-4xl text-red-500 mb-4" />,
    image: "https://i.pinimg.com/564x/da/d7/6f/dad76f6b48569728d934bfa376c78e69.jpg",
    description: "We provide risk mitigation strategies and hedging solutions to safeguard financial performance."
  },
  {
    title: "Islamic Finance & Shariah Solutions",
    icon: <FaPrayingHands className="text-4xl text-yellow-500 mb-4" />,
    image: "https://i.pinimg.com/564x/45/22/da/4522da635abe73b7abdb0660702e53b1.jpg",
    description: "Our experts offer Shariah-compliant financial products and advisory services tailored to your needs."
  }
];

function FinancialAdvisoryServicesSection() {
  return (
    <div className="w-full bg-gray-50 py-16 px-6 md:px-16 lg:px-32">
      <div className="max-w-7xl mx-auto">
        {/* Main Heading */}
        <motion.h2 
          className="text-3xl md:text-4xl font-bold text-center mb-10 text-gray-800"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          Business & Financial Advisory Services
        </motion.h2>

        <motion.p 
          className="text-lg md:text-xl text-gray-700 leading-relaxed text-center mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
        At Abasin Consult, we provide expert guidance and innovative solutions to individuals, businesses, and institutions across Pakistan, Middle East, and Europe. With a team of seasoned professionals and a global network, we help clients navigate complex financial landscapes, achieve strategic objectives, and unlock sustainable growth. 
        </motion.p>

        {/* Services List Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {financialServices.map((service, index) => (
            <motion.div 
              key={index} 
              className="bg-white p-6 rounded-lg shadow-md"
              variants={serviceVariants}
              initial="hidden"
              animate="visible"
            >
              <img src={service.image} alt={service.title} className="rounded mb-4" />
              {service.icon}
              <h3 className="text-2xl font-semibold mb-4 text-indigo-600">{service.title}</h3>
              <p className="text-gray-700">{service.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Global Presence and Expertise Section */}
        <motion.div 
          className="mt-12 bg-white p-8 rounded-lg shadow-md"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl font-semibold mb-6 text-indigo-600">Global Expertise, Local Solutions</h3>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Whether you're a multinational corporation, SME, startup, or high net worth individual, our tailored advice and expertise empower you to make informed decisions, optimize financial performance, and achieve long-term success.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
           
As a global business advisory firm with offices in Pakistan, Europe and Middle East, we provide localized expertise and have the ability to advise on international best practices to clients worldwide.

          </p>
        </motion.div>

        {/* Business Advisory Benefits Section */}
        <motion.div 
          className="mt-12 bg-gray-100 p-8 rounded-lg shadow-md"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl font-semibold mb-6 text-indigo-600">Why Choose Abasin Consult?</h3>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>Achieve financial clarity and peace of mind</li>
            <li>Mitigate risks with effective management strategies</li>
            <li>Unlock growth opportunities for long-term success</li>
          </ul>
          <p className="text-lg text-gray-700 leading-relaxed mt-6">
            Abasin Consult leverages deep industry knowledge and technical expertise to deliver financial advisory services in areas including corporate finance, investment banking, and wealth management.
          </p>
        </motion.div>

        {/* Closing Paragraph */}
        <motion.div 
          className="mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-lg text-gray-700 leading-relaxed text-center">
            Our business advisory services are designed to help clients achieve financial clarity, mitigate risk, and unlock growth opportunities, delivering peace of mind and long-term prosperity.
          </p>
        </motion.div>
      </div>
    </div>
  );
}

export default FinancialAdvisoryServicesSection;