import { createBrowserRouter } from "react-router";
import LoginPage from "../pages/LoginPage";
import App from "../App";
import HomePage from "../pages/HomePage";
import { LOGIN_URL, SIGNUP_URL } from "../constants/urls";
import SignupPage from "../pages/SignupPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, Component: HomePage },
      { path: LOGIN_URL, Component: LoginPage },
      { path: SIGNUP_URL, Component: SignupPage },
    ],
  },
]);

export default router;
