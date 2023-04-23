import { React, useState } from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as BiIcons from "react-icons/bi";
import * as MdIcons from "react-icons/md";
import { NavLink} from "react-router-dom";
import "../styles/Sidebar.css";
import logo from "../assets/Make_A_Wish_favicon.png";

const Sidebar = ({ children }) => {
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
      path: "/workpage",
      name: "WorkPage",
      icon: <MdIcons.MdWorkOutline />,
    },
  ];

  return (
    <div className="sidebar-container">
      <div className="sidebar">
        <img
          className="Logo"
          src={logo}
          alt=""
          onClick={() => (window.location = "/home")}
        />
        {menuItem.map((item, index) => (
          <NavLink to={item.path} key={index} className="link">
            <div className="icon">{item.icon}</div>
          </NavLink>
        ))}
      </div>
      <main>{children}</main>
    </div>
  );
};

export default Sidebar;
