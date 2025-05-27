import React from "react";

import Header from "../Header";
import MobileHeader from "../Header/MobileHeader";
import "./navbar.css";
const Navbar: React.FC = () => {
  return (
    <div>
      <div className="desktop-header">
        <Header />
      </div>
      <div className="mobile-header">
        <MobileHeader />
      </div>
    </div>
  );
};

export default Navbar;
