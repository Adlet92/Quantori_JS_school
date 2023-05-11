import React, { FC } from 'react';
import {FormFooterProps} from '../Interfaces/interfaces'

const FormFooter: FC<FormFooterProps> = ({setVisible, isDisabled, addNewPost} : FormFooterProps) => {
  const buttonClass = `addTask2 ${isDisabled ? '' : 'active'}`;
  

  return (
    <div className="popup-footer">
      <button className="close" onClick={() => setVisible(false)}>
        Close
      </button>
      <form onSubmit={addNewPost} className="formButton">
        <button
          className={buttonClass}
          id="task-button"
          disabled={isDisabled}
        >
          Add Task
        </button>
      </form>
    </div>
  )
}

export default FormFooter