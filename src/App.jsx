import Intro from "./Components/Introductory Part/MyDetails/Intro";
import SplashScreen from "./Components/SplashScreen/SplashScreen";
import Socials from "./Components/Footer/Socials";
import TechStack from "./Components/Footer/TechStack";
import Projects from "./Components/Projects/Projects";
import BackToTop from "./Components/BackToTop";
import { useState, useEffect, useLayoutEffect } from "react";

import "./Components/style.css";

const App = () => {
  window.addEventListener("load", () => {
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker.register("serviceWorker.js");
    }
  });

  useLayoutEffect(() => {
    if (isLight) {
      document.body.style.backgroundColor = "#FFF4EA";
      document.body.style.color = "#354259";
      document.body.style.fontWeight = "500";
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

  // state to manage light and dark theme across webpage
  //using localstorage to add persistent theme on subsequent page loads
  const [isLight, setIsLight] = useState(() => {
    return localStorage.getItem("localTheme") //try to fetch the state value from localstorage
      ? JSON.parse(localStorage.getItem("localTheme")) //if value exists then parse it to set the state accordingly
      : false; //if the vaue doesn't exist set false as default
  });

  const toggleTheme = () => {
    setIsLight((prevTheme) => {
      localStorage.setItem("localTheme", JSON.stringify(!prevTheme)); //save the current theme state in localstorage for susequent page load
      return !prevTheme;
    });
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
        splashStatus={showSplash}
      />
      <TechStack
        globalBlur={isGlobalBlur}
        isLight={isLight}
        splashStatus={showSplash}
      />
      <Socials globalBlur={isGlobalBlur} isLight={isLight} />
    </>
  );
};

export default App;
