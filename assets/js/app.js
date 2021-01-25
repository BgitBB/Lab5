//UI

const taskInput = document.querySelector('#task'); //the task input text field
const form = document.querySelector('#task-form'); //The form at the top
const filter = document.querySelector('#filter'); //the task filter text field
const taskList = document.querySelector('.collection'); //The ul
const clearBtn = document.querySelector('.clear-tasks'); //the all task clear button
const rld = document.querySelector(".fa-retweet");






//Events


form.addEventListener("submit", addNewTask);

clearBtn.addEventListener("click", clearAllTasks);

filter.addEventListener("keyup", filterTasks);

// taskInput.addEventListener("keydown", reverseBorderColor);

taskList.addEventListener('click', clearTask);

rld.addEventListener('click', reload);





//handlers
function addNewTask(e){
    e.preventDefault();
    if (!taskInput.value){
        taskInput.style.borderBottomColor = "red";
        return;
    }
    
    // taskList.appendChild(document.createElement('li').appendChild(document.createTextNode(taskInput.value)));

    const li = document.createElement('li');
    li.className = "collection-item";
    li.appendChild(document.createTextNode(taskInput.value));
    const link = document.createElement('a');
    link.className = 'delete-item secondary-content';
    link.innerHTML = '<i class="fa fa-remove"></i>';
    // taskList.appendChild(li.appendChild(link));
    li.appendChild(link);
    taskList.appendChild(li);
  
}

function clearAllTasks (){
    // taskList.innerHTML = "";


    // var collSize = taskList.childElementCount;
    // for (let i = 1; i <= collSize; i++){
    //     taskList.firstElementChild.remove();
    // }

    while (taskList.firstChild){
        taskList.firstChild.remove();
    }
    
}

// function reverseBorderColor(){
//     taskInput.style.borderBottomColor = 'rgb(158, 158, 158)';
// }


function clearTask (e) {
    // if (e.target.className === "delete-item secondary-content"){
    //     e.target.parentElement.remove();
    // }

            //worked
    // if (e.target.parentNode.classList.contains('delete-item')){
    //     e.target.parentNode.parentNode.remove();
    //     console.log('hey');
    // }

    if (e.target.parentElement.classList.contains('delete-item')){
        if (confirm('Are you sure you want to delete the task?')){
            e.target.parentElement.parentElement.remove();
        }
        
    }
}


function reload () {
    location.reload();
}

    


/*
    Instruction for Handling the Search/filter
    1. Receive the user input from the text input
    2. Assign it to a variable so the you can reuse it
    3. Use the querySelectorAll() in order to get the collection of li which have .collection-item class
    4. Iterate over the collection item Node List using forEach
    5. On each element check if the textContent of the li contains the text from User Input [can use indexOf]
    6 . If it contains , change the display property of the element as block , else none
*/


function filterTasks (e){
    document.querySelectorAll('.collection-item').forEach(el => {
        if (el.textContent.includes(filter.value)){
            el.style.display = "block";
            return;
        }
        el.style.display = "none";
    });



}




