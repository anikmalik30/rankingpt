import React from "react"
import { Link } from "gatsby"

import AboutImg1 from "../../../assets/images/about-img1.jpg"

const AboutAnalysisSEO = () => {
  return (
    <>
      <div className="about-area">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-6 col-md-12">
              <div className="about-image">
                <img src={AboutImg1} alt="About" />
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div className="about-content">
                <div className="content">
                  <h2>What is SEO optimization and how can we help your company? </h2>
                  <p>
                  Search Engine Optimization (SEO) is the process of helping customers find your business 
                  online through a variety of optimization tactics designed to increase your search 
                  traffic on Google and other search engines.


                  </p>

                  <Link to="/about-us-1" className="default-btn">
                    Get in touch
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default AboutAnalysisSEO
