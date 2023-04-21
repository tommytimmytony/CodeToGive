import React from "react";
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
import "../styles/App.css"

const Home = () => {
  const location = useLocation();
  // return (
  //     <div className="homepage">
  //         <h1>Hello {location.state.id} and welcome to the home</h1>
  //     </div>
  // )
  return (
    <div className="App">
      <h1>Hello {location.state.id} and welcome to the Home</h1>
      <Sidebar>
        <Routes>
          <Route path="/chatsapp" element={<ChatsApp />} />
          <Route path="/remindertask" element={<ReminderTask />} />
        </Routes>
      </Sidebar>
    </div>
  );
};

export default Home;
