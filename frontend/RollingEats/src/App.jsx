import { useState } from "react";
import MainRoutes from "./routes/MainRoutes";

function App() {
  const [login, setLogin] = useState(false);

  const logoutUser = () => {
    setLogin(!login);
  };
  return <MainRoutes logoutUser={logoutUser} />;
}

export default App;
