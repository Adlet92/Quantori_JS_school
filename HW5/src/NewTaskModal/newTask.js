import { state, renderTasks } from '../index';
import './newTask.css';

  export function createAddTaskWindow(){
    const modal = document.createElement('div');
    modal.id = 'add-task-window';
    modal.classList.add('popup');

    const modalContent = document.createElement('div');
    modalContent.classList.add('popup-content');

    const modalHeader = document.createElement('div');
    modalHeader.classList.add('popup-header');

    const headerTitle = document.createElement('h2');
    headerTitle.textContent = 'Add New Task';

    modalHeader.appendChild(headerTitle);

    const modalBody = document.createElement('div');
    modalBody.classList.add('popup-body');

    const taskTitleInput = document.createElement('input');
    taskTitleInput.id = 'task-title';
    taskTitleInput.classList.add('title-task');
    taskTitleInput.type = 'text';
    taskTitleInput.placeholder = 'Task title';
    taskTitleInput.addEventListener('keyup', changeTheColorOfButton);

    const containerDateOptions = document.createElement('div');
    containerDateOptions.classList.add('container-date-options');

    const option = document.createElement('div');
    option.classList.add('option');

    const healthOption = document.createElement('div');
    healthOption.classList.add('option', 'health');
    healthOption.textContent = 'health';

    const workOption = document.createElement('div');
    workOption.classList.add('option', 'work');
    workOption.textContent = 'work';

    const homeOption = document.createElement('div');
    homeOption.classList.add('option', 'home');
    homeOption.textContent = 'home';

    const otherOption = document.createElement('div');
    otherOption.classList.add('option', 'other');
    otherOption.textContent = 'other';

    option.appendChild(healthOption);
    option.appendChild(workOption);
    option.appendChild(homeOption);
    option.appendChild(otherOption);

    const dateChooseInput = document.createElement('input');
    dateChooseInput.id = 'date-choose';
    dateChooseInput.classList.add('calendar');
    dateChooseInput.type = 'date';
    const today = new Date().toISOString().split('T')[0];
    dateChooseInput.setAttribute('min', today);

    containerDateOptions.appendChild(option);
    containerDateOptions.appendChild(dateChooseInput);

    modalBody.appendChild(taskTitleInput);
    modalBody.appendChild(containerDateOptions);

    const modalFooter = document.createElement('div');
    modalFooter.classList.add('popup-footer');

    const closeButton = document.createElement('button');
    closeButton.classList.add('close');
    closeButton.textContent = 'Close';
    closeButton.addEventListener('click', closeAddTaskWindow);

    const addButton = document.createElement('button');
    addButton.classList.add('addTask2');
    addButton.id = 'task-button';
    addButton.textContent = 'Add Task';
    // addButton.addEventListener('click', addItem);
    addButton.addEventListener('click', async function() {
      if (await addItem()) {
        document.getElementById('find').value = '';
        closeAddTaskWindow();
      }
    });
    

    modalFooter.appendChild(closeButton);
    modalFooter.appendChild(addButton);

    modalContent.appendChild(modalHeader);
    modalContent.appendChild(modalBody);
    modalContent.appendChild(modalFooter);

    modal.appendChild(modalContent);
  
    const existingAddTaskWindow = document.getElementById('add-task-window');
    if (existingAddTaskWindow) {
      existingAddTaskWindow.remove();
    }
    document.body.insertBefore(modal, document.body.firstChild);

  }


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
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(todo)
        });
        
        const createdTodo = await res.json();
        state.todos.push(createdTodo);
    
        input.value = '';
        renderTasks();
        return true;
      }
      return false;
    }
  