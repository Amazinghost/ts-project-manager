import type { AxiosResponse } from "axios";
import { api } from "./axiosInstance";

export interface Task {
  id: number;
  name: string;
};

export const taskApi = {
  getAll: (): Promise<AxiosResponse<Task[]>> => api.get("/tasks"),
  addTask: (name: string): Promise<AxiosResponse<Task>> => api.post("/tasks", { name }),
};
