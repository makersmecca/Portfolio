import MyProjectDetails from "./MyProjectDetails";
import { useRef } from "react";
const Projects = ({ scrollClicked }) => {
  const targetRef = useRef(null);

  if (scrollClicked) {
    if (targetRef.current) {
      targetRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }
  // console.log("state:" + scrollClicked);

  const projectDetails = [
    {
      img: "https://github.com/makersmecca/Project-ShopSum/raw/master/ShopSum-poster.png",
      name: "ShopSum1",
      details: "Payments Simplified",
      url: "https://github.com/makersmecca/Project-ShopSum",
    },
    {
      img: "https://raw.githubusercontent.com/makersmecca/Portfolio/main/public/images/portfolio-poster.png",
      name: "Portfolio",
      details: "My personal portfolio built with React",
      url: "https://github.com/makersmecca/Portfolio",
    },
    {
      img: "/",
      name: "ShopSum3",
      details: "Payments Simplified",
      url: "www.github.com",
    },
    {
      img: "/",
      name: "ShopSum4",
      details: "Payments Simplified",
      url: "https://www.github.com",
    },
  ];

  return (
    <div ref={targetRef}>
      <MyProjectDetails projectDetails={projectDetails} />
    </div>
  );
};

export default Projects;
