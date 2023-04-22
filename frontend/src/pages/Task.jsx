import React from 'react';
import '../styles/Task.css';
const Task = ({todo, toggleTaskCompletion}) => {
    const handleClick = (e) => {
        e.preventDefault()
        toggleTaskCompletion(e.currentTarget.id)
    }
    return(
        <div id={todo.id} key={todo.id + todo.task} onClick={handleClick} className={todo.complete ? "unactive" : "active"} >
            {todo.task}
        </div>
    );
};

export default Task;