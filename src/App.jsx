import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";
import Header from "./components/Header";
import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter basename="/Portfolio_web">
        <Header />
        <AppRoutes />
      </BrowserRouter>
    </>
  );
}

export default App;
