import React from 'react';
import PostItemInc from './PostItemInc';
import PostItemComp from './PostItemComp';
import './UI/Inc.css'
import {PostListProps} from './Interfaces/interfaces'

const PostList = ({posts, titleList, remove, isCompleted}: PostListProps) => {
    const filteredPosts = posts.filter(post => post.completed === isCompleted);

    if(!posts.length){
        return (
            <h3 style={{textAlign:'center'}}>There are no tasks</h3>
        )
    }

    if(!filteredPosts.length){
        return (
            <h3 style={{textAlign:'center'}}>There are no {isCompleted ? 'completed' : 'incomplete'} tasks</h3>
        )
    }

    return (
        <div>
            <ol className={isCompleted ? "Completed" : "notCompleted"} id={isCompleted ? "cmplt" : "ntc"}>
                <h3>{titleList}</h3>
                {filteredPosts.map((post) => isCompleted ? 
                    <PostItemComp {...post} key={post.id}/> :
                    <PostItemInc remove={remove} {...post} key={post.id}/>
                )}
            </ol>
        </div>
    )
}

export default PostList;
