import React, {useState} from 'react'
import MyInput from './UI/input/MyInput'
import { PostItemProps } from './Interfaces/interfaces'
import {PostFormProps} from './Interfaces/interfaces'

const PostForm = ({create, setVisible} : PostFormProps) =>{
    const [post, setPost] = useState<PostItemProps>({title:'', dateValue:'', completed: false})
    const [sequence, setSequence] = useState(0)

    const addNewPost = () => {
        // e.preventDefault()
        const newPost = {
            ...post, id: sequence
        }
        create(newPost)
        setPost({title:'', dateValue:'', completed: false})
        setSequence(sequence => sequence + 1)
      }

    const isDisabled = !post.title || !post.dateValue;
    const buttonClass = `addTask2 ${post.title ? 'active' : ''}`;

    return (
        <div>
            <div className="popup-header">
                <h2>Add New Task</h2>
            </div>
            <div className="popup-body">
                <MyInput
                        value={post.title}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPost({...post, title:e.target.value})} 
                        type="text" 
                        placeholder=''
                />
                    <div className="container-date-options">
                        <div className="option">
                            <div className="option health">health</div>
                            <div className="option work">work</div>
                            <div className="option home">home</div>
                            <div className="option other">other</div>
                        </div>
                        <input
                            value={post.dateValue}
                            onChange={e=> setPost({...post, dateValue:e.target.value})} 
                            id="date-choose" 
                            className="calendar" 
                            type="date"/>
                    </div>
            </div>
            <div className="popup-footer">
                <button className="close" onClick={() => setVisible(false)}>Close</button>
                <button className={buttonClass} id="task-button" onClick={addNewPost} disabled={isDisabled}>Add Task</button>
            </div>
        </div>
    )
}

export default PostForm;