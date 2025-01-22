import React from "react";
import { motion } from "framer-motion";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Link } from "react-router-dom";

function CarouselSection() {
  const carouselItems = [
    {
      title: "Global Expertise",
      description: [
        "Integrated legal, tax, and financial advisory services for a global marketplace",
        
      ],
      buttonLink: "/services",
      backgroundImage:
        "https://cdn.pixabay.com/photo/2023/03/11/15/28/building-7844703_1280.jpg",
    },
    {
      title: "Legal Services",
      description: [
        ""
 
      
      ],
      buttonLink: "/services/legal",
      backgroundImage:
        "https://cdn.pixabay.com/photo/2022/12/28/21/10/streets-7683842_1280.jpg",
    },
    {
      title: " Taxation, Audit, and Accounting Services",
      description: [
        ""
      ],
      buttonLink: "/services/tax",
      backgroundImage:
        "https://images.pexels.com/photos/462331/pexels-photo-462331.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      title: " Business & Financial Advisory Services",
      description: [
      ""
      ],
      buttonLink: "/services/financial-advisory",
      backgroundImage:
        "https://cdn.pixabay.com/photo/2016/11/29/09/16/architecture-1868667_1280.jpg",
    },
  ];

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1024 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 1024, min: 768 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 768, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };
  

  return (
    <div className="w-full h-screen bg-gradient-to-b from-gray-100 to-gray-200">
      <Carousel
        responsive={responsive}
        infinite
        autoPlay
        autoPlaySpeed={4000}
        keyBoardControl
        containerClass="h-full"
        itemClass="h-full"
      >
        {carouselItems.map((item, index) => (
          <div
            key={index}
            className="relative h-full bg-cover bg-center"
            style={{
              backgroundImage: `url("${item.backgroundImage}")`,
              height: "100vh",
              width: "100%",
            }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white px-4">
              <motion.h2
                className="text-3xl md:text-5xl text-center font-bold mb-4"
                variants={textVariants}
                initial="hidden"
                animate="visible"
              >
                {item.title}
              </motion.h2>
              <motion.ul
                className="space-y-2 text-base md:text-lg text-center"
                variants={textVariants}
                initial="hidden"
                animate="visible"
                transition={{ delay: 0.2 }}
              >
                {item.description.map((desc, i) => (
                  <li key={i}>{desc}</li>
                ))}
              </motion.ul>
              <Link
              to={item.buttonLink}
                className="mt-6 px-6 py-2 bg-[#870401] hover:bg-[#870301b3] text-white font-semibold rounded-lg shadow-md border-white border-[2px]"
                variants={textVariants}
                initial="hidden"
                animate="visible"
                transition={{ delay: 0.4 }}
              >
                Learn More
              </Link>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
}

export default CarouselSection;
