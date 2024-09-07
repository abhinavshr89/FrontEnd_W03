import React from 'react'

const Philosophy = () => {
  return (
    <div>
        <section className='padding-x'>
            <div className='padding-t'>
                <div className='flex flex-col justify-between heading-text font-nb'>
                    <p>We operate on a simple Philosophy:</p>
                    <p>Quality over quantity.</p>
                </div>
                <div id='brand-line' className='bg-black h-[1px] w-full mt-3'></div>
            </div>
            {/* for larger screens */}
            <div className=' text-[30px] md:text-[4vw] leading-[40px] md:leading-[4vw] font-nb flex flex-col justify-center w-full mt-[20px]  select-none max-md:hidden '>
                <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;We partner up to 5 clients each year.</span> 
                <span>This allows intense focus on the transformation</span>
                <span>and launch of your brand by our best team,which</span> 
                <span>is the only team we have. We specialize in working</span>
                <span>with startups that are revolutionizing &nbsp;&nbsp;&nbsp;&nbsp;</span>
                <span>industries.</span>
            </div>
            {/* for small screens */}
            <div className='md:hidden text-[7vw] md:text-[4vw] leading-[8vw] md:leading-[4vw] font-nb flex flex-col justify-center w-full mt-[20px]  '>
                <span>&nbsp;&nbsp;&nbsp;&nbsp;We partner with up to 5
                clients each year . This allows
                intense focus on the
                transformation and launch
                of your brand by our very
                best team , which is the only
                team weh have. We specialize
                in working with startups that
                are revolutionizing their
                industries.</span>
            </div>
        </section>
    </div>
  )
}

export default Philosophy