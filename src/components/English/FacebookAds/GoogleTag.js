import React from "react"
import Icons from "../../Icons/Icons"
import { Link } from "gatsby"

const GoogleTag = () => {
  return (
    <>
      <div className="featured-services-area pt-100 pb-70">
        <div className="container">
          <div className="section-title">
            <h2>Turn users into valuable customers</h2>
            <p>
            Google Ads management services powered by Google Analytics, Google Tag Manager and CRO experts
            </p>
          </div>

          <div className="row justify-content-center equal-height-container">
            <div
              className="col-lg-4 col-md-6 col-sm-6"
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-delay="100"
            >
              <div className="single-featured-services-box">
                <div className="icon">
                  <Icons name="088-growth-1" size={48} color="#000" />{" "}
                  {/* Adjust `name` to match your icon ID */}
                  <div className="circles-box">
                    <div className="circle-one"></div>
                    <div className="circle-two"></div>
                  </div>
                </div>

                <h3>Google Analytics</h3>

                <p>
                  We form our suggestions using data. Since we have been in
                  digital analytics since day one, we know how to draw the right
                  insights to inform your strategy.
                </p>
              </div>
            </div>

            <div
              className="col-lg-4 col-md-6 col-sm-6"
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-delay="100"
            >
              <div className="single-featured-services-box">
                <div className="icon">
                  <i className="flaticon-speed"></i>
                  <div className="circles-box">
                    <div className="circle-one"></div>
                    <div className="circle-two"></div>
                  </div>
                </div>

                <h3>Google Tag Manager</h3>

                <p>
                  Using Google Tag Manager we are able to track the finer
                  details and give you insight into pieces of data you wouldn't
                  be able to find in an ordinary digital analytics
                  implementation. This gives you the edge over the competition.
                </p>
              </div>
            </div>

            <div
              className="col-lg-4 col-md-6 col-sm-6"
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-delay="100"
            >
              <div className="single-featured-services-box">
                <div className="icon">
                  <i className="flaticon-email-marketing"></i>
                  <div className="circles-box">
                    <div className="circle-one"></div>
                    <div className="circle-two"></div>
                  </div>
                </div>

                <h3>Conversion rate optimisation</h3>

                <p>
                  We have years of experience in locating issues with your site
                  that are blocking conversions. Once we identify them, then we
                  fix them - meaning that once your Google Ad campaigns get the
                  user on-site, they're more likely to convert.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default GoogleTag
