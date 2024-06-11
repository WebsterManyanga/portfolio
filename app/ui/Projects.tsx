"use client";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useRef } from "react";
import VideoTest from "./VideoTest";
import { projectsLibrary } from "../projectsLibrary";
import { FaChevronCircleLeft, FaChevronCircleRight } from "react-icons/fa";

const Projects = () => {
  // Carousel of projects
  const [emblaRef, emblaApi] = useEmblaCarousel();

  const scrollPrev = useCallback(() => {
    console.log("clicked");
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);
  const vidRef = useRef<HTMLVideoElement>(null);

  const projects = projectsLibrary.map((project, i) => (
    <div className="embla__slide h-full w-screen" key={i}>
      <div className="flex lg:gap-10 px-4 justify-center  pt-20 " id="projects">
        <div className="block w-fit lg:ml-10  h-fit border-white border-4 ">
          <VideoTest project={project} />
        </div>

        <div className="hidden lg:block w-[450px]">
          {project.description}
          <span className="block mt-20">
            Utilized: {project.technologies.join(", ")}
          </span>
          <div className="hidden lg:block text-5xl  font-thin bottom-6 right-10  lg:left-60 lg:bottom-10 lg:right-auto">
            <h2>{`0${i + 1}`}</h2>
            <h2>{project.name}</h2>
          </div>
        </div>
      </div>
    </div>
  ));

  return (
    <section className="embla snap-start lg:w-[80vw] lg:mx-auto relative">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container h-full">{projects}</div>
      </div>
      <button className="embla__prev text-4xl px-2 left-0 mt-10  py-28" onClick={scrollPrev}>
        <FaChevronCircleLeft />{" "}
      </button>
      <button className="embla__next text-4xl px-2 right-0 mt-10 py-28" onClick={scrollNext}>
        <FaChevronCircleRight />
      </button>
    </section>
  );
};

export default Projects;
