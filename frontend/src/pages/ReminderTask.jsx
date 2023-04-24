import React, { useState } from "react";
import SidebarContainer from "../components/SidebarContainer";
const ReminderTask = () => {
  const [tasks, setTasks] = useState([
    { id: 1, description: "Upload ID", completed: false },
    { id: 2, description: "Call Parents", completed: false },
    { id: 3, description: "Submit Documents", completed: false },
    { id: 4, description: "Plan Wish Trip", completed: false },
  ]);

  const handleComplete = (id) => {
    const task = tasks.find((task) => task.id === id);
    if (task && task.description.includes("Upload")) {
      const fileInput = document.createElement("input");
      fileInput.setAttribute("type", "file");
      fileInput.addEventListener("change", (event) => {
        const selectedFile = event.target.files[0];
        const formData = new FormData();
        formData.append("file", selectedFile);

        setTasks((prevState) =>
          prevState.map((task) =>
            task.id === id ? { ...task, completed: true } : task
          )
        );
        setDisplayText("File uploaded successfully!");
      });
      fileInput.click();
    } else {
      setTasks((prevState) =>
        prevState.map((task) =>
          task.id === id ? { ...task, completed: true } : task
        )
      );
      setDisplayText("Task completed successfully!");

      const applause = document.createElement("span");
      applause.innerText = "👏";
      applause.style.position = "absolute";
      applause.style.top = "50%";
      applause.style.left = "50%";
      applause.style.transform = "translate(-50%, -50%)";
      applause.style.fontSize = "50px";
      applause.style.opacity = "1";
      applause.style.animation = "applause 1s ease-out forwards";
      document.getElementById(id).appendChild(applause);
      setTimeout(() => {
        document.getElementById(id).removeChild(applause);
      }, 1000);
    }
  };

  const pendingTasks = tasks.filter((task) => !task.completed);

  const [displayText, setDisplayText] = useState("");

  return (
    <div className="work-page-container">
      <div>
        <SidebarContainer />
      </div>
      <div>
        <h1 style={{ fontFamily: "Georgia", fontSize: "40px" }}>DashBoard</h1>
        <p style={{ fontFamily: "Palatino Linotype", fontSize: "20px" }}>
          You have {pendingTasks.length} pending tasks to complete.
        </p>
        {displayText && <p>{displayText}</p>}
        <ul style={{ listStyleType: "none", padding: 0 }}>
          {pendingTasks.map((task) => (
            <li key={task.id}>
              <button
                id={task.id}
                style={{
                  width: "200px",
                  height: "100px",
                  color: "white",
                  backgroundColor: "#87CEFA",
                  border: "none",
                  borderRadius: "5px",
                  margin: "20px",
                  cursor: "pointer",
                  position: "relative",
                  overflow: "hidden",
                  zIndex: "1",
                  transition: "color 0.5s",
                }}
                onMouseEnter={(event) => {
                  event.currentTarget.style.backgroundColor = "white";
                  event.currentTarget.style.color = "#000";
                }}
                onMouseLeave={(event) => {
                  event.currentTarget.style.backgroundColor = "#87CEFA";
                  event.currentTarget.style.color = "white";
                }}
                onClick={(event) => {
                  handleComplete(task.id);
                  const applause = document.createElement("span");
                  applause.innerText = "👏";
                  applause.style.position = "absolute";
                  applause.style.top = "50%";
                  applause.style.left = "50%";
                  applause.style.transform = "translate(-50%, -50%)";
                  applause.style.fontSize = "50px";
                  applause.style.opacity = "1";
                  applause.style.animation = "applause 1s ease-out forwards";
                  applause;
                  event.currentTarget.appendChild(applause);
                  setTimeout(
                    () => event.currentTarget.removeChild(applause),
                    1000
                  );
                }}
              >
                {task.description}
                <span
                  style={{
                    position: "absolute",
                    top: 0,
                    left: "-100%",
                    width: "100%",
                    height: "100%",
                    backgroundColor: "#87CEFA",
                    zIndex: "3",
                    transition: "0.5s",
                  }}
                />
              </button>
              <style>
                {` 
                button:hover {
                  background-color: white;
                  color: #000;
                }
                button:hover span {
                  left: 0; 
                } 
              `}
                {`
                @keyframes applause {
                  0% { transform: scale(1); }
                  50% { transform: scale(1.5); }
                  100% { transform: scale(1); }
                }
              `}
              </style>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ReminderTask;
