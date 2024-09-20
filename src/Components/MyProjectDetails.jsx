const MyProjectDetails = ({ projectDetails, isLight, splashStatus }) => {
  const arr1 = projectDetails.slice(0, projectDetails.length / 2);
  const arr2 = projectDetails.slice(
    projectDetails.length / 2,
    projectDetails.length
  );

  console.log(splashStatus);

  return (
    <>
      <div className="mt-10 md:mt-20 pt-5 grid grid-cols-2 md:grid-cols-5 xl:px-80 lg:px-52 md:px-36 px-8">
        <div className="col-span-2 col-start-1 text-center md:text-start md:ps-16 md:me-9 text-3xl md:text-4xl">
          Projects
        </div>
        {/* first two projects go here */}
        <div
          className={`col-span-2 col-start-1 
          ${
            splashStatus
              ? "hidden"
              : "flex justify-center transition-all duration-1000 ease-in-out animate-slideIn"
          }
          `}
        >
          <ul className="md:pt-10 pt-0">
            {/* first two projects go here */}
            {arr1.map((i) => (
              <li key={i.name} className="md:pt-7 pt-5 group">
                <a
                  href={i.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block max-w-sm p-6 ${
                    isLight
                      ? "bg-pastelRed group-hover:bg-pastelRedLight"
                      : "bg-gray-800 group-hover:bg-gray-700"
                  } rounded-lg`}
                >
                  <div className="overflow-hidden rounded-lg">
                    <img
                      src={i.img}
                      alt="banner"
                      className="rounded-lg inset-0 w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-110"
                    />
                  </div>
                  <h5
                    className={`pt-2 mb-2 text-center text-2xl font-bold tracking-tight ${
                      isLight ? "text-slate-700" : "text-white"
                    } rounded-lg`}
                  >
                    {i.name}
                  </h5>
                  <p
                    className={`font-normal text-center text-sm ${
                      isLight ? "font-semibold" : "font-normal"
                    }`}
                  >
                    {i.details}
                  </p>
                </a>
              </li>
            ))}
          </ul>
        </div>
        {/* first two projects go here */}
        <div className="col-span-2 md:col-start-4 flex justify-center">
          <ul className="md:pt-10 pt-0">
            {/* first two projects go here */}
            {arr2.map((i) => (
              <li key={i.name} className="md:pt-7 pt-5 rounded-lg group">
                <a
                  href={i.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block max-w-sm p-6 ${
                    isLight
                      ? "bg-pastelRed group-hover:bg-pastelRedLight"
                      : "bg-gray-800 group-hover:bg-gray-700"
                  }  rounded-lg`}
                >
                  <div className="overflow-hidden rounded-lg">
                    <img
                      src={i.img}
                      alt="banner"
                      className="rounded-lg inset-0 w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-110"
                    />
                  </div>
                  <h5
                    className={`pt-2 mb-2 text-center text-2xl font-bold tracking-tight ${
                      isLight ? "text-slate-700" : "text-white"
                    } rounded-lg`}
                  >
                    {i.name}
                  </h5>
                  <p
                    className={`font-normal text-center text-sm ${
                      isLight ? "font-semibold" : "font-normal"
                    }`}
                  >
                    {i.details}
                  </p>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default MyProjectDetails;
