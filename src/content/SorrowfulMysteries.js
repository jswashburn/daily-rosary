import IntroPrayerSet from "./IntroPrayerSet";
import MysteryGroup from "../components/MysteryGroup";

export default function SorrowfulMysteries() {
  return (
    <MysteryGroup
      title="The Sorrowful Mysteries"
      theme="clr--sorrowful"
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
              <h2>The Agony in the Garden</h2>
              <p>
                Jesus comes with his disciples to the garden of Gethsemane and
                prays to be delivered from his Passion, but most of all, to do
                the Father's will. Let us pray that Christ might hear the
                prayers of all who suffer from the culture of death, and that he
                might deliver them from the hands of their persecutors.
              </p>
            </>
          ),
        },
        {
          position: 3,
          content: (
            <>
              <h2>The Scourging at the Pillar</h2>
              <p>
                Falsely accused before Pilate, Jesus is cruelly tied to a pillar
                and scourged, then clothed in a cloak of purple and mocked. Let
                us pray for all innocent victims, that by the merits of his most
                holy Passion, Christ might deliver them and grant them eternal
                life.
              </p>
            </>
          ),
        },
        {
          position: 4,
          content: (
            <>
              <h2>The Crowning with Thorns</h2>
              <p>
                Pilate mocks the Christ by asking him if he is the King of the
                Jews. He is the King of all the world, through whom all things
                were made. He is the one who will judge the living and the dead
                at the end of time. Yet he is crowned with suffering out of love
                for us, in reparation for our sins.
              </p>
            </>
          ),
        },
        {
          position: 5,
          content: (
            <>
              <h2>The Carrying of the Cross</h2>
              <p>
                Three times Christ falls under the weight of the Cross as he
                carries our sins to Calvary. Let us pray for all who struggle to
                live the Gospel of Life, that they might pick up their crosses
                and walk the way of sorrows with the Savior of the world.
              </p>
            </>
          ),
        },
        {
          position: 6,
          content: (
            <>
              <h2>The Crucifixion</h2>
              <p>
                Innocent and without sin, Jesus opens his arms upon the cross
                out of love for us. Let us join our sufferings, and the
                sufferings of the whole world, to his one perfect sacrifice of
                praise.
              </p>
            </>
          ),
        },
      ]}
    />
  );
}
