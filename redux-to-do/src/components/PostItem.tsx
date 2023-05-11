import { IPost } from "../models/IPost";
import deleteImage from "./img/Shape.svg"
import editImage from "./img/edit-1.svg"
import './UI/Inc.css'
import { FC, useState } from "react";
import CreateTaskModal from "./CreateTaskModal/CreateTaskModal";


interface PostItemProps {
    post: IPost;
    remove: (post: IPost) => void;
    update: (post:IPost) => void;
}

const PostItem: FC<PostItemProps> = ({post, remove, update }) =>{

    const [modalOpen, setModalOpen] = useState(false);
    const [currentTask, setCurrentTask] = useState(post.title);
    const [currentDateValue, setCurrentDateValue] = useState(post.dateValue);
    const [currentTag, setCurrentTag] = useState(post.tag);


    const handleRemove = (event: React.MouseEvent) => {
        event.stopPropagation()
        remove(post)
    }
    // const handleUpdate = (event: React.MouseEvent) => {
    //     // const title = prompt() || ""
    //     // update({...post, title})
    //     setModalOpen(true);
    // }
    const handleUpdate = (event: React.MouseEvent) => {
        setCurrentTask(post.title);
        setCurrentDateValue(post.dateValue);
        setCurrentTag(post.tag);
        setModalOpen(true);
    }

    const handleTaskUpdate = (task: string, dateValue: string, tag: string) => {
        update({...post, title: task, dateValue, tag})
        setModalOpen(false);
    }
    const handleCompletedChange = () => {
        update({...post, completed: !post.completed})
    }

    return (
        <>
       <li><input id="check"  type="checkbox" checked={post.completed} onChange={handleCompletedChange} />
            <label id="label-title">{ post.title}</label>
            <h5>{post.tag}</h5>
            <button className="deleteIcon" onClick={handleRemove}><img src={deleteImage} alt=""/></button>
            <button className="deleteIcon" onClick={handleUpdate}><img src={editImage} alt=""/></button>
        </li>
        <CreateTaskModal
            type="update"
            task={currentTask}
            dateValue={currentDateValue}
            tag = {currentTag}
            modalOpen={modalOpen}
            setModalOpen={setModalOpen}
            handleTaskUpdate={handleTaskUpdate}
        />
        </>
        
    )
}

export default PostItem