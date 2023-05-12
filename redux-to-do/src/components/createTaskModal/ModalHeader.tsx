import React from 'react'

interface modalHeaderProps {
  type: string;
}
const ModalHeader = ({type}:modalHeaderProps) => {
  return (
    <div className="popup-header">
      <h2>{type === 'update' ? 'Update' : 'Add New'} Task</h2>
    </div>
  )
}

export default ModalHeader