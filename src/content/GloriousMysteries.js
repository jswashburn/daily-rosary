import MysteryGroup from "../components/MysteryGroup";
import IntroPrayerSet from "./IntroPrayerSet";

export default function GloriousMysteries() {
  return (
    <MysteryGroup
      title="The Glorious Mysteries"
      theme="clr--glorious"
      sections={[
        {
          position: 1,
          content: <IntroPrayerSet />
        },
        {
          position: 2,
          content: (
            <>
              <h2>The Ressurrection</h2>
              <p>
                Our Lord Jesus Christ, on the third day after his passion and
                death, rose again in glory, victorious over death and never to
                die again.
              </p>
            </>
          ),
        },
        {
          position: 3,
          content: (
            <>
              <h2>The Ascension</h2>
              <p>
                Our Lord Jesus Christ, forty days after his Resurrection,
                ascended into heaven with triumph and great glory, in the sight
                of his most holy mother and all his disciples.
              </p>
            </>
          ),
        },
        {
          position: 4,
          content: (
            <>
              <h2>Pentecost</h2>
              <p>
                Our Lord Jesus Christ, sitting at the right hand of the Father,
                sent the Holy Spirit into the upper chamber where the apostles
                were gathered together, with the most Holy Virgin Mary.
              </p>
            </>
          ),
        },
        {
          position: 5,
          content: (
            <>
              <h2>The Assumption</h2>
              <p>
                The Most Holy Virgin, twelve years after the Resurrection of Our
                Lord Jesus Christ, passed from this life, and was assumed by the
                angels into heaven.
              </p>
            </>
          ),
        },
        {
          position: 6,
          content: (
            <>
              <h2>The Coronation of Mary</h2>
              <p>
                The Most Holy Virgin was crowned in heaven by her divine Son as
                the saints rejoiced in glory around her throne.
              </p>
            </>
          ),
        },
      ]}
    />
  );
}
