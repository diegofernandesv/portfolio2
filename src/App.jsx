import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Home from "./pages/home";
import Spilcafeen from "./pages/Spilcafeen";
export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="projects" element={<Projects />} />
      <Route path="about" element={<About />} />
      <Route path="spilcafeen" element={<Spilcafeen />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
