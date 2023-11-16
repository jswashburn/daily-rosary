import ContentSection from "../components/ContentSection";
import Mysteries from "../components/Mysteries";

export default function GloriousMysteries() {
  return (
    <Mysteries theme="glorious" title="The Glorious Mysteries">
      <ContentSection snap title="The Resurrection">
        Our Lord Jesus Christ, on the third day after his passion and death,
        rose again in glory, victorious over death and never to die again.
      </ContentSection>

      <ContentSection snap title="The Ascension">
        Our Lord Jesus Christ, forty days after his Resurrection, ascended into
        heaven with triumph and great glory, in the sight of his most holy
        mother and all his disciples.
      </ContentSection>

      <ContentSection snap title="Pentecost">
        Our Lord Jesus Christ, sitting at the right hand of the Father, sent the
        Holy Spirit into the upper chamber where the apostles were gathered
        together, with the most Holy Virgin Mary.
      </ContentSection>

      <ContentSection snap title="Assumption of Mary">
        The Most Holy Virgin, twelve years after the Resurrection of Our Lord
        Jesus Christ, passed from this life, and was assumed by the angels into
        heaven.
      </ContentSection>

      <ContentSection snap title="Coronation of Mary">
        The Most Holy Virgin was crowned in heaven by her divine Son as the
        saints rejoiced in glory around her throne.
      </ContentSection>
    </Mysteries>
  );
}
