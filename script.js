$(document).ready(function () { 
    $("button").on("click", addTodo)
    $("#todos").on("click", ".todo-check", toggleCheck)
    $("#todos").on("click", ".todo-delete", deleteTodo)
})

function addTodo(event) {
    event.preventDefault();
    const title =  $("input").val();
    if(title.trim() !== ""){
        $("#todos").append(`<li class="todo">
                                <h4 class="todo-title">${title}</h4>
                                <button class="todo-check">check</button>
                                <button class="todo-delete">delete</button>
                            </li>`);
        $("input").val("");
    }
}

function toggleCheck(){
    var currentTodo = $(this).parent();
    currentTodo.toggleClass("checked")
}

function deleteTodo(){
    var currentTodo = $(this).parent();
    currentTodo.remove()
}