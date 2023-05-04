import React  from "react";
import './modal.css'
// import {addItem} from '../AddTask/AddTask'

interface ModalProps {
    children: React.ReactNode
}

export function Modal({ children }: ModalProps){
    return (
    <div id="mypopup" className="popup">
        <div className="popup-content">
            <div className="popup-header">
               <h2>Add New Task</h2>
            </div>
            { children }
        {/* <div className="popup-body">
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
        </div> */}
      {/* <div className="popup-footer">
        <button className="close">Close</button>
        <button className="addTask2" id="task-button">Add Task</button>
      </div> */}
    </div>
  </div>
    )
}