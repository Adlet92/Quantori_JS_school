import React from "react";
import {PostItemProps} from '../Interfaces/interfaces'


const PostItemComp = (props: PostItemProps) => {
    return (
      <li><input type="checkbox" checked disabled={true}/>
        <label className="compl">{props.title}</label>
       </li>
    );
};

export default PostItemComp;