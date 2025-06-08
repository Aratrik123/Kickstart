// components/PrivateRoute.tsx
import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const PrivateRoute = ({ children }: { children: JSX.Element }) => {
  const { user } = useAuth(); // or however you're storing logged-in status

  if (!user) {
    // If not logged in, redirect to login
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default PrivateRoute;
