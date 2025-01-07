import { ITaskUI } from "./abstract/ITaskUI";
import { Task } from "../models/Task";
import { ITaskManager } from "../managers/abstract/ITaskManager";

export class TaskUI implements ITaskUI {

    private taskManager: ITaskManager;

    constructor(taskManager: ITaskManager) {
        this.taskManager = taskManager;
        this.init();
    }

    private init(): void {
        document.addEventListener('DOMContentLoaded', () => {
            this.renderTasks();
            this.setupEventListeners();
        });
    }

    public setupEventListeners(): void {
        const input = document.getElementById('new-item-input') as HTMLInputElement;
        input.addEventListener('change', () => this.autoAddNewItem(input));
    }

    public renderTasks(): void {
        const tasks = this.taskManager.getTasks();
        const output = document.getElementById('output') as HTMLElement;
        output.innerHTML = '';

        tasks.forEach((task, index) => {
            const taskElement = this.createTaskElement(task, index);
            output.appendChild(taskElement);
        });
    }

    public createTaskElement(task: Task, index: number): HTMLElement {
        const taskContainer = document.createElement('div');
        taskContainer.className = 'task-container';

        const checkbox = this.createCheckbox(task, index);
        const textInput = this.createTextInput(task, index);
        const moveUpBtn = this.createMoveUpButton(index);
        const moveDownBtn = this.createMoveDownButton(index);

        taskContainer.addEventListener('dblclick', () => {
            this.taskManager.deleteTask(index);
            this.renderTasks();
        });

        taskContainer.appendChild(checkbox);
        taskContainer.appendChild(textInput);
        taskContainer.appendChild(moveUpBtn);
        taskContainer.appendChild(moveDownBtn);

        return taskContainer;
    }

    public createCheckbox(task: Task, index: number): HTMLElement {
        const checkbox = document.createElement('span');
        checkbox.className = 'todo-item';
        checkbox.setAttribute('data-checked', task.checked.toString());
        checkbox.textContent = task.checked ? '✓' : ' - ';
        checkbox.addEventListener('click', () => this.toggleTaskChecked(index, checkbox));
        return checkbox;
    }

    public createTextInput(task: Task, index: number): HTMLInputElement {
        const textInput = document.createElement('input');
        textInput.type = 'text';
        textInput.value = task.text;
        textInput.className = 'task-input';
        textInput.addEventListener('change', (e) => this.updateTaskText(index, (e.target as HTMLInputElement).value));
        return textInput;
    }

    public createMoveUpButton(index: number): HTMLButtonElement {
        const moveUpBtn = document.createElement('button');
        moveUpBtn.textContent = '↑';
        moveUpBtn.className = 'move-btn';
        moveUpBtn.addEventListener('click', () => {
            this.taskManager.moveTaskUp(index);
            this.renderTasks();
        });
        return moveUpBtn;
    }

    public createMoveDownButton(index: number): HTMLButtonElement {
        const moveDownBtn = document.createElement('button');
        moveDownBtn.textContent = '↓';
        moveDownBtn.className = 'move-btn';
        moveDownBtn.addEventListener('click', () => {
            this.taskManager.moveTaskDown(index);
            this.renderTasks();
        });
        return moveDownBtn;
    }

    public toggleTaskChecked(index: number, checkbox: HTMLElement): void {
        this.taskManager.toggleTaskChecked(index);
        checkbox.setAttribute('data-checked', this.taskManager.getTasks()[index].checked.toString());
        checkbox.textContent = this.taskManager.getTasks()[index].checked ? '✓' : ' - ';
    }

    public updateTaskText(index: number, newText: string): void {
        this.taskManager.updateTask(index, newText);
    }

    public autoAddNewItem(input: HTMLInputElement): void {
        const newTaskText = input.value.trim();
        if (newTaskText) {
            this.taskManager.addTask(newTaskText);
            this.renderTasks();
            input.value = '';
        }
    }
}
