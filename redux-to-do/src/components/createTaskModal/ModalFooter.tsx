import React from 'react';
import { postAPI } from '../../services/PostService';
import { IPost } from '../../models/IPost';

interface ModalFooterProps {
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  title: string;
  dateValue: string;
  tag: string;
  type: string;
  handleSave?: (task: string) => void;
  isDisabled: boolean;
}

// const ModalFooter = ({setModalOpen, title, dateValue, type}: ModalFooterProps) => {
  const ModalFooter = ({setModalOpen, title, dateValue, tag, type, handleSave, isDisabled}: ModalFooterProps) => {
    const [createPost, {}] = postAPI.useCreatePostMutation()
    const handleCreate = async () =>{
        await createPost({title, completed: false, dateValue, tag} as IPost);
        setModalOpen(false);
    }
    const handleUpdate = () => {
      handleSave?.(title);
      setModalOpen(false);
    }
    const buttonClass = `addTask2 ${isDisabled ? '' : 'active'}`;

  return (
    <div className="popup-footer">
        <button className="close" onClick={() => setModalOpen(false)}>Close</button>
        {type === 'update' ? (
        <button className={buttonClass}  disabled={isDisabled} id="task-button" onClick={handleUpdate}>Update Task</button>
      ) : (
        <button className={buttonClass}  disabled={isDisabled} id="task-button" onClick={handleCreate}>Add Task</button>
      )}
        {/* <button className="addTask2" id="task-button" onClick={handleCreate}>{type === 'update' ? 'Update' : 'Add'} Task</button> */}
      </div>
  )
}

export default ModalFooter