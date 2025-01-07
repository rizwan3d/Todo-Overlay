interface Task {
    text: string;
    checked: boolean;
}

document.addEventListener('DOMContentLoaded', () => {

    const savedTasks: Task[] = JSON.parse(localStorage.getItem('tasks') || '[]');
    renderTasks(savedTasks);


    const input = document.getElementById('new-item-input') as HTMLInputElement;
    input.addEventListener('change', () => autoAddNewItem(input));
});

function renderTasks(tasks: Task[]): void {
    const output = document.getElementById('output') as HTMLElement;
    output.innerHTML = '';

    tasks.forEach((task, index) => {
        const taskContainer = createTaskElement(task, index);
        output.appendChild(taskContainer);
    });


    saveTasks(tasks);
}

function createTaskElement(task: Task, index: number): HTMLElement {
    const taskContainer = document.createElement('div');
    taskContainer.className = 'task-container';


    const checkbox = document.createElement('span');
    checkbox.className = 'todo-item';
    checkbox.setAttribute('data-checked', task.checked.toString());
    checkbox.textContent = task.checked ? '✓' : ' - ';
    checkbox.addEventListener('click', () => toggleTaskChecked(index, checkbox));


    const textInput = document.createElement('input');
    textInput.type = 'text';
    textInput.value = task.text;
    textInput.className = 'task-input';
    textInput.addEventListener('change', (e) => updateTaskText(index, (e.target as HTMLInputElement).value));


    const moveUpBtn = document.createElement('button');
    moveUpBtn.textContent = '↑';
    moveUpBtn.className = 'move-btn';
    moveUpBtn.addEventListener('click', () => moveTaskUp(index));

    const moveDownBtn = document.createElement('button');
    moveDownBtn.textContent = '↓';
    moveDownBtn.className = 'move-btn';
    moveDownBtn.addEventListener('click', () => moveTaskDown(index));


    taskContainer.addEventListener('dblclick', () => deleteTask(index));


    taskContainer.appendChild(checkbox);
    taskContainer.appendChild(textInput);
    taskContainer.appendChild(moveUpBtn);
    taskContainer.appendChild(moveDownBtn);

    return taskContainer;
}

function toggleTaskChecked(index: number, item: HTMLElement): void {
    const isChecked = item.getAttribute('data-checked') === 'true';
    const newState = !isChecked;

    item.setAttribute('data-checked', newState.toString());
    item.textContent = newState ? '✓' : ' - ';

    const tasks = getTasks();
    tasks[index].checked = newState;
    saveTasks(tasks);
}

function updateTaskText(index: number, newText: string): void {
    const tasks = getTasks();
    tasks[index].text = newText;
    saveTasks(tasks);
}

function autoAddNewItem(input: HTMLInputElement): void {
    const newTaskText = input.value.trim();

    if (newTaskText) {
        const tasks = getTasks();
        tasks.push({ text: newTaskText, checked: false });
        renderTasks(tasks);
        input.value = '';
    }
}

function deleteTask(index: number): void {
    const tasks = getTasks();
    tasks.splice(index, 1);
    renderTasks(tasks);
}

function moveTaskUp(index: number): void {
    const tasks = getTasks();
    if (index > 0) {
        const taskToMove = tasks.splice(index, 1)[0];
        tasks.splice(index - 1, 0, taskToMove);
        renderTasks(tasks);
    }
}

function moveTaskDown(index: number): void {
    const tasks = getTasks();
    if (index < tasks.length - 1) {
        const taskToMove = tasks.splice(index, 1)[0];
        tasks.splice(index + 1, 0, taskToMove);
        renderTasks(tasks);
    }
}

function getTasks(): Task[] {
    return JSON.parse(localStorage.getItem('tasks') || '[]');
}

function saveTasks(tasks: Task[]): void {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}
