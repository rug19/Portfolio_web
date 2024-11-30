import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Resume from "../pages/Resume";
import Projects from "../pages/Projects";
import Contacts from "../pages/Contacts";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/resume" element={<Resume />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/contacts" element={<Contacts />} />
    </Routes>
  );
}
