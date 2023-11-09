import { useEffect, useState } from "react";

function DayOfWeek(props) {
  const [state, setState] = useState({
    days: [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ]
  });

  useEffect(() => {
    // setState(state => {
    //   ...state,
    //   isToday:
    // })
  });

  const day = state.days[props.index];

  return <li className={props.isToday ? "isToday" : ""}>{day}</li>;
}

export default function App() {
  const [today, setToday] = useState(null);

  return (
    <div className="App">
      <h1>Daily Rosary {new Date().toLocaleDateString()}</h1>
      <ul>
        {
          [...Array(7).keys()].map(i => <DayOfWeek index={i} />)
        }
      </ul>
    </div>
  );
}
