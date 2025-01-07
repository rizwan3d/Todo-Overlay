import { Task } from "../../models/Task";

export interface ITaskManager {
    addTask(text: string): void;
    updateTask(index: number, newText: string): void;
    toggleTaskChecked(index: number): void;
    deleteTask(index: number): void;
    moveTaskUp(index: number): void;
    moveTaskDown(index: number): void;
    getTasks(): Task[];
}
