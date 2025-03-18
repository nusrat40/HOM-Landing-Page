import React, { useState, useEffect } from "react";
import axios from "axios";
import { debounce } from "lodash";
import { motion } from "framer-motion";

const UserSearch = () => {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users")
      .then((res) => setUsers(res.data));
  }, []);

  const handleSearch = debounce((query) => {
    setSearch(query);
  }, 300);

  return (
    <div className="p-6 mx-auto  rounded-lg shadow-lg">
      <motion.div
        className="mb-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.9 }}
      >
        <input
          type="text"
          placeholder="Search Users"
          className="w-full p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400"
          onChange={(e) => handleSearch(e.target.value)}
        />
      </motion.div>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {users
          .filter((user) => user.name.toLowerCase().includes(search.toLowerCase()))
          .map((user) => (
            <motion.div
              key={user.id}
              className="bg-white rounded-lg shadow-lg p-4 hover:bg-gray-100 cursor-pointer transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="text-xl font-semibold text-gray-700">{user.name}</div>
              <div className="text-sm text-gray-500">{user.username}</div>
              <div className="mt-2 text-gray-700">
                <strong>Email: </strong>{user.email}
              </div>
              <div className="mt-2 text-gray-700">
                <strong>Company: </strong>{user.company.name}
              </div>
            </motion.div>
          ))}
      </motion.div>
    </div>
  );
};

export default UserSearch;
