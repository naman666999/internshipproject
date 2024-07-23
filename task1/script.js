// script.js

document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('taskInput');
    const addTaskBtn = document.getElementById('addTaskBtn');
    const taskList = document.getElementById('taskList');

    addTaskBtn.addEventListener('click', () => {
        const taskText = taskInput.value.trim();
        if (taskText) {
            addTask(taskText);
            taskInput.value = '';
        }
    });

    taskInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            const taskText = taskInput.value.trim();
            if (taskText) {
                addTask(taskText);
                taskInput.value = '';
            }
        }
    });

    function addTask(text) {
        const li = document.createElement('li');
        li.innerHTML = `
            <span>${text}</span>
            <button onclick="removeTask(this)">Delete</button>
            <button onclick="toggleComplete(this)">Complete</button>
        `;
        taskList.appendChild(li);
    }

    window.removeTask = function(button) {
        const li = button.parentElement;
        li.remove();
    };

    window.toggleComplete = function(button) {
        const li = button.parentElement;
        li.classList.toggle('completed');
    };
});
