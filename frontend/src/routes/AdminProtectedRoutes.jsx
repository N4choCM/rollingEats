import { Navigate } from "react-router-dom";

const AdminProtectedRoutes = ({ children, user }) => {
  if (user.role === "ADMIN_ROLE") {
    return children;
  } else {
    return <Navigate to="/" />;
  }
};

export default AdminProtectedRoutes;