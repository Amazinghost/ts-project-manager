import type { AxiosResponse } from "axios";
import { api } from "./axiosInstance";

export interface User {
  id: number;
  email: string;
  name: string;
  age: number;
  rights: string[];
}

export const userApi = {
  getAllUsers: (): Promise<AxiosResponse<User[]>> => api.get("/users"),
  signUp: (email: string): Promise<AxiosResponse<User>> =>
    api.post("/users", { email, name: "", age: 0, rights: [] }),

  //TODO:
  //remove user
  //add rights - edit user.rights (only for admin)
};
