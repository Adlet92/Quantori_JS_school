// import { setSearchQuery } from './index';
import './searchBar.css';

export function setupSearchBox() {
    const searchTextBox = document.getElementById("find");
  
    searchTextBox.addEventListener("input", function(){
      const trlist = document.querySelectorAll("li");
      Array.from(trlist).forEach(function(item){
        const searchedText = item.innerText;
        const searchTextBoxVal = searchTextBox.value;
        const re = new RegExp(searchTextBoxVal, 'gi');
        if (searchedText.match(re)){
          item.style.display="block";
        }
        else {
          item.style.display="none";
        }
      });
      // setSearchQuery(searchTextBox.value);
    });
  }
  