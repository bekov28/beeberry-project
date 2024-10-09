import { Route, Router, Routes, useLocation } from "react-router-dom";
import Navbar from "./components/context/navbar";
import ScrollTop from "./components/scrollToTop/scroll";
import MainPage from "./components/main";
import Home from "./components/Home/home";

function App() {
  const location = useLocation();
  const navbarContainer =
    location.pathname === "/login" || location.pathname === "register";

  return (
    <>
      {!navbarContainer && <Navbar />}
      <ScrollTop />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
