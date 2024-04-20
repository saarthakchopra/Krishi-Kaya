import "./App.css";
import LandingPage from "./LandingPage";
import WeatherForcast from "./Weather Forecast/WeatherForcast";
import { Routes, Route, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div>
      {/* <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="weatherforecast" element={<WeatherForcast/>} />
        </Routes>
      </BrowserRouter> */}
      <LandingPage />
    </div>
  );
}

export default App;
