"use client";

import { Pause, Play } from "@phosphor-icons/react";
import { useRef, useState } from "react";

const VideoTest = ({ project }: propType) => {
  const vidRef = useRef<HTMLVideoElement>(null);
  const [paused, setPaused] = useState(true);
  function handleIt() {
    if (vidRef.current) {
      if (vidRef.current.paused) {
        vidRef.current.play();
        setPaused(false);
      } else {
        vidRef.current.pause();
        setPaused(true);
      }
    }
  }
  return (
    <div className="relative h-full">
      <video
        width="320"
        height="240"
        autoPlay={false}
        controls={false}
        playsInline
        ref={vidRef}
        preload="metadata"
        poster={project.thumbnail}
        className="h-full w-full object-cover"
      >
        <source src={project.src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="w-full absolute top-0 h-full  flex justify-center items-center ">
        <button onClick={() => handleIt()} className=" w-full h-full  *:hover:opacity-100 " >
          <div className={` text-6xl select-none p-2  rounded-full  border border-[rgb(49,48,53)] mx-auto w-28 h-28 shadow-lg shadow-black bg-black bg-opacity-10 ${!paused && "animate-fadeOut opacity-0"} transition-opacity delay-200 duration-200 
          `}>
            <Play
              size={90}
              weight="thin"
              className={`${!paused && "hidden"} `}
            />
            <Pause
              size={90}
              weight="thin"
              className={`${paused && "hidden"}`}
            />
          </div>
        </button>
      </div>
    </div>
  );
};

export default VideoTest;

interface propType {
  project: {
    name: string;
    github: string;
    website: string;
    src: string;
    thumbnail: string;
  };
}
