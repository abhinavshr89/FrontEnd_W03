import React from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const Nav = () => {
  useGSAP(() => {
    gsap.fromTo(".animate-nav", {
      x: 100,
      opacity: 0,
    }, {
      x: 0,
      opacity: 1,
      duration: 0.5,
      stagger: 0.3,
    });
  });

  return (
    <>
      <nav className='text-white text-[23px] max-sm:text-[20px] font-rejoice flex justify-between items-center padding-x pt-8 max-sm:pt-5 '>
        <h3 className='x relative gap-3 '>
          <span className='animate-nav mod-span'>The</span>
          <span>&nbsp;</span>
          <span className='animate-nav mod-span'>Venture</span>
          <span>&nbsp;</span>
          <span className='animate-nav mod-span'>Agency.</span>
        </h3>

        <div className='max-sm:border-[3px] border-white-400 py-2 px-[20px] rounded-3xl max-sm:text-[15px]'>
          <h3>Menu</h3>
        </div>
      </nav>
    </>
  );
}

export default Nav;
