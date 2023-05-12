import React, { useState } from 'react'
import './CreateTaskModal.css'
import CategoryOptions from './CategoryOptions';
import ModalFooter from './ModalFooter';
import ModalHeader from './ModalHeader';
import { IPost } from '../../models/IPost';

interface CreateTaskModalProps {
    task?: string;
    dateValue?: string;
    modalOpen: boolean;
    tag?: string;
    setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
    type: string;
    handleTaskUpdate?: (task: string, dateValue: string, tag: string) => void;
  }

// const CreateTaskModal = ({type, modalOpen, setModalOpen}: CreateTaskModalProps) => {
    const CreateTaskModal = ({type, modalOpen, setModalOpen, task, handleTaskUpdate}: CreateTaskModalProps) => {
    // const [post, setPost] = useState<IPost>({title:'', dateValue:'', completed: false})
    const [post, setPost] = useState<IPost>({title: task ?? '', dateValue:'', completed: false, tag:''})
    const isDisabled = !post.title || !post.dateValue || !post.tag;
    const minDate = new Date().toISOString().split('T')[0];
    if (!modalOpen) {
        return null;
      }
      const handleSelectTag = (tagName: string) => {
        setPost({ ...post, tag: tagName });
      };

      const handleSave = () => {
        if (post.title.trim() === '') {
          return;
        }
        if (handleTaskUpdate) {
          handleTaskUpdate(post.title, post.dateValue, post.tag);
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
                                <CategoryOptions onSelectTag={handleSelectTag}/>
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
                            tag = {post.tag}
                            handleSave={handleSave}
                            isDisabled={isDisabled}/>
                    </div>
                </div>
                )
    );
};

export default CreateTaskModal;