import React from "react";
import Typewriter from "typewriter-effect";

const Type = () => {
    return (
        <Typewriter
          options={{
            strings: [
              "I'M   Divith KR",
              "MERN Stack Developer"
            ],
            autoStart: true,
            loop: true,
            deleteSpeed: 50,
          }}
        />
      )
}

export default Type