import React, { useRef } from 'react';
import { gsap } from 'gsap';

const VideoComponents = ({ videoSource, videoBg }) => {
  const overlayRef = useRef(null);

  const handleMouseEnter = () => {
    gsap.to(overlayRef.current, {
      opacity: 0,
      duration: 0.5,
    });
  };

  const handleMouseLeave = () => {
    gsap.to(overlayRef.current, {
      opacity: 1,
      duration: 0.5,
    });
  };

  return (
    <div className='relative w-full h-full'>
      <video
        autoPlay
        muted
        loop
        src={videoSource}
        className='w-full h-full object-cover'
      />
      
      <div
        ref={overlayRef}
        className={`absolute inset-0 bg-red-500 z-10`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <img src={videoBg} className='w-full h-full object-cover' alt="" />
      </div>
    </div>
  );
};

export default VideoComponents;
