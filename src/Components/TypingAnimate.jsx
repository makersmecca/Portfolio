import { TypeAnimation } from "react-type-animation";

const TypingAnimate = ({ splashStatus }) => {
  return (
    <div
      className={`${
        splashStatus ? "hidden" : "absolute fadeInOnly"
      } md:text-xl text-lg`}
    >
      <TypeAnimation
        sequence={[
          "Hi...", // Types 'One'
          3000,
          "Hello...", // Deletes 'One' and types 'Two'
          4000,
          "Hi there...", // Types 'Three' without deleting 'Two'
          3000,
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
