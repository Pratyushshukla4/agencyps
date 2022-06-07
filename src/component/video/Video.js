import React from 'react'
import "./Video.css"


const Video = () => {
  return (
    <div className='vedio'>

        <video autoPlay={true} loop controls className='vdo' src="https://player.vimeo.com/external/449759244.sd.mp4?s=d5f3da46ddc17aa69a7de84f1e420610ebd2a391&profile_id=139&oauth2_token_id=57447761"></video>
      
    </div>
  )
}

export default Video
