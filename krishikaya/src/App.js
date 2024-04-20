import "./App.css";
import LandingPage from "./LandingPage";
import WeatherForcast from "./Weather Forecast/WeatherForcast";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/weatherforecast" element={<WeatherForcast />} />
      </Routes>
    </Router>
  );
}

export default App;
