import { useEffect } from "react";
import { useState } from "react";
const SplashScreen = ({ onAnimationEnd }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

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
        !loading ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      <h1 className="text-white font-Kanit text-4xl font-bold animate-pulse">
        WELCOME
      </h1>
    </div>
  );
};

export default SplashScreen;
