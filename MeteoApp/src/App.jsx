import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavabarMeteo from "./components/NavbarMeteo";
import FooterMeteo from "./components/FooterMeteo";
import HomePage from "./components/HomePage";
import Preferiti from "./components/Preferiti";
import CityDetails from "./components/CityDetails";

function App() {

  return (
    <BrowserRouter>
    <NavabarMeteo/>
    <Routes>
    <Route path="/" element={<HomePage/>} />
    <Route path="/preferiti" element={<Preferiti/>} />
    <Route path="/city-details/:cityID" element={<CityDetails/>} />
    </Routes>
    <FooterMeteo/>
    </BrowserRouter>
  )
}

export default App;
