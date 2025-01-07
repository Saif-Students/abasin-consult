import React from "react";
import { FaGlobe, FaBalanceScale, FaChartLine, FaRegBuilding, FaRegHandshake } from "react-icons/fa";
import { motion } from "framer-motion";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, staggerChildren: 0.3 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const responsive = {
  desktop: { breakpoint: { max: 3000, min: 1024 }, items: 1 },
  tablet: { breakpoint: { max: 1024, min: 464 }, items: 1 },
  mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
};


function TopSection() {
  return (
    <div className="w-full  py-10 px-5 md:px-20 bg-gradient-to-r from-blue-100 to-blue-50">
      <motion.div
        className="max-w-6xl mx-auto"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {/* Carousel Section */}
     

   
        
    
      </motion.div>
      <motion.div
        className="max-w-6xl mx-auto mt-"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
     
       
       {/* 3 services Cards here */}

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
          className="text-gray-700  text-lg md:text-xl leading-relaxed mt-8 text-center"
          variants={itemVariants}
        >
          At Abasin Consult, we empower individuals and businesses to focus on business growth and optimization through expert legal, tax, accounting, audit, and financial advisory services. Our solutions optimize financial performance, minimize risks, and maximize growth opportunities.
        </motion.p>

        {/* Why Choose Us Section */}
        <motion.h2
          className="text-3xl font-bold text-center mt-14  text-gray-800 mb-6"
          variants={itemVariants}
        >
          Why Choose Us
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={containerVariants}
        >
          <motion.div className="bg-white shadow-lg rounded-lg p-6" variants={itemVariants}>
            <h3 className="text-xl font-semibold mb-2">Holistic Solutions</h3>
            <p className="text-gray-700">
              We provide end-to-end solutions that combine legal, financial, and business expertise, ensuring a streamlined and efficient experience.
            </p>
          </motion.div>

          <motion.div className="bg-white shadow-lg rounded-lg p-6" variants={itemVariants}>
            <h3 className="text-xl font-semibold mb-2">Global Reach, Local Expertise</h3>
            <p className="text-gray-700">
              Our offices in multiple regions bring local regulatory insight combined with global best practices.
            </p>
          </motion.div>

          <motion.div className="bg-white shadow-lg rounded-lg p-6" variants={itemVariants}>
            <h3 className="text-xl font-semibold mb-2">Tailored Approach</h3>
            <p className="text-gray-700">
              Our multidisciplinary team customizes solutions to meet your unique challenges, ensuring personalized service at every stage.
            </p>
          </motion.div>

          <motion.div className="bg-white shadow-lg rounded-lg p-6" variants={itemVariants}>
            <h3 className="text-xl font-semibold mb-2">Innovative Strategies</h3>
            <p className="text-gray-700">
              Whether legal representation, financial planning, or business advisory, we employ cutting-edge tools and strategies for sustainable success.
            </p>
          </motion.div>
        </motion.div>

       

      </motion.div>
    </div>
  );
}

export default TopSection;
