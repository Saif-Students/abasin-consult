// MeetOurTeam.js
import { motion } from "framer-motion";
import {haroonjan} from "../../assets/"
function OurPeopleSection() {
    const legalTeam = [
      {
        name: "Haroon Jan Baryalay",
        title: "Managing Partner & Director Legal Services – Pakistan",
        image: haroonjan,
        brief: "Experienced in corporate law, dispute resolution, and cross-border transactions.",
      },
      {
        name: "Ali Awais",
        title: "Director Legal Services – Pakistan",
        image: "https://via.placeholder.com/150?text=Ali+Awais",
        brief: "Specializes in business law, regulatory frameworks, and corporate compliance.",
      },
    ];
  
    const taxAuditAccountingTeam = [
      {
        name: "Asad Ijaz",
        title: "Director Tax, Accounting, and Audit – Pakistan and Global Services",
        image: "https://via.placeholder.com/150?text=Asad+Ijaz",
        brief: "Chartered accountant with expertise in audit, taxation, and financial planning.",
      },
    ];
  
    const businessAdvisoryTeam = [
      {
        name: "Farrukh Ansari",
        title: "Director Business & Financial Advisory – Pakistan",
        image: "https://via.placeholder.com/150?text=Farrukh+Ansari",
        brief: "Provides strategic business advisory services to optimize operations.",
      },
      {
        name: "Othman Shaukat",
        title: "Director Business & Financial Advisory – UK, Europe, Middle East",
        image: "https://via.placeholder.com/150?text=Othman+Shaukat",
        brief: "Expert in cross-border financial advisory and market development.",
      },
      {
        name: "Omar Majid",
        title: "Director Business & Financial Advisory – UK, Europe, Middle East",
        image: "https://via.placeholder.com/150?text=Omar+Majid",
        brief: "Specializes in financial strategy and business transformation.",
      },
    ];
  
    const transactionAdvisoryTeam = [
      {
        name: "Sharjeel Khwaja",
        title: "Director Transaction Advisory & Business Development – Pakistan",
        image: "https://via.placeholder.com/150?text=Sharjeel+Khwaja",
        brief: "Expert in mergers, acquisitions, and transaction advisory.",
      },
      {
        name: "Muhammad Hadi",
        title: "Director Transaction Advisory & Business Development – Middle East",
        image: "https://via.placeholder.com/150?text=Muhammad+Hadi",
        brief: "Focuses on business development and advisory services for the Middle East.",
      },
    ];
  
    return (
      <motion.div 
        className="w-full bg-gray-50 py-16 px-6 md:px-16 lg:px-32"
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
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Our team comprises:
            </h3>
            <ul className="list-disc list-inside text-gray-700 leading-relaxed">
              <li>Experienced lawyers with expertise in corporate law, dispute resolution, and cross-border transactions</li>
              <li>Chartered accountants and certified auditors ensuring financial accuracy and compliance</li>
              <li>Tax specialists well-versed in Pakistani and international tax laws</li>
              <li>Business advisors with a track record of driving growth and optimization</li>
              <li>Industry specialists in real estate, manufacturing, technology, and financial services</li>
            </ul>
          </div>
  
          {/* Legal Services Section */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Legal Services</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {legalTeam.map((member, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
                  initial={{ opacity: 0, y: 30 }} 
                  animate={{ opacity: 1, y: 0 }} 
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                >
                  <img src={member.image} alt={member.name} className="w-full  object-cover" />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-indigo-600 mb-2">{member.name}</h3>
                    <p className="text-sm text-gray-500 mb-4">{member.title}</p>
                    <p className="text-gray-700 text-sm leading-relaxed">{member.brief}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
  
          {/* Tax, Audit, and Accounting Section */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Tax, Audit, and Accounting Services</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {taxAuditAccountingTeam.map((member, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
                  initial={{ opacity: 0, y: 30 }} 
                  animate={{ opacity: 1, y: 0 }} 
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                >
                  <img src={member.image} alt={member.name} className="w-full h-40 object-cover" />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-indigo-600 mb-2">{member.name}</h3>
                    <p className="text-sm text-gray-500 mb-4">{member.title}</p>
                    <p className="text-gray-700 text-sm leading-relaxed">{member.brief}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
  
          {/* Business and Financial Advisory Section */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Business and Financial Advisory Services</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {businessAdvisoryTeam.map((member, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
                  initial={{ opacity: 0, y: 30 }} 
                  animate={{ opacity: 1, y: 0 }} 
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                >
                  <img src={member.image} alt={member.name} className="w-full h-40 object-cover" />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-indigo-600 mb-2">{member.name}</h3>
                    <p className="text-sm text-gray-500 mb-4">{member.title}</p>
                    <p className="text-gray-700 text-sm leading-relaxed">{member.brief}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
  
          {/* Transaction Advisory & Business Development Section */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Transaction Advisory & Business Development</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {transactionAdvisoryTeam.map((member, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
                  initial={{ opacity: 0, y: 30 }} 
                  animate={{ opacity: 1, y: 0 }} 
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                >
                  <img src={member.image} alt={member.name} className="w-full h-40 object-cover" />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-indigo-600 mb-2">{member.name}</h3>
                    <p className="text-sm text-gray-500 mb-4">{member.title}</p>
                    <p className="text-gray-700 text-sm leading-relaxed">{member.brief}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
  
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
              <li>High net worth individuals and family offices</li>
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
}

export default OurPeopleSection;
