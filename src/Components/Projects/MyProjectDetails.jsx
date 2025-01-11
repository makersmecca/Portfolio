import { useEffect, useMemo, useCallback, useRef, useState } from "react";
import "./slideinCards.css";

const MyProjectDetails = ({ projectDetails, isLight, splashStatus }) => {
  const [imageLoaded, setImageLoaded] = useState({});
  const [imageErrors, setImageErrors] = useState({});
  const projectRefs = useRef([]);

  // Memoized image load handler
  const handleImageLoad = useCallback((projectName) => {
    setImageLoaded((prev) => ({
      ...prev,
      [projectName]: true,
    }));
  }, []);

  // Memoized image error handler
  const handleImageError = useCallback((projectName) => {
    setImageErrors((prev) => ({
      ...prev,
      [projectName]: true,
    }));
    setImageLoaded((prev) => ({
      ...prev,
      [projectName]: true, // Remove loading state even if error
    }));
  }, []);

  // Pre-loading images
  useEffect(() => {
    projectDetails.forEach((project) => {
      const img = new Image();
      img.src = project.img;

      img.onload = () => handleImageLoad(project.name);
      img.onerror = () => handleImageError(project.name);
    });
  }, [projectDetails, handleImageLoad, handleImageError]);

  const observerCallback = useCallback((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("slide-in");
      } else {
        entry.target.classList.remove("slide-in");
      }
    });
  }, []);

  const observerOptions = useMemo(
    () => ({
      threshold: 0.1,
      rootMargin: "50px 0px",
    }),
    []
  );

  const observer = useMemo(
    () => new IntersectionObserver(observerCallback, observerOptions),
    [observerCallback, observerOptions]
  );

  useEffect(() => {
    projectRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      projectRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, [observer]);

  // Memoize the project cards rendering
  const renderProjectCards = useMemo(() => {
    return projectDetails.map((project, index) => (
      <div
        key={project.name}
        className={`col-span-3 ${
          index % 2 === 0 ? "" : "sm:col-start-5"
        } col-start-1 flex justify-center mt-7`}
      >
        <div
          ref={(el) => (projectRefs.current[index] = el)}
          className="group opacity-0 transform transition-all duration-1000 slideInAnimate"
        >
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`block max-w-sm p-6 ${
              isLight
                ? "bg-pastelRed group-hover:bg-pastelRedLight"
                : "bg-gray-800 group-hover:bg-gray-700"
            } rounded-3xl`}
          >
            <div className="relative overflow-hidden rounded-xl aspect-video">
              {/* Placeholder/Loading State */}
              {!imageLoaded[project.name] && (
                <div className="absolute inset-0 flex items-center justify-center bg-gray-200 animate-pulse">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"></div>
                </div>
              )}

              {/* Error State */}
              {imageErrors[project.name] && (
                <div className="absolute inset-0 flex items-center justify-center bg-gray-200">
                  <span className="text-gray-500">Image unavailable</span>
                </div>
              )}

              {/* Actual Image */}
              {!imageErrors[project.name] && (
                <img
                  src={project.img}
                  alt={`${project.name} preview`}
                  loading="lazy"
                  decoding="async"
                  className={`
                    absolute inset-0 w-full h-full object-cover
                    duration-300 ease-in-out
                    group-hover:scale-110 transition-all
                    ${!imageLoaded[project.name] ? "opacity-0" : "opacity-100"}
                  `}
                  onLoad={() => handleImageLoad(project.name)}
                  onError={() => handleImageError(project.name)}
                />
              )}
            </div>

            <h5
              className={`pt-2 mb-2 text-center text-2xl font-bold tracking-tight ${
                isLight ? "text-slate-700" : "text-white"
              } rounded-lg`}
            >
              {project.name}
            </h5>
            <p
              className={`font-normal text-center text-sm ${
                isLight ? "font-semibold" : "font-normal"
              }`}
            >
              {project.details}
            </p>
          </a>
        </div>
      </div>
    ));
  }, [
    projectDetails,
    isLight,
    imageLoaded,
    imageErrors,
    handleImageLoad,
    handleImageError,
  ]);

  return (
    <div className={`${splashStatus ? "hidden" : "block"}`}>
      <div
        className={` mt-10 md:mt-20 pt-5 grid grid-cols-2 sm:grid-cols-7 xl:px-80 lg:px-52 md:px-36 px-8`}
      >
        <div
          className={`col-span-3 col-start-1 text-center md:text-start md:ps-16 md:me-9 text-3xl md:text-4xl`}
        >
          Projects
        </div>
        {renderProjectCards}
      </div>
    </div>
  );
};

export default MyProjectDetails;
