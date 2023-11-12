import { Route, Routes } from "react-router-dom"
import Navbar from "./Navbar"
import Home from "./pages/Home";
import Monday from "./pages/Monday";
import Tuesday from "./pages/Tuesday";
import Wednesday from "./pages/Wednesday";
import Thursday from "./pages/Thursday";
import Friday from "./pages/Friday";
import Saturday from "./pages/Saturday";
import Sunday from "./pages/Sunday";

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/monday" element={<Monday />} />
          <Route path="/tuesday" element={<Tuesday />} />
          <Route path="/wednesday" element={<Wednesday />} />
          <Route path="/thursday" element={<Thursday />} />
          <Route path="/friday" element={<Friday />} />
          <Route path="/saturday" element={<Saturday />} />
          <Route path="/sunday" element={<Sunday />} />
        </Routes>
      </div>
    </div>
  );
}
