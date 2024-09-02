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
                  className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
                >
                  {/* <p>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="180"
                      height="30"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path d="M6.002 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0" />
                      <path d="M1.5 2A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2zm13 1a.5.5 0 0 1 .5.5v6l-3.775-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12v.54L1 12.5v-9a.5.5 0 0 1 .5-.5z" />
                    </svg>
                  </p> */}
                  <img src={i.img} alt="banner" className="mb-3 rounded-lg" />
                  <h5 className="mb-2 text-center text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {i.name}
                  </h5>
                  <p className="font-normal text-center text-sm text-gray-700 dark:text-gray-400">
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
              <li key={i.name} className="md:pt-7 pt-5">
                <a
                  href="#"
                  className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
                >
                  <p>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="180"
                      height="30"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path d="M6.002 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0" />
                      <path d="M1.5 2A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2zm13 1a.5.5 0 0 1 .5.5v6l-3.775-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12v.54L1 12.5v-9a.5.5 0 0 1 .5-.5z" />
                    </svg>
                  </p>
                  <h5 className="mb-2 text-center text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {i.name}
                  </h5>
                  <p className="font-normal text-center text-gray-700 dark:text-gray-400">
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
