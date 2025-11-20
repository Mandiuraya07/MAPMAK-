
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; 
import FurnitureLanding from "./pages/landing-page";
import LoginPage from "./pages/login-page";
import HomePage from "./pages/home";
function App() {
  
  return (
    <Router>
      <Routes>
        <Route path="/" element={<FurnitureLanding />} />
        <Route path="/Login" element={<LoginPage />} />
        <Route path="/home" element={<HomePage />} />
      </Routes>
    </Router>
  );
}

export default App
