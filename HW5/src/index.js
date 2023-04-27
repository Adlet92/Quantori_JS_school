import './main.css';
import ShapeImage from './img/Shape.svg';
import { setupSearchBox } from './search';
import {createAddTaskWindow} from './newTask';


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
  
  window.addEventListener('DOMContentLoaded', () => {
    getAllTodos();
    setupSearchBox(); 
  });
  