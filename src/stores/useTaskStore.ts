import { create } from "zustand";
import { taskApi, type Task } from "../api/taskApi";

type TaskState = {
  tasks: Task[];
  addTask: (name: string) => void;
  getAllTasks: () => Promise<void>;
};

export const useTaskStore = create<TaskState>((set) => ({
  tasks: [],
  addTask: (name) =>
    set((state) => ({
      tasks: [...state.tasks, { id: Date.now(), name }],
    })),
  getAllTasks: async () => {
    try {
      const { data } = await taskApi.getAll();

      set({ tasks: data });
    } catch (err) {
      console.error("Failed to fetch tasks", err);
    }
  },
}));
