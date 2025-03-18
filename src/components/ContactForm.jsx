import React, { useState } from "react";
import { motion } from "framer-motion";
import contact from '../assets/Contact-us.png'; // Ensure the path is correct

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: "", email: "" });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email) {
      setError("Please fill in all fields.");
      return;
    }
    setSuccess(true);
    setError("");
    setFormData({ name: "", email: "" });
    setTimeout(() => setSuccess(false), 3000);
  };

  return (
    <motion.div 
      className="flex justify-center items-center min-h-screen "
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div 
        className="bg-white shadow-xl rounded-lg w-full max-w-4xl p-8 flex flex-col md:flex-row items-center"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="w-full md:w-1/2">
          <h2 className="text-2xl font-semibold text-center mb-4">Contact Us</h2>

          {error && <div className="mb-4 text-red-600 text-center">{error}</div>}
          {success && <div className="mb-4 text-green-600 text-center">Message Sent!</div>}

          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 border-2 border-gray-300 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-teal-400"
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            value={formData.name}
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-3 border-2 border-gray-300 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-teal-400"
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            value={formData.email}
          />

          <motion.button
            type="submit"
            className="w-full py-3 text-white bg-teal-500 rounded-lg hover:bg-teal-600 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleSubmit}
          >
            Send Message
          </motion.button>
        </div>
        
        <div className="w-full md:w-1/2 flex justify-center">
          <img 
            src={contact} 
            alt="Contact Us" 
            className="w-full h-auto object-cover rounded-lg shadow-md"
          />
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ContactForm;
