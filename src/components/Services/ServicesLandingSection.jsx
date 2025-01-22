import React from 'react'
import { motion } from "framer-motion";
import ServicesCards from '../AboutUs/ServicesCards';
import { Link } from 'react-router-dom';


// Animation variants for services
const serviceVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

function ServicesLandingSection() {
  return (
    <div className="w-full bg-gradient-to-r from-blue-100 to-blue-50 py-16 ">
      {/* Hero Section */}
      <div className="text-center mb-12 px-6 md:px-10 lg:px-32">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Empowering Your Financial Success</h1>
        <p className="text-lg text-gray-600">Discover how our expertise can help you navigate financial complexities and achieve your goals.</p>
        {/* <motion.button 
          className="mt-6 px-6 py-3 bg-[#881214] text-white rounded-full text-lg shadow-lg hover:bg-[#881214b4]"
          whileHover={{ scale: 1.05 }}
        >
          <Link to="/services/legal">
          Get Started
          </Link>
        </motion.button> */}
      </div>

      <ServicesCards/>

      <div className='w-full px-6 md:px-10 lg:px-32'>
         {/* Additional Section */}
       <motion.div 
          className="mt-12 bg-white p-8 rounded-lg shadow-md"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl font-semibold mb-6 text-indigo-600">Our Expertise</h3>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Our team stays up-to-date with evolving tax laws, accounting standards, and regulatory requirements in Pakistan and internationally, ensuring clients receive:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>Expert guidance on Pakistan's Income Tax Ordinance, Sales Tax Act, and Federal Excise Act</li>
            <li>Compliance with International Financial Reporting Standards (IFRS) and Pakistan Accounting Standards (PAS)</li>
            <li>Assistance with tax filings, tax authority audits, inquiries, and disputes</li>
            <li>Streamlined accounting processes and financial management systems</li>
          </ul>

          <p className="text-lg text-gray-700 leading-relaxed mt-6">
            With offices in Pakistan and a global network, Abasin Consult delivers tailored solutions to multinational corporations, SMEs, startups, and individuals, helping them navigate complex financial landscapes, optimize tax efficiency, and achieve business growth.
          </p>
        </motion.div>

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

        {/* Service Benefits Section */}
        <motion.div 
          className="mt-12 bg-gray-50 p-8 rounded-lg shadow-md"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl font-semibold mb-6 text-indigo-600">Our Services Are Designed To:</h3>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>Improve financial transparency and governance</li>
            <li>Enhance risk management and internal controls</li>
            <li>Optimize tax efficiency and compliance</li>
            <li>Support business growth and expansion</li>
          </ul>

          <p className="text-lg text-gray-700 leading-relaxed mt-6">
            Discover how Abasin Consult can help your business achieve financial clarity, compliance, and success.
          </p>
        </motion.div>
      </div>
      

      {/* Footer CTA */}
      <div className="text-center mt-12">
        <motion.button 
          className="px-6 py-3 bg-[#881214] text-white rounded-full text-lg shadow-lg hover:bg-[#881214a5]"
          whileHover={{ scale: 1.05 }}
        >
          <Link to="/contact">
          Contact Us
          </Link>
        </motion.button>
      </div>
    </div>
  )
}

export default ServicesLandingSection
