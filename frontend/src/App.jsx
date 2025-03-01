import "./styles/App.css";
import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Header/Navbar";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import ContactUs from "./pages/ContactUs"
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import Cart from "./pages/Cart"
import { useState,  useEffect} from "react";
import LandingHome from "./pages/LandingHome";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(
    localStorage.getItem("isAuthenticated") === "true"
  );

  useEffect(() => {
    localStorage.setItem("isAuthenticated", isAuthenticated);
  }, [isAuthenticated]);

  return (
    <>
    <Router>
      <Navbar isAuthenticated={isAuthenticated}/>
      <Routes>
        <Route path="/" element={isAuthenticated ? <Home /> : <LandingHome />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/login" element={<Login setIsAuthenticated={setIsAuthenticated} />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/dashboard" element={<Dashboard />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/contactus" element={<ContactUs />}></Route>
      </Routes>
      <Footer />
    </Router>
    </>
  );
}

export default App;
