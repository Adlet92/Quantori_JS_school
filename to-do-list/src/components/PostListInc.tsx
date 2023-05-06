import React from 'react';
import PostItemInc, {PostItemProps} from './PostItemInc';

export interface PostListProps{
    titleList: string,
    posts: PostItemProps[];
    remove: (id: number) => void;
}

const PostListInc = ({posts, titleList, remove} : PostListProps) =>{

    if(!posts.length){
        return(
            <h3 style={{textAlign:'center'}}>There are no tasks</h3>
        )
    }

    return (
        <div>
            <h1>
                {titleList}
            </h1>
            {posts.map((post) =>
            <PostItemInc remove={remove} {...post} key={post.id}/>)}
        </div>
    )
}
export default PostListInc;