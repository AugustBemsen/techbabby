import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Projects from "./pages/projects";
import Works from "./pages/works";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/works" element={<Works />} />
    </Routes>
  );
}

export default App;
