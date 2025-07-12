// Array to store all todo items
const todoList = [];

// Initialize the todo list display
renderTodoList();

// Function to display all todos on the page
function renderTodoList() {

    let todoListHTML = '';

    // Loop through each todo and create HTML for it
    todoList.forEach((todoObject, index) => {
        // const todoObject = todoList[i];
        // const task = todoObject.task;
        // const dueDate = todoObject.dueDate;
        const { task, dueDate } = todoObject;
        const html = `
        <div>${task}</div>
        <div>${dueDate}</div>
        <button class="delete-todo-button js-delete-todo-button">Delete</button>
        `;
        todoListHTML += html;

    });

    // for (let i = 0; i < todoList.length; i++) {
    //     const todoObject = todoList[i];
    //     // const task = todoObject.task;
    //     // const dueDate = todoObject.dueDate;
    //     const { task, dueDate } = todoObject;
    //     const html = `
    //     <div>${task}</div>
    //     <div>${dueDate}</div>
    //     <button class="delete-todo-button" onclick= "
    //        todoList.splice(${i}, 1);
    //        renderTodoList();
    //     ">Delete</button>
    //     `;
    //     todoListHTML += html;
    // }

    // Update the page with the new HTML
    document.querySelector('.js-todo-list')
        .innerHTML = todoListHTML;

    // Add click event listeners to all delete buttons
    document.querySelectorAll('.js-delete-todo-button')
        .forEach((deleteButton, index) => {
            deleteButton.addEventListener('click', () => {
                todoList.splice(index, 1); // Remove todo at this index
                renderTodoList(); // Refresh the display
            });
        });
}

// Add button click event listener
document.querySelector('.js-add-todo-button')
    .addEventListener('click', () => {
        addTodo();
    });

// Add Enter key listener to task input field
document.querySelector('.js-task-input')
    .addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            addTodo();
        }
    });

// Global keyboard shortcuts
document.body.addEventListener('keydown', (event) => {
    if (event.key === 'Delete') {
        if (todoList.length > 0) {
            todoList.pop(); // Remove the last todo from the array
            renderTodoList(); // Refresh the display
        }
    }
});

// Function to add a new todo to the list
function addTodo() {
    const inputElement = document.querySelector('.js-task-input');
    const task = inputElement.value;
    const dateInputElement = document.querySelector('.js-due-date-input');
    const dueDate = dateInputElement.value;

    // Prevent adding empty todos (just spaces)
    if (task.trim() === '') {
        return; // Don't add empty todos
    }

    // Add new todo object to the array
    todoList.push({
        // task: task,
        // dueDate: dueDate, if both are same
        task,
        dueDate
    });
    inputElement.value = ''; // Clear the input field

    renderTodoList(); // Refresh the display
}
