import { FaGavel, FaBuilding, FaHandshake, FaBalanceScale, FaMoneyBillWave, FaProjectDiagram, FaPowerOff, FaClipboardCheck, FaUserTie } from "react-icons/fa";
import { motion } from "framer-motion";

const serviceVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

// Data Array for services
const services = [
  {
    title: "Advocacy",
    icon: <FaGavel className="text-4xl text-blue-500 mb-4" />,
    image: "https://i.pinimg.com/564x/17/3d/26/173d26f156cefd69025fa4cffca04e43.jpg", // Replace with actual image URLs
    items: [
      "Supreme Court of Pakistan",
      "High Courts",
      "Tribunals",
      "Regulatory bodies",
      "Alternate Dispute Resolution forums"
    ]
  },
  {
    title: "Corporate Advisory",
    icon: <FaBuilding className="text-4xl text-green-500 mb-4" />,
    image: "https://i.pinimg.com/564x/a6/c2/15/a6c215e1830c5c181e20f0e9ce583f7e.jpg",
    items: [
      "Company formation and restructuring",
      "Joint ventures, partnerships, and collaborations",
      "Commercial agreements and contracts",
      "Corporate governance and compliance",
      "Shareholders' agreements"
    ]
  },
  {
    title: "Mergers and Acquisitions",
    icon: <FaHandshake className="text-4xl text-purple-500 mb-4" />,
    image: "https://i.pinimg.com/564x/74/90/c8/7490c86874c7d46a4c0daa0e047e4c8a.jpg",
    items: [
      "Strategic transactions and due diligence",
      "Acquisitions, disposals, and mergers",
      "Post-acquisition restructuring",
      "Joint ventures and partnerships"
    ]
  },
  {
    title: "Private Equity",
    icon: <FaBalanceScale className="text-4xl text-red-500 mb-4" />,
    image: "https://i.pinimg.com/564x/2e/df/3b/2edf3b6907f680153e6ef7e40d8ed3dc.jpg",
    items: [
      "Investments, exits, and fund formation",
      "Private equity transactions",
      "Venture capital and startup funding",
      "Fund governance and compliance"
    ]
  },
  {
    title: "Banking and Finance",
    icon: <FaMoneyBillWave className="text-4xl text-orange-500 mb-4" />,
    image: "https://i.pinimg.com/564x/c7/45/e3/c745e3dd2c6171729e1b9c764cd49108.jpg",
    items: [
      "Syndicated loans and project finance",
      "Debt capital markets transactions",
      "Securitization and leasing",
      "Financial regulations and compliance"
    ]
  },
  {
    title: "Project Finance",
    icon: <FaProjectDiagram className="text-4xl text-yellow-500 mb-4" />,
    image: "https://i.pinimg.com/564x/64/0f/05/640f0595da716001ffaa1699bf4447bd.jpg",
    items: [
      "Infrastructure development and PPPs",
      "Energy, power, and renewable energy projects",
      "Transportation and shipping projects",
      "Real estate and construction projects"
    ]
  },
  {
    title: "Power Sector",
    icon: <FaPowerOff className="text-4xl text-blue-600 mb-4" />,
    image: "https://i.pinimg.com/564x/32/34/c6/3234c66f1daebdd8eaeaf207fb327bb4.jpg",
    items: [
      "Renewable energy and power generation",
      "Transmission and distribution",
      "Energy policy and licensing",
      "Power purchase and fuel supply contracts"
    ]
  },
  {
    title: "Regulatory Compliance",
    icon: <FaClipboardCheck className="text-4xl text-teal-500 mb-4" />,
    image: "https://i.pinimg.com/564x/61/91/38/619138b1cda6cdab1b79ea3e64742688.jpg",
    items: [
      "Pakistani and international laws compliance",
      "Anti-money laundering and anti-bribery laws",
      "Data protection and cybersecurity laws"
    ]
  },
  {
    title: "Labor and Employment",
    icon: <FaUserTie className="text-4xl text-indigo-500 mb-4" />,
    image: "https://i.pinimg.com/564x/e7/6c/a4/e76ca41fd5488799cbf2df2ae1ba7cec.jpg",
    items: [
      "Compliance with labor laws of Pakistan",
      "Employment and labor contracts",
      "Labor and employee policies"
    ]
  }
];

function LegalServicesSection() {
  return (
    <div className="w-full bg-white py-16 px-6 md:px-16 lg:px-32">
      <div className="max-w-7xl mx-auto">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold text-center mb-10 text-gray-800"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          Legal Services
        </motion.h2>

        <motion.p 
          className="text-gray-600 text-lg md:text-xl leading-relaxed mb-8 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          At Abasin Consult, our seasoned legal professionals provide
          comprehensive and integrated legal solutions to domestic and
          international clients across a wide range of practice areas.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <motion.div 
              key={index} 
              className="bg-gray-50 p-6 rounded-lg shadow-md"
              variants={serviceVariants}
              initial="hidden"
              animate="visible"
            >
              <img src={service.image} alt={service.title} className="rounded mb-4" />
              {service.icon}
              <h3 className="text-2xl font-semibold mb-4 text-blue-800">{service.title}</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                {service.items.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.p 
          className="text-gray-600 mt-10 text-lg md:text-xl leading-relaxed mb-8 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          With a strong presence in Pakistan and a global network, our lawyers deliver tailored advice on cross-border transactions, international business, and local operations. We assist clients in navigating Pakistan's legal landscape and provide strategic counsel on global best practices.
        </motion.p>
      </div>
    </div>
  );
}

export default LegalServicesSection;