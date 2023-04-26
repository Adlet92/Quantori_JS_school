
  export function createAddTaskWindow(){

    function changeTheColorOfButton() {
        if (document.getElementById("task-title").value !== "") {
           document.getElementById("task-button").style.background = "#3C86F4";
        } else {
          document.getElementById("task-button").style.background = "#D3D3D3";
       }
      }
    function closeAddTaskWindow(){
        const popup = document.getElementById('add-task-window');
        popup.style.display="none";
    }
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
          closeAddTaskWindow();
          renderTasks();
        }
      }

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

    const closeButton = document.querySelector('#add-task-window .close');
    closeButton.addEventListener('click', closeAddTaskWindow);
  
    const addButton = document.getElementById('task-button');
    addButton.addEventListener('click', addItem);
  
    const titleInput = document.getElementById('task-title');
    titleInput.addEventListener('keyup', changeTheColorOfButton);
  
    const dateElement = document.getElementById('date-choose');
    const today = new Date().toISOString().split('T')[0];
    dateElement.setAttribute('min', today);
  }

  