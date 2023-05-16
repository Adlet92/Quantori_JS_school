import React, { useState } from 'react'
import './CreateTaskModal.css'
import CategoryOptions from './CategoryOptions';
import ModalFooter from './ModalFooter';
import ModalHeader from './ModalHeader';
import { IPost } from '../../models/IPost';

interface createTaskModalProps {
    task?: string;
    dateValue?: string;
    isModalOpen: boolean;
    tag?: string;
    setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
    type: string;
    handleTaskUpdate?: (task: string, dateValue: string, tag: string) => void;
  }

    const CreateTaskModal = ({type, isModalOpen, setIsModalOpen, task, handleTaskUpdate}: createTaskModalProps) => {

    const [title, setTitle] = useState<string>(task ?? '');
    const [dateValue, setDateValue] = useState<string>('');
    const [tag, setTag] = useState<string>('');
    const isDisabled = !title || !dateValue || !tag;

    const minDate = new Date().toISOString().split('T')[0];
    if (!isModalOpen) {
        return null;
      }

      const handleSelectTag = (tagName: string) => {
        setTag(tagName);
      };

      const handleSave = () => {
        if (title.trim() === '') {
          return;
        }
        const post: IPost = { title, dateValue, tag, completed: false };
        if (handleTaskUpdate) {
          handleTaskUpdate(post.title, post.dateValue, post.tag);
        }
      };
      
    return (
        isModalOpen && (
                <div id="mypopup" className="popup">
                    <div className="popup-content">
                        <ModalHeader type={type}/>
                        <div className="popup-body">
                            <input 
                                id="task-title" 
                                className="title-task" 
                                type="text" 
                                placeholder="Task title" 
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                />
                            <div className="container-date-options">
                                <CategoryOptions onSelectTag={handleSelectTag}/>
                                <input 
                                    id="date-choose" 
                                    className="calendar" 
                                    type="date"
                                    value={dateValue}
                                    min={minDate}
                                    onChange={(e) => setDateValue(e.target.value)}
                                    />
                            </div>
                        </div>
                        <ModalFooter 
                            type={type} 
                            setIsModalOpen={setIsModalOpen} 
                            title={title}
                            dateValue={dateValue}
                            tag={tag}
                            handleSave={handleSave}
                            isDisabled={isDisabled}
                            />
                    </div>
                </div>
                )
    );
};

export default CreateTaskModal;