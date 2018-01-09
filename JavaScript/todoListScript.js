var todoArr = [];
var ans = prompt("What would you like to do?");

while(ans !== "quit"){
    if(ans === "new") addTodo(todoArr);
    if (ans === "list")listTodo(todoArr);
    if (ans === "delete") deleteTodo(todoArr);

    ans = prompt("What would you like to do?");
}

function addTodo(arr){
    var todo = prompt("What would you like to add to your list?");
    arr.push(todo);
    console.log("added todo");
}

function listTodo(arr){
    //each todo on a new line with format "index: todo"
    console.log("*****");
    for (var i = 0; i < arr.length; i++) {
        console.log(i+ ": " + arr[i]);
    }
    console.log("*****");
}

/*//alternatively: 
    todoArr.forEach(function(item, index){
        console.log(index + ": " + item);
    })*/

function deleteTodo(arr){
    var index = prompt("What is the index of the todo you want to delete?")
    arr.splice(index, 1); //index to delete, number of items to delete
        
    console.log("deleted todo");
    console.log(arr);
}