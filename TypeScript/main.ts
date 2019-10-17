
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

let myItem = new ToDoItem("Wrap up lecture");