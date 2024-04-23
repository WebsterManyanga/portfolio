"use client";

import useEmblaCarousel from "embla-carousel-react";

const Certifications = () => {
  const [emblaRef] = useEmblaCarousel();
  const certifcation = (
    <div className="embla__slide  h-full  lg:flex flex-col items-center px-4  pt-20 ">
      <div className="block w-full lg:w-2/5 lg:h-2/3 h-1/2 bg-gray-400"></div>
      <div className="text-6xl font-extrabold lg:hidden">
        <h2 className="text-end">01</h2>
        <h2 >Algorithms & Data Structures</h2>
      </div>
    </div>
  );

  return (
    <section className="embla relative h-full" ref={emblaRef}>
      <div className="embla__container h-full ">
        {certifcation}
        {certifcation}
        {certifcation}
        {certifcation}
      </div>
      <h1 className="text-5xl lg:absolute   lg:w-full bottom-36 lg:h-fit font-extrabold lg:text-6xl  justify-center items-center h-full lg:flex hidden">
        CERTIFICATIONS
      </h1>
    </section>
  );
};

export default Certifications;
