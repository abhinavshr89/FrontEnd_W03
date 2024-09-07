import React from 'react';
import gsap from 'gsap';
import { bgVideo } from '../assets';
import { Nav } from '../components';
import { useGSAP } from '@gsap/react';

const Hero = () => {
  useGSAP(() => {
    gsap.fromTo(
      ".hero-text span",
      {
        y: 100,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.3,
        stagger: 0.2,
        ease: "sine.out",
        
        
      }
    );
  }, []);

  return (
    <section className='w-full relative'>
      <video autoPlay muted loop className='w-full h-[100vh] object-cover z-0'>
        <source src={bgVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="w-full h-full absolute top-0 left-0 z-10">
        <Nav />
        <div className='mt-[10%] max-sm:hidden'>
          <h1 className='text-[27vw] font-rejoice text-center text-heading-white hero-text select-none'>
            <span className='mod-span'>r</span>
            <span className='mod-span'>e</span>
            <span className='mod-span'>j</span>
            <span className='mod-span'>o</span>
            <span className='mod-span'>u</span>
            <span className='mod-span'>i</span>
            <span className='mod-span'>c</span>
            <span className='mod-span'>e</span>
          </h1>
        </div>
      </div>
    </section>
  );
}

export default Hero;
