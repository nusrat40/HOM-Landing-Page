import React from "react";
import { motion } from "framer-motion";

const plans = [
  {
    name: "Startup",
    price: "$19/mo",
    description: "Perfect for startups looking to establish a solid brand presence.",
    features: ["Brand Identity", "Basic Website", "Marketing Strategy"],
  },
  {
    name: "Growth",
    price: "$49/mo",
    description: "For growing businesses focused on scaling their operations.",
    features: ["Advanced Branding", "SEO & Analytics", "Growth Strategy"],
  },
  {
    name: "Enterprise",
    price: "$99/mo",
    description: "A complete solution for enterprises seeking digital transformation.",
    features: ["Custom Web Apps", "AI & Automation", "Full Digital Strategy"],
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

const PricingTable = () => {
  return (
    <div className="py-16 px-6 bg-gradient-to-b from-gray-900 to-black text-white">
      <h2 className="text-4xl font-extrabold text-center mb-12">
        Flexible Pricing Plans
      </h2>
      <motion.div 
        className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto"
        initial="hidden"
        animate="visible"
      >
        {plans.map((plan, index) => (
          <motion.div
            key={index}
            className="relative p-8 rounded-xl shadow-2xl border border-gray-700 bg-white/10 backdrop-blur-lg text-center"
            variants={cardVariants}
            custom={index}
            whileHover={{ scale: 1.05 }}
          >
            {/* Top Badge */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-500 text-white px-6 py-2 rounded-full text-sm font-semibold">
              {plan.name}
            </div>

            {/* Price */}
            <h3 className="text-4xl font-bold mt-6">{plan.price}</h3>
            <p className="text-gray-300 mt-2">{plan.description}</p>

            {/* Features List */}
            <ul className="mt-6 space-y-2 text-gray-200">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-center justify-center gap-2">
                  ✅ {feature}
                </li>
              ))}
            </ul>

            {/* CTA Button */}
            <button className="mt-8 bg-blue-600 hover:bg-blue-500 transition px-6 py-3 rounded-full text-white font-semibold">
              Get Started
            </button>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default PricingTable;
