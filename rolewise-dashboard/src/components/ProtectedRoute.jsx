import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children, role }) {
  // Get user info from localStorage
  const storedUser = localStorage.getItem("user");
  const user = storedUser ? JSON.parse(storedUser) : null;

  // If no user logged in
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  // If route requires specific role (admin/user)
  if (role && user.role !== role) {
    return <Navigate to="/login" replace />;
  }

  // If all good — allow access
  return children;
}
