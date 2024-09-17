import Intro from "./Components/Intro";
import SplashScreen from "./Components/SplashScreen";
import Socials from "./Components/Socials";
import TechStack from "./Components/TechStack";
import Projects from "./Components/Projects";
import BackToTop from "./Components/BackToTop";

import { useState, useEffect, useLayoutEffect } from "react";

import "./Components/style.css";

const App = () => {
  useLayoutEffect(() => {
    if (isLight) {
      document.body.style.backgroundColor = "#FFF4EA";
      document.body.style.color = "rgb(13,13,13)";
      document.body.style.fontWeight = "bold";
    } else {
      document.body.style.backgroundColor = "rgb(13,13,13)";
      document.body.style.color = "aliceblue";
      document.body.style.fontWeight = "";
    }
  });

  const [showSplash, setShowSplash] = useState(true);

  const updateShowSplash = () => {
    setShowSplash(false);
  };

  // this bit is used to implement the scroll down function of the arrow down button
  const [scrollClicked, setScrollClicked] = useState(false); //sets the state to false showing that the page hasn't been scrolled

  const [backToTop, setBackToTop] = useState(false);
  let scrollPos = 0;

  useEffect(() => {
    const scrollDetect = () => {
      scrollPos = window.scrollY;
      setScrollClicked(scrollPos <= 90 ? false : ""); //if the page is scrolled to top set state to false again
      setBackToTop(scrollPos >= 1000 ? false : "");
    };
    window.addEventListener("scroll", scrollDetect);
    //console.log(isVisible);
  });

  const scrollHandler = () => {
    setScrollClicked(true);
  };

  const toTheTop = () => {
    //console.log("app function");
    setBackToTop(true);
  };

  const [isGlobalBlur, setIsGlobalBlur] = useState(false);
  const blurStatus = (isBlur) => {
    setIsGlobalBlur(isBlur);
    // console.log("app.jsx" + isBlur);
  };

  const [isLight, setIsLight] = useState(false);

  const toggleTheme = () => {
    setIsLight(() => !isLight);
  };

  return (
    <>
      {showSplash && <SplashScreen onAnimationEnd={updateShowSplash} />}
      <BackToTop
        toTheTop={toTheTop}
        splashStatus={showSplash}
        isLight={isLight}
      />
      <Intro
        backToTop={backToTop}
        splashStatus={showSplash}
        scrollHandler={scrollHandler}
        globalBlur={blurStatus}
        toggleTheme={toggleTheme}
        isLight={isLight}
      />
      <Projects
        scrollClicked={scrollClicked}
        globalBlur={isGlobalBlur}
        isLight={isLight}
      />
      <TechStack globalBlur={isGlobalBlur} isLight={isLight} />
      <Socials globalBlur={isGlobalBlur} isLight={isLight} />
    </>
  );
};

export default App;
