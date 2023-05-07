import React from 'react'
import './SearchBar.css'

interface Props {
    filter: {
      query: string;
    };
    setFilter: (filter: { query: string }) => void;
    setModal: () => void;
  }

const SearchBar = ({filter, setFilter, setModal} : Props) => {
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



