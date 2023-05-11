import React from "react";
import { IPost } from "../models/IPost";

interface PostItemCompProps {
    post: IPost;
  }

const PostItemComp = ({ post }: PostItemCompProps) => {
    return (
      <li><input type="checkbox" checked disabled={true}/>
        <label className="compl">{post.title}</label>
       </li>
    );
};

export default PostItemComp;