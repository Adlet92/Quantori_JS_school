import './main.css';
import ShapeImage from './img/Shape.svg';
import { setupSearchBox } from './SearchBar/search';
import {createAddTaskWindow} from './NewTaskModal/newTask';
import {getAllTodos, deleteTodo, toggleCompletedTodo} from './Actions/actions';


const newTaskButton = document.getElementById('myBtn');

newTaskButton.addEventListener("click", function(){
  createAddTaskWindow();
});

  export const state = {
    todos: [],
    completed: [],
    searchQuery: ''
  };

  // export function setSearchQuery(query) {
  //   state.searchQuery = query;
  //   renderTasks();
  // }
  
 
  export function renderTasks() {
    const todoList = document.getElementById('ntc');
    const completedList = document.getElementById('cmplt');
    
    todoList.innerHTML = '';
    completedList.innerHTML = '';
  
    state.todos.forEach(({ id, title, completed, dateValue}) => {
      if (title.includes(state.searchQuery)) {

        const li = document.createElement('li');

        const checkbox = document.createElement('input');
        checkbox.setAttribute('id', `check-${id}`);
        checkbox.setAttribute('type', 'checkbox');
        checkbox.checked = completed;
        checkbox.addEventListener('click', () => {
          toggleCompletedTodo(id, title, !completed, dateValue);
        });
        li.appendChild(checkbox);

        const label = document.createElement('label');
        label.setAttribute('id', `label-title-${id}`);
        // label.classList.add(completed ? 'completed' : '');
        if (completed) {
          label.classList.add('completed');
        }
        
        label.textContent = title;
        li.appendChild(label);

        const button = document.createElement('button');
        button.setAttribute('id', `delete-${id}`);
        button.classList.add('deleteIcon');
        button.addEventListener('click', () => {
          deleteTodo(id);
        });
        const img = document.createElement('img');
        img.setAttribute('src', ShapeImage);
        button.appendChild(img);
        li.appendChild(button);

        todoList.appendChild(li);
       
      }
    });
    state.completed.forEach(({ title }) => {
      if (title.includes(state.searchQuery)) {
        const li = document.createElement('li');

        const checkbox = document.createElement('input');
        checkbox.setAttribute('type', 'checkbox');
        checkbox.checked = true;
        checkbox.disabled = true;
        li.appendChild(checkbox);

        const label = document.createElement('label');
        label.classList.add('compl');
        label.textContent = title;
        li.appendChild(label);

        completedList.appendChild(li);
      }
    });
  }
  
  window.addEventListener('DOMContentLoaded', () => {
    getAllTodos();
    setupSearchBox(); 
  });
  