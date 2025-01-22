import { FaBalanceScale, FaFileInvoiceDollar, FaChartLine, FaCalculator, FaMoneyCheckAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import {
  haroon_jan,
  asad_ijaz,
  muhammad_hadi,
  ali_awais,
  omar_majid,
  othman_shoukat,
  kristine_chong,
  sharjil_khwaja,
} from "../../assets/";
import { Link } from "react-router-dom";

// meet our team

const taxAuditAccountingTeam = [
  {
    id: "asad-ijaz",
    name: "Asad Ijaz, FCA",
    title: "Director Business and Risk Advisory Services",
    image: asad_ijaz,
    brief: "Asad is a fellow member of the Institute of Chartered Accountants of Pakistan having over thirteen years of diversified professional experience in strategy, corporate finance, business advisory transaction advisory, risk advisory, audit, accounting and taxation services.",
  },
  {
    id: "muhammad-nohman-khan",
    name: "Muhammad Nohman Khan, ACA",
    title: "Director Tax, Accounting and Audit",
    image: "https://i.pinimg.com/564x/82/a3/3a/82a33a43be59e913b58efbdfd64e281e.jpg",
    brief: "Nohman is an associate member of the Institute of Chartered Accountants of Pakistan, with nearly twelve years of diversified professional experience in audit, accounting, taxation, business and risk advisory services to various local and multinational clients in a variety of industries.",
  },
];

// Animation variants for services
const serviceVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

// Data array for Tax Services
const taxServices = [
  {
    title: "Taxation Advisory Services",
    icon: <FaFileInvoiceDollar className="text-4xl text-green-500 mb-4" />,
    image: "https://i.pinimg.com/736x/42/99/ab/4299ab2cbce392b17c6c22c77c63248a.jpg", // Replace with actual image URLs
    items: [
      "Corporate and individual tax planning and compliance",
      "Tax audits, appeals, and dispute resolution",
      "International tax planning and transfer pricing",
      "Sales tax, VAT, and customs duty advisory"
    ]
  },
  {
    title: "Audit Services",
    icon: <FaCalculator className="text-4xl text-blue-500 mb-4" />,
    image: "https://i.pinimg.com/564x/7b/e6/12/7be612d2cb3ac39d0327b1b77fbc0037.jpg",
    items: [
      "Statutory, internal, and special audits",
      "Financial statement preparation and review",
      "Risk assessment and internal control evaluation",
      "Compliance audits and regulatory reviews"
    ]
  },
  {
    title: "Accounting Services",
    icon: <FaChartLine className="text-4xl text-purple-500 mb-4" />,
    image: "https://i.pinimg.com/564x/a8/e7/56/a8e7568f6ae84fa0ffa1f444c345809c.jpg",
    items: [
      "Financial accounting and bookkeeping",
      "Financial reporting, analysis, and planning",
      "Budgeting, forecasting, and financial modeling",
      "Accounting system implementation and training"
    ]
  }
];

function TaxServicesSection() {
  return (
    <div className="w-full bg-gray-100 py-16 px-6 md:px-16 lg:px-32 bg-gradient-to-r from-blue-100 to-blue-50">
      <div className="max-w-7xl mx-auto">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold text-center mb-10 text-gray-800"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          Taxation, Audit, and Accounting Services
        </motion.h2>

        <motion.p 
          className="text-lg md:text-xl text-gray-700 leading-relaxed text-center mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          Our team of experienced tax, audit, and accounting professionals provides comprehensive and integrated services to individuals, businesses, and organizations in Pakistan and globally. Our expertise includes:
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {taxServices.map((service, index) => (
            <motion.div 
              key={index} 
              className="bg-white p-6 rounded-lg shadow-md"
              variants={serviceVariants}
              initial="hidden"
              animate="visible"
            >
              <img src={service.image} alt={service.title} className="rounded mb-4" />
              {service.icon}
              <h3 className="text-2xl font-semibold mb-4 text-green-700">{service.title}</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                {service.items.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

           <motion.h2
                          className="text-3xl md:text-4xl mt-20  font-bold text-center mb-10 text-gray-800"
                          initial={{ opacity: 0, y: -50 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.8 }}
                        >
                          Meet Our Team
                        </motion.h2>
                
                        {renderSection("", taxAuditAccountingTeam)}

        {/* Additional Section */}
        {/* <motion.div 
          className="mt-12 bg-white p-8 rounded-lg shadow-md"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl font-semibold mb-6 text-green-700">Our Expertise</h3>
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
        </motion.div> */}

        {/* Service Benefits Section */}
        {/* <motion.div 
          className="mt-12 bg-gray-50 p-8 rounded-lg shadow-md"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl font-semibold mb-6 text-green-700">Our Services Are Designed To:</h3>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>Improve financial transparency and governance</li>
            <li>Enhance risk management and internal controls</li>
            <li>Optimize tax efficiency and compliance</li>
            <li>Support business growth and expansion</li>
          </ul>

          <p className="text-lg text-gray-700 leading-relaxed mt-6">
            Discover how Abasin Consult can help your business achieve financial clarity, compliance, and success.
          </p>
        </motion.div> */}
      </div>
    </div>
  );

  
  function renderSection(title, team) {
    return (
      <div className="mb-12">
        <h3 className="text-2xl font-bold text-gray-800 mb-6">{title}</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {team.map((member, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <img src={member.image} alt={member.name} className="w-full object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-indigo-600 mb-2">{member.name}</h3>
                <p className="text-sm text-gray-500 mb-4">{member.title}</p>
                <p className="text-gray-700 text-sm leading-relaxed">{member.brief}</p>
                <Link to={`/profile/${member.id}`} className="text-indigo-500 hover:text-indigo-700 mt-4 inline-block">
                See More
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    );
  }
  
}

export default TaxServicesSection;
