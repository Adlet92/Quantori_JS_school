import React, { useState, useMemo, useEffect } from 'react';
import './styles/App.css'
import { PostItemProps } from './components/models/models';
import PostList from './components/PostList';
import PostForm from './components/PostForm';
import SearchBar from './components/SearchBar/SearchBar';
import MyModal from './components/UI/modal/MyModal';
import PostService from './API/PostService';


function App() {
  const [posts, setPosts] = useState<PostItemProps[]>([])
  const [filter, setFilter] = useState({query: ''})
  const [modal, setModal] = useState(false)

  const sortedAndSearchedPosts = useMemo(()=>{
    return posts.filter(post => post.title.toLowerCase().includes(filter.query))

  }, [filter.query, posts])

  useEffect(() => {
    async function fetchPost() {
      const posts = await PostService.getAll();
      setPosts(posts.tasks)
    }
    fetchPost()
  }, [])

  const createPost = async (newPost: PostItemProps) => {
    const createdPost = await PostService.create(newPost);
    setPosts([...posts, createdPost])
    setModal(false)
  }

  const removePost = async (id: number) => {
    await PostService.delete(id);
    setPosts(posts.filter(p => p.id !== id));
  }
  
  return (
    <div className="container">
      <MyModal visible={modal} setVisible={setModal}>
          <PostForm create={createPost} setVisible={setModal}/>
      </MyModal>
      <div className="todo-app">
        <div className="header-elements">
          <h2>To Do List</h2>
            <img src="" id="weather-icon" className="weather-icon"/>
            <h4 id="temp" className="temp"></h4>
            <h4 id="city-name" className="city-name"></h4>
          </div>
          <SearchBar 
              filter={filter}
              setFilter={setFilter}
              setModal={() => setModal(true)}/>
          <PostList remove={(id) => removePost(id)} posts={sortedAndSearchedPosts} titleList="All Tasks" isCompleted={false}/>
          <PostList posts={sortedAndSearchedPosts} titleList="Completed Tasks" isCompleted={true}/>
      </div>
    </div>
  );
}

export default App;
