import React from "react";
import * as FaIcons from "react-icons/fa"
import * as AiIcons from "react-icons/ai"
import * as BiIcons from "react-icons/bi"
import * as MdIcons from "react-icons/md"
import { NavLink } from "react-router-dom";
import "../styles/Sidebar.css"
import logo from "../assets/Make_A_Wish_logo.jpg"

const Sidebar = ({children}) => {
    const menuItem = [
      {
        path: "/chatsapp",
        name: "ChatsApp",
        icon: <AiIcons.AiOutlineMessage />,
      },
      {
        path: "/remindertask",
        name: "ReminderTask",
        icon: <BiIcons.BiTask />,
      },
      {
        // Need To Update for Work
        path: "/remindertask",
        name: "ReminderTask",
        icon: <MdIcons.MdWorkOutline/>,
      },
    ];
    return (
      <div className="container">
        <div className="sidebar">
          <img className="Logo" src={logo} alt="" />
          {menuItem.map((item, index) => (
            <NavLink to={item.path} key={index} className="link">
              <div className="icon">{item.icon}</div>
            </NavLink>
          ))}
        </div>
        <main>{children}</main>
      </div>
    );
}

export default Sidebar