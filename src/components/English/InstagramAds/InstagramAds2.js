import React from "react"

import ProjectStartImg from "../../../assets/images/ppc/instagramadexample.png"

import Shape2 from "../../../assets/images/shape/shape2.png"
import Shape3 from "../../../assets/images/shape/shape3.png"
import Shape5 from "../../../assets/images/shape/shape5.png"
import Shape6 from "../../../assets/images/shape/shape6.png"
import Shape7 from "../../../assets/images/shape/shape7.png"
import Shape13 from "../../../assets/images/shape/shape13.png"

const InstagramAds2 = () => {
  return (
    <>
      <div className="project-start-area ptb-100">
        <div className="container">
          <div className="row align-items-center">

            <div className="col-lg-6 col-md-12">
              <div
                className="project-start-content"
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-delay="400"
              >            
                <h2>Creativity & Ad Format</h2>

                <p>
                  {" "}
                  Images: For Instagram ads with a single image, it can be displayed in square, landscape, or vertical orientations.</p>

                  <p><b>Images:</b> For Instagram ads with a single image, it can be displayed in square, landscape, or vertical orientations.</p>
                  <p><b>Videos:</b> When incorporating a video into your Instagram advertisement, it can be showcased in either a square or landscape format, but not in Instagram Stories.</p>
                  <p><b>Carousel:</b> Selecting the carousel layout for your ad allows for square or vertical presentations on both Feed and Stories.</p>
                  <p><b>Instagram Stories:</b> Even though a fullscreen vertical format is advised for Stories ads, this layout can accommodate the media dimensions used in other sections. Therefore, Stories ads can fit photo and video dimensions from Feed placements, which includes photos or videos up to 120 seconds with an aspect ratio ranging from 9:16, 16:9, to 4:5.</p>
                  <p><b>Reels:</b> You can only use a fullscreen vertical asset for Reels ads.</p>
                  <p><b>Instagram Shop:</b> Ads here can be formatted as single-image, carousel, or collection. Despite supporting multiple ratios, they will always display as 1:1 square images and will direct users to your website’s product details upon tapping.</p>



              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div
                className="project-start-image text-right"
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-delay="200"
              >
                <img src={ProjectStartImg} alt="Project" />
              </div>
            </div>
          </div>
        </div>

        <div className="shape2">
          <img src={Shape2} alt="Shape" />
        </div>
        <div className="shape3">
          <img src={Shape3} alt="Shape" />
        </div>
        <div className="shape5">
          <img src={Shape5} alt="Shape" />
        </div>
        <div className="shape6">
          <img src={Shape6} alt="Shape" />
        </div>
        <div className="shape7">
          <img src={Shape7} alt="Shape" />
        </div>
        <div className="shape13">
          <img src={Shape13} alt="Shape" />
        </div>
      </div>
    </>
  )
}

export default InstagramAds2
