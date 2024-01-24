import { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";
import ContentSection from "./ContentSection";

export default function MysteryGroup(props) {
  const sectionsRef = useRef(null);
  const titleRef = useRef(null);
  const [currSection, setCurrSection] = useState(undefined);
  const [sections] = useState(
    props.sections.map((section, index) => {
      return (
        <ContentSection
          ref={(node) => {
            const map = getMap();
            // node refers to the node referred by ContentSection
            if (node) {
              // attach the sectionPosition to the DOM node itself
              // this way it can be read by intersection observer during useEffect
              node.sectionPosition = section.position;
              map.set(section.position, { node: node });
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
    const map = getMap();
    const section = map.get(position).node;
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
    // Set up intersection observer for each content section
    // This sets the current section showing on the screen
    // which will be used to update the progress bar
    const map = getMap();
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            // The title node will not have a sectionPosition attached so it will be undefined
            setCurrSection(entry.target.sectionPosition);
          }
        });
      },
      { threshold: 0.75 }
    );

    // Also observe the content title
    // Save the ref.current to a variable, and reuse it in
    // the cleanup function below, since the value may change
    // between startup and unmount
    const titleRefCurrent = titleRef.current;
    observer.observe(titleRefCurrent);

    // Observe each DOM node saved in the sections map.
    map.forEach((value, index, map) => {
      observer.observe(value.node);
    });

    // Clean up the observer so that bugs don't occur between
    // page changes
    return () => {
      observer.unobserve(titleRefCurrent);
      map.forEach((value, index, map) => {
        observer.unobserve(value.node);
      });
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <div className={`progress-bar__buttons`}>
        <div
          className={`progress-bar__progress progress-bar__progress--${currSection} ${props.theme}`}
        ></div>
        {sections.map((s, i) => {
          const p = i + 1; // since index starts with 0, but position starts with 1
          return (
            <button
              style={{
                visibility: currSection === undefined ? "hidden" : "visible",
              }}
              className={`progress-bar__button progress-bar__button--${p} ${props.theme}`}
              key={p}
              onClick={() => scrollTo(p)}
            >
            </button>
          );
        })}
      </div>
      <div className={"content"}>
        <h1 ref={titleRef}>{props.title}</h1>
        {sections}
      </div>
    </>
  );
}
