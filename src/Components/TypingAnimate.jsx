// import { useState } from "react";
import { TypeAnimation } from "react-type-animation";

const TypingAnimate = ({ splashStatus }) => {
  //   const [cursorChar, setCursorChar] = useState(true);

  //   setTimeout(() => {
  //     setCursorChar(() => !cursorChar);
  //   }, 400);

  return (
    <div
      className={`${
        splashStatus ? "hidden" : "absolute fadeInOnly"
      } md:text-xl text-base`}
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
        style={{ fontSize: "2em", display: "inline-block" }}
      />
      {/* <span style={{ fontSize: "1.8em" }}>
        {cursorChar ? <span>/.</span> : <span>\.</span>}
      </span> */}
    </div>
  );
};

export default TypingAnimate;
