import React, { useEffect } from "react";
import { useRef } from "react";
import { useState } from "react";

export default function Test() {
  // const [toggleButton, setToggleButton] = useState(false);
  const toggleButtonContainer = useRef();

  // useEffect(() => {

  const toggleButtonChange = () => {
    //console.log(toggleButtonContainer.current.classList.toggle("jeep"));
    toggleButtonContainer.current.classList.toggle("jeep");
  };

  // }, [toggleButton]);

  return (
    <div ref={toggleButtonContainer} onClick={() => toggleButtonChange()}>
      <div className="con">
        <div className="toggle-button"></div>
      </div>
    </div>
  );
}
