export interface User {
  email: string;
  password: string;
  name: string;
  age: number;
  rights: string[];
};

export const userApi = {
  //login (returns 200 + mock of the token)
  //register (sign-up) - add user
  //remove user
  //add rights - edit user.rights (only for admin)
};
