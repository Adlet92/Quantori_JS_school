import React from 'react'
import './SearchBar.css'
// import {PropsSearch} from '../Interfaces/interfaces'

interface Props {
    setModalOpen: (open: boolean) => void;
  }

// const SearchBar = ({filter, setFilter, setModal} : PropsSearch) => {
//     return (
//         <div className="search-wrapper">
//             <input
//                 value={filter.query}
//                 onChange={e => setFilter({...filter, query: e.target.value})} 
//                 type="search" 
//                 id="find" 
//                 placeholder="Search task"/> 
//             <button id="myBtn" onClick={setModal}>+New Task</button>
//           </div>
//     );
// };
const SearchBar = ({setModalOpen}: Props) => {
        return (
            <div className="search-wrapper">
                <input
                    type="search" 
                    id="find" 
                    placeholder="Search task"/> 
                <button id="myBtn" onClick={() => setModalOpen(true)}>+New Task</button>
              </div>
        );
    };

export default SearchBar;