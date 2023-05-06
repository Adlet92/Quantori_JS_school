import React from "react";
import ShapeImage from '../styles/img/Shape.svg'

export interface PostItemProps{
    id: number,
    title: string,
    body: string,
    remove?: (id: number) => void
}

const PostItemInc = (props: PostItemProps) => {
    return (
      <li><input id="check"  type="checkbox"/>
        <label id="label-title">{ props.title}</label>
        <button className="deleteIcon" onClick={() => props.remove(props.id)}><img src = {ShapeImage}/></button>
      </li>
    );
};

export default PostItemInc;