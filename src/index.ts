import { TaskManager } from "./managers/TaskManager";
import { LocalStorageTaskStorage } from "./storage/LocalStorageTaskStorage";
import { TaskUI } from "./ui/TaskUI";

const storage = new LocalStorageTaskStorage();
const taskManager = new TaskManager(storage);
const taskUI = new TaskUI(taskManager);