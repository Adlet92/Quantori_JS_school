
async function fetchData() {
    let response = await fetch('http://localhost:3000/tasks');
    let jsonData = await response.json();
    return jsonData;
  }

async function isThereTask() {
    let jsonData = await fetchData();
    const currentDate = new Date().toISOString().slice(0, 10);
    for (let i = 0; i < jsonData.length; i++){
        if(jsonData[i]["dateValue"] === currentDate && jsonData[i]["completed"] === false){
            return true;
        }
    }
    return false;
}


async function checkDate() {
    let jsonData = await fetchData();
    const currentDate = new Date().toISOString().slice(0, 10);
    const modal = document.getElementById('myModal');
    const dailyTasks = document.getElementById("daily-tasks");

    if(await isThereTask()){
        modal.style.display = 'block';
        for (let i = 0; i < jsonData.length; i++){
            if(jsonData[i]["dateValue"] === currentDate && jsonData[i]["completed"] === false){
                const taskItem = document.createElement("li");
                taskItem.innerText = jsonData[i].title;
                dailyTasks.appendChild(taskItem);
            }
        }
        const modalShowTime = new Date().getTime();
        localStorage.setItem("modalShowTime", modalShowTime);
    }else{
        modal.style.display = 'none';
    }
    // const modalShowTime = localStorage.getItem("modalShowTime");
    // if (modalShowTime) {
    //     const lastModalShowDate = new Date(Number(modalShowTime)).toISOString().slice(0, 10);
    //     if (lastModalShowDate === currentDate) {
    //         modal.style.display = 'none';
    //         // console.log("was shown");
    //     }
    // }
}
  

checkDate()
