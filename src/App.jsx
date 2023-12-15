// App.js

import "./App.css";
import Login from "./components/Login";
import Home from "./components/Home";
import Certificate from "./components/Certificate";
import Hakkimizda from "./components/Hakkimizda";
import Register from "./components/Register";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/certificates" element={<Certificate />} />
        <Route path="/hakkimizda" element={<Hakkimizda />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/footer" element={<Footer />} />
      </Routes>
    </Router>
  );
}

export default App;
