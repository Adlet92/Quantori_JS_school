import React from 'react';
import PostItemComp, {PostItemProps} from './PostItemComp';

export interface PostListProps{
    titleList: string,
    posts: PostItemProps[];
}

const PostListComp = ({posts, titleList} : PostListProps) =>{
    if(!posts.length){
        return
        // return(
        //     <h3></h3>
        // )
    }

    return (
        <div>
            <h1>
                {titleList}
            </h1>
            {posts.map((post) =>
            <PostItemComp {...post} key={post.id}/>)}
        </div>
    )
}
export default PostListComp;