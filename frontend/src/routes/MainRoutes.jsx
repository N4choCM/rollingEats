import { Routes, Route } from "react-router-dom";
import FooterApp from "../components/FooterApp";
import NavbarApp from "../components/NavbarApp";
import OrderScreen from "../pages/OrderScreen";
import AdminUserScreen from "../pages/AdminUserScreen";
import AdminMenuScreen from "../pages/AdminMenuScreen";
import AdminOrderScreen from "../pages/AdminOrderScreen";
import ErrorScreen from "../pages/ErrorScreen";
import HomeScreen from "../pages/HomeScreen";
import AdminProtectedRoutes from "./AdminProtectedRoutes";

const MainRoutes = ({ logoutUser, user }) => {
  return (
    <>
      <NavbarApp logoutUser={logoutUser} user={user} />
      <Routes>
        <Route path="/" element={<HomeScreen user={user} />} />
        <Route path="/orders" element={<OrderScreen user={user} />} />
        <Route
          path="/admin/users"
          element={
            <AdminProtectedRoutes user={user}>
              <AdminUserScreen user={user} />
            </AdminProtectedRoutes>
          }
        />
        <Route
          path="/admin/menus"
          element={
            <AdminProtectedRoutes user={user}>
              <AdminMenuScreen user={user} />
            </AdminProtectedRoutes>
          }
        />
        <Route
          path="/admin/orders"
          element={
            <AdminProtectedRoutes user={user}>
              <AdminOrderScreen user={user} />
            </AdminProtectedRoutes>
          }
        />
        <Route path="*" element={<ErrorScreen />} />
      </Routes>
      <FooterApp />
    </>
  );
};

export default MainRoutes;
