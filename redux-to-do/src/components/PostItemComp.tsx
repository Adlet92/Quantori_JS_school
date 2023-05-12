import React from "react";
import { IPost } from "../models/IPost";

interface PostItemCompProps {
    post: IPost;
  }

const PostItemComp = ({ post }: PostItemCompProps) => {
    return (
      <div>
        <li><input type="checkbox" checked disabled={true}/>
        <div>
        <label className="compl">Completed {post.title}</label>
        <h5 className="post_tag_compl">{post.tag}</h5>
        </div>
       </li>
      </div>
    );
};

export default PostItemComp;