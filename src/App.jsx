import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import Crise1929 from "./Pages/Crise_1929";
import Revolucao1930 from "./Pages/Revolução_1930";
import FascismoItaliano from "./Pages/Fascismo_Italiano";
import GuerraDeCanudos from "./Pages/Guerra_De_Canudos";
import GuerraDoContestado from "./Pages/Guerra_Do_Contestado";
import PrimeiraGuerraMundial from "./Pages/1ºGuerra_Mundial";
import RevolucaoRussa from "./Pages/Revolução_Russa";
import Formulario from "./Pages/Formulario";
//import AsGatitas from "./Pages/AsGatitas";

 function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/CRISE_1929" element={<Crise1929 />} />
        {/* <Route path="/FASCISMO_ITALIANO" element={<FascismoItaliano />} /> */}
        <Route path="/CANUDOS" element={<GuerraDeCanudos />} />
        <Route path="/CONTESTADO" element={<GuerraDoContestado />} />
        <Route path="/1º_GUERRA_MUNDIAL" element={<PrimeiraGuerraMundial />} />
        {/* <Route path="/REVOLUÇÃO_RUSSA" element={<RevolucaoRussa />} /> */}
        {/* <Route path="/CRISE_1929" element={<Crise1929 />} /> */}
        <Route path="/FASCISMO_ITALIANO" element={<FascismoItaliano />} />
        <Route path="/CANUDOS" element={<GuerraDeCanudos />} />
        <Route path="/CONTESTADO" element={<GuerraDoContestado />} />
        <Route path="/1º_GUERRA_MUNDIAL" element={<PrimeiraGuerraMundial />} />
        <Route path="/REVOLUÇÃO_RUSSA" element={<RevolucaoRussa />} />
        <Route path="/REVOLUÇÃO_1930" element={<Revolucao1930 />} />
        <Route path="/FORMULARIO" element={<Formulario/>}/>
        {/* <Route path="/AS_GATITAS" element={<AsGatitas />} /> */}
      </Routes>
    </Router>
  );
}

export default App;