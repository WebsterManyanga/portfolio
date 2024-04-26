const Contents = () => {
  return (
    <section className="h-full snap-start  flex justify-between mt-5 px-4  lg:w-3/4 lg:justify-start lg:gap-96 lg:px-56 mx-auto">
      <div className="flex justify-center items-center w-16">
        <h1 className="text-6xl -rotate-90 font-extrabold block lg:text-8xl ">CONTENTS.</h1>
      </div>
      <div className="flex flex-col gap-20 lg:gap-56 justify-center items-center lg:flex-row ">
        <a href='#projects' className="flex flex-col justify-center items-center">
          <h2 className=" font-extrabold text:6xl lg:text-8xl">01</h2>
          <p className="font-light text-sm">PROJECTS</p>
        </a>
        <a href='#workExperience' className="flex flex-col justify-center items-center">
          <h2 className=" font-extrabold text:6xl lg:text-8xl">02</h2>
          <p className="font-light text-sm">WORK EXPERIENCE</p>
        </a>
        <a href='#certifications' className="flex flex-col justify-center items-center">
          <h2 className=" font-extrabold text:6xl lg:text-8xl">03</h2>
          <p className="font-light text-sm">CERTIFICATIONS</p>
        </a>
        <a href='#footer' className="flex flex-col justify-center items-center">
          <h2 className=" font-extrabold text:6xl lg:text-8xl">04</h2>
          <p className="font-light text-sm">CONTACT</p>
        </a>
      </div>
    </section>
  );
};

export default Contents;
