import React, {useState} from 'react'
import MyInput from './UI/input/MyInput'
import MyButton from './UI/button/MyButton'
import MyModal from './UI/modal/MyModal'
import PostService from '../API/PostService'


const PostForm = ({create, setVisible}) =>{
    const [post, setPost] = useState({title:'', dateValue:'', completed: false})
    const [lastId, setLastId] = useState(0)

    const addNewPost = (e) => {
        e.preventDefault()
        const newPost = {
            ...post, id: lastId + 1
        }
        create(newPost)
        setPost({title:'', dateValue:'', completed: false})
        setLastId(lastId + 1)
      }

    return (
        <div>
            <div className="popup-header">
                <h2>Add New Task</h2>
            </div>
            <div className="popup-body">
                <MyInput
                        value={post.title}
                        onChange={e => setPost({...post, title:e.target.value})} 
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
                <button className="addTask2" id="task-button" onClick={addNewPost} >Add Task</button>
            </div>
        </div>
    )
}

export default PostForm;