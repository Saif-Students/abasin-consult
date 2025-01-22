import React from 'react'
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, staggerChildren: 0.3 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};
function HeroSection() {
  return (
    <div className='w-full bg-gradient-to-b from-gray-100 to-gray-200 py-10 px-5 md:px-20'>
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
          <mark> Coming Soon</mark>
        </motion.h1>
        </motion.div>
    </div>
  )
}

export default HeroSection
