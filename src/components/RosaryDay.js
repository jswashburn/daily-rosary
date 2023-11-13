import IntroPrayerSet from "../content/IntroPrayerSet";

export default function RosaryDay(props) {
    return (
        <div className="content">
            <IntroPrayerSet />
            {props.content}
        </div>
    )
}
