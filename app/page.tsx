import Certifications from "./ui/Certifications";
import Contents from "./ui/Contents";
import Projects from "./ui/Projects";
import WorkExperience from "./ui/WorkExperience";
import Header from "./ui/Header";
import Nav from "./ui/Nav";
import Contacts from "./ui/Contacts";
import VideoTest from "./ui/VideoTest";


export default function Home() {  
  return (
    <article className="h-[90vh] overflow-y-scroll scroll-smooth snap-y snap-mandatory lg:snap-none ">
      <Nav/>
      <Header/>

      <Contents />
      <h1 className="text-5xl snap-start font-extrabold lg:text-8xl  flex justify-center items-center h-full lg:hidden">
        PROJECTS.
      </h1>
      <Projects />
      <h1 className="text-5xl snap-start font-extrabold lg:text-8xl  flex justify-center items-center h-full lg:hidden">
        WORK <br />
        EXPERIENCE.
      </h1>
      <WorkExperience />
      <h1 className="text-4xl snap-start font-extrabold lg:text-8xl flex justify-center items-center h-full lg:hidden">
        CERTIFICATIONS
      </h1>
      <Certifications />
      <footer id="footer" className="w-full snap-start h-full flex flex-col relative items-center justify-center ">
        {/* <h1 className="font-black text-6xl text-center">THATS ALL</h1> */}
        <p className=" text-gray-300">Thanks for scrolling</p>
        <Contacts />
      </footer>
    </article>
  );
}
