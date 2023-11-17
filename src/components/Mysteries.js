import { useState } from "react";
import { useRef } from "react";
import ContentSection from "./ContentSection";

export default function Mysteries(props) {
  const sectionsRef = useRef(null);
  const [sections, setSections] = useState(
    props.sections.map((section, index) => {
      return (
        <ContentSection
          ref={(node) => {
            const map = getMap();
            // node refers to the node referred by ContentSection
            if (node) {
              map.set(section.position, node);
            } else {
              map.delete(section.position);
            }
          }}
          key={index}
        >
          {section.content}
        </ContentSection>
      );
    })
  );

  const scrollTo = (position) => {
    console.log("Scrolling to " + position);
    const map = getMap();
    const section = map.get(position);
    section.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  };

  const getMap = () => {
    if (!sectionsRef.current) {
      sectionsRef.current = new Map();
    }
    return sectionsRef.current;
  };

  return (
    <div className={"content " + props.theme}>
      <h1>{props.title}</h1>
      <nav>
        <button onClick={() => scrollTo(0)}>Skip to Mysteries</button>
        <button onClick={() => scrollTo(1)}>Skip to 2</button>
        <button onClick={() => scrollTo(2)}>Skip to 3</button>
        <button onClick={() => scrollTo(3)}>Skip to 4</button>
        <button onClick={() => scrollTo(4)}>Skip to 5</button>
      </nav>
      {sections}
    </div>
  );
}
