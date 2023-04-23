import { React, useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
  useParams,
} from "react-router-dom";
import ChatsApp from "./Chatsapp";
import ReminderTask from "./ReminderTask";
import Sidebar from "../components/Sidebar";
import WorkPage from "./WorkPage";
import Card from "../components/Card";
import "../styles/App.css";
import cardExamples from "../assets/examples/cardExamples";
import cardSectorInfoExamples from "../assets/examples/cardSectorInfoExamples";
import logo from "../assets/Make_A_Wish_favicon.png";
import { useWorks } from "../components/context/WorkContext";
import Sector from "../components/Sector";
function DetailPage({name}) {
    const {id} = useParams()
    console.log(id)
    const index = cardExamples.findIndex(card => card.name === id)
    const personInfo = cardExamples[index]
  return (
    <div className="work-page-container">
      <Sidebar>
        <Routes>
          <Route path="/chatsapp" element={<ChatsApp />} />
          <Route path="/remindertask" element={<ReminderTask />} />
          <Route path="/workpage" element={<WorkPage />} />
        </Routes>
      </Sidebar>
      <div>
        <h1>{personInfo.name}</h1>
        <div className="search-name-container">
          {/* <div class="search-wrapper">
            <input
              type="search"
              id="search"
              autocomplete="off"
              placeholder="Search..."
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
              }}
            /> */}
        </div>
        {/* <div className="name-container"> */}
        {/* <div className="name-stack">
              {reverseNameStack.map(([name, initials], index) => (
                <div className="name" onClick={() => handleSearch(name)}>
                  {initials}
                </div>
              ))}
            </div> */}
        {/* </div> */}

        <div className="main-card-container">
          <div className="sector-container">
          {cardSectorInfoExamples.map((item, index) => (
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
    </div>
  );
}

export default DetailPage;
