import React from "react";
import Header from "../Header";
import Sidebar from "../Sidebar";

import "./PageTemplate.scss";

const PageTemplate = props => {
  return (
    <React.Fragment>
      <Header />
      <div className="main-content">
        <Sidebar />
        <div className="page-content">{props.children}</div>
      </div>
    </React.Fragment>
  );
};

export default PageTemplate;
