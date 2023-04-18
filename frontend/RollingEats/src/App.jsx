
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import FooterApp from "./components/FooterApp.jsx"


import MainRoutes from "./routes/MainRoutes";


function App() {
  const [login, setLogin] = useState(false);

  const logoutUser = () => {
    setLogin(!login);
  };
  return <MainRoutes logoutUser={logoutUser} />;
}

export default App;
