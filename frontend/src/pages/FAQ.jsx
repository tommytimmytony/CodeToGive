import React, { useState } from "react";
import "../styles/App.css";
import SidebarContainer from "../components/SidebarContainer";
import Sector from "../components/Sector";
import faqExamples from "../assets/examples/faqExamples";
const FAQ = () => {
  return (
    <div className="work-page-container">
      <SidebarContainer />
      <div>
        <div className="sector-container" style={{placeItems: "center"}}>
          {faqExamples.map((item, index) => (
            <Sector
              title={item.title}
              className={"sector-info-faq"}
              body={item.content}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
