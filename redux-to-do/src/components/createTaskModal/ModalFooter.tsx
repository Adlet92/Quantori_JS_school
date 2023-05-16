import React from 'react';
import { postAPI } from '../../services/TaskService';
import { IPost } from '../../models/IPost';

interface modalFooterProps {
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  title: string;
  dateValue: string;
  tag: string;
  type: string;
  handleSave?: (task: string) => void;
  isDisabled: boolean;
}

  const ModalFooter = ({setIsModalOpen, title, dateValue, tag, type, handleSave, isDisabled}: modalFooterProps) => {

    const [createPost] = postAPI.useCreatePostMutation()
    const handleCreate = async () =>{
        await createPost({title, completed: false, dateValue, tag} as IPost);
        setIsModalOpen(false);
    }
    const handleUpdate = () => {
      handleSave?.(title);
      setIsModalOpen(false);
    }
    const buttonClass = `addTask2 ${isDisabled ? '' : 'active'}`;

  return (
    <div className="popup-footer">
        <button className="close" onClick={() => setIsModalOpen(false)}>Close</button>
        {type === 'update' ? (
        <button className={buttonClass}  disabled={isDisabled} id="task-button" onClick={handleUpdate}>Update Task</button>
      ) : (
        <button className={buttonClass}  disabled={isDisabled} id="task-button" onClick={handleCreate}>Add Task</button>
      )}
      </div>
  )
}

export default ModalFooter