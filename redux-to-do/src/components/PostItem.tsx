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
        setModalOpen(true);
    }

    const handleTaskUpdate = (task: string) => {
        update({...post, title: task})
        setModalOpen(false);
    }

    return (
        <>
        <li><input id="check"  type="checkbox"/>
            <label id="label-title">{ post.title}</label>
            <button className="deleteIcon" onClick={handleRemove}><img src={deleteImage} alt=""/></button>
            <button className="deleteIcon" onClick={handleUpdate}><img src={editImage} alt=""/></button>
        </li>
        <CreateTaskModal
            type="update"
            task={currentTask}
            modalOpen={modalOpen}
            setModalOpen={setModalOpen}
            handleTaskUpdate={handleTaskUpdate}
        />
        </>
        
    )
}

export default PostItem