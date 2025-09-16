import { create } from "zustand";
import { userApi, type User } from "../api/userApi";
import { generateAccessToken } from "../utils/loginUtils";
import { devtools } from "zustand/middleware";

interface LoginPayload {
  email: string;
  password: string;
}

interface UserState {
  user: User;
  login: (payload: LoginPayload) => Promise<void>;
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
  }))
);
