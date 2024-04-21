import Image from "next/image";
import Certifications from "./ui/Certifications";
import Contents from "./ui/Contents";
import Projects from "./ui/Projects";
import WorkExperience from "./ui/WorkExperience";
import autograph from "../public/autograph.png";

export default function Home() {
  return (
    <article className="h-[90vh] overflow-scroll">
      <section className="w-full h-full flex flex-col relative items-center justify-center  before:bg-white before:w-32 before:h-1 before:rounded-sm before:right-0 before:absolute before:top-52  after:bg-white after:w-32 after:h-1 after:rounded-sm after:left-0 after:absolute after:bottom-52 lg:before:h-1 lg:before:w-1/4 lg:after:h-1 lg:after:w-1/4">
        <h1 className="font-black text-6xl lg:text-9xl">WEBSTER</h1>
        <p className="text-sm lg:before:content-[''] before:block before:w-16 before:h-0.5 before:bg-white before:absolute relative  before:top-2 before:-left-16 lg:after:content-[''] after:block after:w-16 after:h-0.5 after:bg-white after:absolute  after:top-2 after:-right-16">
          WEB DEVELOPER
        </p>
        <div className=" hidden lg:block absolute bottom-0 right-20">  
          <Image
            src={autograph}
            alt="autograph"
            width={130}
            height={100}
          ></Image>
        </div>
      </section>
      <Contents />
      <h1 className="text-5xl font-extrabold  flex justify-center items-center h-full">
        PROJECTS.
      </h1>
      <Projects />
      <h1 className="text-5xl font-extrabold  flex justify-center items-center h-full">
        WORK <br />
        EXPERIENCE.
      </h1>
      <WorkExperience />
      <h1 className="text-5xl font-extrabold flex justify-center items-center h-full">
        CERTIFICATIONS
      </h1>
      <Certifications />
      <footer className="w-full h-full flex flex-col relative items-center justify-center before:bg-white before:w-32 before:h-1 before:rounded-sm before:right-0 before:absolute before:top-52  after:bg-white after:w-32 after:h-1 after:rounded-sm after:left-0 after:absolute after:bottom-52">
        <h1 className="font-black text-6xl">THAT'S ALL</h1>
      </footer>
    </article>
  );
}
