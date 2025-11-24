import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import FurnitureLanding from "./pages/landing-page";
import LoginPage from "./pages/login-page";
import HomePage from "./pages/home";

// ✅ Correct path (inside /pages/)
import ProductDetailsPage from "./pages/ProductDetailsPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<FurnitureLanding />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/home" element={<HomePage />} />

        {/* Product details page with dynamic ID */}
        <Route path="/product/:id" element={<ProductDetailsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
