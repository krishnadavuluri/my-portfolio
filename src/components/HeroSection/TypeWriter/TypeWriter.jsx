import React from "react";

import { useTypewriter, Cursor } from "react-simple-typewriter";

export const TypeWriter = () => {
  const [text] = useTypewriter({
    words: ["Software Engineer.", "Full Stack Developer."],
    typeSpeed: 120,
    delaySpeed: 80,
    loop: { Infinity },
  });

  return (
    <div>
      <p  className="hearo-section-typist">
        I'm a <span className="text-[color:var(--green)]">{text}</span>
        <Cursor cursorBlinking={false} cursorColor="#379683" cursorStyle="|" />
      </p>
    </div>
  );
};
