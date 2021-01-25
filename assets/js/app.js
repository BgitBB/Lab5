//UI

const taskInput = document.querySelector('#task'); //the task input text field
const form = document.querySelector('#task-form'); //The form at the top
const filter = document.querySelector('#filter'); //the task filter text field
const taskList = document.querySelector('.collection'); //The ul
const clearBtn = document.querySelector('.clear-tasks'); //the all task clear button


//Events


form.addEventListener("submit", addNewTask);

clearBtn.addEventListener("click", clearAllTasks);

filter.addEventListener("keyup", filterTasks);






//handlers
function addNewTask(e){
    alert("Add New Task ....");
    e.preventDefault();
}

function clearAllTasks (){
    alert("Clear tasks ....");
}

function filterTasks (){
    console.log("Task Filter ...");
}