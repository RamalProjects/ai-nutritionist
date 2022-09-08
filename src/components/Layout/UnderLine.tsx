import * as React from "react";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";

import "./UnderLine.scss";

type Props = {
  children: JSX.Element;
  path: string;
};

const UnderLine = ({ children, path }: Props) => {
  const location = useLocation();
  console.log(location.pathname);

  return (
    <React.Fragment>
      <div>
        {children}
        {path === location.pathname && (
          <motion.div
            className="line"
            initial={{ width: "0px" }}
            animate={{ width: "60px" }}
            transition={{ duration: 0.2 }}
          />
        )}
      </div>
    </React.Fragment>
  );
};

export default UnderLine;
