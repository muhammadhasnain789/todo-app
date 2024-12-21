
let todoInput = document.getElementById('todoInput');
let addButton = document.getElementById('addButton');
let todoList = document.getElementById('todoList');

 addTask =() => {
  let taskText = todoInput.value.trim();

  if (taskText === '') {
    alert('Please Enter A Task!');
    return;
  }

 let li = document.createElement('li');
  li.className = 'todo-item';

 let  span = document.createElement('span');
  span.textContent = taskText;

  let deleteButton = document.createElement('button');
  deleteButton.textContent = 'Delete';
  deleteButton.addEventListener('click', () => {
    todoList.removeChild(li);
  });

  li.appendChild(span);
  li.appendChild(deleteButton);

  todoList.appendChild(li);


  todoInput.value = '';
}


addButton.addEventListener('click', addTask);


todoInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    addTask();
  }
});
