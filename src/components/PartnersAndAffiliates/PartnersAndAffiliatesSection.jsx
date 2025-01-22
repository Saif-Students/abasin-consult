// AssociatedMemberFirms.js
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function PartnersAndAffiliatesSection() {
  const memberFirms = [
    {
      id: "baryalay-law",
      name: "Baryalay.law",
      description:
        "Baryalay.law is an advocacy and corporate legal advisory firm with offices in Islamabad and Lahore. The managing partner of the firm, Haroon Jan Baryalay, has over 18 years’ experience working in Pakistan and Dubai in corporate, commercial, banking and finance, Islamic finance, M&A, private equity, regulatory, power and financial sectors. At Baryalay.law, we provide tailored solutions to our client’s needs, with a deep understanding of the legal and commercial landscape in Pakistan. ",
      website: "www.baryalay-law.com",
      expertise: [
        "Corporate and Commercial Law",
        "Mergers and Acquisitions",
        "Private Equity and Venture Capital",
        "Banking and Finance",
        "Project Finance and Infrastructure Development",
        "Power Sector and Renewable Energy",
        "Regulatory Compliance and Policy",
        "Advocacy and Dispute Resolution",
        "Inward & outward foreign investment and foreign exchange regulations",
        "General Corporate Advisory Services",
      ],
    },
    {
      id: "awaislaw-drt",
      name: "Awaislaw DRT",
      description:
        "AwaisLaw DRT is a litigation, banking, corporate and commercial law firm, which provides full range of legal services, including advisory work, consultancy and dispute-resolution, to Pakistani and international businesses, organizations, and institutions. We have been in the business of providing top qualityand high-profile legal advice since 1973. We are a litigation, corporate and commercial law firm, which provides full range of legal services, including advisory work, consultancy and dispute-resolution, to Pakistani and international businesses, organizations, and institutions. We have been in the business of providing top-quality and high profile legal advice since 1973.",
      website: "www.awaislaw.com",
    },
    // {
    //   id: "ijara-capital",
    //   name: "Ijara Capital",
    //   description:
    //     "",
    //   website: "www.ijara.com.pk",
    // },
    {
      id: "salonica-group",
      name: "Salonica Group",
      description:
        "Salonica Group is an independent Investment Bank combining bespoke Investment Banking and Advisory Services with a Private Office. We are regulated by the Financial Conduct Authority (FCA).",
      website: "www.salonica-group.com",
    },
    {
      id: "asad-ijaz",
      name: "Asad Ijaz & Co",
      description:
        "Asad Ijaz & Co. (hereinafter referred to as “the firm”) is a firm of independent accountants offering audit and assurance, internal audit, accounting, business advisory, taxation and corporate services to a wide range of industries.",
      website: "www.aic.com.pk",
    },
    // {
    //   id: "muhammad-hadi",
    //   name: "Muhammad Hadi",
    //   description:
    //     "Providing business advisory and development services in the UAE (Dubai).",
    //   website: "N/A",
    // },
    // {
    //   id: "sharjeel-khawja",
    //   name: "Sharjeel Khwaja",
    //   description:
    //     "Providing transaction advisory and business development services in Islamabad, Pakistan.",
    //   website: "N/A",
    // },
  ];
  function truncateText(text, limit) {
    return text.length > limit ? text.substring(0, limit) + "..." : text;
  }
  

  return (
    <motion.div
      className="w-full bg-gray-50 py-16 px-6 md:px-16 lg:px-32 bg-gradient-to-r from-blue-100 to-blue-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Title Section */}
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-10 text-gray-800"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Our Associated Member Firms / Partners And Affiliates
        </motion.h2>

        <motion.p
          className="text-lg md:text-xl text-gray-700 leading-relaxed text-center mb-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          At Abasin Consult, our global network consists of independent yet
          closely integrated member firms, each providing exceptional legal,
          tax, audit, accounting, and business & financial advisory services in
          their respective regions. Our member firms share a common commitment
          to excellence, innovation, and client satisfaction.
        </motion.p>

        {/* Associated Member Firms Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-12">
          {memberFirms.map((firm, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="p-6">
                <h3 className="text-xl font-semibold text-indigo-600 mb-2">
                  {firm.name}
                </h3>
                <p className="text-gray-700 text-sm leading-relaxed mb-4">
                  {truncateText(firm.description, 100)}
                </p>
                <button className="text-indigo-500 hover:text-indigo-700 underline text-sm">
                  <Link to={`/partners-and-affiliates/${firm.id}`}>See More</Link>
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Local Expertise Section */}
        <motion.div
          className="bg-gray-100 p-8 rounded-lg shadow-md mb-12"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            Each Associated Member Firm is:
          </h3>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Locally owned and operated</li>
            <li>Staffed by experienced professionals</li>
            <li>Well-versed in local regulations and industry practices</li>
            <li>Committed to delivering personalized service</li>
          </ul>
        </motion.div>

        {/* Service Delivery Section */}
        <motion.div
          className="bg-white p-8 rounded-lg shadow-md mb-12"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            Through Our Associated Member Firms, We Provide:
          </h3>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Global reach with local expertise</li>
            <li>Seamless cross-border services</li>
            <li>Consistent quality and standards</li>
            <li>Access to international best practices</li>
          </ul>
        </motion.div>

        {/* Benefits Section */}
        <motion.div
          className="bg-gray-100 p-8 rounded-lg shadow-md"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            Benefits of Our Associated Member Firm Network:
          </h3>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Global expertise, local delivery</li>
            <li>Coordinated services across borders</li>
            <li>Shared knowledge and best practices</li>
            <li>Enhanced resources and capabilities</li>
            <li>Personalized attention and responsiveness</li>
          </ul>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default PartnersAndAffiliatesSection;
