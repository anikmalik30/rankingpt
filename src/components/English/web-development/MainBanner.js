import React from "react"
import { Link } from "gatsby"

import BannerImg from "../../../assets/images/home-8-9-10/banner/banner-2.png"

const MainBanner = () => {
  return (
    <>
      <div className="new-main-banner-area banner-with-gradient-color">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="new-main-banner-content">

                <h1
                  data-aos="fade-in"
                  data-aos-duration="1200"
                  data-aos-delay="200"
                >
                  Web Development Services​
                  
                </h1>

                <p
                  data-aos="fade-in"
                  data-aos-duration="1200"
                  data-aos-delay="300"
                >
                  We design and build industry-leading web-based products that bring value to
                   your customers, delivered with compelling UX.


                </p>

                <div
                  className="btn-box"
                  data-aos="fade-in"
                  data-aos-duration="1200"
                  data-aos-delay="400"
                >
                  <Link to="/contact" className="default-btn-with-radius">
                    Lets Talk ! <i className="flaticon-next-button"></i>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div className="new-main-banner-image">
                <img src={BannerImg} alt="Banner" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default MainBanner
