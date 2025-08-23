import { create } from "zustand";

type Task = {
  id: number;
  name: string;
};

type TaskState = {
  tasks: Task[];
  addTask: (name: string) => void;
};

export const useTaskStore = create<TaskState>((set) => ({
  tasks: [],
  addTask: (name) =>
    set((state) => ({
      tasks: [...state.tasks, { id: Date.now(), name }],
    })),
}));
