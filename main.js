

const username = document.getElementById('username');
const password = document.getElementById('password');
const p = document.getElementById("text2");
const button = document.getElementById('button');
const todoButton = document.getElementById('todoButton');
const todoInput = document.getElementById('todoInput');
const todoList = document.getElementById('todoList');

let users = [
    {
        id: 1,
        name: "item",
        password: "123456"
    }
];

let userInputInfo = {
    name: "",
    password: ""
};

let item = prompt('Siznig username:item va password: 123456 ')

username.addEventListener('input', (e) => {
    userInputInfo.name = e.target.value;
});

password.addEventListener('input', (e) => {
    userInputInfo.password = e.target.value;
});

button.addEventListener('click', () => {
    let loggedIn = false;
    users.forEach(element => {
        if (element.name == userInputInfo.name && element.password == userInputInfo.password) {
            p.textContent = "Siz logindan otingiz";
            p.style.color = "green";
            loggedIn = true;
        }
    });

    if (!loggedIn) {
        p.textContent = "Siz logindan otomadiz";
        p.style.color = "red";
    }
});
todoButton.addEventListener('click', () => {
    const todoItem = todoInput.value;
    if (todoItem) {
        const li = document.createElement('li');
        li.textContent = todoItem;
        todoList.appendChild(li);
        todoInput.value = "";
    }
});
