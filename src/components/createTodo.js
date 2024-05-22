import checkBoxHandler from '../handlers/checkBoxHandler.js';
import deleteHandler from '../handlers/deleteHandler.js';

const createTodo = (todoData) => {
    // container
    const container = document.createElement('div');
    container.classList.add('todo');
    container.id = todoData.id;

    // title
    const title = document.createElement('h3');
    title.className = 'title';
    title.innerText = todoData.title;

    // checkbox 
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = todoData.completed;

    checkbox.addEventListener('change', () => {
        checkBoxHandler(todoData);
    });

    // delete btn
    const deleteBtn = document.createElement('button');
    deleteBtn.classList = 'delete';
    deleteBtn.innerText = 'Delete';

    deleteBtn.addEventListener('click', () => {
        deleteHandler(todoData.id);
    });

    container.append(title, checkbox, deleteBtn);

    return container;
};

export default createTodo;