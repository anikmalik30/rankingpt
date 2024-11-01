import React, { useState } from "react"
import { Link } from "gatsby"

import BannerImg from "../../../assets/images/ppc/instagramads1.png"

import Shape1 from "../../../assets/images/shape/shape1.png"
import Shape2 from "../../../assets/images/shape/shape2.png"
import Shape3 from "../../../assets/images/shape/shape3.png"
import Shape4 from "../../../assets/images/shape/shape4.png"
import Shape5 from "../../../assets/images/shape/shape5.png"
import Shape6 from "../../../assets/images/shape/shape6.png"
import Shape7 from "../../../assets/images/shape/shape7.png"
import Shape8 from "../../../assets/images/shape/shape8.png"

const MainBanner = () => {
  const [isOpen, setOpen] = useState(false)

  return (
    <>
      <div className="main-banner-area overflow-hidden">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-6 col-md-12">
              <div className="main-banner-content">
                <span
                  className="sub-title"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                  data-aos-delay="100"
                >
                  Instagram Marketing Agency
                </span>

                <h1
                  data-aos="fade-up"
                  data-aos-duration="1200"
                  data-aos-delay="200"
                >
                  Instagram Ads
                </h1>

                <p
                  data-aos="fade-up"
                  data-aos-duration="1200"
                  data-aos-delay="300"
                >
                  In recent years, Instagram has seen huge growth, becoming the
                  second most popular social network after Facebook. It allows
                  you to generate traffic to your Website thanks to creative and
                  strong formats. Instagram ads offer the perfect combination of
                  today’s top two digital trends: mobile and video. Facebook
                  Business Manager simplifies your management.
                </p>

                <div
                  className="btn-box"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                  data-aos-delay="400"
                >
                  <div className="d-flex align-items-center">
                    <Link to="/contact" className="default-btn">
                      Lets Make Some Ads!
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div
                className="dev-banner-image"
                data-aos="fade-left"
                data-aos-duration="1200"
                data-aos-delay="600"
              >
                <img src={BannerImg} alt="Shape" />
              </div>
            </div>
          </div>
        </div>

        <div className="shape1">
          <img src={Shape1} alt="Shape" />
        </div>
        <div className="shape2">
          <img src={Shape2} alt="Shape" />
        </div>
        <div className="shape3">
          <img src={Shape3} alt="Shape" />
        </div>
        <div className="shape4">
          <img src={Shape4} alt="Shape" />
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
        <div className="shape8">
          <img src={Shape8} alt="Shape" />
        </div>
      </div>
    </>
  )
}

export default MainBanner
