
/**
 * Represents a single task on a todo list
 */
class ToDoItem{
    title:string;
    deadline:Date;
    isCompleted:boolean;

    constructor(title:string){
        this.title = title;
    }
}

//test code here
let myItem = new ToDoItem("Learn about cookies =;");
myItem.isCompleted = false;
myItem.deadline = new Date(2019, 10, 29);

//Converts to a json string format
let strData = JSON.stringify(myItem);
//console.log(strData);

//Setting a cookie called todo items that expire in a week
Cookies.set("ToDoItems", strData, {expires : 7});
//End Test Code

window.onload = function(){
    let btnElem = <HTMLElement> document.querySelector("form > input[type=button]");
    btnElem.onclick = main;    
}


function main(){
    let item:ToDoItem = getItem();
    displayToDoItem(item); 

    //save the todo item

}

/**
 * Move selected task to completed section of page
 */
function markAsComplete() {
    let currItem = <HTMLDivElement>this;
    
    let completedItem = document.getElementById("complete");
    completedItem.appendChild(currItem);
}

/**
 * displays todo item on page inside of an html input element
 * @param item item to display
 */
function displayToDoItem(item:ToDoItem):void{
    let div = document.createElement("div");
    div.onclick = markAsComplete;
    div.innerHTML = "<input type='checkbox'>" + item.title;

    let displaydiv = document.getElementById("todo");
    displaydiv.appendChild(div);

    //console.log(div);
}

/**
 * get all user input from form and return a toDo item
 */
function getItem():ToDoItem{
    let title = (<HTMLInputElement> document.getElementById("title")).value;
    let item = new ToDoItem(title);

    let deadline = (<HTMLInputElement> document.getElementById("datepicker")).value;
    item.deadline = new Date(deadline);

    //TODO change to input value
    item.isCompleted = false;

    return item;
}