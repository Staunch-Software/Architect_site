import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Wellness from "./components/wellness";  // correct import

function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        {/* Home page (your portfolio landing) */}
        <Route path="/About" element={<About />} />

        {/* Wellness project page */}
        <Route path="/wellness" element={<Wellness />} />
      </Routes>
    </Router>
  );
}

export default App;
