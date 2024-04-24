const WorkExperience = () => {
  const job = (
    <div className="lg:mt-5 before:content-[''] before:block before:w-1 before:h-40 lg:before:h-24 before:bg-white relative before:absolute before:-left-6 before:top-10">
      <h2 className="relative font-extrabold before:content-[''] before:block before:w-2 before:h-2 before:bg-white before:rounded-full before:absolute before:-left-6 before:top-2">Customer Service Representative</h2>
      <p className="font-light text-sm">Feb 2022 - Feb 2023</p>
      <p className="font-light text-sm">Foundever</p>
      <p className="font-light text-sm">Warsaw, Poland</p>
      <p className=" font-medium text-sm">
        Technical Support Responsibilities: Provided technical support to
        customers, troubleshooting issues with software, applications, and
        online services <br />
        Software Utilization & Familiarity: Slack, Microsoft Teams, Salesforce,
        Jira <br /> Training & Knowledge Sharing: Involved in training new
        employees
      </p>
    </div>
  );

  return (
    <section className="h-full lg:pt-10 lg:mt-20 snap-start">
      <h1 className="text-5xl pl-52 lg:w-full lg:h-fit font-extrabold lg:text-6xl  justify-center items-center h-full lg:block  hidden">
        WORK EXPERIENCE.
      </h1>
      <div className="h-full  overflow-scroll  lg:mt-0 lg:pt-10   mt-5 px-10 pt-20 lg:flex  flex-col  lg:pl-96 lg:pb-10 ">
        {job} {job} {job}{" "}
      </div>

    </section>
  );
};

export default WorkExperience;
