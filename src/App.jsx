import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";
import Header from "./components/Header";
import DarkMode from "./components/DarkMode"; // Importa o botão de alternância
import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <div className="p-4 flex justify-end">
          {/* Botão de alternância para Dark Mode */}
          <DarkMode />
        </div>
        <AppRoutes />
      </BrowserRouter>
    </>
  );
}

export default App;
