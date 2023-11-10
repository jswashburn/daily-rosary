import { useEffect, useState } from "react";
import Navbar from "./Navbar"

export default function App() {
  const [today, setToday] = useState(null);

  return (
    <div className="App">
      <Navbar />
    </div>
  );
}
