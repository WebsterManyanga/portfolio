"use client";
import useEmblaCarousel from "embla-carousel-react";
import { useRef } from "react";

const Projects = () => {
  // Carousel of projects
  const [emblaRef] = useEmblaCarousel();
  const myRef = useRef<HTMLVideoElement>(null);
  
  function handleClick() {
    console.log('clicked');
    myRef.current?.play();
  }

  const project = (
    <div className="embla__slide  h-full flex lg:gap-10 px-4   pt-20 relative " id="projects">
      <div className="block w-fit lg:w-1/4 h-fit border-white border-4 ">
        <video width="320" height="240"  muted  preload="auto" controls ref={myRef} >
          <source src="/blackeye.MP4" type="video/mp4"/>
          Your browser does not support the video tag.
        </video>
      </div>
      {/* <div className="absolute bottom-6 right-10 text-6xl font-extrabold lg:left-60 lg:bottom-16 lg:right-auto">
        <h2 className="text-end">01</h2>
        <h2>PROJECT</h2>
      </div> */}
      <p className="hidden lg:block w-1/2">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium
        maiores nihil iusto ipsum ad quasi repellendus odio cumque dignissimos
        nesciunt perspiciatis dolores natus, sequi illum? Quidem saepe fugit
        nihil non laboriosam! Molestias libero autem sequi optio aperiam debitis
        nulla totam, maiores architecto sapiente sit sunt quod amet harum
        obcaecati assumenda, repellendus magni aut voluptatibus quasi veniam
        fuga quae, aspernatur unde. Recusandae inventore, repellat non deserunt
        ducimus explicabo nesciunt eligendi natus eaque asperiores placeat autem
        debitis quisquam laborum quibusdam soluta blanditiis doloremque
        consequuntur alias voluptatum nisi ex aut! Ratione vero autem provident
        illo aliquam quia, repudiandae velit fugiat necessitatibus enim est?
      </p>
    </div>
  );

  return (
    <section className="embla snap-start lg:w-[80vw] lg:mx-auto h-full" ref={emblaRef}>
      <div className="embla__container h-full">
        <button className="block w-full bg-red-400" onClick={handleClick}>Click Me!</button>
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
