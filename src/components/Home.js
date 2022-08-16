import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
const buttonVariants = {
  hover: {
    scale: 1.1,
    textShadow: "0px 0px 8px rgb(255,255,255)",
    boxShadow: "0px 0px 8px rgb(255,255,255)",
    transition: {
      duration: 0.3,
      yoyo: Infinity,
    },
  },
};

const Home = () => {
  return (
    <motion.div
      className="home container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.5, duration: 1.5 }}
    >
      <h2>Welcome to Sandwich World</h2>
      <Link to="/type">
        <motion.button variants={buttonVariants} whileHover="hover">
          Create Your Sandwich
        </motion.button>
      </Link>
    </motion.div>
  );
};

export default Home;
