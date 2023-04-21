import React from "react";
import {FaTh, FaUserAlt, FaBars, FaUser} from "react-icons/fa"
import { NavLink } from "react-router-dom";
import "../styles/Sidebar.css"
import logo from "../assets/Make_A_Wish_logo.jpg"

const Sidebar = ({children}) => {
    const menuItem = [
      {
        path: "/chatsapp",
        name: "ChatsApp",
        icon: <FaUserAlt/>,
      },
      {
        path: "/remindertask",
        name: "ReminderTask",
        icon: <FaBars/>,
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