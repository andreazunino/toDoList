document.addEventListener('DOMContentLoaded', function() {
    const taskForm = document.getElementById('taskForm');
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');

   
    taskForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const taskText = taskInput.value.trim();
        if (taskText !== '') {
            const listItem = createTaskItem(taskText);
            taskList.appendChild(listItem);
            taskInput.value = '';
        }
    });

   
    taskList.addEventListener('click', function(event) {
        if (event.target.classList.contains('delete-task')) {
            event.target.closest('.list-group-item').remove();
        }
    });

    
    taskList.addEventListener('change', function(event) {
        if (event.target.classList.contains('task-checkbox')) {
            const listItem = event.target.closest('.list-group-item');
            if (event.target.checked) {
                listItem.classList.add('completed');
            } else {
                listItem.classList.remove('completed');
            }
        }
    });

   
    function createTaskItem(text) {
        const listItem = document.createElement('li');
        listItem.classList.add('list-group-item');
        listItem.innerHTML = `
            <input type="checkbox" class="task-checkbox">
            ${text}
            <button class="btn btn-danger btn-sm float-right delete-task">Eliminar</button>
        `;
        return listItem;
    }
});
