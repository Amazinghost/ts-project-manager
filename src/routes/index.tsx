import { createBrowserRouter } from "react-router";
import LoginPage from "../pages/LoginPage";
import App from "../App";
import HomePage from "../pages/HomePage";
import SignupPage from "../pages/SignupPage";
import ProtectedRoute from "./ProtectedRoute";
import {
  HOME_PAGE_URL,
  LOGIN_PAGE_URL,
  SIGNUP_PAGE_URL,
} from "../constants/urls";

const router = createBrowserRouter([
  {
    path: HOME_PAGE_URL,
    Component: ProtectedRoute,
    children: [
      {
        Component: App,
        children: [{ index: true, Component: HomePage }],
      },
    ],
  },
  {
    path: LOGIN_PAGE_URL,
    Component: LoginPage,
  },
  {
    path: SIGNUP_PAGE_URL,
    Component: SignupPage,
  },
]);

export default router;
