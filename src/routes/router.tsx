import { createBrowserRouter } from "react-router";
import LoginPage from "../pages/LoginPage";
import App from "../App";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [{ path: "/login", Component: LoginPage }],
  },
]);
