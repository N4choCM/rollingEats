import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavbarApp from "./components/NavbarApp";
import HomeScreen from "./pages/HomeScreen";
import LoginScreen from "./pages/LoginScreen";

import "./App.css";
import { useState } from "react";

function App() {
  const [login, setLogin] = useState(false);

  const cambiarLogin = () => {
    setLogin(!login);
  };
  return (
    //<h1>Hola!</h1> //No me aparece esto en la pagina
    //Que el navbar este antes de las routas es xq todas tienen acceso a el
    <BrowserRouter>
      <NavbarApp />
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/login" element={<LoginScreen />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
