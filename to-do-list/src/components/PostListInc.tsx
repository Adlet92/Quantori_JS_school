import React from 'react';
import PostItemInc from './PostItemInc';
import  {PostItemProps} from './models/models'
import './UI/Inc.css'

export interface PostListProps{
    titleList: string,
    posts: PostItemProps[];
    remove: (id: number) => void;
}

const PostListInc = ({posts, titleList, remove} : PostListProps) =>{
    const incompletedPosts = posts.filter(post => !post.completed);

    if(!incompletedPosts.length){
        return(
            <h3 style={{textAlign:'center'}}>There are no tasks</h3>
        )
    }

    return (
        <div>
            <ol className="notCompleted" id="ntc">
            <h1>
                {titleList}
            </h1>
            {incompletedPosts.map((post) =>
            <PostItemInc remove={remove} {...post} key={post.id}/>)}
            </ol>
        </div>
    )
}
export default PostListInc;