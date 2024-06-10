"use client";

import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import { certifications } from "../certificationsLibrary";
import { FaChevronCircleLeft, FaChevronCircleRight } from "react-icons/fa";
import { useCallback, useRef } from "react";
import { projectsLibrary } from "../projectsLibrary";
import VideoTest from "./VideoTest";

const Certifications = () => {
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

  const projects = certifications.map((certification, i) => (
    <div className="embla__slide h-full w-screen">
      <div className="flex lg:gap-10 px-4 justify-center  pt-20 " id="projects">
        <div className="block w-fit lg:ml-10  h-fit border-white border-4 ">
          <Image src={certification.src} alt={certification.title} width={200} height={200}/>
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

export default Certifications;
