import Home from "./Components/Home";
import DisplayDateTime from "./Components/DateTime";
import SplashScreen from "./Components/SplashScreen";

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
      <Home />
    </>
  );
};

export default App;
