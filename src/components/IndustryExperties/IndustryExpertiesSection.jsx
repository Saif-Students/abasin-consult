import { FaIndustry, FaBuilding, FaWarehouse, FaLaptopCode, FaLightbulb, FaHandshake, FaLandmark, FaBatteryFull } from "react-icons/fa";
import { motion } from "framer-motion";

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const industries = [
  {
    name: "Food & Beverage",
    icon: <FaIndustry className="text-4xl text-red-500 mb-4" />,
    image: "https://i.pinimg.com/564x/71/15/19/711519f23e827ab0fa5efe4a77b80eaa.jpg",
  },
  {
    name: "Hospitality",
    icon: <FaBuilding className="text-4xl text-indigo-500 mb-4" />,
    image: "https://i.pinimg.com/564x/30/3f/6b/303f6b05a443a8057eb2e2edb12b72cb.jpg",
  },
  {
    name: "Real Estate & Construction",
    icon: <FaWarehouse className="text-4xl text-green-500 mb-4" />,
    image: "https://i.pinimg.com/564x/65/42/3f/65423f429769fc5b2d9fb2adc31137a4.jpg",
  },
  {
    name: "FMCG, Manufacturing & Pharmaceuticals",
    icon: <FaWarehouse className="text-4xl text-purple-500 mb-4" />,
    image: "https://i.pinimg.com/736x/0e/68/30/0e683064d73da2109dbdabe4d36be96a.jpg",
  },
  {
    name: "Technology & Fintech",
    icon: <FaLaptopCode className="text-4xl text-blue-500 mb-4" />,
    image: "https://i.pinimg.com/736x/bc/01/d8/bc01d892e9da3f9caf23d873fe7486f7.jpg",
  },
  {
    name: "Financial Institutions & Non-Banking Finance Companies",
    icon: <FaLightbulb className="text-4xl text-yellow-500 mb-4" />,
    image: "https://i.pinimg.com/564x/11/91/c2/1191c215e4e5d4f9deb3bfbe544313c2.jpg",
  },
  {
    name: "Government Sector & Public-Private Partnerships",
    icon: <FaLandmark className="text-4xl text-teal-500 mb-4" />,
    image: "https://i.pinimg.com/564x/a9/4d/de/a94ddef7eb7cf9f30e78304ed3e56926.jpg",
  },
  {
    name: "Energy & Power",
    icon: <FaBatteryFull className="text-4xl text-orange-500 mb-4" />,
    image: "https://i.pinimg.com/564x/55/d4/72/55d4726687763748f44e4f7b10c0a5d4.jpg",
  },
];

function IndustryExpertiseSection() {
  return (
    <div className="w-full bg-gray-50 py-16 px-6 md:px-16 lg:px-32 bg-gradient-to-r from-blue-100 to-blue-50">
      <div className="max-w-7xl mx-auto">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold text-center mb-10 text-gray-800"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          Industry Expertise
        </motion.h2>

        <motion.p 
          className="text-lg md:text-xl text-gray-700 leading-relaxed text-center mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          Abasin Consult possesses deep industry knowledge and expertise, enabling us to provide tailored services to clients across various sectors. Our team understands the unique challenges and opportunities across a wide range of industries.
        </motion.p>

        {/* Industry List with Images and Icons */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-12">
          {industries.map((industry, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
            >
              <img
                src={industry.image}
                alt={industry.name}
                className="w-full h-40 object-cover"
              />
              <div className="p-6 text-center">
                {/* {industry.icon} */}
                <h3 className="text-xl font-semibold text-indigo-600 mb-2">
                  {industry.name}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Expertise Benefits Section */}
        <motion.div 
          className="bg-white p-8 rounded-lg shadow-md mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl font-semibold mb-6 text-indigo-600">
            Our Industry Expertise Enables Us To:
          </h3>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>Provide insightful advice on industry-specific challenges</li>
            <li>Identify opportunities for growth and optimization</li>
            <li>Develop innovative solutions tailored to each sector</li>
            <li>Facilitate collaboration and networking within industries</li>
            <li>Stay updated on regulatory changes and industry trends</li>
          </ul>
        </motion.div>

        {/* Closing Section */}
        <motion.div 
          className="bg-gray-100 p-8 rounded-lg shadow-md"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Whether you're a multinational corporation, SME, startup, or non-profit organization, our industry expertise ensures you receive relevant, effective, and personalized guidance to achieve your goals.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            Our team has worked with prominent clients in each industry, delivering:
          </p>
          <ul className="list-disc pl-6 space-y-2 mt-4 text-gray-700">
            <li>Strategic guidance</li>
            <li>Operational efficiency</li>
            <li>Regulatory compliance</li>
            <li>Financial optimization</li>
            <li>Innovative solutions</li>
          </ul>
        </motion.div>

        <motion.div 
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-lg text-gray-700 leading-relaxed">
            Discover how our industry expertise can help you thrive in your sector.
          </p>
        </motion.div>
      </div>
    </div>
  );
}

export default IndustryExpertiseSection;
