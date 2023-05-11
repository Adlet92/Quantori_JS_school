import { FC } from "react";
import { IPost } from "../models/IPost";
import deleteImage from "./img/Shape.svg"
import editImage from "./img/edit-1.svg"
import './Inc.css'


interface PostItemProps {
    post: IPost;
    remove: (post: IPost) => void;
    update: (post:IPost) => void;
}

const PostItem: FC<PostItemProps> = ({post, remove, update}) =>{

    const handleRemove = (event: React.MouseEvent) => {
        event.stopPropagation()
        remove(post)
    }
    const handleUpdate = (event: React.MouseEvent) => {
        const title = prompt() || ""
        update({...post, title})
    }

    return (
        // <div className="post">
        //     {post.title}
        //     <button onClick={handleRemove}>Delete</button>
        //     <button onClick={handleUpdate}>Update</button>
        // </div>
        <li><input id="check"  type="checkbox"/>
        <label id="label-title">{ post.title}</label>
        <button className="deleteIcon" onClick={handleRemove}><img src={deleteImage} alt=""/></button>
        <button className="deleteIcon" onClick={handleUpdate}><img src={editImage} alt=""/></button>
      </li>
    )
}

export default PostItem