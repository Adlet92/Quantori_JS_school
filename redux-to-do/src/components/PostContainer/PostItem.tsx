import { IPost } from "../../models/IPost";
import deleteImage from "../img/Shape.svg"
import editImage from "../img/edit-1.svg"
import '../UI/Inc.css'
import { FC, useState } from "react";
import CreateTaskModal from "../CreateTaskModal/CreateTaskModal";


interface postItemProps {
    post: IPost;
    remove: (post: IPost) => void;
    update: (post:IPost) => void;
}

const PostItem: FC<postItemProps> = ({post, remove, update }) =>{

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentTask, setCurrentTask] = useState(post.title);
    const [currentDateValue, setCurrentDateValue] = useState(post.dateValue);
    const [currentTag, setCurrentTag] = useState(post.tag);


    const handleRemove = (event: React.MouseEvent) => {
        event.stopPropagation()
        remove(post)
    }

    const handleUpdate = (event: React.MouseEvent) => {
        setCurrentTask(post.title);
        setCurrentDateValue(post.dateValue);
        setCurrentTag(post.tag);
        setIsModalOpen(true);
    }

    const handleTaskUpdate = (task: string, dateValue: string, tag: string) => {
        update({...post, title: task, dateValue, tag})
        setIsModalOpen(false);
    }
    const handleCompletedChange = () => {
        update({...post, completed: !post.completed})
    }

    return (
    <div>
       <li><input id="check"  type="checkbox" checked={post.completed} onChange={handleCompletedChange} />
       <div>
       <label id="label-title">{ post.title}</label>
            <h5 className={`post_tag ${post.tag === 'health' ? 'health' : post.tag === 'work' ? 'work' : post.tag === 'home' ? 'home' : 'other'}`}>{post.tag}</h5>
        </div>
        <div className="del_edit_buttons">
            <button className="deleteIcon" onClick={handleRemove}><img src={deleteImage} alt=""/></button>
            <button className="deleteIcon" onClick={handleUpdate}><img src={editImage} alt=""/></button>
        </div>
            
            
        </li>
        <CreateTaskModal
            type="update"
            task={currentTask}
            dateValue={currentDateValue}
            tag = {currentTag}
            isModalOpen={isModalOpen}
            setIsModalOpen={setIsModalOpen}
            handleTaskUpdate={handleTaskUpdate}
        />
        </div>
        
    )
}

export default PostItem