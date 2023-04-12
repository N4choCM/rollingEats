import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProtectedRoutes from "./routes/ProtectedRoutes";
import LoginScreen from "./pages/LoginScreen";
import MainRoutes from "./routes/MainRoutes";

function App() {
  const [login, setLogin] = useState(false);
  const [user, setUser] = useState(null);

  // Saves the data of the logged in user.
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
        {/* Protected routes receiving login, user data and logoutUser function. */}
        <Route
          path="/*"
          element={
            <ProtectedRoutes login={login}>
              <MainRoutes logoutUser={logoutUser} user={user} />
            </ProtectedRoutes>
          }
        />

        {/* Login route receiving function to login and save the user data. */}
        <Route
          path="/login"
          element={
            <LoginScreen
              loginUser={loginUser}
              saveUser={saveUser}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
