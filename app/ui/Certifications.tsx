"use client";

import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import { certifications } from "../certificationsLibrary";

const Certifications = () => {
  const [emblaRef] = useEmblaCarousel();
  const certificationsLibrary = certifications.map((certification, i) => {
    return (
      <div className="embla__slide  h-full  lg:flex flex-col items-center px-4  pt-20 ">
        <div className="block w-full lg:w-2/5 lg:h-2/3 h-1/2">
          <Image alt={certification.title} src={certification.src} width={500} height={600} className="w-full h-auto" />
        </div>
        <div className="text-3xl font-extrabold lg:hidden">
          <h2 className="text-start">{`0${i+1}`}</h2>
          <h2 >{certification.title}</h2>
        </div>
      </div>
    );
  });


  return (
    <section className="embla snap-start relative h-full" id="certifications" ref={emblaRef}>
      <div className="embla__container h-full ">
        {certificationsLibrary}
      </div>
      <h1 className="text-5xl lg:absolute   lg:w-full bottom-36 lg:h-fit font-extrabold lg:text-6xl  justify-center items-center h-full lg:flex hidden">
        CERTIFICATIONS
      </h1>
    </section>
  );
};

export default Certifications;
