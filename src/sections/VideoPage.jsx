import React from 'react'
import { VideoComponents } from '../components'
import { video1,video2,video3,videoBg_1,videoBg_2,vidoeBg_3 } from '../assets'

const VideoPage = () => {
    return (
        <div className=''>
        <div className='heading-text font-nb flex justify-between padding-x'>
            <p>Transforming visions into Brands</p>
            <p>
                
                See the Work
            </p>
        </div>
        <section className='grid grid-cols-3 max-sm:grid-cols-1  gap-3 padding-x padding-b pt-2'>
            <div>
                <VideoComponents videoSource={video1} videoBg={videoBg_1}  />
            </div>

            <div>
                <VideoComponents videoSource={video2} videoBg={videoBg_2} />
            </div>

            <div>
                <VideoComponents videoSource={video3} videoBg={vidoeBg_3} />
            </div>

        </section>
        </div>
    )
}

export default VideoPage