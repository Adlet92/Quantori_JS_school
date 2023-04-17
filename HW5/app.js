showtask();
showTaskComleted();

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

function addItem(){
  const taskTitleInput = document.querySelector('input');
  addTaskInputVal = taskTitleInput.value;
  if (addTaskInputVal.trim() !== 0){
    let webtask = localStorage.getItem("localtask");
    if(webtask === null){
    taskObj = [];
    }
    else {
    taskObj = JSON.parse(webtask);
    }
    taskObj.push(addTaskInputVal);
    localStorage.setItem("localtask", JSON.stringify(taskObj));
    console.log(taskObj)
    taskTitleInput.value = '';
    }
  closeItem();
  showtask();
}

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

function showtask(){
  let webtask = localStorage.getItem("localtask");
  if(webtask == null){
    taskObj = [];
  }
  else {
    taskObj = JSON.parse(webtask);
  }
  let html = '<h3>All Tasks</h3>';
  let addTaskList = document.getElementById('ntc');
  taskObj.forEach((element, index) => {
    html += `
            <li><input onclick="checkItem(${index}); deleteItem(${index})" type="checkbox">
            <label>${element}</label>
            <button class="deleteIcon" onclick="deleteItem(${index})"><img src = "./img/Shape.svg"/></button>
            </li>`;
  });
  addTaskList.innerHTML = html;
}

function showTaskComleted(){
  let taskCompleted = localStorage.getItem("completedtask");
  if(taskCompleted === null){
    taskCmpl = [];
  }
  else {
    taskCmpl = JSON.parse(taskCompleted);
  }

  let html = `<h3>Completed Tasks</h3>`;
  let addTaskList = document.getElementById('cmplt');
  taskCmpl.forEach((el) => {
    html += `
            <li><input type="checkbox" checked disabled="disabled">
            <label class="compl">${el}</label>
            </li>`;
  });
  addTaskList.innerHTML = html;
}

function deleteItem(index){
  let webtask = localStorage.getItem("localtask");
  let taskObj = JSON.parse(webtask);
  taskObj.splice(index, 1);
  localStorage.setItem("localtask", JSON.stringify(taskObj));
  showtask();
}

function checkItem(index){
  let webtask = localStorage.getItem("localtask");
  taskObj = JSON.parse(webtask);

  let taskCompleted = localStorage.getItem("completedtask");
  if(taskCompleted === null){
    taskCmpl = [];
  }
  else {
    taskCmpl = JSON.parse(taskCompleted);
  }
  taskCmpl.push(taskObj[index]);

  localStorage.setItem("completedtask", JSON.stringify(taskCmpl));

  showTaskComleted();
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

