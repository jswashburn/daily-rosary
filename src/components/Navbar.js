import { Link } from "react-router-dom";
import { DAYS } from "../utils/constants";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [currDay, setCurrDay] = useState("sunday");
  const [selectedDay, setSelectedDay] = useState("sunday");

  useEffect(() => {
    const date = new Date();
    const currDay = DAYS[date.getDay()];
    setCurrDay(currDay);
  }, []);

  const toggleActiveDay = (dayOfWeek) => {
    setSelectedDay(dayOfWeek);
  };

  return (
    <div className="navbar">
      <Link to="/" className="navbar__title">
        Todays Daily Rosary
      </Link>
      <ul className="navbar__days-list">
        <li>
          <Link to="/about" className="navbar__item">
            About
          </Link>
        </li>
        {/* see this post for the key prop: https://stackoverflow.com/questions/28329382/understanding-unique-keys-for-array-children-in-react-js */}
        {DAYS.map((d) => (
          <NavbarDayLink
            onClick={toggleActiveDay}
            key={d}
            dayOfWeek={d}
            isCurrDay={currDay === d}
            isSelected={selectedDay === d}
          />
        ))}
      </ul>
    </div>
  );
}

function NavbarDayLink(props) {
  const active = props.isSelected ? " navbar__item--active" : "";
  const currDay = props.isCurrDay
    ? ` navbar__item--${props.dayOfWeek.toLowerCase()}`
    : "";
  return (
    <li>
      <Link
        to={"/" + props.dayOfWeek.toLowerCase()}
        className={"navbar__item" + active + currDay}
        onClick={() => props.onClick(props.dayOfWeek)}
      >
        {props.dayOfWeek}
      </Link>
    </li>
  );
}
