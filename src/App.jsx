import Intro from "./Components/Intro";
import DisplayDateTime from "./Components/DateTime";
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
  return (
    <>
      {showSplash && <SplashScreen onAnimationEnd={updateShowSplash} />}
      <DisplayDateTime />
      <Intro splashStatus={showSplash} scrollHandler={scrollHandler} />
      <Projects scrollClicked={scrollClicked} />
      <TechStack />
      <Socials />
    </>
  );
};

export default App;
