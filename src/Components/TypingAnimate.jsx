import { TypeAnimation } from "react-type-animation";

const TypingAnimate = ({ splashStatus }) => {
  return (
    <div
      className={`${
        splashStatus ? "hidden" : "absolute fadeInOnly"
      } md:text-xl text-base`}
    >
      <TypeAnimation
        sequence={[
          "Hi...", // Types 'One'
          2500,
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
    </div>
  );
};

export default TypingAnimate;
