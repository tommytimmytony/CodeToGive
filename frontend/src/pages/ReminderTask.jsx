import React, { useState } from "react";
import TaskList from './TaskList'
import tasks from "./tasks/tasks.json";
import '../styles/ReminderTask.css';
import { IoMdArrowRoundBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";
const ReminderTask = () => {
    const [ taskList, setTaskList ] = useState(tasks);
    let completedTasks = 0;
    let message = "";
    let totalTasks = Object.keys(tasks).length;
    const navigate = useNavigate();
    const navigateToHome = () => {
        navigate("/home");
    }

    const toggleTaskCompletion = (id) => {
        let mapped = taskList.map(task => {
            return task.id == id ? { ...task, complete: !task.complete } : { ...task};
        });
        if(completedTasks === totalTasks){
            message = "All caught up!";
        }else{
            message =  "You have pending tasks.";
        }
        setTaskList(mapped);
    };

    for(let i = 0; i < tasks; i++){
        if(task.complete){
            completedTasks++;
        }
        console.log(completedTasks);
    }

    return(
      <div className="override">
    
       <div className="back-button" onClick={navigateToHome}><IoMdArrowRoundBack size={34}/></div>
             
        <h1 id="header" > Upcoming Task Reminders </h1>
            <div className="">
                <TaskList taskList={taskList} toggleTaskCompletion={toggleTaskCompletion} />
            </div>

            <h3> {message} </h3> 
      </div> 
    );
}



export default ReminderTask;