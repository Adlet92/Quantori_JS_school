import React from 'react';
import PostItemInc from './PostItemInc';
import PostItemComp from './PostItemComp';
import { PostItemProps } from './models/models'
import './UI/Inc.css'

export interface PostListProps{
    titleList: string,
    posts: PostItemProps[];
    remove?: (id: number) => void;
    isCompleted: boolean;
}

const PostList = ({posts, titleList, remove, isCompleted}: PostListProps) => {
    const filteredPosts = posts.filter(post => post.completed === isCompleted);

    if(!filteredPosts.length){
        return (
            <h3 style={{textAlign:'center'}}>There are no tasks</h3>
        )
    }

    return (
        <div>
            <ol className={isCompleted ? "Completed" : "notCompleted"} id={isCompleted ? "cmplt" : "ntc"}>
                <h1>{titleList}</h1>
                {filteredPosts.map((post) => isCompleted ? 
                    <PostItemComp {...post} key={post.id}/> :
                    <PostItemInc remove={remove} {...post} key={post.id}/>
                )}
            </ol>
        </div>
    )
}

export default PostList;