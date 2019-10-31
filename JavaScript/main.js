/**
 * Represents a single task on a todo list
 */
var ToDoItem = /** @class */ (function () {
    function ToDoItem(title) {
        this.title = title;
    }
    return ToDoItem;
}());
function testCode() {
    //Cookies test code here
    var myItem = new ToDoItem("Learn about cookies:");
    myItem.isCompleted = false;
    myItem.deadline = new Date(2019, 10, 29);
    var cookieKey = "toDoItems";
    //Converts to a json string format
    var strData = JSON.stringify(myItem);
    //Setting a cookie called todo items that expire in a week
    Cookies.set(cookieKey, strData, { expires: 7 });
    //Read my todo itm out of the cookie
    var cookieItem = JSON.parse(Cookies.get(cookieKey));
    //console.log(cookieItem.title + " " + cookieItem.deadline);
    //End Test Code
    //Local storage test
    var key = "Task";
    if (typeof (Storage) != "undefined") {
        localStorage.setItem(key, strData);
    }
    var storagestr = JSON.parse(localStorage.getItem(key));
    //console.log(storagestr.title);
    //end
}
window.onload = function () {
    var btnElem = document.querySelector("form > input[type=button]");
    btnElem.onclick = main;
};
function main() {
    var item = getItem();
    displayToDoItem(item);
    //get existing todo add new one and 
    //save the todo item list
    var allItems = readToDoItems();
    allItems.push(item); //add new item to exsisting list
    saveToDoItems(allItems);
    for (var i = 0; i < allItems.length; i++) {
        console.log(allItems[i]);
    }
}
/**
 * Move selected task to completed section of page
 */
function markAsComplete() {
    var currItem = this;
    var completedItem = document.getElementById("complete");
    completedItem.appendChild(currItem);
}
/**
 * displays todo item on page inside of an html input element
 * @param item item to display
 */
function displayToDoItem(item) {
    var div = document.createElement("div");
    div.onclick = markAsComplete;
    div.innerHTML = "<input type='checkbox'>" + item.title;
    var displaydiv = document.getElementById("todo");
    displaydiv.appendChild(div);
    //console.log(div);
}
/**
 * get all user input from form and return a toDo item
 */
function getItem() {
    var title = document.getElementById("title").value;
    var item = new ToDoItem(title);
    var deadline = document.getElementById("datepicker").value;
    item.deadline = new Date(deadline);
    //TODO change to input value
    item.isCompleted = false;
    return item;
}
var itemkey = "MyItems";
function saveToDoItems(items) {
    var stringData = JSON.stringify(items);
    localStorage.setItem(itemkey, stringData);
}
function readToDoItems() {
    var strData = localStorage.getItem(itemkey);
    if (strData == null) {
        return new Array();
    }
    return JSON.parse(strData);
}
