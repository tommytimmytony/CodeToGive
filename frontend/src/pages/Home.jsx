import { useEffect, useState } from "react";
import {
  useLocation,
  useNavigate,
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import ChatsApp from "./Chatsapp";
import ReminderTask from "./ReminderTask";
import WorkPage from "./WorkPage";
import Sidebar from "../components/Sidebar";
import { useWorks } from "../components/context/WorkContext";
import "../styles/App.css";

const Home = () => {
  const {currentUser} = useWorks()

  return (
    <div className="home-container">
      <Sidebar>
        <Routes>
          <Route path="/chatsapp" element={<ChatsApp />} />
          <Route path="/remindertask" element={<ReminderTask />} />
          <Route path="/workpage" element={<WorkPage />} />
        </Routes>
      </Sidebar>
      <h1 className="welcome-container">Hello {currentUser} and welcome to the Home Page</h1>
    </div>
  );
};

export default Home;
