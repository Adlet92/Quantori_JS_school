import React from "react";
import './MyModal.css'
import MyInput from "../input/MyInput";

const MyModal = ({children, visible, setVisible}) =>{

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

export default MyModal;