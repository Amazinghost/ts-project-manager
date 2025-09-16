import type { AxiosResponse } from "axios";
import { api } from "./axiosInstance";

export interface User {
  email: string;
  name: string;
  age: number;
  rights: string[];
};

export const userApi = {
  getAllUsers: (): Promise<AxiosResponse<User[]>> => api.get('/users'),
  //TODO:
  //register (sign-up) - add user
  //remove user
  //add rights - edit user.rights (only for admin)
};
