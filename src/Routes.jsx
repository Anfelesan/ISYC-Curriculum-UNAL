import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import NotFound from "./pages/NotFound";
import MainCurriculum from "./pages/MainCurriculum";
import SoftwareEngineering from "./pages/SoftwareEngineering";
import SmartSystems from "./pages/SmartSystems";
import Bioinformatics from "./pages/Bioinformatics";
import Telecommunications from "./pages/Telecommunications";
import TICGovernment from "./pages/TICGovernment";
import Models from "./pages/Models";
import Hardware from "./pages/Hardware";
import Robotics from "./pages/robotics";
import BiomedicalEngineering from "./pages/BiomedicalEngineering";
import DigitalMedia from "./pages/DigitalMedia";
import ComputersScience from "./pages/ComputersScience";
import DataSciences from "./pages/DataScience";

const App = () => {
  return(
    <Router>
      <Routes>
        <Route path="/" exact element={<MainCurriculum />} />
        <Route path="/ingenieria-de-software" exact element={<SoftwareEngineering />} />
        <Route path="/sistemas-inteligentes" exact element={<SmartSystems />} />
        <Route path="/bioinformatica" exact element={<Bioinformatics />} />
        <Route path="/telecomunicaciones" exact element={<Telecommunications />} />
        <Route path="/gobierno-tic" exact element={<TICGovernment />} />
        <Route path="/modelos" exact element={<Models />} />
        <Route path="/ciencias-de-la-computacion" exact element={<ComputersScience />} />
        <Route path="/hardware" exact element={<Hardware />} />
        <Route path="/vision-y-robotica" exact element={<Robotics />} />
        <Route path="/ingenieria-biomedica" exact element={<BiomedicalEngineering />} />
        <Route path="/medios-digitales" exact element={<DigitalMedia />} />
        <Route path="/ciencia-de-datos" exact element={<DataSciences />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </Router>
  )
}
export default App;