// showtask();
// showTaskComleted();

const popupToggle = document.getElementById('myBtn');
  
function createModal(){
  const modalHtml = 
  '<div id="mypopup" class="popup">' +
    '<div class="popup-content">' +
      '<div class="popup-header">' +
        '<h2>Add New Task</h2>' +
      '</div>' +
      '<div class="popup-body">' +
        '<input id="task-title" type="text" placeholder="Task title" onkeyup="changeTheColorOfButton()">' +
      '</div>' +
      '<div class="popup-footer">' +
        '<button class="close" onclick="closeItem()">Close</button>' +
        '<button class="addTask2" id="task-button" onclick="addItem()">Add Task</button>' +
      '</div>' +
    '</div>' +
  '</div>';

  const existingPopup = document.getElementById('mypopup');
  if (existingPopup) {
    existingPopup.remove();
  }
  document.body.insertAdjacentHTML('beforebegin', modalHtml);
}


popupToggle.addEventListener("click", function(){
  createModal();
});

// function addItem(){
//   const taskTitleInput = document.querySelector('input');
//   addTaskInputVal = taskTitleInput.value;
//   if (addTaskInputVal.trim() !== 0){
//     let webtask = localStorage.getItem("localtask");
//     if(webtask === null){
//     taskObj = [];
//     }
//     else {
//     taskObj = JSON.parse(webtask);
//     }
//     taskObj.push(addTaskInputVal);
//     localStorage.setItem("localtask", JSON.stringify(taskObj));
//     console.log(taskObj)
//     taskTitleInput.value = '';
//     }
//   closeItem();
//   showtask();
// }

function closeItem(){
  const popup = document.getElementById('mypopup');
  popup.style.display="none";
}

function changeTheColorOfButton() {
  if (document.getElementById("task-title").value !== "") {
     document.getElementById("task-button").style.background = "#3C86F4";
  } else {
    document.getElementById("task-button").style.background = "#D3D3D3";
 }
}

// function showtask(){
//   let webtask = localStorage.getItem("localtask");
//   if(webtask == null){
//     taskObj = [];
//   }
//   else {
//     taskObj = JSON.parse(webtask);
//   }
//   let html = '<h3>All Tasks</h3>';
//   let addTaskList = document.getElementById('ntc');
//   taskObj.forEach((element, index) => {
//     html += `
//             <li><input onclick="checkItem(${index}); deleteItem(${index})" type="checkbox">
//             <label>${element}</label>
//             <button class="deleteIcon" onclick="deleteItem(${index})"><img src = "./img/Shape.svg"/></button>
//             </li>`;
//   });
//   addTaskList.innerHTML = html;
// }

// function showTaskComleted(){
//   let taskCompleted = localStorage.getItem("completedtask");
//   if(taskCompleted === null){
//     taskCmpl = [];
//   }
//   else {
//     taskCmpl = JSON.parse(taskCompleted);
//   }

//   let html = `<h3>Completed Tasks</h3>`;
//   let addTaskList = document.getElementById('cmplt');
//   taskCmpl.forEach((el) => {
//     html += `
//             <li><input type="checkbox" checked disabled="disabled">
//             <label class="compl">${el}</label>
//             </li>`;
//   });
//   addTaskList.innerHTML = html;
// }

// function deleteItem(index){
//   let webtask = localStorage.getItem("localtask");
//   let taskObj = JSON.parse(webtask);
//   taskObj.splice(index, 1);
//   localStorage.setItem("localtask", JSON.stringify(taskObj));
//   showtask();
// }

// function checkItem(index){
//   let webtask = localStorage.getItem("localtask");
//   taskObj = JSON.parse(webtask);

//   let taskCompleted = localStorage.getItem("completedtask");
//   if(taskCompleted === null){
//     taskCmpl = [];
//   }
//   else {
//     taskCmpl = JSON.parse(taskCompleted);
//   }
//   taskCmpl.push(taskObj[index]);

//   localStorage.setItem("completedtask", JSON.stringify(taskCmpl));

//   showTaskComleted();
// }

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

async function getAllTodos(){
  const res = await fetch("http://localhost:3000/tasks");
  const todos = await res.json();
  // todos.forEach(todo => todoToHTML(todo));
  for (let i = 0; i < todos.length; i++){
    if(todos[i]["completed"] === true){
      CompletedToHTML(todos[i])
    }else{
      todoToHTML(todos[i])
    }
  }
}

window.addEventListener('DOMContentLoaded', getAllTodos);

function todoToHTML({id, completed, title}){
  const todoList = document.getElementById('ntc');

  todoList.insertAdjacentHTML('beforeend', `
    <li><input id="check" onclick="toggleCompletedTodo(${id}, ${title})" type="checkbox" ${completed && 'checked'}>
    <label id="label-title">${title}</label>
    <button class="deleteIcon" onclick="deleteTodo(${id})"><img src = "./img/Shape.svg"/></button>
    </li>
  `);
}
function CompletedToHTML({title}){
  const todoList = document.getElementById('cmplt');

  todoList.insertAdjacentHTML('beforeend', `
                  <li><input type="checkbox" checked disabled="disabled">
                  <label class="compl">${title}</label>
                  </li>
  `);
}

async function addItem(){
  const input = document.getElementById('task-title');
  const title = input.value;

  if (title) {
    const res = await fetch("http://localhost:3000/tasks", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({title, completed: false})
    });

    const todo = await res.json();
    // console.log(todo);
    todoToHTML(todo);
  }
}

async function deleteTodo(id){
  const res = await fetch(`http://localhost:3000/tasks/${id}`, {
    method: 'DELETE',
    headers:{
      'Content-Type': 'application/json',
    }
  });
  const data = await res.json();
  if (data){
    document.getElementById('ntc').remove();
  }
}
async function toggleCompletedTodo(id, title){
  console.log("yes")
  // const completed = document.getElementById('check').checked;

  const res = await fetch(`http://localhost:3000/tasks/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({title, completed:true})
  })
  const data = await res.json();
}
// let searchTextBox = document.getElementById("find");

// searchTextBox.addEventListener("input", function(){
//   let trlist = document.querySelectorAll("li");
//   Array.from(trlist).forEach(function(item){
//     let searchedText = item.innerText;
//     let searchTextBoxVal = searchTextBox.value;
//     let re = new RegExp(searchTextBoxVal, 'gi');
//     if (searchedText.match(re)){
//       item.style.display="block";
//     }
//     else {
//       item.style.display="none";
//     }
//   })
// });