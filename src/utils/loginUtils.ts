import type { User } from "../api/userApi";

export const generateAccessToken = (user: User): string => {
  const stringifiedUser = JSON.stringify(user);

  return btoa(stringifiedUser);
};
