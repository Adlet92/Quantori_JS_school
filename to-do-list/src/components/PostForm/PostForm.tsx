import React, {useState, useCallback} from 'react'
import MyInput from '../UI/input/MyInput'
import { PostItemProps } from '../Interfaces/interfaces'
import {PostFormProps} from '../Interfaces/interfaces'
import FormFooter from './FormFooter'
import CategoryOptions from './CategoryOptions'
import FormHeader from './FormHeader'

const PostForm = ({create, setVisible} : PostFormProps) =>{
    const [post, setPost] = useState<PostItemProps>({title:'', dateValue:'', completed: false})
    const [sequence, setSequence] = useState<number>(0)

    const addNewPost = useCallback((event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const newPost = {
            ...post, id: sequence
        }
        create(newPost)
        setPost({title:'', dateValue:'', completed: false})
        setSequence(sequence => sequence + 1)
      }, [create, post, sequence])

    const isDisabled = !post.title || !post.dateValue;
    const minDate = new Date().toISOString().split('T')[0];

    const handleTitleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        setPost((prevPost) => ({ ...prevPost, title: e.target.value }));
      }, []);
    
    const handleDateChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        setPost((prevPost) => ({ ...prevPost, dateValue: e.target.value }));
      }, []);

    return (
        <div>
            <FormHeader/>
            <div className="popup-body">
                 {/* <MyInput onChange={handleTitleChange} type="text" placeholder="" defaultValue={post.title} /> */}
                 <MyInput onChange={handleTitleChange} type="text" placeholder="" defaultValue="" />
                    <div className="container-date-options">
                    <CategoryOptions/>
                        <input
                            onChange={handleDateChange}
                            id="date-choose"
                            className="calendar"
                            type="date"
                            defaultValue={post.dateValue}
                            min={minDate}
                        />  
                    </div>
            </div>
            <FormFooter 
                setVisible={setVisible}
                isDisabled={isDisabled}
                addNewPost={addNewPost}
            />
        </div>
    )
}

export default PostForm;