import Intro from "./Components/Intro";
import SplashScreen from "./Components/SplashScreen";
import Socials from "./Components/Socials";
import TechStack from "./Components/TechStack";
import Projects from "./Components/Projects";
import { useState, useEffect } from "react";

import "./Components/style.css";

const App = () => {
  const [showSplash, setShowSplash] = useState(true);

  const updateShowSplash = () => {
    setShowSplash(false);
  };

  // this bit is used to implement the scroll down function of the arrow down button
  const [scrollClicked, setScrollClicked] = useState(false); //sets the state to false showing that the page hasn't been scrolled

  useEffect(() => {
    const scrollDetect = () => {
      setScrollClicked(window.scrollY <= 90 ? false : ""); //if the page is scrolled to top set state to false again
    };
    window.addEventListener("scroll", scrollDetect);
    //console.log(isVisible);
  });

  const scrollHandler = () => {
    setScrollClicked(true);
  };

  const [isGlobalBlur, setIsGlobalBlur] = useState(false);
  const blurStatus = (isBlur) => {
    setIsGlobalBlur(isBlur);
    console.log("app.jsx" + isBlur);
  };

  return (
    <>
      {showSplash && <SplashScreen onAnimationEnd={updateShowSplash} />}
      <Intro
        splashStatus={showSplash}
        scrollHandler={scrollHandler}
        globalBlur={blurStatus}
      />
      <Projects scrollClicked={scrollClicked} globalBlur={isGlobalBlur} />
      <TechStack globalBlur={isGlobalBlur} />
      <Socials globalBlur={isGlobalBlur} />
    </>
  );
};

export default App;
