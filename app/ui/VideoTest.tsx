'use client';

import { useRef } from "react";

const VideoTest = () => {

  const vidRef = useRef<HTMLVideoElement>(null);
  function handleIt() {
    console.log('clicked');
    if (vidRef.current) {
      vidRef.current.play();
    }
  }
  return (
    <div className=" snap-start">
      <h1>Video Test</h1>
      <video width="320" height="240" controls ref={vidRef}>
        <source src="/blackeye.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <button className=" bg-red-400 text-6xl w-full" onClick={() => handleIt()}>
        Click Me!
      </button>
    </div>
  );
}

export default VideoTest;