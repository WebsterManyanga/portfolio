"use client";

import useEmblaCarousel from "embla-carousel-react";

const Projects = () => {
  // Carousel of projects
  const [emblaRef] = useEmblaCarousel();

  const project = (
    <div className="embla__slide  h-full flex justify-between px-4  pt-20 relative">
    <div className="block w-full h-3/4 bg-gray-400"></div>
    <div className="absolute bottom-6 right-10 text-6xl font-extrabold">
      <h2 className="text-end">01</h2>
      <h2>PROJECT</h2>
    </div>
  </div>
  );

  return (
    <section className="embla  h-full" ref={emblaRef}>
      <div className="embla__container h-full">
        {project}
        {project}
        {project}
        {project}
        {project}
      </div>
    </section>
  );
};

export default Projects;
