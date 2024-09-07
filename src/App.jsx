import React, { useEffect, useRef } from 'react';
import LocomotiveScroll from 'locomotive-scroll';
import 'locomotive-scroll/src/locomotive-scroll.scss'; // Import Locomotive Scroll styles
import Hero from './sections/Hero';
import Philosophy from './sections/Philosophy';
import BrandsPage from './sections/BrandsPage';
import VideoPage from './sections/VideoPage';
import Services from './sections/Services';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gsap from 'gsap';

const App = () => {
  const scrollContainerRef = useRef(null);
  const locomotiveScrollInstance = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Initialize Locomotive Scroll using ref
    locomotiveScrollInstance.current = new LocomotiveScroll({
      el: scrollContainerRef.current, // Use the ref here
      smooth: true,
    });

    // Sync Locomotive Scroll with ScrollTrigger
    locomotiveScrollInstance.current.on('scroll', ScrollTrigger.update);

    ScrollTrigger.scrollerProxy(scrollContainerRef.current, {
      scrollTop(value) {
        return arguments.length
          ? locomotiveScrollInstance.current.scrollTo(value, 0, 0)
          : locomotiveScrollInstance.current.scroll.instance.scroll.y;
      },
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight,
        };
      },
      pinType: scrollContainerRef.current.style.transform ? 'transform' : 'fixed',
    });

    // Refresh ScrollTrigger after Locomotive Scroll initialization
    ScrollTrigger.addEventListener('refresh', () =>
      locomotiveScrollInstance.current.update()
    );
    ScrollTrigger.refresh();

    // Cleanup on unmount
    return () => {
      if (locomotiveScrollInstance.current) {
        locomotiveScrollInstance.current.destroy();
      }
      ScrollTrigger.removeEventListener('refresh', locomotiveScrollInstance.current.update);
    };
  }, []);

  // Custom cursor functionality
  useEffect(() => {
    const cursor = document.getElementById('cursor');
    const heroSection = document.getElementById('hero-section');

    const moveCursor = (dets) => {
      gsap.to(cursor, {
        x: dets.clientX,
        y: dets.clientY,
        ease: 'power3.out',
        duration: 0.2,
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

    heroSection.addEventListener('mousemove', moveCursor);
    heroSection.addEventListener('mouseenter', showCursor);
    heroSection.addEventListener('mouseleave', hideCursor);

    return () => {
      heroSection.removeEventListener('mousemove', moveCursor);
      heroSection.removeEventListener('mouseenter', showCursor);
      heroSection.removeEventListener('mouseleave', hideCursor);
    };
  }, []);

  return (
    <>
      <main
        id="main"
        className="w-full relative overflow-hidden select-none"
        ref={scrollContainerRef} // Ref here for Locomotive Scroll
        data-scroll-container // Locomotive Scroll needs this attribute
      >
        <div
          id="cursor"
          className="max-sm:hidden h-[7vw] w-[7vw] rounded-full bg-black text-white bg-opacity-50 absolute z-idx flex items-center justify-center text-[20px] font-nb"
        >
          play reel
        </div>

        <section id="hero-section" className="overflow-hidden" data-scroll-section>
          <Hero />
        </section>

        <section className="w-full overflow-hidden bg-heading-white" data-scroll-section>
          <BrandsPage />
        </section>

        <section className="w-full flex-center h-[100vh] overflow-hidden bg-heading-white" data-scroll-section>
          <Services />
        </section>

        <section className="w-full bg-heading-white" data-scroll-section>
          <VideoPage />
        </section>

        <section className="w-full h-[100vh] bg-heading-white" data-scroll-section>
          <Philosophy />
        </section>
      </main>
    </>
  );
};

export default App;
