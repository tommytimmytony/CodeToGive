import React from 'react'
import ChatsApp from '../pages/Chatsapp';
import ReminderTask from '../pages/ReminderTask';
import WorkPage from '../pages/WorkPage';
import Sidebar from './Sidebar';
import FAQ from '../pages/FAQ';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function SidebarContainer() {
  return (
    <div>
      <Sidebar>
        <Routes>
          <Route path="/chatsapp" element={<ChatsApp />} />
          <Route path="/remindertask" element={<ReminderTask />} />
          <Route path="/workpage" element={<WorkPage />} />
          <Route path="/faq" element={<FAQ/>}/>
        </Routes>
      </Sidebar>
    </div>
  );
}

export default SidebarContainer