import Intro from "./Components/Intro";
import SplashScreen from "./Components/SplashScreen";
import Socials from "./Components/Socials";
import TechStack from "./Components/TechStack";
import Projects from "./Components/Projects";
import BackToTop from "./Components/BackToTop";

import { useState, useEffect, useLayoutEffect, useMemo } from "react";

import "./Components/style.css";

const App = () => {
  useEffect(() => {
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker.register("serviceWorker.js");
    }
  }, []);

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
    let timeoutId;

    const handleScroll = () => {
      const currentScrollPos = window.scrollY;

      // Clear any existing timeout
      clearTimeout(timeoutId);

      // Update states based on scroll position
      setScrollClicked(currentScrollPos > 90);
      setBackToTop(currentScrollPos > 1000);

      // Set timeout to detect when scrolling stops
      timeoutId = setTimeout(() => {
        setScrollClicked(false);
      }, 150);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timeoutId);
    };
  }, []);

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
  const getInitialTheme = () => {
    const savedTheme = localStorage.getItem("localTheme");
    return savedTheme ? JSON.parse(savedTheme) : false;
  };

  const [isLight, setIsLight] = useState(getInitialTheme);

  const toggleTheme = () => {
    setIsLight((prevTheme) => {
      localStorage.setItem("localTheme", JSON.stringify(!prevTheme)); //save the current theme state in localstorage for susequent page load
      return !prevTheme;
    });
  };

  const introProps = useMemo(
    () => ({
      backToTop,
      splashStatus: showSplash,
      scrollHandler,
      globalBlur: blurStatus,
      toggleTheme,
      isLight,
    }),
    [backToTop, showSplash, scrollHandler, blurStatus, toggleTheme, isLight]
  );

  return (
    <>
      {showSplash && <SplashScreen onAnimationEnd={updateShowSplash} />}
      <BackToTop
        toTheTop={toTheTop}
        splashStatus={showSplash}
        isLight={isLight}
      />
      <Intro {...introProps} />
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
