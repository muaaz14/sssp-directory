import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/home.jsx";
import RegisterForm from "./pages/RegisterWizard.jsx";
import ProfRegLink from "./prof-reg-page.jsx";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/professional-registration" element={<ProfRegLink />} />
      </Routes>
    </Router>
  );
}

export default App;