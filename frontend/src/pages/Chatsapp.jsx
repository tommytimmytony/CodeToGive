import React from "react";
import { PrettyChatWindow } from "react-chat-engine-pretty";
import * as BsIcons from "react-icons/bs";
import { useNavigate, Link } from "react-router-dom";
import "../styles/App.css";

const ChatsApp = (props) => {
  const navigate = useNavigate();
  return (
    <div className="chats-app-container" style={{ height: "100vh" }}>
      <div
        className="back-button"
        onClick={() => {
          navigate("/home");
        }}
      >
        <BsIcons.BsBackspace />
      </div>
      <PrettyChatWindow
        projectId={"e5af117e-4a86-4db4-a1eb-22cb75e2efc8"}
        username={"Tommy"}
        secret={"123"}
      />
    </div>
  );
};

export default ChatsApp;
