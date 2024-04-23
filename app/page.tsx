import Certifications from "./ui/Certifications";
import Contents from "./ui/Contents";
import Projects from "./ui/Projects";
import WorkExperience from "./ui/WorkExperience";
import Header from "./ui/Header";
import Nav from "./ui/Nav";

export default function Home() {
  return (
    <article className="h-[90vh] overflow-scroll">
      <Nav/>
      <Header/>
      <Contents />
      <h1 className="text-5xl font-extrabold lg:text-8xl  flex justify-center items-center h-full lg:hidden">
        PROJECTS.
      </h1>
      <Projects />
      <h1 className="text-5xl font-extrabold lg:text-8xl  flex justify-center items-center h-full lg:hidden">
        WORK <br />
        EXPERIENCE.
      </h1>
      <WorkExperience />
      <h1 className="text-5xl font-extrabold lg:text-8xl flex justify-center items-center h-full lg:hidden">
        CERTIFICATIONS
      </h1>
      <Certifications />
      <footer className="w-full h-full flex flex-col relative items-center justify-center before:bg-white before:w-32 before:h-1 before:rounded-sm before:right-0 before:absolute before:top-52  after:bg-white after:w-32 after:h-1 after:rounded-sm after:left-0 after:absolute after:bottom-52">
        <h1 className="font-black text-6xl">THAT'S ALL</h1>
      </footer>
    </article>
  );
}
