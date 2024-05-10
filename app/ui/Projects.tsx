"use client";
import useEmblaCarousel from "embla-carousel-react";
import { useRef } from "react";
import VideoTest from "./VideoTest";
import { projectsLibrary } from "../projectsLibrary";

const Projects = () => {
  // Carousel of projects
  const [emblaRef] = useEmblaCarousel();
  const vidRef = useRef<HTMLVideoElement>(null);

  const projects = projectsLibrary.map((project, i) => (
    <div
      className="embla__slide  h-full flex lg:gap-10 px-4   pt-20 relative "
      id="projects"
    >
      <div className="block w-fit  h-fit border-white border-4 ">
        <VideoTest project={project} />
      </div>

      <div className="hidden lg:block absolute bottom-6 right-10 text-6xl font-extrabold lg:left-60 lg:bottom-16 lg:right-auto">
      <h2 className="text-end">{`0${i+1}`}</h2>
      <h2>{project.name}</h2>
    </div> 
      <p className="hidden lg:block w-[450px]">
        {project.description}
        <span className="block mt-20">Utilized: {project.technologies.join(", ")}</span>

      </p>

    </div>
  ));


  return (
    <section
      className="embla snap-start lg:w-[80vw] lg:mx-auto h-full"
      ref={emblaRef}
    >
      <div className="embla__container h-full">
        {projects}
      </div>
    </section>
  );
};

export default Projects;
