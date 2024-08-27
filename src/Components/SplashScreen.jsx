import { useEffect } from "react";
const SplashScreen = ({ onAnimationEnd }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onAnimationEnd();
    }, 3000);

    return () => clearTimeout(timer);
  }, [onAnimationEnd]);
  return (
    <div className="relative">
      <div className="h-screen p-10 bg-black absolute font-Kanit w-full text-center text-center">
        <div className="text-5xl">WELCOME</div>
      </div>
    </div>
  );
};

export default SplashScreen;
