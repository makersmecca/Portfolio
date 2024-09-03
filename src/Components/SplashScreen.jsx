import { useEffect } from "react";
import { useState } from "react";
import HelloText from "./HelloText";
const SplashScreen = ({ onAnimationEnd }) => {
  const [loading, setLoading] = useState(true);
  const [isHello, setIsHello] = useState(true);

  const helloTextStatus = () => {
    //console.log("hello text display complete" + hellostatus);
    setIsHello(false); //updating the isHello state to false once the Hello Text is done displaying
  };
  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setLoading(false);
  //   }, 2500);
  //   return () => clearTimeout(timer);
  // }, []);

  //this effect runs once the isHello state is updated.
  useEffect(() => {
    setLoading(isHello);
  }, [isHello]); //once isHello state gets updated this effect is executed and the setLoading state is updated

  useEffect(() => {
    if (!loading) {
      // Delay the callback to allow the transition to complete
      const transitionTimer = setTimeout(() => {
        onAnimationEnd(); // Hide the splash screen fully after the transition
      }, 1000);

      return () => clearTimeout(transitionTimer);
    }
  }, [loading, onAnimationEnd]);

  return (
    <div
      className={`fixed inset-0 bg-black flex items-center justify-center transition-transform duration-1000 ${
        !loading
          ? "-translate-y-full"
          : "translate-y-0 transition-transform duration-1000"
      }`}
    >
      <HelloText helloTextStatus={helloTextStatus} />
    </div>
  );
};

export default SplashScreen;
