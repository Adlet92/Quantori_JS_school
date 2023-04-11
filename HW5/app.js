showtask();
showTaskComleted();
const input = document.querySelector('input');
const btn = document.querySelector('.addTask2');

btn.addEventListener('click', function(){
  addtaskinputval = input.value;
  if (addtaskinputval.trim() != 0){
    let webtask = localStorage.getItem("localtask");
    if(webtask == null){
    taskObj = [];
    }
    else {
    taskObj = JSON.parse(webtask);
    }
    taskObj.push(addtaskinputval);
    localStorage.setItem("localtask", JSON.stringify(taskObj));
    input.value = '';
  }
  showtask();
});

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
  if(taskCompleted == null){
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
  if(taskCompleted == null){
    taskCmpl = [];
  }
  else {
    taskCmpl = JSON.parse(taskCompleted);
  }
  taskCmpl.push(taskObj[index]);

  localStorage.setItem("completedtask", JSON.stringify(taskCmpl));

  showTaskComleted();
}

let searchtextbox = document.getElementById("find");
searchtextbox.addEventListener("input", function(){
  let trlist = document.querySelectorAll("li");
  Array.from(trlist).forEach(function(item){
    let searchedtext = item.innerText;
    console.log(searchedtext);
    let searchtextboxval = searchtextbox.value;
    let re = new RegExp(searchtextboxval, 'gi');
    if (searchedtext.match(re)){
      item.style.display="block";
    }
    else {
      item.style.display="none";
    }
  })
});

let popup = document.getElementById('mypopup');
let popupToggle = document.getElementById('myBtn');
let popupClose = document.querySelector('.close');

popupToggle.onclick = function(){
  popup.style.display="block";
};
popupClose.onclick = function (){
  popup.style.display="none";
}
btn.onclick = function (){
  popup.style.display="none";
}
function changeTheColorOfButton() {
  if (document.getElementById("task-title").value !== "") {
     document.getElementById("task-button").style.background = "#3C86F4";
  } else {
    document.getElementById("task-button").style.background = "#D3D3D3";
 }
}
