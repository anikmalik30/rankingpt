import React from "react"
import { Link } from "gatsby"

import AboutImg1 from "../../../assets/images/dev/techsupport.png"

const WhyRankingPT = () => {
  return (
    <>
      <div className="about-area overflow-hidden pb-100">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-6 col-md-12">
              <div 
                className="about-image"
                data-aos="fade-right"
                data-aos-duration="1200"
                data-aos-delay="300"
              >
                <img src={AboutImg1} alt="About" />
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div 
                className="about-content"
                data-aos="fade-left"
                data-aos-duration="1200"
                data-aos-delay="500"
              >
                <div className="content">
                  <h2>Why should you invest in WordPress Maintenance?</h2>
                  <p>
                  Every WordPress website needs regular maintenance in order to work optimally 
                  without any errors. Websites that are not maintained efficiently and not updated 
                  regularly are prone to hacking and security threats.<p></p>
                  Hence, you need an effective maintenance plan to ensure that your website is secure and your business is growing efficiently. 
                  </p>

                  <ul className="funfacts-list">
                    <li>
                      <div className="list">
                        <i className="flaticon-menu-1"></i>
                        <h3>89%</h3>
                        <p>Improved User Experience</p>
                      </div>
                    </li>
                    <li>
                      <div className="list">
                        <i className="flaticon-web-settings"></i>
                        <h3>56%</h3>
                        <p>Increased Website Performance</p>
                      </div>
                    </li>
                    <li>
                      <div className="list">
                        <i className="flaticon-web-settings"></i>
                        <h3>41%</h3>
                        <p>Boosted Website Security</p>
                      </div>
                    </li>
                  </ul>

                  <Link to="/about-us-1" className="default-btn">
                    Get A Quote
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





export default WhyRankingPT
