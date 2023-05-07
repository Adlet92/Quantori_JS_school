import React from 'react';
import PostItemComp from './PostItemComp';
import {PostItemProps} from './models/models'
import './UI/Inc.css'

export interface PostListProps{
    titleList: string,
    posts: PostItemProps[];
}

const PostListComp = ({posts, titleList} : PostListProps) =>{
    const completedPosts = posts.filter(post => post.completed);

    if(!completedPosts.length){
        return
    }

    return (
        <div>
            <ol className="Completed" id="cmplt">
            <h1>
                {titleList}
            </h1>
            {completedPosts.map((post) =>
            <PostItemComp {...post} key={post.id}/>)}
            </ol>
        </div>
    )
}
export default PostListComp;