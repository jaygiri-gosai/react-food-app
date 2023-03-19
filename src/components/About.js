import React, { useState } from "react";

const Sections = ({ title, desc, isVisible, setIsVisible }) => {
  return (
    <div className="border-2 my-4 p-2">
      <span>{title}</span>
      {isVisible ? (
        <>
          <button onClick={() => setIsVisible()} className="px-4">
            Hide
          </button>
          <p>{desc}</p>
        </>
      ) : (
        <button onClick={() => setIsVisible()} className="px-4">
          Show
        </button>
      )}
    </div>
  );
};

const About = () => {
  const [visibleSection, setVisibleSection] = useState("");
  return (
    <div className="p-2 m-2">
      <Sections
        title="About"
        desc="This is about us section"
        isVisible={visibleSection === "about"}
        setIsVisible={() =>
          setVisibleSection(visibleSection === "about" ? "" : "about")
        }
      />
      <Sections
        title="Team"
        desc="This is team us section"
        isVisible={visibleSection === "team"}
        setIsVisible={() =>
          setVisibleSection(visibleSection === "team" ? "" : "team")
        }
      />
      <Sections
        title="Career"
        desc="This is career us section"
        isVisible={visibleSection === "career"}
        setIsVisible={() =>
          setVisibleSection(visibleSection === "career" ? "" : "career")
        }
      />
    </div>
  );
};

export default About;
