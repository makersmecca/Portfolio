import MyProjectDetails from "./MyProjectDetails";
import { useRef } from "react";
const Projects = ({ scrollClicked, globalBlur, isLight, splashStatus }) => {
  const targetRef = useRef(null);

  if (scrollClicked) {
    if (targetRef.current) {
      targetRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }
  // console.log("state:" + scrollClicked);

  const projectDetails = [
    {
      img: "https://raw.githubusercontent.com/makersmecca/Vibie/refs/heads/master/public/Vibie%20Poster.png",
      name: "Vibie Social Media",
      details: "A Social Media Platform for sharing images and videos",
      url: "https://vibie.netlify.app",
    },
    {
      img: "https://raw.githubusercontent.com/makersmecca/Halo-Focus-Pomodoro/refs/heads/master/Halo%20Focus%20UI.png",
      name: "Halo Focus",
      details: "Study companion app for focused, productive study sessions",
      url: "https://halofocus.netlify.app",
    },
    {
      img: "https://raw.githubusercontent.com/makersmecca/Portfolio/main/public/images/shopsumPoster.png",
      name: "Shop Sum",
      details:
        "Payment App for Small Vendors, Roadside Stalls and Humble Corner Shops",
      url: "https://letsshopsum.netlify.app",
    },
    {
      img: "https://raw.githubusercontent.com/makersmecca/Portfolio/refs/heads/main/Portfolio%20Poster.png",
      name: "Portfolio",
      details: "My personal portfolio built with Vite-ReactJS and Tailwind CSS",
      url: "https://ayudh.netlify.app",
    },
  ];

  return (
    <div
      ref={targetRef}
      className={`${
        globalBlur
          ? "md:blur-none blur-md duration-500 ease-in-out"
          : "blur-none duration-500 ease-in-out"
      }`}
    >
      <MyProjectDetails
        projectDetails={projectDetails}
        isLight={isLight}
        splashStatus={splashStatus}
      />
    </div>
  );
};

export default Projects;
