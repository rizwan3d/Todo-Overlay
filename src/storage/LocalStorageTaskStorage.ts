import { ITaskStorage } from "./abstract/ITaskStorage";
import { Task } from "../models/Task";

export class LocalStorageTaskStorage implements ITaskStorage {
    loadTasks(): Task[] {
        return JSON.parse(localStorage.getItem('tasks') || '[]');
    }

    saveTasks(tasks: Task[]): void {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }
}
