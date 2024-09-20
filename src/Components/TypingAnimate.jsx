// import { useState } from "react";
import { TypeAnimation } from "react-type-animation";
import { useState, useEffect } from "react";

const TypingAnimate = ({ splashStatus, isLight }) => {
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
    document.getElementById("typeText").style.color = textColor;
  });
  // console.log(textColor);

  return (
    <div
      className={`${
        splashStatus ? "hidden" : "absolute fadeInOnly"
      } md:text-xl text-base flex`}
      id="typeText"
    >
      <TypeAnimation
        sequence={[
          "Hi...", // Types 'One'
          3000,
          "Hello...", // Deletes 'One' and types 'Two'
          1500,
          "Hi there...", // Types 'Three' without deleting 'Two'
          2500,
        ]}
        wrapper="span"
        cursor={true}
        repeat={Infinity}
        style={{
          fontSize: "2em",
          display: "inline-block",
        }}
        className="self-end"
      />
      {/* <span style={{ fontSize: "1.8em" }}>
        {cursorChar ? <span>/.</span> : <span>\.</span>}
      </span> */}
    </div>
  );
};

export default TypingAnimate;
