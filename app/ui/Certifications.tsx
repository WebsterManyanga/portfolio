"use client";

import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import { certifications } from "../certificationsLibrary";

const Certifications = () => {
  const [emblaRef] = useEmblaCarousel();
  const certificationsLibrary = certifications.map((certification, i) => {
    return (
      <>
        <div className="embla__slide  h-full  lg:hidden flex-col items-center px-4  pt-20 ">
          <div className="block w-full lg:w-2/5 lg:h-2/3 h-1/2">
            <Image
              alt={certification.title}
              src={certification.src}
              width={500}
              height={600}
              className="w-full h-auto"
            />
          </div>
          <div className="text-3xl font-extrabold lg:hidden">
            <h2 className="text-start">{`0${i + 1}`}</h2>
            <h2>{certification.title}</h2>
          </div>
        </div>
        <div>
          <div className="block">
            <Image
              alt={certification.title}
              src={certification.src}
              width={500}
              height={600}
              className="w-full h-auto"
            />
          </div>
        </div>
      </>
    );
  });

  return (
    <section
      className="embla snap-start relative h-full"
      id="certifications"
      ref={emblaRef}
    >
      <h1 className="text-5xl   lg:w-full bottom-36 lg:h-fit font-extrabold lg:text-6xl my-10  ml-80  items-center h-full lg:flex hidden">
        CERTIFICATIONS
      </h1>
      <div className="embla__container h-full lg:hidden ">
        {certificationsLibrary}
      </div>
      <div className="hidden lg:grid grid-cols-4 w-2/3 gap-10 mx-auto ">
        {certificationsLibrary}
      </div>
    </section>
  );
};

export default Certifications;
