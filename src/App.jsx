import React, { useEffect } from 'react';
import Hero from './sections/Hero';
import gsap from 'gsap';
import BrandsPage from './sections/BrandsPage';

const App = () => {
  useEffect(() => {
    const cursor = document.getElementById("cursor");
    const heroSection = document.getElementById("hero-section"); // Target only the Hero section
  
    const moveCursor = (dets) => {
      gsap.to(cursor, {
        x: dets.clientX,
        y: dets.clientY,
        ease: "back.out",
        duration: 0.2, // Smooth movement with a short duration
      });
    };
  
    const showCursor = () => {
      gsap.to(cursor, {
        opacity: 1,
        scale: 1,
      });
    };
  
    const hideCursor = () => {
      gsap.to(cursor, {
        opacity: 0,
        scale: 0,
      });
    };
  
    // Add the event listeners to the Hero section
    heroSection.addEventListener("mousemove", moveCursor);
    heroSection.addEventListener("mouseenter", showCursor);
    heroSection.addEventListener("mouseleave", hideCursor);
  
    // Cleanup the event listeners when component unmounts
    return () => {
      heroSection.removeEventListener("mousemove", moveCursor);
      heroSection.removeEventListener("mouseenter", showCursor);
      heroSection.removeEventListener("mouseleave", hideCursor); // Use `mouseleave` instead of `mouseout`
    };
  }, []);

  return (
    <>
      <main className='main w-full h-full relative overflow-hidden'>
        <div
          id='cursor'
          className='max-sm:hidden h-[7vw] w-[7vw] rounded-full bg-black text-white bg-opacity-50 absolute z-idx flex items-center justify-center
         text-[20px] font-nb'
        >
          play reel
        </div>

        {/* Apply cursor feature to this section only */}
        <section id='hero-section' className='overflow-hidden'>
          <Hero />
        </section>

        {/* Other sections without cursor feature */}
        <section className='w-full h-[100vh] overflow-hidden bg-heading-white'>
          <BrandsPage/>
        </section>
      </main>
    </>
  );
};

export default App;
