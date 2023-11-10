import { useEffect, useState } from "react";
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
  let component;
  switch (window.location.pathname) {
    case "/":
      component = <Home />
      break
    case "/monday":
      component = <Monday />
      break
    case "/tuesday":
      component = <Tuesday />
      break
    case "/wednesday":
      component = <Wednesday />
      break
    case "/thursday":
      component = <Thursday />
      break
    case "/friday":
      component = <Friday />
      break
    case "/saturday":
      component = <Saturday />
      break
    case "/sunday":
      component = <Sunday />
      break
  }
  return (
    <div className="App">
      <Navbar />
      <div className="content">{component}</div>
    </div>
  );
}
