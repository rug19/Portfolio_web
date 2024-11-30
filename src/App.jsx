import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";
import Header from "./components/Header";
import "./App.css";

function App() {
  return (
    <>
    <Header />
      <BrowserRouter>
        
        <AppRoutes />
      </BrowserRouter>
    </>
  );
}

export default App;
