import React from "react"

import BannerImg from "../../../assets/images/banner-img5.png"

import Shape2 from "../../../assets/images/shape/shape2.png"
import Shape3 from "../../../assets/images/shape/shape3.png"
import Shape5 from "../../../assets/images/shape/shape5.png"
import Shape6 from "../../../assets/images/shape/shape6.png"
import Shape7 from "../../../assets/images/shape/shape7.png"
import Shape13 from "../../../assets/images/shape/shape13.png"
import Shape8 from "../../../assets/images/shape/shape8.png"

const AnalysisSEO = () => {
  return (
    <>
      <div className="main-banner">
        <div className="container">
          <div className="banner-area-content">
            <h1
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-delay="100"
            >
              FREE SEO Analysis
            </h1>

            <p
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-delay="200"
            >
              Our team is ready to analyze and review your website, keywords
and competitors, as well as to understand your business in order to create
an SEO Analysis and a personalized proposal for our SEO services.


            </p>

            <form
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-delay="300"
            >
              <div className="row justify-content-center">
                <div className="col-lg-5 col-md-6 col-sm-6">
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      id="website"
                      placeholder="Your Website URL"
                    />
                  </div>
                </div>

                <div className="col-lg-4 col-md-6 col-sm-6">
                  <div className="form-group">
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      placeholder="Email"
                    />
                  </div>
                </div>

                <div className="col-lg-3 col-md-6 col-sm-6">
                  <div className="form-group">
                    <button type="submit" className="default-btn">
                      Get Your Report
                    </button>
                  </div>
                </div>
              </div>
            </form>

            {/* Main Banner Img */}
            <img 
              src={BannerImg} 
              alt="Banner" 
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-delay="500"
            />
          </div>
        </div>

        {/* Shape Images */}
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
        <div className="shape8">
          <img src={Shape8} alt="Shape" />
        </div>
      </div>
    </>
  )
}

export default AnalysisSEO
