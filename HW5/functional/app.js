
const newTaskButton = document.getElementById('myBtn');
  
function createAddTaskWindow(){
  const modalHtml = 
  '<div id="add-task-window" class="popup">' +
    '<div class="popup-content">' +
      '<div class="popup-header">' +
        '<h2>Add New Task</h2>' +
      '</div>' +
      '<div class="popup-body">' +
        '<input id="task-title" class="title-task" type="text" placeholder="Task title" onkeyup="changeTheColorOfButton()">' +
        '<div class="container-date-options">' +
                '<div class="option">' +
                    '<div class="option health">health</div>' +
                    '<div class="option work">work</div>' +
                    '<div class="option home">home</div>' +
                    '<div class="option other">other</div>' +
                '</div>' +
                '<input id="date-choose" class="calendar" type="date">' +
          '</div>' +
      '</div>' +
      '<div class="popup-footer">' +
        '<button class="close" onclick="closeAddTaskWindow()">Close</button>' +
        '<button class="addTask2" id="task-button" onclick="addItem();">Add Task</button>' +
      '</div>' +
    '</div>' +
  '</div>';

  const existingAddTaskWindow = document.getElementById('add-task-window');
  if (existingAddTaskWindow) {
    existingAddTaskWindow.remove();
  }
  document.body.insertAdjacentHTML('beforebegin', modalHtml);

  const dateElement = document.getElementById('date-choose');
  const today = new Date().toISOString().split('T')[0];
  dateElement.setAttribute('min', today);
}


newTaskButton.addEventListener("click", function(){
  createAddTaskWindow();
});

function closeAddTaskWindow(){
  const popup = document.getElementById('add-task-window');
  popup.style.display="none";
}
function closeTodaysModal(){
  const modal = document.getElementById('todaysTask');
  modal.style.display="none";
}

function changeTheColorOfButton() {
  if (document.getElementById("task-title").value !== "") {
     document.getElementById("task-button").style.background = "#3C86F4";
  } else {
    document.getElementById("task-button").style.background = "#D3D3D3";
 }
}

let searchTextBox = document.getElementById("find");

searchTextBox.addEventListener("input", function(){
  let trlist = document.querySelectorAll("li");
  Array.from(trlist).forEach(function(item){
    let searchedText = item.innerText;
    let searchTextBoxVal = searchTextBox.value;
    let re = new RegExp(searchTextBoxVal, 'gi');
    if (searchedText.match(re)){
      item.style.display="block";
    }
    else {
      item.style.display="none";
    }
  })
});

  const state = {
    todos: [],
    completed: [],
    searchQuery: ''
  };

  function renderTasks() {
    const todoList = document.getElementById('ntc');
    const completedList = document.getElementById('cmplt');
    const searchTextBox = document.getElementById('find');
  
    todoList.innerHTML = '';
    completedList.innerHTML = '';
  
    state.todos.forEach(({ id, title, completed, dateValue }) => {
      if (title.includes(state.searchQuery)) {
        const html = `
        <li>
            <input id="check-${id}" type="checkbox" ${completed ? 'checked' : ''} onchange="toggleCompletedTodo(${id}, '${title}', ${!completed}, '${dateValue}')">
            <label id="label-title-${id}" class="${completed ? 'completed' : ''}">${title}</label>
            <button class="deleteIcon" onclick="deleteTodo(${id})">
              <img src="./img/Shape.svg">
            </button>
          </li>
        `;
        todoList.insertAdjacentHTML('beforeend', html);
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
  
    searchTextBox.value = state.searchQuery;
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
  
  window.addEventListener('DOMContentLoaded', getAllTodos);
  
  async function addItem() {
    const input = document.getElementById('task-title');
    const title = input.value;
    const dateElement = document.getElementById('date-choose');
    const dateValue = dateElement.value;
  
    if (title && dateValue) {
      const todo = {
        title,
        dateValue,
        completed: false
      };

      const res = await fetch('http://localhost:3000/tasks', {
        method: 'POST',
        // body: JSON.stringify(todo),
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(todo)
      });
      
      const createdTodo = await res.json();
      state.todos.push(createdTodo);
      // state.todos.push(todo);
  
      input.value = '';
      // dateElement.value = '';
      closeAddTaskWindow();
      renderTasks();
    }
  }
  
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