import React from 'react'

const Services = () => {
    return (
        <section className='w-full font-nb items-center  flex flex-col justify-between gap-2 '>
            <div>
                <span>Agency & Venture </span>
                <span className='bg-black text-heading-white p-1 px-2 rounded-xl text-center text-[13px]'>Models</span>
            </div>
            <div className='max-sm:text-[10vw] max-sm:leading-[10vw] text-[5vw] text-center leading-[5vw]'>
                <h2 className='flex flex-col '>
                    <p className='z-10'> Explore our services</p>
                   
                    <div id='animate-box-x' className='bg-black w-[90%] h-[3px] ml-auto mr-auto z-0 '>
                            <div className='w-[20%] h-[100%] bg-heading-white'/>
                    </div>
                </h2>

                <h2>& engagement models</h2>
            </div>
        </section>
    )
}

export default Services