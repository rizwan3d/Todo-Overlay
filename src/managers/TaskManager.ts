import { Task } from "../models/Task";
import { ITaskStorage } from "../storage/abstract/ITaskStorage";
import { ITaskManager } from "./abstract/ITaskManager";

export class TaskManager implements ITaskManager {

    private tasks: Task[] = [];
    private storage: ITaskStorage;

    constructor(storage: ITaskStorage) {
        this.storage = storage;
        this.loadTasks();
    }

    private loadTasks(): void {
        this.tasks = this.storage.loadTasks();
    }

    private saveTasks(): void {
        this.storage.saveTasks(this.tasks);
    }

    public getTasks(): Task[] {
        return this.tasks;
    }

    public addTask(text: string): void {
        this.tasks.push({ text, checked: false });
        this.saveTasks();
    }

    public updateTask(index: number, newText: string): void {
        this.tasks[index].text = newText;
        this.saveTasks();
    }

    public toggleTaskChecked(index: number): void {
        this.tasks[index].checked = !this.tasks[index].checked;
        this.saveTasks();
    }

    public deleteTask(index: number): void {
        this.tasks.splice(index, 1);
        this.saveTasks();
    }

    public moveTaskUp(index: number): void {
        if (index > 0) {
            const taskToMove = this.tasks.splice(index, 1)[0];
            this.tasks.splice(index - 1, 0, taskToMove);
            this.saveTasks();
        }
    }

    public moveTaskDown(index: number): void {
        if (index < this.tasks.length - 1) {
            const taskToMove = this.tasks.splice(index, 1)[0];
            this.tasks.splice(index + 1, 0, taskToMove);
            this.saveTasks();
        }
    }
}
