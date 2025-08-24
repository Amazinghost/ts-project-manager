import { api } from "./axiosInstance";

export type Task = {
  id: number;
  name: string;
};

export const taskApi = {
  getAll: () => api.get("/tasks"),
  addTask: (name: string) => api.post("/tasks", { name }),
};
