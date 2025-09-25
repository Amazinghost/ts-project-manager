import { create } from "zustand";
import { userApi, type User } from "../api/userApi";
import { generateAccessToken } from "../utils/loginUtils";
import { devtools } from "zustand/middleware";
import type { AxiosResponse } from "axios";

interface LoginPayload {
  email: string;
  password: string;
}

interface SignUpPayload {
  email: string;
  password: string;
  confirmPass: string;
}

interface UserState {
  user: User;
  login: (payload: LoginPayload) => Promise<void>;
  signUp: (payload: SignUpPayload) => Promise<void>;
}

export const useUserStore = create<UserState>()(
  devtools((set) => ({
    user: { email: "", name: "", age: 0, rights: [] },
    login: async (payload) => {
      try {
        const { data: allUsers } = await userApi.getAllUsers();

        const currentUserFound = allUsers.filter(
          (user: User) => user.email === payload.email
        );

        if (currentUserFound.length) {
          const token = generateAccessToken(currentUserFound[0]);

          localStorage.setItem("token", token);

          set({ user: currentUserFound[0] });
        }
      } catch (e) {
        console.error(e);
      }
    },
    signUp: async (payload: SignUpPayload) => {
      try {
        const { data: allUsers } = await userApi.getAllUsers();

        const currentUserFound = allUsers.filter(
          (user: User) => user.email === payload.email
        );

        if (currentUserFound) {
          alert("User with the following email already exists!");
          return;
        }

        const response: AxiosResponse<User> = await userApi.signUp(
          payload.email
        );

        if (response.status >= 200 && response.status < 300) {
          alert("User has been successfully created!");
        }
      } catch (e) {
        console.error(e);
      }
    },
  }))
);
