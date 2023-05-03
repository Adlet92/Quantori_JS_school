import React from 'react'
import './AddTask.css'

export function AddTask(){
    return(
        <div className="popup-body">
            <input id="task-title" className="title-task" type="text" placeholder="Task title"/>
            <div className="container-date-options">
                <div className="option">
                    <div className="option health">health</div>
                    <div className="option work">work</div>
                    <div className="option home">home</div>
                    <div className="option other">other</div>
                </div>
                <input id="date-choose" className="calendar" type="date"/>
            </div>
        </div>
    )
}