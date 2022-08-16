import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
const Type = ({ addType, sandwich }) => {
  const types = ["Classic", "Open Face", "Grilled"];

  return (
    <motion.div className="base container" initial={{}}>
      <h3>Step 1: Choose Your Type</h3>
      <ul>
        {types.map((type) => {
          let spanClass = sandwich.type === type ? "active" : "";
          return (
            <li key={type} onClick={() => addType(type)}>
              <span className={spanClass}>{type}</span>
            </li>
          );
        })}
      </ul>

      {sandwich.base && (
        <motion.div
          className="next"
          initial={{ x: "-100vw" }}
          animate={{ x: 0 }}
          transition={{ type: "spring", stiffness: 120 }}
        >
          <Link to="/toppings">
            <button>Next</button>
          </Link>
        </motion.div>
      )}
    </motion.div>
  );
};

export default Type;
