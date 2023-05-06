import React, { useState, useMemo } from 'react';
import './styles/App.css'
import { PostItemProps } from './components/PostItemComp';
import PostListComp from './components/PostListComp';
import PostListInc from './components/PostListInc';
import PostForm from './components/PostForm';
import SearchBar from './components/SearchBar/SearchBar';
import MyModal from './components/UI/modal/MyModal';

function App() {
  const [posts, setPosts] = useState<PostItemProps[]>([
      {id:1, title: 'Javascript', body: 'Desc'}
  ])
  const [posts2, setPosts2] = useState<PostItemProps[]>([
    {id:2, title: 'Javascript', body: 'Desc'}
])
const [filter, setFilter] = useState({sort: '', query: ''})
const [modal, setModal] = useState(false)


// const sortedPosts = useMemo(()=>{
//   if (filter.sort){
//     return [...posts].sort((a,b) => a[filter.sort].localeCompare(b[filter.sort]))
//   }
//   return posts;

// }, [filter.sort, posts])

const sortedAndSearchedPosts = useMemo(()=>{
  return posts.filter(post => post.title.toLowerCase().includes(filter.query))

}, [filter.query, posts])

const createPost = (newPost) => {
  setPosts([...posts, newPost])
  setModal(false)
}

// const removePost = (post) =>{
//   setPosts(posts.filter(p => p.id !== post.id))
// }
const removePost = (post) =>{
  setPosts(posts.filter(p => p.id !== post))
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
          {/* <div className="search-wrapper">
            <MyInput
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)} 
                type="search" 
                id="find" 
                placeholder="Search task"/> 
            <button id="myBtn">+New Task</button>
          </div> */}
          {/* <h3>All Tasks</h3> */}
          <ol className="notCompleted" id="ntc">
          <PostListInc remove={removePost} posts={sortedAndSearchedPosts} titleList="All Tasks"/>
          {/* <PostListInc remove={removePost} posts={posts} titleList="All Tasks"/> */}
          </ol>
          {/* <h3>Completed Tasks</h3> */}
          <ol className="Completed" id="cmplt">
          <PostListComp posts={posts2} posts={sortedAndSearchedPosts} titleList="Completed Tasks"/>
          </ol>
      </div>
    </div>
    
  );
}

export default App;
