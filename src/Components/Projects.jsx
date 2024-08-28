import MyProjectDetails from "./MyProjectDetails";
const Projects = () => {
  const projectDetails = [
    {
      img: "https://github.com/makersmecca/Project-ShopSum/raw/master/ShopSum-poster.png",
      name: "ShopSum1",
      details: "Payments Simplified",
      url: "https://github.com/makersmecca/Project-ShopSum",
    },
    {
      img: "/",
      name: "ShopSum2",
      details: "Payments Simplified",
      url: "www.github.com",
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
    <>
      <MyProjectDetails projectDetails={projectDetails} />
    </>
  );
};

export default Projects;
