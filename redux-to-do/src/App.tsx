// import React, { useCallback, useEffect, useMemo, useState } from 'react';
import React, { useState } from 'react';
import './App.css';
// import { useAppDispatch, useAppSelector } from './hooks/redux';
// import { userSlice } from './store/reduces/UserSlice';
// import { fetchUsers } from './store/reduces/ActionCreators';
import PostContainer from './components/PostContainer';
import SearchBar from './components/SearchBar/SearchBar';
import Weather from './components/Weather/Weather';
import CreateTaskModal from './components/CreateTaskModal/CreateTaskModal';

function App() {
  // const dispatch = useAppDispatch();
  // const {users, isLoading, error} = useAppSelector(state => state.userReducer)

  // useEffect(() =>{
  //   dispatch(fetchUsers())
  // }, [])

  const [filter, setFilter] = useState<{query: string}>({query: ''})
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [selectedTag, setSelectedTag] = useState<string>('');


  return (
    <div className="container">
      {isModalOpen && <CreateTaskModal type='add' isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}/>}
    <div className="todo-app">
      <div className="header-elements">
        <h2>To Do List</h2>
        <Weather/>
        </div>
        <SearchBar 
            filter={filter}
            setFilter={setFilter}
            setIsModalOpen={() => setIsModalOpen(true)}
            setSelectedTag={setSelectedTag}/>
       <PostContainer
          filter={filter}
          selectedTag={selectedTag}
          titleList="All Tasks"
          isCompleted={false}
          key="all-tasks"
        />
         <PostContainer
          filter={filter}
          selectedTag={selectedTag}
          titleList="Completed Tasks"
          isCompleted={true}
          key="all-tasks"
        />
    </div>
    </div>
  );
}

export default App;
