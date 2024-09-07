import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

const BrandsPage = () => {
    
    useGSAP(() => {
        gsap.registerPlugin(ScrollTrigger);

        
        gsap.fromTo(
            '.brand-text span',
            {
                y: 100, 
                opacity: 0, 
            },
            {
                y: 0, 
                opacity: 1,
                duration: 0.8,
                stagger: 0.3, 
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: '.brand-text', 
                    start: 'top 100%', 
                    end: 'bottom 50%', 
                    scrub: false, 
                   
                    toggleActions: 'play pause resume reset'
                },
            }
        );


        gsap.fromTo("#brand-line", 
            {
                width: "50%"
            }, 
            {
                width: "100%",
                duration: 1, 
              
                scrollTrigger: {
                    trigger: "#brand-line",
                   
                    start:"top 100%"
                }
            }
        );
        
    });

    return (
        <section className='padding-x'>
            <div className='padding-t'>
                <div className='flex justify-between max-sm:text-[4vw] text-[2vw] font-nb'>
                    <p>Tomorrow Brand's Today™</p>
                    <p>Paris/San Diego</p>
                </div>
                <div id='brand-line' className='bg-black h-[1px] w-full mt-3'></div>
            </div>
            {/* for larger screens */}
            <div className='max-sm:hidden text-[30px] md:text-[4vw] leading-[40px] md:leading-[4vw] font-nb flex flex-col justify-center w-full mt-[20px] brand-text select-none'>
                <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;We are a venture firm and digital agency
                    Our</span> 
                <span>mission is to transform founders' visions into</span>
                <span>remarkable brands. Choose traditional</span> 
                <span>compensation or an equity offset through our</span>
                <span>Venture Model— your vision, your decision.</span>
            </div>
            {/* for small screens */}
            <div className='sm:hidden text-[7vw] md:text-[4vw] leading-[8vw] md:leading-[4vw] font-nb flex flex-col justify-center w-full mt-[20px] brand-text select-none '>
                <span>&nbsp;&nbsp;&nbsp;&nbsp;We are a venture firm</span>
                <span>and digital agency. Our</span>
                <span>mission it to transform</span>
                <span>founders' vision into</span>
                <span>remarkable brands.Choose</span>
                <span>traditional compensation or</span>
                <span>an equity offset through our</span>
                <span>Venture Model - your vision,</span>
                <span>your decision</span>
            </div>
        </section>
    );
};

export default BrandsPage;
