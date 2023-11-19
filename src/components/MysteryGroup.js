import { useState } from "react";
import { useRef } from "react";
import ContentSection from "./ContentSection";

export default function MysteryGroup(props) {
  const rootRef = useRef(null);
  const sectionsRef = useRef(null);
  const [sections] = useState(
    props.sections.map((section, index) => {
      return (
        <ContentSection
          ref={(node) => {
            const map = getMap();
            // node refers to the node referred by ContentSection
            if (node) {
              // observerRef.current.observe(node);
              map.set(index, node);
            } else {
              map.delete(index);
            }
          }}
          key={index}
          className={section.className}
        >
          {section.content}
        </ContentSection>
      );
    })
  );

  const scrollTo = (position) => {
    const map = getMap();
    const section = map.get(position);
    console.log("Scrolling to " + position);
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
    <div ref={rootRef} className={"content " + props.theme}>
      <h1>{props.title}</h1>
      <nav>
        <button onClick={() => scrollTo(1)}>Skip to Mysteries</button>
        <button onClick={() => scrollTo(1)}>First Mystery</button>
        <button onClick={() => scrollTo(2)}>Second Mystery</button>
        <button onClick={() => scrollTo(3)}>Third Mystery</button>
        <button onClick={() => scrollTo(4)}>Fourth Mystery</button>
        <button onClick={() => scrollTo(5)}>Fifth Mystery</button>
      </nav>
      {sections}
    </div>
  );
}
