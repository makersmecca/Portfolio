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
      name: "Shop Sum",
      details: "Payment App for Small Businesses",
      url: "https://github.com/makersmecca/Project-ShopSum",
    },
    {
      img: "https://raw.githubusercontent.com/makersmecca/wireless_charger_project/ayudhNandi/wirelesscharger-poster.png",
      name: "Wireless Charger project",
      details:
        "Companion PWA for Wireless Charger project to monitor battery charge status",
      url: "https://github.com/makersmecca/wireless_charger_project",
    },
    {
      img: "https://raw.githubusercontent.com/makersmecca/Portfolio/main/public/images/portfolio-poster.png",
      name: "Portfolio",
      details: "My personal portfolio built with React",
      url: "https://github.com/makersmecca/Portfolio",
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
