
import React, { useState } from 'react';
import './App.css';
import PostContainer from './components/PostContainer/PostContainer';
import SearchBar from './components/SearchBar/SearchBar';
import Weather from './components/Weather/Weather';
import CreateTaskModal from './components/CreateTaskModal/CreateTaskModal';


function App() {
  
  const [filter, setFilter] = useState('');
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