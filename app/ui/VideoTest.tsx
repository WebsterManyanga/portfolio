"use client";

import { Pause, Play } from "@phosphor-icons/react";
import { useRef, useState } from "react";

const VideoTest = ({src}: {src: string}) => {
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
    <div className="relative">
      <video
        width="320"
        height="240"
        autoPlay={false}
        controls={false}
        playsInline
        ref={vidRef}
      >
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="w-full absolute top-0 h-full  flex justify-center items-center">
        <button
          className=" text-6xl p-2  rounded-full  border border-[rgb(49,48,53)] shadow-lg shadow-black bg-black bg-opacity-10 "
          onClick={() => handleIt()}
        >
          <Play size={90} weight="thin" className={`${!paused && "hidden"} `} />
          <Pause size={90} weight="thin" className={`${paused && "hidden"} `} />
        </button>
      </div>
    </div>
  );
};

export default VideoTest;
