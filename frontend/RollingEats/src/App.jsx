import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProtectedRoutes from "./routes/ProtectedRoutes";
import LoginScreen from "./pages/LoginScreen";
import MainRoutes from "./routes/MainRoutes";

function App() {
  const [login, setLogin] = useState(false);

  const cambiarLogin = () => {
    setLogin(!login);
  };
  return <MainRoutes />;
}

export default App;
