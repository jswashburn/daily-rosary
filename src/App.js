import { Route, Routes } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { getTodaysRosaryDay } from "./utils/helpers";
import Navbar from "./components/Navbar";
import About from "./content/About";
import GloriousMysteries from "./content/GloriousMysteries";
import LuminousMysteries from "./content/LuminousMysteries";
import JoyfulMysteries from "./content/JoyfulMysteries";
import SorrowfulMysteries from "./content/SorrowfulMysteries";

export default function App() {

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={getTodaysRosaryDay()} />
        <Route path="/about" element={<About />} />
        <Route path="/sunday" element={<GloriousMysteries />} />
        <Route path="/monday" element={<JoyfulMysteries />} />
        <Route path="/tuesday" element={<SorrowfulMysteries />} />
        <Route path="/wednesday" element={<GloriousMysteries />} />
        <Route path="/thursday" element={<LuminousMysteries />} />
        <Route path="/friday" element={<SorrowfulMysteries />} />
        <Route path="/saturday" element={<JoyfulMysteries />} />
      </Routes>
      <footer>
        <div>
          <h1>Jeffrey Washburn</h1>
          <span>jeffrey.s.washburn@outlook.com</span>
        </div>
        <div>
          <ul>
            <li><a href="https://www.linkedin.com/in/jeffrey-washburn" rel="noreferrer" target="_blank">LinkedIn <FontAwesomeIcon icon={faLinkedin}/></a></li>
            <li><a href="https://github.com/jswashburn/daily-rosary" rel="noreferrer" target="_blank">Github <FontAwesomeIcon icon={faGithub}/></a></li>
          </ul>
        </div>
      </footer>
    </div>
  );
}
