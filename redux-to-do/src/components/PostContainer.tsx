import { useEffect } from "react";
import { IPost } from "../models/IPost";
import { postAPI } from "../services/PostService"
import PostItem from "./PostItem";
import './UI/Inc.css'
import PostItemComp from "./PostItemComp";

interface PostListProps{
    titleList: string;
    isCompleted: boolean;
}

const PostContainer = ({titleList, isCompleted}: PostListProps) => {
    const {data: posts=[], error, isLoading} = postAPI.useFetchAllPostsQuery(1000)
    // const [createPost, {}] = postAPI.useCreatePostMutation()
    const [updatePost, {}] = postAPI.useUpdatePostMutation()
    const [deletePost, {}] = postAPI.useDeletePostMutation()
    
    useEffect(() => {

    }, [])

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

    // const handleCreate = async () =>{
    //     const title = prompt()
    //     await createPost({title, body: title} as IPost)
    // }

    const handleRemove = (post: IPost) => {
        deletePost(post)
    }
    const handleUpdate = (post: IPost) => {
        updatePost(post)
      
    }

    return (
        // <div>
        //     <div className="notCompleted" id="ntc">
        //         <h3>All Tasks</h3>
        //         {isLoading && <h1>Loading.....</h1>}
        //         {error && <h1>Error</h1>}
        //         {posts && posts.map(post => 
        //             <PostItem remove={handleRemove} update={handleUpdate} key={post.id} post={post}/>)
        //         }
        //     </div>
        // </div>
        <div>
            {isLoading && <h1>Loading.....</h1>}
            {error && <h1>Error</h1>}
            <ol className={isCompleted ? "Completed" : "notCompleted"} id={isCompleted ? "cmplt" : "ntc"}>
                <h3>{titleList}</h3>
                {filteredPosts.map((post) => isCompleted ? 
                    <PostItemComp key={post.id} post={post}/> :
                    <PostItem remove={handleRemove} update={handleUpdate} key={post.id} post={post}/>
                )}
            </ol>
        </div>
    );
};
export default PostContainer;