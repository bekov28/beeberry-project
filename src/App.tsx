import { Route, Router, Routes, useLocation } from "react-router-dom";
import Navbar from "./components/context/navbar";

function App() {
  const location = useLocation();
  const navbarContainer =
    location.pathname === "/login" || location.pathname === "register";

  return (
    <>
      {!navbarContainer && <Navbar />}
      <Routes>
        <Route />
      </Routes>
    </>
  );
}

export default App;
