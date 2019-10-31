
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

function testCode(){
    //Cookies test code here
    let myItem = new ToDoItem("Learn about cookies:");
    myItem.isCompleted = false;
    myItem.deadline = new Date(2019, 10, 29);

    const cookieKey = "toDoItems"
    //Converts to a json string format
    let strData = JSON.stringify(myItem);
    //Setting a cookie called todo items that expire in a week
    Cookies.set(cookieKey, strData, {expires : 7});
    //Read my todo itm out of the cookie
    let cookieItem:ToDoItem = JSON.parse(Cookies.get(cookieKey));
    //console.log(cookieItem.title + " " + cookieItem.deadline);
    //End Test Code


    //Local storage test
    const key = "Task";
    if(typeof(Storage) != "undefined"){
        localStorage.setItem(key, strData);
    }
    let storagestr:ToDoItem = JSON.parse(localStorage.getItem(key));
    //console.log(storagestr.title);
    //end
}

window.onload = function(){
    let btnElem = <HTMLElement> document.querySelector("form > input[type=button]");
    btnElem.onclick = main;    
}

function main(){
    let item:ToDoItem = getItem();
    displayToDoItem(item); 

    //get existing todo add new one and 
    //save the todo item list
    let allItems = readToDoItems();
    allItems.push(item);    //add new item to exsisting list
    saveToDoItems(allItems);

    for (let i = 0; i < allItems.length; i++) {
        console.log(allItems[i]);
    }
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

const itemkey = "MyItems";
function saveToDoItems(items:Array<ToDoItem>){
    let stringData = JSON.stringify(items);
    localStorage.setItem(itemkey, stringData);
}

function readToDoItems():Array<ToDoItem>{
    let strData = localStorage.getItem(itemkey);
    if(strData == null){
        return new Array<ToDoItem>()
    }
    return <ToDoItem[]>JSON.parse(strData);
}