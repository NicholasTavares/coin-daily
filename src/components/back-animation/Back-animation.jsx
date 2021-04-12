import React from 'react'
import video from '../../sass/animations/video.mp4'

const Back = () => {

    return (
        <div className='bg-video'>
            <video className='bg-video__content' autoPlay muted loop>
                <source src={video} type="video/mp4" />
                Your browser is not supported!
            </video>
        </div>
    )
}

export default Back