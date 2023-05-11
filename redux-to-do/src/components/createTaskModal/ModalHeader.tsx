import React from 'react'

interface ModalHeaderProps {
  type: string;
}
const ModalHeader = ({type}:ModalHeaderProps) => {
  return (
    <div className="popup-header">
      {/* <h2>Add New Task</h2> */}
      <h2>{type === 'update' ? 'Update' : 'Add New'} Task</h2>
    </div>
  )
}

export default ModalHeader