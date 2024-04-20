const WorkExperience = () => {
  const job = (
    <div className=" before:content-[''] before:block before:w-1 before:h-40 before:bg-white relative before:absolute before:-left-6 before:top-10">
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
    <section className="h-full overflow-scroll  mt-5 px-10 pt-20">
      {job} {job} {job}{" "}
    </section>
  );
};

export default WorkExperience;
