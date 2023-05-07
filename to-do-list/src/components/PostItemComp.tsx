import React from "react";
import {PostItemProps} from './models/models'

// export interface PostItemProps{
//     id: number,
//     title: string,
//     completed: boolean,
//     remove?: (id: number) => void
// }

const PostItemComp = (props: PostItemProps) => {
    return (
      <li><input type="checkbox" checked disabled={true}/>
        <label className="compl">{props.title}</label>
       </li>
    );
};

export default PostItemComp;