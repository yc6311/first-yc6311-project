
const todos = document.querySelector('#todo-list');
const msg = document.querySelector('#msg');
// console.log(msg);
const button = document.querySelector('.submit');
// console.log(button);

button.addEventListener('click', onClick);

const todoInput = document.querySelector('#todo-input');

function onClick(e){
    e.preventDefault();

    if(todoInput.value === ''){
        msg.style.display = 'block';
        setTimeout(()=> {
            msg.style.display='none'
        },200);
    }
    // console.log(todoInput.value);
    const li = document.createElement('li');
    li.appendChild(document.createTextNode(todoInput.value));
    li.classList.add('item');
    todos.appendChild(li);
    todoInput.value = '';
}