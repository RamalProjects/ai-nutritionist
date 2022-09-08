import * as React from "react";
import { Link, useLocation } from "react-router-dom";

// components
import DescriptionInputWrapper from "../DescriptionBased/DescriptionInputWrapper";
import IngredientInputWrapper from "../IngredientBased/IngredientInputWrapper";
import UnderLine from "./UnderLine";
import { motion } from "framer-motion";

import "./SideBar.scss";

const SideBar = () => {
  const location = useLocation();

  return (
    <React.Fragment>
      <div className="sidebar-container">
        <h1>AI-nutritionist</h1>
        <div className="navigation-links">
          <UnderLine path="/">
            <motion.button>
              <Link to="/">Description based</Link>
            </motion.button>
          </UnderLine>
          <UnderLine path="/ingredientbased">
            <motion.button>
              <Link to="ingredientbased">Ingredient based</Link>
            </motion.button>
          </UnderLine>
        </div>

        {location.pathname === "/" && <DescriptionInputWrapper />}
        {location.pathname === "/ingredientbased" && <IngredientInputWrapper />}
      </div>
    </React.Fragment>
  );
};

export default SideBar;
