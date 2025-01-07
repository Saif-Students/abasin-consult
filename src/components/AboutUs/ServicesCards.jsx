import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function ServicesCards() {
  const services = [
    {
      title: "Legal Services",
      description: "At Abasin Consult, our seasoned legal professionals provide comprehensive and integrated legal solutions to domestic and international clients.",
      image: "https://images.pexels.com/photos/290275/pexels-photo-290275.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      buttonText: "Learn More",
      buttonLink: "/services/legal",
    },
    {
      title: "Business & Financial Advisory",
      description: "Expert financial and business strategies to help you grow and succeed.",
      image: "https://images.pexels.com/photos/439414/pexels-photo-439414.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      buttonText: "Discover More",
      buttonLink: "/services/financial-advisory"
    },
    {
      title: "Taxation, Audit & Accounting",
      description: "Efficient tax, audit, and accounting solutions to simplify your finances.",
      image: "https://images.pexels.com/photos/10967617/pexels-photo-10967617.png?auto=compress&cs=tinysrgb&w=600&lazy=load",
      buttonText: "Get Started",
      buttonLink: "/services/tax",
    },
  ];

  return (
    <div className="flex flex-wrap justify-center gap-6 px-4 py-8 bg-gray-100 bg-gradient-to-r from-blue-100 to-blue-50">
      {services.map((service, index) => (
        <motion.div
          key={index}
          className="bg-white shadow-lg rounded-lg overflow-hidden w-full sm:w-[300px] md:w-[350px]"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.2 }}
          whileHover={{ scale: 1.05 }}
        >
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-[200px] object-cover"
          />
          <div className="p-6">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              {service.title}
            </h3>
            <p className="text-gray-600 mb-6">{service.description}</p>
            <Link to={service.buttonLink} className="w-full px-4 py-2 bg-[#850A07] text-white font-semibold rounded-lg hover:bg-[#850907b8] transition-colors">
              {service.buttonText}
            </Link>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

export default ServicesCards;
