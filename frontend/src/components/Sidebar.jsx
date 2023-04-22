import {React, useState} from "react";
import Card from "./Card";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as BiIcons from "react-icons/bi";
import * as MdIcons from "react-icons/md";
import { NavLink } from "react-router-dom";
import "../styles/Sidebar.css";
import logo from "../assets/Make_A_Wish_logo.jpg";

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
  const [nameStack, setNameStack] = useState([
    "Sophia Davis",
    "Jacob Martinez",
    "Mia Brown",
    "Ethan Lee",
    "Olivia Johnson",
  ]);
  function addNameToStack(name) {
    setNameStack([...nameStack, name]);
  }
  function getInitials(name) {
    let initials = "";
    const nameArray = name.split(" ");
    for (let i = 0; i < nameArray.length; i++) {
      initials += nameArray[i].charAt(0);
    }
    return initials.toUpperCase();
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
        <div className="name-stack">
          {nameStack.map((name, index) => (
            <div className="name">{getInitials(name)}</div>
          ))}
        </div>
      </div>
      <main>{children}</main>
    </div>
  );
};

export default Sidebar;
