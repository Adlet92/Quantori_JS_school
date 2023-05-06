import React from 'react'
import classes from './MyInput.module.css'
import './SearchBar.css'

const SearchBar = ({filter, setFilter, setModal}) => {
    return (
        <div className="search-wrapper">
            <input
                value={filter.query}
                onChange={e => setFilter({...filter, query: e.target.value})} 
                type="search" 
                id="find" 
                placeholder="Search task"/> 
            <button id="myBtn" onClick={setModal}>+New Task</button>
          </div>
    );
};

export default SearchBar;



