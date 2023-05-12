import React from 'react'
import './SearchBar.css'

interface Props {
    filter: {
        query: string;
      };
    setFilter: (filter: { query: string }) => void;
    setModalOpen: (open: boolean) => void;
    setSelectedTag: (tag: string) => void;
  }

const SearchBar = ({filter, setFilter,setModalOpen, setSelectedTag}: Props) => {
        return (
            <div className="search-wrapper">
                <input
                    value={filter.query}
                    onChange={e => setFilter({...filter, query: e.target.value})} 
                    type="search" 
                    id="find" 
                    placeholder="Search task"/> 
                <button id="myBtn" onClick={() => setModalOpen(true)}>+New Task</button>
                <select id="tag-selector" onChange={(e) => setSelectedTag(e.target.value)}>
                    <option value="">All Tags</option>
                    <option value="health">health</option>
                    <option value="work">work</option>
                    <option value="home">home</option>
                    <option value="other">other</option>
                 </select>
              </div>
        );
    };

export default SearchBar;