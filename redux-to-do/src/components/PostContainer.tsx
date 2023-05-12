import { useEffect, useState } from "react";
import { IPost } from "../models/IPost";
import { postAPI } from "../services/PostService"
import PostItem from "./PostItem";
import './UI/Inc.css'
import PostItemComp from "./PostItemComp";

interface PostListProps{
    titleList: string;
    isCompleted: boolean;
    filter: {
        query: string;
      };
    selectedTag: string;
}

const PostContainer = ({titleList, isCompleted, filter, selectedTag}: PostListProps) => {
    const {data: posts=[], error, isLoading} = postAPI.useFetchAllPostsQuery(1000)
    const [updatePost, {}] = postAPI.useUpdatePostMutation()
    const [deletePost, {}] = postAPI.useDeletePostMutation()
    
    useEffect(() => {

    }, [])

    // const filteredTasks = posts.filter((post) => {
    //     return (
    //       post.title.toLowerCase().includes(filter.query.toLowerCase()) &&
    //       post.completed === isCompleted
    //     );
    //   });
    const filteredTasks = posts.filter((post) => {
        if (selectedTag && post.tag !== selectedTag) {
          return false;
        }
        return post.title.toLowerCase().includes(filter.query.toLowerCase()) && post.completed === isCompleted;
      });
    // const filteredPosts = posts.filter(post => post.completed === isCompleted);

    // if(!posts.length){
    //     return (
    //         <h3 style={{textAlign:'center'}}>There are no tasks</h3>
    //     )
    // }

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