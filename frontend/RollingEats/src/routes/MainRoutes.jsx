import { Routes, Route } from "react-router-dom";
import FooterApp from "../components/FooterApp";
import NavbarApp from "../components/NavbarApp";
import OrderScreen from "../pages/OrderScreen";
import AdminScreen from "../pages/AdminScreen";
import ErrorScreen from "../pages/ErrorScreen";
import HomeScreen from "../pages/HomeScreen";
import AdminProtectedRoutes from "./AdminProtectedRoutes";

const MainRoutes = ({ logoutUser, user }) => {
  return (
    <>
      <NavbarApp logoutUser={logoutUser} user={user} />
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/order" element={<OrderScreen />} />
        <Route
          path="/admin"
          element={
            <AdminProtectedRoutes user={user}>
              <AdminScreen />
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
