import React, { useEffect } from 'react'
import './SearchBar.css'
import TagSelector from './TagSelector';
import { useNavigate, useSearchParams } from 'react-router-dom';

interface searchProps {
    filter:string;
    setFilter: (value: string) => void;
    setIsModalOpen: (open: boolean) => void;
    setSelectedTag: (tag: string) => void;
  }

const SearchBar = ({filter, setFilter,setIsModalOpen, setSelectedTag}: searchProps) => {

  const navigate = useNavigate();
 
  const [searchParams, setSearchParams] = useSearchParams();
  
  useEffect(() => {
    const q = searchParams.get('q');
    if (q) {
      setFilter(q);
    }
  }, [searchParams, setFilter]);


  useEffect(() => {
    if (filter.trim()) {
      setSearchParams({ q: filter.trim() });
    } else {
      setSearchParams({});
    }
  }, [filter, setSearchParams]);


  const handleSearch = () => {
    if (filter.trim()) {
      navigate(`/tasks?q=${filter.trim()}`);
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFilter(event.target.value);
  };

  const handleKeyUp = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

        return (
            <div className="search-wrapper">
                <input
                    value={filter}
                    onChange={handleChange} 
                    onKeyUp={handleKeyUp}
                    type="search" 
                    id="find" 
                    placeholder="Search task"/> 
                <button id="myBtn" onClick={() => setIsModalOpen(true)}>+New Task</button>
                <TagSelector setSelectedTag={(tag) => setSelectedTag(tag)}/>
              </div>
        );
    };

export default SearchBar;