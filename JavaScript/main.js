/**
 * Represents a single task on a todo list
 */
var ToDoItem = /** @class */ (function () {
    function ToDoItem(title) {
        this.title = title;
    }
    return ToDoItem;
}());
var myItem = new ToDoItem("Wrap up lecture");
window.onload = function () {
    var btnElem = document.querySelector("form > input[type=button]");
    btnElem.onclick = main;
};
function main() {
    var item = getItem();
    displayToDoItem(item);
    //save the todo item
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
    console.log(div);
}
/**
 * get all user input from form and return a toDo item
 */
function getItem() {
    var title = document.getElementById("title").value;
    var item = new ToDoItem(title);
    var deadline = document.getElementById("deadline").value;
    item.deadline = new Date(deadline);
    //TODO change to input value
    item.isCompleted = false;
    return item;
}
