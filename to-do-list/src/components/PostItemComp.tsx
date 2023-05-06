import React from "react";

export interface PostItemProps{
    id: number,
    title: string,
    body: string,
    remove?: (id: number) => void
}

const PostItemComp = (props: PostItemProps) => {
    return (
    //     <div className='post'>
    //         <div className='post__content'>
    //         <strong>{props.id}. {props.title}</strong>
    //             <div>
    //                {props.body}
    //             </div>
    //         </div>
    //         <div className='post__btns'>
    //             <button>Delete</button>
    //         </div>
    //   </div>
      <li><input type="checkbox" checked disabled={true}/>
        <label className="compl">{props.title}</label>
       </li>
    );
};

export default PostItemComp;