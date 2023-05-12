import React from 'react'
import './SearchBar.css'
import TagSelector from './TagSelector';

interface searchProps {
    filter: {
        query: string;
      };
    setFilter: (filter: { query: string}) => void;
    setIsModalOpen: (open: boolean) => void;
    setSelectedTag: (tag: string) => void;
  }

const SearchBar = ({filter, setFilter,setIsModalOpen, setSelectedTag}: searchProps) => {
        return (
            <div className="search-wrapper">
                <input
                    value={filter.query}
                    onChange={e => setFilter({...filter, query: e.target.value})} 
                    type="search" 
                    id="find" 
                    placeholder="Search task"/> 
                <button id="myBtn" onClick={() => setIsModalOpen(true)}>+New Task</button>
                <TagSelector setSelectedTag={(tag) => setSelectedTag(tag)}/>
              </div>
        );
    };

export default SearchBar;