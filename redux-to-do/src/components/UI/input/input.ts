import React, { InputHTMLAttributes } from 'react';
import './input.css';

const Input = (props: InputHTMLAttributes<HTMLInputElement>) => {
    return (
        <input id="task-title" className="title-task" type="text" placeholder="Task title" {...props} />
    );
};

export default Input;
