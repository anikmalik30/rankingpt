import React, { useState } from "react"
import ModalVideo from "react-modal-video"

import VideoThumbImg from "../../../assets/images/home-8-9-10/video/video-2.jpg"

const IntroVideo = () => {
  const [isOpen, setOpen] = useState(false)
  return (
    <>
      <div className="mibix-video-area mb-minus-250px">
        <div className="container">
          <div className="mibix-video-content">
            <img src={VideoThumbImg} alt="Video Thumb" />

            <div onClick={() => setOpen(true)} className="video-btn">
              <i className="flaticon-play-button"></i>
            </div>
          </div>
        </div>
      </div>

      {/* If you want to change the video need to update videoID */}
      <ModalVideo
        channel="youtube"
        autoplay
        isOpen={isOpen}
        videoId="bk7McNUjWgw"
        onClose={() => setOpen(false)}
      />
    </>
  )
}

export default IntroVideo
