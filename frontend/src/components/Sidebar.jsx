import { React, useState } from "react";
import Card from "./Card";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as BiIcons from "react-icons/bi";
import * as MdIcons from "react-icons/md";
import { NavLink } from "react-router-dom";
import "../styles/Sidebar.css";
import logo from "../assets/Make_A_Wish_logo.jpg";
import { useWorks } from "./context/WorkContext";

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
  const { nameStack } = useWorks();
  const reverseNameStack = nameStack.slice().reverse();
  const [fullName, setFullName] = useState("");
  const [isDisplay, setIsDisplay] = useState(false);
  const handleDisplay = (name, display) => {
    setIsDisplay(display)
    setFullName(name)
  }

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
        <div className={`name-tip ${isDisplay ? "active" : ""}`}>{fullName}</div>
        <div className="name-container">
          <div className="name-stack">
            {reverseNameStack.map(([name, initials], index) => (
              <div className="name" onMouseEnter={() => handleDisplay(name, true)} onMouseLeave={() => handleDisplay(name, false)}>{initials}</div>
            ))}
          </div>
        </div>
      </div>
      <main>{children}</main>
    </div>
  );
};

export default Sidebar;
