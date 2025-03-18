import React, { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: "", email: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message Sent!");
  };

  return (
    <form onSubmit={handleSubmit} className="p-6 bg-white shadow-lg rounded-lg max-w-lg mx-auto">
      <input
        type="text"
        placeholder="Your Name"
        className="w-full p-2 border border-gray-300 rounded mb-4"
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
      />
      <input
        type="email"
        placeholder="Your Email"
        className="w-full p-2 border border-gray-300 rounded mb-4"
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
      />
      <button className="w-full bg-blue-500 text-white py-2 rounded">Send</button>
    </form>
  );
};

export default ContactForm;
