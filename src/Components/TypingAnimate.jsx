// import { useState } from "react";
import { TypeAnimation } from "react-type-animation";
import React, { useState, useEffect } from "react";

const TypingAnimate = React.memo(({ splashStatus, isLight }) => {
  //   const [cursorChar, setCursorChar] = useState(true);

  //   setTimeout(() => {
  //     setCursorChar(() => !cursorChar);
  //   }, 400);
  const lightColor = "#537188";
  const darkColor = "white";

  const [textColor, setTextColor] = useState(darkColor);

  useEffect(() => {
    if (isLight) {
      setTextColor(lightColor);
    } else {
      setTextColor(darkColor);
    }
    //document.getElementById("typeText").style.color = textColor;

    return;
  }, [isLight]);
  // console.log(textColor);

  return (
    <div
      className={`${
        splashStatus ? "hidden" : "absolute fadeInOnly"
      } md:text-xl text-base flex`}
      id="typeText"
      style={{ color: textColor, willChange: "auto" }}
    >
      <TypeAnimation
        preRenderFirstString={true}
        sequence={["Hi...", 3000, "Hello...", 1500, "Hi there...", 2500]}
        speed={30}
        deletionSpeed={40}
        wrapper="span"
        cursor={true}
        repeat={Infinity}
        style={{
          fontSize: "2em",
          display: "inline-block",
          willChange: "contents",
        }}
        className="self-end"
      />
      {/* <span style={{ fontSize: "1.8em" }}>
        {cursorChar ? <span>/.</span> : <span>\.</span>}
      </span> */}
    </div>
  );
});

export default TypingAnimate;
