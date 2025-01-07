import { Task } from "../../models/Task";

export interface ITaskStorage {
    loadTasks(): Task[];
    saveTasks(tasks: Task[]): void;
}
