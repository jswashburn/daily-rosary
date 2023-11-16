import IntroPrayerSet from "../content/IntroPrayerSet";
import MysteryNavigator from "./MysteryNavigator";

export default function Mysteries({ children, ...props }) {
  return (
    <div className={"content " + props.theme}>
      <MysteryNavigator title={props.title} />
      <IntroPrayerSet />
      {children}
    </div>
  );
}
