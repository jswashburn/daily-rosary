import ContentSection from "../components/ContentSection";
import IntroPrayerSet from "./IntroPrayerSet";
import { useRef } from "react";

export default function GloriousMysteries() {
  let mysteriesStartRef = useRef(null);

  const scrollToMysteries = () => {
    console.log("Scrolling to first mystery...")
    mysteriesStartRef.current.scrollIntoView({
      behavior: 'smooth',
      block: 'center'
    });
  }

  return (
    <div className="content clr--glorious">
      <h1>The Glorious Mysteries</h1>
      <nav>
        <button onClick={scrollToMysteries}>Skip to Mysteries</button>
      </nav>

      <IntroPrayerSet />

      <ContentSection ref={mysteriesStartRef} snap title="The Resurrection">
        <p>
          Our Lord Jesus Christ, on the third day after his passion and death,
          rose again in glory, victorious over death and never to die again.
        </p>
      </ContentSection>

      <ContentSection snap title="The Ascension">
        <p>
          Our Lord Jesus Christ, forty days after his Resurrection, ascended
          into heaven with triumph and great glory, in the sight of his most
          holy mother and all his disciples.
        </p>
      </ContentSection>

      <ContentSection snap title="Pentecost">
        <p>
          Our Lord Jesus Christ, sitting at the right hand of the Father, sent
          the Holy Spirit into the upper chamber where the apostles were
          gathered together, with the most Holy Virgin Mary.
        </p>
      </ContentSection>

      <ContentSection snap title="Assumption of Mary">
        <p>
          The Most Holy Virgin, twelve years after the Resurrection of Our Lord
          Jesus Christ, passed from this life, and was assumed by the angels
          into heaven.
        </p>
      </ContentSection>

      <ContentSection snap title="Coronation of Mary">
        <p>
          The Most Holy Virgin was crowned in heaven by her divine Son as the
          saints rejoiced in glory around her throne.
        </p>
      </ContentSection>
    </div>
  );
}
