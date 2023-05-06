import React from 'react'
import './MyInput.css'

const MyInput = (props) => {
    return (
        <input id="task-title" className="title-task" type="text" placeholder="Task title" {... props}/>
    );
};

export default MyInput;