import React from "react";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
      <div className="home-container">
        <h1>Welcome to Forest Veda</h1>
        <p>Discover the power of Ayurveda</p>
      </div>
    </motion.div>
  );
};

export default Home;
