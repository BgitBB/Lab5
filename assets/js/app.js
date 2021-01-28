//UI

const taskInput = document.querySelector('#task'); //the task input text field
const form = document.querySelector('#task-form'); //The form at the top
const filter = document.querySelector('#filter'); //the task filter text field
// const taskList = document.querySelector('.collection'); //The ul
const clearBtn = document.querySelector('.clear-tasks'); //the all task clear button
const rld = document.querySelector(".fa-retweet");

const asc = document.querySelector("#asc");
const dsc = document.querySelector("#dsc");

const ascL =  document.querySelector("#ascL");
const dscL =  document.querySelector("#dscL");


var isAsc = true;



//Events


form.addEventListener("submit", addNewTask);

clearBtn.addEventListener("click", clearAllTasks);

filter.addEventListener("keyup", filterTasks);

// taskInput.addEventListener("keydown", reverseBorderColor);

ascL.addEventListener('click', clearTask);
dscL.addEventListener('click', clearTask);

rld.addEventListener('click', reload);


asc.addEventListener('click', ascSort);
dsc.addEventListener('click', dscSort);




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
    taskInput.value = "";
    const link = document.createElement('a');
    link.className = 'delete-item secondary-content';
    link.innerHTML = '<i class="fa fa-remove"></i>';
    // taskList.appendChild(li.appendChild(link));
    li.appendChild(link);
    if (isAsc){
        ascL.appendChild(li);
    }
    else{
        ascSort();
        ascL.appendChild(li);
        dscSort();
    }

    

    li.setAttribute('timeStamp', Date.now());

    // BT.add(taskInput)
    // for BTS
    // Binary Tree
  
}

function clearAllTasks (){
    // taskList.innerHTML = "";


    // var collSize = taskList.childElementCount;
    // for (let i = 1; i <= collSize; i++){
    //     taskList.firstElementChild.remove();
    // }
    taskList = isAsc ? ascL : dscL;
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
// function clearTaskD (e) {
//     // if (e.target.className === "delete-item secondary-content"){
//     //     e.target.parentElement.remove();
//     // }

//             //worked
//     // if (e.target.parentNode.classList.contains('delete-item')){
//     //     e.target.parentNode.parentNode.remove();
//     //     console.log('hey');
//     // }

//     if (e.target.parentElement.classList.contains('delete-item')){
//         if (confirm('Are you sure you want to delete the task?')){
//             e.target.parentElement.parentElement.remove();
//         }
        
//     }
// }

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




document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.dropdown-trigger');
    var instances = M.Dropdown.init(elems, constrainWidth = false);
});


function ascSort(e){
    if (dscL.children.length){
        for (let i = dscL.children.length-1; i >= 0; i--){
            ascL.appendChild(dscL.children[i]);
        }
        dscL.style.border = "none";
        ascL.style.border = "1px solid #e0e0e0";
        ascL.style.borderRadius = "2px";
        isAsc =  true;
    }
}

function dscSort (){
    if (ascL.children.length){
        for (let i = ascL.children.length-1; i >= 0; i--){
            dscL.appendChild(ascL.children[i]);
        }
        ascL.style.border = "none";
        dscL.style.border = "1px solid #e0e0e0";
        dscL.style.borderRadius = "2px";
        isAsc = false;
    }

    // .getAttribute('timestamp')
    

}

