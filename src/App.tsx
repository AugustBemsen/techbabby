import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import About from "./pages/about";
import Home from "./pages/home";
import Projects from "./pages/projects";
import Works from "./pages/works";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/works" element={<Works />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
}

export default App;
