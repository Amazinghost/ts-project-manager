import { create } from "zustand";
import { taskApi, type Task } from "../api/taskApi";

interface TaskState {
  tasks: Task[];
  addTask: (name: string) => Promise<void>;
  getAllTasks: () => Promise<void>;
}

export const useTaskStore = create<TaskState>()((set) => ({
  tasks: [],
  addTask: async (name) => {
    try {
      const { data } = await taskApi.addTask(name);

      set((state) => ({
        tasks: [...state.tasks, data],
      }));
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
