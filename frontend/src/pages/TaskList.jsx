import React from 'react';
import Task from './Task';
import '../styles/TaskList.css'


const TaskList = ({taskList, toggleTaskCompletion}) => {
    return (
        <div className='list'>
            <h1>Pending tasks&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Completed Tasks</h1>
            {taskList.map(todotask => {
                return (
                    <Task todo={todotask} toggleTaskCompletion={toggleTaskCompletion} />
                )
            })}
            
        </div>
    );
};




export default TaskList;