import React, { useState, useMemo, useEffect, useCallback } from 'react';
import '../src/components/UI//styles/App.css'
import { PostItemProps } from './components/Interfaces/interfaces';
import PostList from './components/PostList/PostList';
import PostForm from './components/PostForm/PostForm';
import SearchBar from './components/SearchBar/SearchBar';
import MyModal from './components/UI/modal/MyModal';
import PostService from './API/PostService';
import Weather from './components/Weather/Weather';


function App() {
  
  const [posts, setPosts] = useState<PostItemProps[]>([])
  const [filter, setFilter] = useState({query: ''})
  const [modal, setModal] = useState(false)

  const sortedAndSearchedPosts = useMemo(()=>{
    return posts.filter(post => post.title.toLowerCase().includes(filter.query))

  }, [filter.query, posts])

  useEffect(() => {
    let canceled = false;
  
    async function fetchPosts() {
      const posts = await PostService.getAll();
      if (!canceled) {
        setPosts(posts.tasks);
      }
    }
  
    fetchPosts();
  
    return () => {
      canceled = true;
    };
  }, []);
  

  const createPost = useCallback(async (newPost: PostItemProps) => {
    const createdPost = await PostService.create(newPost);
    setPosts(posts => [...posts, createdPost])
    setModal(false)
  }, [])

  const removePost = useCallback(async (id: number) => {
    await PostService.delete(id);
    setPosts(posts => posts.filter(p => p.id !== id));
  }, [setPosts]);
  
  const closeModal = useCallback(() => {
    setModal(false);
  }, []);


  return (
    <div className="container">
      <MyModal visible={modal} setVisible={closeModal}>
          <PostForm create={createPost} setVisible={closeModal}/>
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
          {/* <PostList remove={(id) => removePost(id)} posts={sortedAndSearchedPosts} titleList="All Tasks" isCompleted={false}/> */}
          <PostList
          remove={removePost}
          posts={sortedAndSearchedPosts}
          titleList="All Tasks"
          isCompleted={false}
          key="all-tasks"
        />
          {/* <PostList posts={sortedAndSearchedPosts} titleList="Completed Tasks" isCompleted={true}/> */}
          <PostList
          posts={sortedAndSearchedPosts}
          titleList="Completed Tasks"
          isCompleted={true}
          key="completed-tasks"
        />
      </div>
    </div>
  );
}

export default App;
