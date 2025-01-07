// profilesection.jsx
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
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

function OurPeopleSection() {
  const legalTeam = [
    {
      id:"haroon-jan-baryalay",

      name: "Haroon Jan Baryalay",
      title: "Managing Partner & Director Legal Services – Pakistan",
      image: haroon_jan,
      brief: "Haroon is an advocate of the High Courts of Pakistan with over 18 years of experience advising clients on corporate transactional matters. Haroon has over 11 years’ experience working in Pakistan and has spent 7 years working at various regional and international law firms in Dubai, United Arab Emirates. Haroon specializes in corporate transactional advisory including general corporate, mergers & acquisitions, ",
    },
    {
      id:"ali-awais",
      name: "Ali Awais",
      title: "Director Legal Services – Pakistan",
      image: ali_awais,
      brief: "Ali Awais has 25 years of working with top tier international law firms and multilateral organizations,",
    },
  ];

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

  const businessAdvisoryTeam = [
    {
      id: "muhammad-habib",
      name: "Muhammad Habib, CFA, ACCA",
      title: "Director Business and Financial Advisory Services",
      image: "https://i.pinimg.com/564x/82/a3/3a/82a33a43be59e913b58efbdfd64e281e.jpg",
      brief: "Muhammad has over eleven years of professional experience in investment analysis and management, financial consultancy, accounting and external audits. He specializes in private equity real estate investments, risk management, financial analysis and modelling, mergers and acquisitions and portfolio management.",
    },
    {
      id: "farrukh-ansari",
      name: "Farrukh Ansari",
      title: "Director Business & Financial Advisory – Pakistan ",
      image: "https://i.pinimg.com/564x/82/a3/3a/82a33a43be59e913b58efbdfd64e281e.jpg",
      brief: "",
    },
    {
      id: "othman-shaukat",
      name: "Othman Shaukat",
      title: "Director Business & Financial Advisory – UK, Europe and Middle East ",
      image: othman_shoukat,
      brief: "Othman focuses on scaling up businesses and turnarounds. Othman has end-to-end deal cycle experience. Prior to joining Salonica, Othman worked at KPMG within Transactions & Restructuring, specialising in M&A and Restructuring. ",
    },
    {
      id: "omar-majid",
      name: "Omar Majid",
      title: "Director Business & Financial Advisory – UK, Europe and Middle East",
      image: omar_majid,
      brief: "Omar focuses on sourcing companies and fundraising across the UK and EMEA. Prior to joining Salonica, Omar was a Director at RBS within Debt Capital Markets.",
    },
    {
      id: "kristine-chong",
      name: "Kristine Chong",
      title: "Associate Director",
      image: kristine_chong,
      brief: "Omar focuses on sourcing companies and fundraising across the UK and EMEA. Prior to joining Salonica, Omar was a Director at RBS within Debt Capital Markets.Kristine has extensive end-to-end deal cycle experience. Prior to joining Salonica in 2019, Kristine worked at KPMG within Transactions & Restructuring specialising in M&A and Strategy. ",
    },
  ];

  const transactionAdvisoryTeam = [
    {
      id: "sharjeel-khwaja",
      name: "Sharjeel Khwaja",
      title: "Director Transaction Advisory & Business Development – Pakistan ",
      image: sharjil_khwaja,
      brief: "A seasoned Energy Business Development and Strategy executive with over 20 years of experience in the energy industry, Sharjil  combines strategic vision, ",
    },
    {
      id: "muhammad-hadi",
      name: "Muhammad Hadi",
      title: "Director Transaction Advisory & Business Development – Middle East",
      image: muhammad_hadi,
      brief: "Mohammad Hadi is a senior banking executive and startup entrepreneur with extensive experience in investments and an MBA from Columbia Business School.  ",
    },
  ];

  return (
    <motion.div
      className="w-full bg-gray-50 py-16 px-6 md:px-16 lg:px-32 bg-gradient-to-r from-blue-100 to-blue-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-10 text-gray-800"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Meet Our Team
        </motion.h2>

        <motion.p
          className="text-lg md:text-xl text-gray-700 leading-relaxed text-center mb-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Meet our team of seasoned professionals, united by a shared passion for delivering exceptional legal, tax, audit, and business advisory services. Our experts, with decades of collective experience, provide tailored guidance to individuals, businesses, and organizations navigating complex regulatory landscapes.
        </motion.p>

        <div className="mb-12">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Our team comprises:</h3>
          <ul className="list-disc list-inside text-gray-700 leading-relaxed">
            <li>Experienced lawyers with expertise in corporate law, dispute resolution, and cross-border transactions</li>
            <li>Chartered accountants and certified auditors ensuring financial accuracy and compliance</li>
            <li>Tax specialists well-versed in Pakistani and international tax laws</li>
            <li>Business advisors with a track record of driving growth and optimization</li>
            <li>Industry specialists in real estate, manufacturing, technology, energy, and financial services</li>
          </ul>
        </div>

        {/* Legal Services Section */}
        {renderSection("Legal Services", legalTeam)}

        {/* Tax, Audit, and Accounting Section */}
        {renderSection("Tax, Audit, and Accounting Services", taxAuditAccountingTeam)}

        {/* Business and Financial Advisory Section */}
        {renderSection("Business and Financial Advisory Services", businessAdvisoryTeam)}

        {/* Transaction Advisory & Business Development Section */}
        {renderSection("Transaction Advisory & Business Development", transactionAdvisoryTeam)}

        {/* Expertise Section */}
        <motion.div
          className="bg-gray-100 p-8 rounded-lg shadow-md mb-12"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Our experts have worked with:</h3>
          <ul className="list-disc list-inside text-gray-700 leading-relaxed mb-6">
            <li>Multinational corporations and SMEs</li>
            <li>Startups and entrepreneurial ventures</li>
            <li>Government entities and non-profit organizations</li>
            <li>High-net-worth individuals and family offices</li>
          </ul>
          <h3 className="text-2xl font-bold text-gray-800 mb-4">With diverse backgrounds and expertise, our team provides:</h3>
          <ul className="list-disc list-inside text-gray-700 leading-relaxed">
            <li>Integrated solutions combining legal, tax, audit, and accounting expertise</li>
            <li>Personalized advice and responsive service</li>
            <li>In-depth industry knowledge and regulatory insights</li>
            <li>Global perspective with local expertise</li>
          </ul>
        </motion.div>
        {/* Final Section */}
        <motion.div
          className="bg-gray-100 p-8 rounded-lg shadow-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            At Abasin Consult, our team is committed to delivering exceptional service, innovative solutions, and lasting value to our clients.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            Discover how our team's expertise can help you achieve your goals.
          </p>
        </motion.div>
      </div>
    </motion.div>
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

export default OurPeopleSection;
