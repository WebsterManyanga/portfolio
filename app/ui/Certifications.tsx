"use client";

import useEmblaCarousel from "embla-carousel-react";

const Certifications = () => {
  const [emblaRef] = useEmblaCarousel();
  const certifcation = (
    <div className="embla__slide  h-full  justify-between px-4  pt-20 ">
      <div className="block w-full h-1/2 bg-gray-400"></div>
      <div className="text-6xl font-extrabold">
        <h2 className="text-end">01</h2>
        <h2>Algorithms & Data Structures</h2>
      </div>
    </div>
  );

  return (
    <section className="embla  h-full" ref={emblaRef}>
      <div className="embla__container h-full">
        {certifcation}
        {certifcation}
        {certifcation}
        {certifcation}
      </div>
    </section>
  );
};

export default Certifications;
