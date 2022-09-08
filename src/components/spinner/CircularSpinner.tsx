import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

import "./Spinner.scss";

const CircularSpinner = () => {
  return (
    <React.Fragment>
      <motion.button className="circular-spinner-container" animate={{rotate: [0, 360]}} transition={{repeat: Infinity}}>
        <i className="material-icons">refresh</i>
      </motion.button>
    </React.Fragment>
  );
};

export default CircularSpinner;
