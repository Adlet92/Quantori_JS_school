import React from "react";
import './createTaskModal.css'

interface MyModalProps {
    children: React.ReactNode,
    visible: boolean,
    setVisible: (value: boolean) => void;
}

const CreateTaskModal = ({children, visible, setVisible} : MyModalProps) =>{

    const rootClasses = ['popup']
    
    if (visible){
        rootClasses.push('visible');
    }

    return (
        <div id="mypopup" className={rootClasses.join(' ')} onClick={() => setVisible(false)}>
             <div className="popup-content" onClick={(e) => e.stopPropagation()}>
                {children}
             </div>
        </div>
    )
}

export default CreateTaskModal;