class ToDoList {
    constructor() {
        this.Todos = [];
    }

    addTodo() {
        this.Todos.push("Novo To Do");
        console.log(this.Todos);
    }
}

const MinhaLista = new ToDoList();

document.getElementById('novotodo').onclick = function() {
    MinhaLista.addTodo();
}