import { careers } from "../careerPath";

const WorkExperience = () => {

  const jobs = careers.map((job, i) => (
    <div key={i} className="lg:mt-4 before:content-[''] before:block before:w-1 before:h-[80%] before:bg-white relative before:absolute before:-left-6 before:top-10">
      <h2 className="relative font-extrabold before:content-[''] before:block before:w-2 before:h-2 before:bg-white before:rounded-full before:absolute before:-left-6 before:top-2">{job.title}</h2>
      <p className="font-light text-sm">{job.date}</p>
      <p className="font-light text-sm">{job.company}</p>
      <p className="font-light text-sm">{job.location}</p>
      <ul className=" font-medium text-sm w-full lg:w-[600px] my-5">
        {job.responsibilities.map((responsibility, j) => (
          <li key={j} className="mt-1 ">{`* ${responsibility}`}</li>
        ))}
      </ul>
    </div>
  ));

  return (
    <section className=" lg:pt-10 lg:mt-20 snap-start" id="workExperience">
      <h1 className="text-5xl ml-10 lg:w-full xl:ml-52 lg:h-fit font-extrabold lg:text-6xl  justify-center items-center h-full lg:block  hidden">
        WORK EXPERIENCE.
      </h1>
      <div className="h-full w-full overflow-clip xl:ml-72 ml-0  lg:ml-10 lg:mt-4 lg:pt-0   mt-5 px-10 pt-20 lg:flex  flex-col   lg:pb-10 ">
        {jobs}
      </div>
    </section>
  );
};

export default WorkExperience;
