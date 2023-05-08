import React, { useState, useMemo, useEffect, useCallback } from 'react';
import './styles/App.css'
import { PostItemProps } from './components/Interfaces/interfaces';
import PostList from './components/PostList';
import PostForm from './components/PostForm';
import SearchBar from './components/SearchBar/SearchBar';
import MyModal from './components/UI/modal/MyModal';
import PostService from './API/PostService';
import Weather from './components/Weather/Weather';


function App() {
  
  const [posts, setPosts] = useState<PostItemProps[]>([])
  const [filter, setFilter] = useState({query: ''})
  const [modal, setModal] = useState(false)

  const sortedAndSearchedPosts = useMemo(()=>{
    if (!posts) {
      return [];
    }
    return posts.filter(post => post.title.toLowerCase().includes(filter.query))

  }, [filter.query, posts])

  // useEffect(() => {
  //   async function fetchPost() {
  //     const posts = await PostService.getAll();
  //     setPosts(posts.tasks)
  //   }
  //   fetchPost()
  // }, [])
  const fetchPost = useCallback(async () => {
    const posts = await PostService.getAll();
    setPosts(posts.tasks)
  }, []);

  useEffect(() => {
    fetchPost();
  }, [fetchPost])

  // const createPost = async (newPost: PostItemProps) => {
  //   const createdPost = await PostService.create(newPost);
  //   setPosts([...posts, createdPost])
  //   setModal(false)
  // }
  const createPost = useCallback(async (newPost: PostItemProps) => {
    const createdPost = await PostService.create(newPost);
    setPosts(posts => [...posts, createdPost])
    setModal(false)
  }, [])

  const removePost = useCallback(async (id: number) => {
    await PostService.delete(id);
    setPosts(posts => posts.filter(p => p.id !== id));
  }, []);

  // const removePost = async (id: number) => {
  //   await PostService.delete(id);
  //   setPosts(posts.filter(p => p.id !== id));
  // }
  
  return (
    <div className="container">
      <MyModal visible={modal} setVisible={setModal}>
          <PostForm create={createPost} setVisible={setModal}/>
      </MyModal>
      <div className="todo-app">
        <div className="header-elements">
          <h2>To Do List</h2>
          <Weather/>
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
