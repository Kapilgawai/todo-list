const inputBox = document.querySelector(".inputSec input");          //getting all required element
const addButton = document.querySelector(".inputSec button");
const todolist = document.querySelector(".todolist");
const clearAllButton = document.querySelector(".footer button");





inputBox.onkeyup = ()=>{
    let userData = inputBox.value;          //getting user entered value
    if (userData.trim() !=0){                                          //if user value arent only space
addButton.classList.add("active");                      // active the add button
    }else{
        addButton.classList.remove("active") ;                     // unactive the add button

    }
}
showTasks(); //calling showtasks functions 


// if user click on add button 
addButton.onclick = ()=>{
    let userData = inputBox.value;          //getting user entered value
let getlocalStorage = localStorage.getItem("New todo"); // getting localstorage
if (getlocalStorage == null){    //if local storage is null
    listArr = []; // creating blank array

} else{
    listArr = JSON.parse(getlocalStorage); //transforming json string into js object
}
listArr.push(userData); //adding user data
localStorage.setItem("New todo", JSON.stringify(listArr)); // TRANSFORMING js object into json string
showTasks(); //calling showtasks functions 
}


//function to add task list inside ul

function showTasks(){

    let getlocalStorage = localStorage.getItem("New todo"); // getting localstorage
    if (getlocalStorage == null){    //if local storage is null
        listArr = []; // creating blank array
    
    } else{
        listArr = JSON.parse(getlocalStorage); //transforming json string into js object
}

const pendingTask = document.querySelector(".pendingTask");
pendingTask.textContent = listArr.length;    //passing the length value in pendingtask


let newLiTag = '';
listArr.forEach((element, index) => {
    newLiTag += ` <li> ${element}  <span onclick="deleteTask(${index})";><i class="fa-solid fa-trash"></i></span> </li>`;
});

todolist.innerHTML = newLiTag;  //adding new li tag inside ul  tag
inputBox.value = "";          //once task added leave the input boc empty

}

//sec-II delete task function

function deleteTask(index){
    let getlocalStorage = localStorage.getItem("New todo");
    listArr = JSON.parse(getlocalStorage);
    listArr.splice(index, 1);        //delet or remove the perticular index li

    //after removing the li again update the local storage

    localStorage.setItem("New todo", JSON.stringify(listArr)); 
    showTasks();
}




//sec-III delete all tasks 

clearAllButton.onclick = ()=>{
    listArr= [];  //empty an arrey

    //after delete all tasks again update the local storage

    localStorage.setItem("New todo", JSON.stringify(listArr)); 
    showTasks();   // calling showtask function

}