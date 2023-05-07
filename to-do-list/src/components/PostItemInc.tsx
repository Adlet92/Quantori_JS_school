import React from "react";
import ShapeImage from '../styles/img/Shape.svg'
import { PostItemProps } from './models/models'
import PostService from "../API/PostService";


const PostItemInc = (props: PostItemProps) => {

  const handleChange = async () => {
    try {
      await PostService.update(props.id, {
        ...props,
        completed: true
      });
    } catch (e) {
      console.log(e);
    }
  };

    return (
      <li><input id="check"  type="checkbox" onChange={handleChange}/>
        <label id="label-title">{ props.title}</label>
        <button className="deleteIcon" onClick={() => props.remove(props.id)}><img src = {ShapeImage}/></button>
      </li>
    );
};

export default PostItemInc;