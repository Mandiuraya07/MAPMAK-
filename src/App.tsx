
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { CartProvider } from "./contexts/CartContext";
import FurnitureLanding from "./pages/landing-page";
import LogInPage from "./pages/login-page";
import HomePage from "./pages/home";

function App() {
  return (
    <CartProvider>
      <Router>
        <Routes>
          <Route path="/" element={<FurnitureLanding />} />
          <Route path="/Login" element={<LogInPage />} />
          <Route path="/home" element={<HomePage />} />
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;