import { React, useEffect, useState } from "react";
import {
  useLocation,
  useNavigate,
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import ChatsApp from "./Chatsapp";
import ReminderTask from "./ReminderTask";
import Sidebar from "../components/Sidebar";
import Card from "../components/Card"
import "../styles/App.css";
import logo from "../assets/Make_A_Wish_logo.jpg";
import cardExamples from "../assets/cardExamples";

const WorkPage = () => {
    const [searchTerm, setSearchTerm] = useState("")

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
        <div class="search-wrapper">
          <input
            type="search"
            id="search"
            autocomplete="off"
            placeholder="Search..."
            onChange={(e) => {setSearchTerm(e.target.value)}}
          />
        </div>

        <div className="main-card-container">
          {cardExamples.filter((item) => {
            if (searchTerm == ""){
                return item
            } else if (item.name.toLowerCase().includes(searchTerm.toLowerCase())){
                return item
            }
          }).map((item, index) => (
            <Card
              name={item.name}
              wish={item.wish}
              pic={logo}
              guardian={item.guardian}
              contact={item.contact}
              progress={item.progress}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default WorkPage;
