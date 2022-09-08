import * as React from "react";
import { useState, useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";

// components
import SideBar from "./SideBar";

import "./Layout.scss";

const Layout = () => {
  return (
    <React.Fragment>
      <div className="layout-container">
        <SideBar />
        <div className="content-container">
          <Outlet />
        </div>
      </div>
    </React.Fragment>
  );
};

export default Layout;
