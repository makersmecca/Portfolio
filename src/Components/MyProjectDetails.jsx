const MyProjectDetails = ({ projectDetails }) => {
  const arr1 = projectDetails.slice(0, projectDetails.length / 2);
  const arr2 = projectDetails.slice(
    projectDetails.length / 2,
    projectDetails.length
  );

  return (
    <>
      <div className="mt-10 md:mt-20 pt-5 grid grid-cols-2 md:grid-cols-5 xl:px-80 lg:px-52 md:px-36 px-8">
        <div className="col-span-2 col-start-1 text-center md:text-start md:ps-16 md:me-9 text-3xl md:text-4xl">
          Projects
        </div>
        {/* first two projects go here */}
        <div className="col-span-2 col-start-1 flex justify-center">
          <ul className="md:pt-10 pt-0">
            {/* first two projects go here */}
            {arr1.map((i) => (
              <li key={i.name} className="md:pt-7 pt-5">
                <a
                  href={i.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
                >
                  <img src={i.img} alt="banner" className="mb-3 rounded-lg" />
                  <h5 className="mb-2 text-center text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {i.name}
                  </h5>
                  <p className="font-normal text-center text-sm">{i.details}</p>
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
              <li key={i.name} className="md:pt-7 pt-5">
                <a
                  href={i.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
                >
                  <img src={i.img} alt="banner" className="mb-3 rounded-lg" />
                  <h5 className="mb-2 text-center text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {i.name}
                  </h5>
                  <p className="font-normal text-center text-sm">{i.details}</p>
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
