import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProtectedRoutes from "./routes/ProtectedRoutes";
import MainRoutes from "./routes/MainRoutes";
import "./App.css";
import LoginScreen from "./pages/LoginScreen";
import ErrorScreen from "./pages/ErrorScreen";
import RegisterScreen from "./pages/RegisterScreen";

function App() {
  const [login, setLogin] = useState(false);
  const [user, setUser] = useState(null);

  const saveUser = (data) => {
    setUser(data);
  };

  const loginUser = () => {
    setLogin(true);
  };

  const logoutUser = () => {
    setLogin(false);
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/*"
          element={
            <ProtectedRoutes login={login}>
              <MainRoutes logoutUser={logoutUser} user={user} />
            </ProtectedRoutes>
          }
        />
        <Route
          path="/login"
          element={
            <LoginScreen
            loginUser={loginUser}
            saveUser={saveUser}
            />
          }
        />
        <Route
          path="/register"
          element={
            <RegisterScreen />
          }
        />
          <Route path="*" element={<ErrorScreen />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
