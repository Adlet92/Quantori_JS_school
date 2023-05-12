// import { useEffect, useState } from "react";
import { useEffect } from "react";
import { IPost } from "../models/IPost";
import { postAPI } from "../services/TaskService"
import PostItem from "./PostItem";
import './UI/Inc.css'
import PostItemComp from "./PostItemComp";

interface postListProps{
    titleList: string;
    isCompleted: boolean;
    filter: {
        query: string;
      };
    selectedTag: string;
}

const PostContainer = ({titleList, isCompleted, filter, selectedTag}: postListProps) => {
    const {data: posts=[], error, isLoading} = postAPI.useFetchAllPostsQuery(1000)
    // const [updatePost, {}] = postAPI.useUpdatePostMutation()
    // const [deletePost, {}] = postAPI.useDeletePostMutation()
    const [updatePost] = postAPI.useUpdatePostMutation()
    const [deletePost] = postAPI.useDeletePostMutation()
    
    useEffect(() => {

    }, [])
    
    const filteredTasks = posts.filter((post) => {
        if (selectedTag && post.tag !== selectedTag) {
          return false;
        }
        return post.title.toLowerCase().includes(filter.query.toLowerCase()) && post.completed === isCompleted;
      });

    if(!filteredTasks.length){
        return (
            <h3 style={{textAlign:'center'}}>There are no {isCompleted ? 'completed' : 'incomplete'} tasks</h3>
        )
    }

    const handleRemove = (post: IPost) => {
        deletePost(post)
    }
    const handleUpdate = (post: IPost) => {
        updatePost(post)
      
    }

    return (
        <div>
            {isLoading && <h1>Loading.....</h1>}
            {error && <h1>Error</h1>}
            <ol className={isCompleted ? "Completed" : "notCompleted"} id={isCompleted ? "cmplt" : "ntc"}>
                <h3>{titleList}</h3>
                {filteredTasks.map((post) => isCompleted ? 
                    <PostItemComp key={post.id} post={post}/> :
                    <PostItem remove={handleRemove} update={handleUpdate} key={post.id} post={post}/>
                )}
            </ol>
        </div>
    );
};
export default PostContainer;