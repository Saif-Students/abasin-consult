import { FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion"; // Import Framer Motion

// Animation variants for cards
const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

function Address() {
  return (
    <div className="w-full px-4 sm:px-8 md:px-16 py-16 lg:py-28 bg-gradient-to-r from-blue-100 to-blue-50">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center text-blue-800 mb-16">
        Contact Us
      </h2>

      <div className="max-w-7xl mx-auto grid grid-cols-1 gap-12">
        {/* Islamabad Office */}
        <motion.div
          className="bg-white w-full p-8 shadow-lg rounded-xl hover:shadow-2xl transition-shadow transform hover:-translate-y-2 duration-300"
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          <h3 className="text-2xl font-semibold mb-6 text-blue-800">
            Islamabad Office
          </h3>
          <p className="text-gray-600 flex items-center gap-3 mb-4">
            <FaMapMarkerAlt className="text-blue-600" /> No. 76, Street 55, MPCHS, E-11/3, Islamabad
          </p>
          <p className="text-gray-600 flex items-center gap-3 mb-4">
            <FaPhone className="text-blue-600" /> 051-843-1474 / 051-843-1465
          </p>
          <p className="text-gray-600 flex items-center gap-3 mb-4">
            <FaPhone className="text-blue-600" /> 0317-7900148
          </p>
          <p className="text-gray-600 flex items-center gap-3">
            <FaEnvelope className="text-blue-600" /> Info@abasinconsult.com
          </p>
        </motion.div>
      </div>
    </div>
  );
}

export default Address;
