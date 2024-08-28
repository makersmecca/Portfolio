import Intro from "./Components/Intro";
import DisplayDateTime from "./Components/DateTime";
import SplashScreen from "./Components/SplashScreen";
import Socials from "./Components/Socials";
import TechStack from "./Components/TechStack";
import Projects from "./Components/Projects";

import { useState } from "react";

import "./Components/style.css";

const App = () => {
  const [showSplash, setShowSplash] = useState(true);

  const updateShowSplash = () => {
    setShowSplash(false);
  };

  return (
    <>
      {showSplash && <SplashScreen onAnimationEnd={updateShowSplash} />}
      <DisplayDateTime />
      <Intro />
      <Projects />
      <TechStack />
      <Socials />
    </>
  );
};

export default App;
