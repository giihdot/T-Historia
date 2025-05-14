import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import PGM from "./Pages/1ºGuerra_Mundial";
import HomePage from "./Pages/HomePage";


export default function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/primeira-guerra" element={<PGM />} />
        </Routes>
    </Router>
  );
}
