import ContentSection from "../components/ContentSection";

export default function IntroPrayerSet() {
  return (
    <>
      <ContentSection title="Opening Prayers">

        <h3>The Apostles Creed</h3>
        <span className="content__section__description">Performed while holding the crucifix.</span>
        <p>
          I believe in God, the Father almighty, Creator of heaven and earth,
          and in Jesus Christ, his only Son, our Lord, who was conceived by the
          Holy Spirit, born of the Virgin Mary, suffered under Pontius Pilate,
          was crucified, died and was buried; he descended into hell; on the
          third day he rose again from the dead; he ascended into heaven, and is
          seated at the right hand of God the Father almighty; from there he
          will come to judge the living and the dead. I believe in the Holy
          Spirit the holy catholic Church the communion of saints the
          forgiveness of sins the resurrection of the body and life everlasting.
          Amen.
        </p>

        <h3>Our Father</h3>
        <span className="content__section__description">Performed on the first bead.</span>
        <p>
          Our Father, who art in heaven, hallowed be thy name; thy kingdom come,
          thy will be done on earth as it is in heaven. Give us this day our
          daily bread, and forgive us our trespasses, as we forgive those who
          trespass against us; and lead us not into temptation, but deliver us
          from evil. Amen.
        </p>

        <h3>Hail Mary</h3>
        <span className="content__section__description">Repeat on the next three beads. Ask for Mary's intercession, for an increase of faith, hope, and charity, as well as any intentions you may have.</span>
        <p>
          Hail, Mary, full of grace, the Lord is with thee. Blessed art thou
          among women and blessed is the fruit of thy womb, Jesus. Holy Mary,
          Mother of God, pray for us sinners, now and at the hour of our death.
          Amen.
        </p>

        <h3>Glory Be (Doxology)</h3>
        <span className="content__section__description">Repeat before the next large bead.</span>
        <p>
          Glory be to the Father and to the Son and to the Holy Spirit, as it
          was in the beginning is now, and ever shall be world without end.
          Amen.
        </p>
      </ContentSection>
    </>
  );
}
