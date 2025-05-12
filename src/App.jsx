import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Attraction from "./pages/Attraction";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/attraction/:id" element={<Attraction />} />
      </Routes>
    </Router>
  );
}

export default App;
