import React from "react";
import logo_white from "../../../images/logo_v2.png";
import "./Header.scss";

const Header = () => {
  return (
    <div className="page-header">
      <div className="page-header-logo">
        <img src={logo_white} alt="westferry white logo design" />
      </div>
      <div className="page-header-title">Dashboard</div>
      <div className="page-header-actions">
        <button className="ui primary-outline basic button round text-sm">
          External View
        </button>
      </div>
    </div>
  );
};

export default Header;
