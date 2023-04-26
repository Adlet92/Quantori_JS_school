import { setupSearchBox } from './SearchBar/search.js';
import {createAddTaskWindow} from './NewTaskModal/newTask.js';


const newTaskButton = document.getElementById('myBtn');

newTaskButton.addEventListener("click", function(){
  createAddTaskWindow();
});

  async function deleteTodo(id) {
    await fetch(`http://localhost:3000/tasks/${id}`, {
    method: 'DELETE'
    });

    state.todos = state.todos.filter((todo) => todo.id !== id);
    state.completed = state.completed.filter((todo) => todo.id !== id);
    renderTasks();
  }

  async function toggleCompletedTodo(id, title, completed, dateValue) {
    const todo = { id, title, completed, dateValue };
    await fetch(`http://localhost:3000/tasks/${id}`, {
      method: 'PUT',
      body: JSON.stringify(todo),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    state.todos = state.todos.filter((t) => t.id !== id);
    state.completed = state.completed.filter((t) => t.id !== id);

    if (completed) {
      state.completed.push(todo);
    } else {
      state.todos.push(todo);
    }
    renderTasks();
  }

  const state = {
    todos: [],
    completed: [],
    searchQuery: ''
  };

  function renderTasks() {
    const todoList = document.getElementById('ntc');
    const completedList = document.getElementById('cmplt');
    // const searchTextBox = document.getElementById('find');
    
    todoList.innerHTML = '';
    completedList.innerHTML = '';
  
    state.todos.forEach(({ id, title, completed, dateValue }) => {
      if (title.includes(state.searchQuery)) {
        const html = `
          <li>
            <input id="check-${id}" type="checkbox" ${completed ? 'checked' : ''}>
            <label id="label-title-${id}" class="${completed ? 'completed' : ''}">${title}</label>
            <button id="delete-${id}" class="deleteIcon">
              <img src="./img/Shape.svg">
            </button>
          </li>
        `;
        todoList.insertAdjacentHTML('beforeend', html);
  
        const deleteButton = document.getElementById(`delete-${id}`);
        deleteButton.addEventListener('click', () => {
          deleteTodo(id);
        });
        const toggleButton = document.getElementById(`check-${id}`);
        toggleButton.addEventListener('change', () => {
          console.log("yes")
          toggleCompletedTodo(id, title, completed);
        });
      }
    });
    state.completed.forEach(({ title }) => {
      if (title.includes(state.searchQuery)) {
        const html = `
          <li>
            <input type="checkbox" checked disabled>
            <label class="compl">${title}</label>
          </li>
        `;
        completedList.insertAdjacentHTML('beforeend', html);
      }
    });
  
    // setupSearchBox.value = state.searchQuery;
  }
  

  async function getAllTodos() {
    const res = await fetch('http://localhost:3000/tasks', {
    method: 'GET'
    });
    const todos = await res.json();
    todos.forEach((todo) => {
      if (todo.completed) {
        state.completed.push(todo);
      } else {
        state.todos.push(todo);
      }
    });
    renderTasks();
  }
  
  // window.addEventListener('DOMContentLoaded', getAllTodos);
  window.addEventListener('DOMContentLoaded', () => {
    getAllTodos();
    setupSearchBox(); 
  });
  