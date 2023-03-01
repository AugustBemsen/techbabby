import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Projects from "./pages/projects";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projects" element={<Projects />} />
    </Routes>
  );
}

export default App;
