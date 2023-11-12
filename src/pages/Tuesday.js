import IntroPrayerSet from "../components/IntroPrayerSet";
import SorrowfulMysteries from "../components/SorrowfulMysteries";

export default function Tuesday() {
    return (
        <>
            <div className="reading-style-button reading-style-button-left" />
            <div className="content">
                <h1>The Sorrowful Mysteries</h1>
                <IntroPrayerSet />
                <SorrowfulMysteries />
            </div>
            <div className="reading-style-button reading-style-button-right" />
        </>
    )
}
