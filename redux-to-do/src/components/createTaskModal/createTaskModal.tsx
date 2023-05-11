import React, { useState } from 'react'
import './CreateTaskModal.css'
import CategoryOptions from './CategoryOptions';
import ModalFooter from './ModalFooter';
import ModalHeader from './ModalHeader';
import { IPost } from '../../models/IPost';

interface CreateTaskModalProps {
    task?: string;
    modalOpen: boolean;
    setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
    type: string;
    handleTaskUpdate?: (task: string) => void;
  }

// const CreateTaskModal = ({type, modalOpen, setModalOpen}: CreateTaskModalProps) => {
    const CreateTaskModal = ({type, modalOpen, setModalOpen, task, handleTaskUpdate}: CreateTaskModalProps) => {
    // const [post, setPost] = useState<IPost>({title:'', dateValue:'', completed: false})
    const [post, setPost] = useState<IPost>({title: task ?? '', dateValue:'', completed: false})
    const minDate = new Date().toISOString().split('T')[0];
    if (!modalOpen) {
        return null;
      }
      const handleSave = () => {
        if (post.title.trim() === '') {
          return;
        }
        if (handleTaskUpdate) {
          handleTaskUpdate(post.title);
        }
      };
      
    return (
            modalOpen && (
                <div id="mypopup" className="popup">
                    <div className="popup-content">
                        <ModalHeader type={type}/>
                        <div className="popup-body">
                            <input 
                                id="task-title" 
                                className="title-task" 
                                type="text" 
                                placeholder="Task title" 
                                value={post.title}
                                onChange={(e) => setPost({...post, title: e.target.value})}/>
                            <div className="container-date-options">
                                <CategoryOptions/>
                                <input 
                                    id="date-choose" 
                                    className="calendar" 
                                    type="date"
                                    value={post.dateValue}
                                    min={minDate}
                                    onChange={(e) => setPost({...post, dateValue: e.target.value})}/>
                            </div>
                        </div>
                        <ModalFooter 
                            type={type} 
                            setModalOpen={setModalOpen} 
                            title={post.title} 
                            dateValue={post.dateValue}
                            handleSave={handleSave}/>
                    </div>
                </div>
                )
    );
};

export default CreateTaskModal;