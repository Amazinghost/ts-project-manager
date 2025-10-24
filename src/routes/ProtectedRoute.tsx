import { Navigate, Outlet } from "react-router";
import { LOGIN_PAGE_URL } from "../constants/urls";
import { useUserStore } from "../stores/useUserStore";

const ProtectedRoute = () => {
  const isLoggedIn = useUserStore((state) => state.isLoggedIn);

  if (!isLoggedIn) {
    return <Navigate to={LOGIN_PAGE_URL} replace />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
