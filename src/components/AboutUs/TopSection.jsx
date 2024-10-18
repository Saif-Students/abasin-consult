import { FaGlobe, FaBalanceScale, FaChartLine, FaRegBuilding, FaRegHandshake } from "react-icons/fa";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, staggerChildren: 0.3 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

function TopSection() {
  return (
    <div className="w-full bg-gradient-to-b from-gray-100 to-gray-200 py-10 px-5 md:px-20">
      <motion.div 
        className="max-w-6xl mx-auto"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.h1 
          className="text-4xl md:text-5xl font-extrabold text-center text-gray-800 mb-8"
          variants={itemVariants}
        >
          About Us
        </motion.h1>

        <motion.div 
          className="flex justify-center mb-8"
          variants={itemVariants}
        >
          <img 
            src="https://cdn.pixabay.com/photo/2020/07/08/04/12/work-5382501_1280.jpg" 
            alt="Abasin Consult" 
            className="w-full md:w-2/3 rounded-lg shadow-lg"
          />
        </motion.div>

        <motion.p 
          className="text-gray-700 text-lg md:text-xl leading-relaxed mb-6 text-center"
          variants={itemVariants}
        >
          Abasin Consult is a collaborative and integrated global network of consulting firms providing comprehensive legal, tax, accounting, audit, and financial & business advisory services. With a strong presence in Pakistan, the UK, and the Middle East, our team of experts delivers tailored solutions to individuals, businesses, and organizations navigating complex regulatory landscapes. Leveraging our deep regional insights and global expertise, we facilitate seamless cross-border transactions, optimize financial performance, and mitigate risks. Whether you're expanding internationally, managing local operations, or seeking strategic guidance, our multidisciplinary approach and commitment to excellence ensure that you receive innovative, effective, and personalized support to achieve your goals.
        </motion.p>

        <motion.div 
          className="flex flex-col md:flex-row justify-around items-start md:items-center mb-8"
          variants={containerVariants}
        >
          <motion.div className="flex items-center space-x-4 mb-6 md:mb-0" variants={itemVariants}>
            <FaGlobe className="text-4xl text-blue-500" />
            <span className="text-xl font-semibold text-gray-700">Global Expertise</span>
          </motion.div>
          <motion.div className="flex items-center space-x-4 mb-6 md:mb-0" variants={itemVariants}>
            <FaBalanceScale className="text-4xl text-green-500" />
            <span className="text-xl font-semibold text-gray-700">Legal & Tax Services</span>
          </motion.div>
          <motion.div className="flex items-center space-x-4 mb-6 md:mb-0" variants={itemVariants}>
            <FaChartLine className="text-4xl text-red-500" />
            <span className="text-xl font-semibold text-gray-700">Financial Advisory</span>
          </motion.div>
        </motion.div>

        <motion.p 
          className="text-gray-700 text-lg md:text-xl leading-relaxed mb-6 text-center"
          variants={itemVariants}
        >
          Our offices in Pakistan, the UK, and the Middle East enable us to provide localized support in legal, tax, accounting, audit, and financial advisory services, facilitating international business and investment.
        </motion.p>

        <motion.div 
          className="flex flex-col md:flex-row justify-around items-start md:items-center"
          variants={containerVariants}
        >
          <motion.div className="flex items-center space-x-4 mb-6 md:mb-0" variants={itemVariants}>
            <FaRegBuilding className="text-4xl text-purple-500" />
            <span className="text-xl font-semibold text-gray-700">Business Optimization</span>
          </motion.div>
          <motion.div className="flex items-center space-x-4" variants={itemVariants}>
            <FaRegHandshake className="text-4xl text-yellow-500" />
            <span className="text-xl font-semibold text-gray-700">Strategic Partnerships</span>
          </motion.div>
        </motion.div>

        <motion.p 
          className="text-gray-700 text-lg md:text-xl leading-relaxed mt-8 text-center"
          variants={itemVariants}
        >
          At Abasin Consult, we empower individuals and businesses to focus on business growth and optimization through expert legal, tax, accounting, audit, and financial advisory services. Our solutions optimize financial performance, minimize risks, and maximize growth opportunities.
        </motion.p>
      </motion.div>
    </div>
  );
}

export default TopSection;
