import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import ChatsApp from "./pages/Chatsapp";
import ReminderTask from "./pages/ReminderTask";
import WorkPage from "./pages/WorkPage";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/chatsapp" element={<ChatsApp />} />
          <Route path="/remindertask" element={<ReminderTask />} />
          <Route path="/workpage" element={<WorkPage />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
