import { TypeAnimation } from "react-type-animation";
import React from "react";

const sqArr = ["Hi...", 3000, "Hello...", 1500, "Hi there...", 2500];
const compStyle = {
  fontSize: "2em",
  display: "inline-block",
  willChange: "transform",
  transform: "translate3d(0,0,0)",
};

const TypingAnimate = ({ splashStatus, isLight }) => {
  return (
    <div
      className={`${
        splashStatus ? "hidden" : "absolute fadeInOnly"
      } md:text-xl text-base flex ${isLight ? "text-lightColor" : "text-white"}`}
    >
      <TypeAnimation
        preRenderFirstString={true}
        sequence={sqArr}
        speed={30}
        deletionSpeed={40}
        wrapper="span"
        cursor={true}
        repeat={Infinity}
        style={compStyle}
        key={isLight ? "light" : "dark"}
      />
    </div>
  );
};

export default React.memo(TypingAnimate);
