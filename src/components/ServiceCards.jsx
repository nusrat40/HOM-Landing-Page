import React from "react";
import { motion } from "framer-motion";

const services = [
  {
    title: "Lack of Innovation in Growth?",
    description: "We drive Growth through tech, data, and strategy.",
    highlight: "Growth",
  },
  {
    title: "Weak Brand Identity?",
    description: "We craft bold Branding with standout content.",
    highlight: "Branding",
  },
  {
    title: "Inefficient Operations?",
    description: "We optimize processes with streamlined Strategies.",
    highlight: "Strategies",
  },
  {
    title: "Outdated Websites & Apps?",
    description: "We build modern, high-performance Websites and Apps.",
    highlight: "Websites and Apps",
  },
  {
    title: "Unclear Marketing Strategy?",
    description: "We design data-driven marketing strategies.",
    highlight: "Marketing Strategies",
  },
  {
    title: "Poor Data Utilization?",
    description: "We boost growth through analytics and insights.",
    highlight: "Data Utilization",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (index) => ({
    opacity: 1,
    y: 0,
    transition: { delay: index * 0.2, duration: 0.6, ease: "easeOut" },
  }),
};

const ServiceCards = () => {
  return (
    <div className="py-12 px-4">
      <h2 className="text-3xl font-bold text-center mb-8">Our Services</h2>
      <motion.div 
        className="grid md:grid-cols-3 gap-6"
        initial="hidden"
        animate="visible"
      >
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="rounded-lg overflow-hidden shadow-lg"
            variants={cardVariants}
            custom={index}
            whileHover={{ scale: 1.05 }}
          >
            {/* Top Black Section */}
            <div className="bg-black text-white p-6 text-xl font-semibold">
              {service.title}
            </div>

            {/* Bottom White Section */}
            <div className="bg-white text-black p-6 text-md font-medium">
              {service.description.split(service.highlight)[0]}
              <span className="text-blue-600 font-bold">{service.highlight}</span>
              {service.description.split(service.highlight)[1]}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default ServiceCards;
