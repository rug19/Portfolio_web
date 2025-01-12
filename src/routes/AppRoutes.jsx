import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Resume from "../pages/Resume";
import Projects from "../pages/Projects";
import Contacts from "../pages/Contacts";
import PageTransition from "../components/PageTransition";
import StairTransition from "../components/StairTransition";

export default function AppRoutes() {
  return (
    <StairTransition>
    <Routes>
      <Route
        path="/"
        element={
          <PageTransition>
            <Home />
          </PageTransition>
        }
      />
      <Route
        path="/resume"
        element={
          <PageTransition>
            <Resume />
          </PageTransition>
        }
      />
      <Route
        path="/projects"
        element={
          <PageTransition>
            <Projects />
          </PageTransition>
        }
      />
      <Route
        path="/contacts"
        element={
          <PageTransition>
            <Contacts />
          </PageTransition>
        }
      />
    </Routes>
    </StairTransition>
  );
}
