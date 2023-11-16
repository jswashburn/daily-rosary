import GloriousMysteries from "../content/GloriousMysteries";
import LuminousMysteries from "../content/LuminousMysteries";
import JoyfulMysteries from "../content/JoyfulMysteries";
import SorrowfulMysteries from "../content/SorrowfulMysteries";

export function getTodaysRosaryDay() {
  const date = new Date();
  const currDay = date.getDay();

  switch (currDay) {
    case 0:
      return <GloriousMysteries />;
    case 1:
      return <JoyfulMysteries />;
    case 2:
      return <SorrowfulMysteries />;
    case 3:
      return <GloriousMysteries />;
    case 4:
      return <LuminousMysteries />;
    case 5:
      return <SorrowfulMysteries />;
    case 6:
      return <JoyfulMysteries />;
    default:
      return <JoyfulMysteries />;
  }
}
