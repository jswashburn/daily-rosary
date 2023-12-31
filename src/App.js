import { Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import Navbar from "./Navbar"
import About from "./content/About";
import RosaryDay from "./components/RosaryDay";
import GloriousMysteries from "./content/GloriousMysteries";
import LuminousMysteries from "./content/LuminousMysteries";
import JoyfulMysteries from "./content/JoyfulMysteries";
import SorrowfulMysteries from "./content/SorrowfulMysteries";

export default function App() {
  const [currentDayOfWeek, setCurrentDayOfWeek] = useState('');

  useEffect(() => {
      const date = new Date();
      const options = { weekday: 'long' };
      const currDay = date.toLocaleString('en-US', options).toLocaleLowerCase();
      setCurrentDayOfWeek(currDay);
  }, []);

  function getTodaysRosaryDay() {
    switch (currentDayOfWeek) {
      case 'sunday':
        return <RosaryDay content={<GloriousMysteries />} />
      case 'monday':
        return <RosaryDay content={<JoyfulMysteries />} />
      case 'tuesday':
        return <RosaryDay content={<SorrowfulMysteries />} />
      case 'wednesday':
        return <RosaryDay content={<GloriousMysteries />} />
      case 'thursday':
        return <RosaryDay content={<LuminousMysteries />} />
      case 'friday':
        return <RosaryDay content={<SorrowfulMysteries />} />
      case 'saturday':
        return <RosaryDay content={<JoyfulMysteries />} />
      default:
        return <RosaryDay content={<JoyfulMysteries />} />
    }
  }

  return (
    <div className="App">
      <Navbar currDay={currentDayOfWeek} />
      <div className="body">
        <Routes>
          <Route path="/" element={getTodaysRosaryDay()} />
          <Route path="/about" element={<About />} />
          <Route path="/sunday" element={<RosaryDay content={<GloriousMysteries />} />} />
          <Route path="/monday" element={<RosaryDay content={<JoyfulMysteries />} />} />
          <Route path="/tuesday" element={<RosaryDay content={<SorrowfulMysteries />} />} />
          <Route path="/wednesday" element={<RosaryDay content={<GloriousMysteries />} />} />
          <Route path="/thursday" element={<RosaryDay content={<LuminousMysteries />} />} />
          <Route path="/friday" element={<RosaryDay content={<SorrowfulMysteries />} />} />
          <Route path="/saturday" element={<RosaryDay content={<JoyfulMysteries />} />} />
        </Routes>
      </div>
    </div>
  );
}
