import { Route, Routes, useLocation } from "react-router-dom";
import Navbar from "./components/context/navbar";
import ScrollTop from "./components/scrollToTop/scroll";
import MainPage from "./components/main";
import Home from "./components/Home/home";
import Footer from "./components/context/footer";
import AboutUs from "./components/about/AboutUs";
import Pages from "./components/pages/pages";
import Contact from "./components/contact/contact";
import Gallery from "./components/gallery/gallery";
import SearchInput from "./components/context/search";
import LoginComponent from "./components/auth/login";
import RegisterComponent from "./components/auth/signUp";

function App() {
  const location = useLocation();
  const navbarContainer =
    location.pathname === "/login" || location.pathname === "/signup";

  return (
    <>
      {!navbarContainer && <Navbar />}
      <ScrollTop />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/pages" element={<Pages />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<LoginComponent />} />
        <Route path="/signup" element={<RegisterComponent/>}/>
      </Routes>
      {!navbarContainer && <Footer />}
    </>
  );
}

export default App;
