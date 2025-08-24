import { create } from "zustand";
import { taskApi, type Task } from "../api/taskApi";

type TaskState = {
  tasks: Task[];
  addTask: (name: string) => void;
  getAllTasks: () => Promise<void>;
};

export const useTaskStore = create<TaskState>((set) => ({
  tasks: [],
  addTask: async (name) => {
    try {
      const response = await taskApi.addTask(name);

      console.log("Add task response: ", response)
    } catch (error) {
      console.error("Failed to add a new task", error);
    }
  },
  getAllTasks: async () => {
    try {
      const { data } = await taskApi.getAll();

      set({ tasks: data });
    } catch (error) {
      console.error("Failed to fetch tasks", error);
    }
  },
}));
