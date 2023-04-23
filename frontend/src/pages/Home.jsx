import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sector from "../components/Sector";
import { useWorks } from "../components/context/WorkContext";
import sectorExamples from "../assets/examples/sectorExamples";
import sectorInfoExamples from "../assets/examples/sectorInfoExamples";
import SidebarContainer from "../components/SidebarContainer";
import "../styles/App.css";
import "../styles/Sector.css";

const Home = () => {
  const { currentUser } = useWorks();
  return (
    // This home-page is similiar to the work-page
    // Therefore we use them same container
    <div className="work-page-container">
      <SidebarContainer/>
      <div>
        <h1>
          {currentUser
            ? `Hello ${currentUser} and Welcome to the Home Page`
            : "Home Page"}
        </h1>
        <div className="sector-container">
          <div className="sector-info">
            <Sector
              title={"About"}
              className={"sector-info-home"}
              body={
                "The organization was founded in the United States in 1980 and has since expanded to over 50 countries worldwide. The mission of Make-A-Wish is to create life-changing experiences for children facing serious illnesses, giving them hope, strength, and joy. The organization has granted over 500,000 wishes since its inception and relies on donations and volunteers to continue its work."
              }
            />
          </div>
        </div>

        <div className="sector-container">
          {sectorExamples.map((item, index) => (
            <Sector title={item.title} body={item.body} className={"sector"} />
          ))}
        </div>
        <div className="sector-container">
          {sectorInfoExamples.map((item, index) => (
            <Sector
              title={item.title}
              body={item.body}
              cardTitle={item.cardTitle}
              className={"sector-info"}
            />
          ))}
        </div>
      </div>
    </div>
  );
  //   <div className="home-container">
  //     <Sidebar>
  //       <Routes>
  //         <Route path="/chatsapp" element={<ChatsApp />} />
  //         <Route path="/remindertask" element={<ReminderTask />} />
  //         <Route path="/workpage" element={<WorkPage />} />
  //       </Routes>
  //     </Sidebar>
  //     <div>
  //       <div className="welcome-container">
  //         <h1>Hello {currentUser} and welcome to the Home Page</h1>
  //         <div className="sector-container">
  //           {sectorExamples.map((item, index) => (
  //             <Sector title={item.title} body={item.body} />
  //           ))}
  //         </div>
  //       </div>
  //     </div>
  //   </div>
  // );
};

export default Home;
