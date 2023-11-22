import MysteryGroup from "../components/MysteryGroup";
import IntroPrayerSet from "./IntroPrayerSet";

export default function LuminousMysteries() {
  return (
    <MysteryGroup
      title="The Luminous Mysteries"
      theme="clr--luminous"
      sections={[
        {
          position: 1,
          content: <IntroPrayerSet />,
          className: "content__section--top",
        },
        {
          position: 2,
          content: (
            <>
              <h2>Baptism in the Jordan</h2>
              <p>
                The Lord Jesus is Baptized in the Jordan River by John the
                Baptist, as a voice cries to us from the heavens: “This is my
                beloved Son, hear him!” Let us listen to Christ and, with his
                grace, work for the protection of every person from conception
                to natural death.
              </p>
            </>
          ),
        },
        {
          position: 3,
          content: (
            <>
              <h2>The Wedding Feast at Cana</h2>
              <p>
                When they had run out of wine, Jesus blessed water and turned it
                into wine. May Jesus transform the darkness of sin and death in
                the proclamation of the Gospel of Life.
              </p>
            </>
          ),
        },
        {
          position: 4,
          content: (
            <>
              <h2>Proclamation of the Kingdom of God</h2>
              <p>
                Jesus called the crowds to conversion, proclaiming that the
                Kingdom of God is at hand. May this world choose life and turn
                from all that leads to darkness and death.
              </p>
            </>
          ),
        },
        {
          position: 5,
          content: (
            <>
              <h2>Transfiguration</h2>
              <p>
                The Lord Jesus led Peter, James and John with him to the top of
                the mountain where he was transfigured in light, and his
                garments shown whiter than snow. May Christ’s glorious light
                shine on all who dwell in the shadow of darkness and sin.
              </p>
            </>
          ),
        },
        {
          position: 6,
          content: (
            <>
              <h2>Institution of the Eucharist</h2>
              <p>
                On the night before he suffered, he took bread, blessed it,
                broke it, gave it to his disciples, and said, Take this, all of
                you, and eat it. This is my body.. When supper was ended he took
                a cup filled with wine, gave it to them, and said, Take this,
                all of you, and drink from it, for this is the cup of my blood.
                Strengthened by the Holy Eucharist, may we work to proclaim the
                Gospel of life and defend all who are endangered by the culture
                of death.
              </p>
            </>
          ),
        },
      ]}
    />
  );
}
