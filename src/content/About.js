import ContentSection from "../components/ContentSection";

export default function About() {
  return (
    <div className="content">
      <h1>Welcome to Daily Rosary!</h1>

      <ContentSection title="About this project">
        This site was something I made to help refresh some front end skills
        that I have lost over the years. I am Catholic, and I love praying the
        rosary, but I have not found any nice interactive rosary-praying
        websites online, so I decided to build myself a custom one!
      </ContentSection>

      <ContentSection title="How the site is built">
        This site is a simple static web app, hosted on Azure. It is built with
        React.js! I have done my best to keep things simple. See the github repo
        here for details!
      </ContentSection>

      <ContentSection title="What is a Rosary?">
        For anyone who doesn't know what a rosary is, it is a Catholic tradition
        where we take rosary beads and recite certain prayers out loud, while
        meditating on certain events in the life of Jesus Christ. It is one of
        my favorite parts of the day! Every day of the week, a different set of
        meditations is used. These are called "mysteries" and they are those key
        moments in which we reflect during our prayer. To help myself and others
        remember which mysteries are for the current day, I have set this site
        up to automatically load the days mysteries.
      </ContentSection>
    </div>
  );
}
