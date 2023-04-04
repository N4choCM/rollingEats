import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainRoutes from "./routes/MainRoutes";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/*"
          element={
              <MainRoutes/>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

