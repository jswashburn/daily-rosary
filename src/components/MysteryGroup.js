import { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";
import ContentSection from "./ContentSection";

export default function MysteryGroup(props) {
  const sectionsRef = useRef(null);
  const [currSection, setCurrSection] = useState(0);
  const [sections] = useState(
    props.sections.map((section, index) => {
      return (
        <ContentSection
          ref={(node) => {
            const map = getMap();
            // node refers to the node referred by ContentSection
            if (node) {
              node.sectionPosition = section.position;
              map.set(section.position, {node: node});
            } else {
              map.delete(section.position);
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
    const section = map.get(position).node;
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

  useEffect(() => {
    const map = getMap();    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setCurrSection(entry.target.sectionPosition);
        }
      });
    }, {threshold: 1});

    map.forEach((value, index, map) => {
      observer.observe(value.node);
    });

    return () => {
      map.forEach((value, index, map) => {
        observer.unobserve(value.node);
        observer.disconnect();
      });
    }
  }, []);

  const getProgressBarWidth = () => {
    const p = ((currSection + 1) / (sections.length)) * 100
    return p + '%'
  }

  const progressBarStyle = {
    width: getProgressBarWidth(),
    height: '2em',
    backgroundColor: 'blue',
    position: 'sticky',
    top: '8em',
    alignSelf: 'start',
    transitionProperty: 'width',
    transition: '150ms'
  }

  return (
    <>
      <div className={"content " + props.theme}>
        <div style={progressBarStyle}>{currSection}</div>
        <h1>{props.title}</h1>
        {/* <nav>
          <button onClick={() => scrollTo(1)}>Skip to Mysteries</button>
          <button onClick={() => scrollTo(1)}>First Mystery</button>
          <button onClick={() => scrollTo(2)}>Second Mystery</button>
          <button onClick={() => scrollTo(3)}>Third Mystery</button>
          <button onClick={() => scrollTo(4)}>Fourth Mystery</button>
          <button onClick={() => scrollTo(5)}>Fifth Mystery</button>
        </nav> */}
        {sections}
      </div>
    </>
  );
}
