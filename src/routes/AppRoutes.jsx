import { Routes, Route } from "react-router-dom";
import  Home  from "../pages/Home";
import About from "../pages/About";
import Projects from "../pages/Projects";
import Contacts from "../pages/Contacts";
import Skills from "../pages/Skills";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/contacts" element={<Contacts />} />
      <Route path="/skills" element={<Skills />} />
    </Routes>
  );
}
