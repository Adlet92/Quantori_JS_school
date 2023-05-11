import React, { useCallback, useEffect, useState } from 'react';
import './App.css';
import { useAppDispatch, useAppSelector } from './hooks/redux';
import { userSlice } from './store/reduces/UserSlice';
import { fetchUsers } from './store/reduces/ActionCreators';
import PostContainer from './components/PostContainer';
import SearchBar from './components/SearchBar/SearchBar';
import Weather from './components/Weather/Weather';
import CreateTaskModal from './components/CreateTaskModal/CreateTaskModal';
// import CreateTaskModal from './components/createTaskModal/createTaskModal';
// import PostForm from './components/PostForm/PostForm';

function App() {
  // const dispatch = useAppDispatch();
  // const {users, isLoading, error} = useAppSelector(state => state.userReducer)

  // useEffect(() =>{
  //   dispatch(fetchUsers())
  // }, [])

  const [filter, setFilter] = useState({query: ''})
  // const [modal, setModal] = useState(false)
  const [modalOpen, setModalOpen] = useState(false)

  // const closeModal = useCallback(() => {
  //   setModal(false);
  // }, []);



  return (
    // <div className="App">
    //   {/* {isLoading && <h1>Loading...</h1>}
    //   {error && <h1>{error}</h1>}
    //   {JSON.stringify(users, null, 2)} */}
    //   <PostContainer/>
    // </div>

    <div className="container">
      <CreateTaskModal type='add' modalOpen={modalOpen} setModalOpen={setModalOpen}/>
    <div className="todo-app">
      <div className="header-elements">
        <h2>To Do List</h2>
        <Weather/>
        </div>
        {/* <SearchBar 
            filter={filter}
            setFilter={setFilter}
            setModal={() => setModal(true)}/> */}
        <SearchBar 
            setModalOpen={() => setModalOpen(true)}/>
        {/* <PostList
        remove={removePost}
        posts={sortedAndSearchedPosts}
        titleList="All Tasks"
        isCompleted={false}
        key="all-tasks"
      />
        <PostList
        posts={sortedAndSearchedPosts}
        titleList="Completed Tasks"
        isCompleted={true}
        key="completed-tasks"
      /> */}
       <PostContainer
          titleList="All Tasks"
          isCompleted={false}
          key="all-tasks"
        />
         <PostContainer
          titleList="Completed Tasks"
          isCompleted={false}
          key="all-tasks"
        />
    </div>
    </div>
  );
}

export default App;
