import { FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion"; // Import Framer Motion

// Animation variants for cards
const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

function Address() {
  return (
    <div className="w-full px-4 sm:px-8 md:px-16 py-16 lg:py-28 bg-gray-100 bg-gradient-to-r from-blue-100 to-blue-50">
      <h2 className="text-2xl sm:text-3xl md:text-4xl leading-normal font-semibold text-center text-primary-color mb-12">
        Contact Us
      </h2>

      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-12">
        {/* Islamabad Office */}
        <motion.div
          className="bg-white p-6 shadow-lg rounded-lg hover:shadow-2xl transition-shadow"
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }} // Animate when in view
        >
          <h3 className="text-xl font-bold mb-4 text-primary-color">
            Islamabad Office
          </h3>
          <p className="text-gray-700 flex items-center gap-3">
            <FaMapMarkerAlt /> No. 76, Street 55, MPCHS, E-11/3, Islamabad
          </p>
          <p className="text-gray-700 flex items-center gap-3 mt-2">
            <FaPhone /> 051-843-1474 / 051-843-1465
          </p>
          <p className="text-gray-700 flex items-center gap-3 mt-2">
            <FaPhone /> 0317-7900148
          </p>
          <p className="text-gray-700 flex items-center gap-3 mt-2">
            <FaEnvelope /> coming soon
          </p>
        </motion.div>

        {/* Lahore Office */}
        <motion.div
          className="bg-white p-6 shadow-lg rounded-lg hover:shadow-2xl transition-shadow"
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }} // Animate when in view
        >
          <h3 className="text-xl font-bold mb-4 text-primary-color">
            Lahore Office
          </h3>
          <p className="text-gray-700 flex items-center gap-3">
            <FaMapMarkerAlt /> No. 10C, Upper Mall Scheme, Lahore
          </p>
          <p className="text-gray-700 flex items-center gap-3 mt-2">
            <FaPhone /> 0317-5099555
          </p>
          <p className="text-gray-700 flex items-center gap-3 mt-2">
            <FaEnvelope /> coming soon
          </p>
        </motion.div>
      </div>
    </div>
  );
}

export default Address;
