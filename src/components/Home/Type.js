import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Data Scientist",
          "AI Innovator",
          "Deep Learning Enthusiast",
          "Generative AI Maverick",
          "Cloud Architect Extraordinaire",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 80,
      }}
    />
  );
}

export default Type;
