import React, { useState } from 'react'
import './AddTask.css'
import axios from 'axios';
import { IProduct } from '../../Models/models';


export function AddTask(){
    const [value, setValue] = useState('')
    const [dateValue, setDate] = useState('')

    const checkFields = (event: React.FormEvent) =>{
        event.preventDefault();
        const newTask:IProduct = {
            title: value,
            completed: false, 
            dateValue: dateValue
        };
        if(value.trim().length === 0 || dateValue.trim().length === 0){
            return
        }
        axios.post<IProduct>('http://localhost:3006/tasks', newTask)
    }

    // function addItem() {
    //     const newTask:IProduct = {
    //         title: value,
    //         completed: false, 
    //         dateValue: dateValue
    //       };
    //       axios.post<IProduct>('http://localhost:3006/tasks', newTask)
    // }
    
       

    return(
        <div>
            <div className="popup-body">
                <form onSubmit={checkFields}>
                <input id="task-title" onChange={e=> setValue(e.target.value)} className="title-task" type="text" placeholder="Task title" value={value}/>
                    <div className="container-date-options">
                        {/* {error && <ErrorMessage error={error}/>} */}
                        <div className="option">
                            <div className="option health">health</div>
                            <div className="option work">work</div>
                            <div className="option home">home</div>
                            <div className="option other">other</div>
                        </div>
                        <input id="date-choose" onChange={e=> setDate(e.target.value)} value={dateValue} className="calendar" type="date"/>
                    </div>
                </form>
            </div>
            <div className="popup-footer">
                <button className="close">Close</button>
                <button className="addTask2" id="task-button" onClick={checkFields}>Add Task</button>
            </div>
        </div>
    )
}