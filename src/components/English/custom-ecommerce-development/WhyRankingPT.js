import React from "react"
import { Link } from "gatsby"

import AboutImg1 from "../../../assets/images/about-img1.jpg"

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
                  <h2>Custom Web Development for eCommerce Businesses</h2>
                  <p>
                  RankingPT is an industry-leading eCommerce web development 
                  agency dedicated to crafting high-quality, conversion-oriented online stores.
                   Our expert dev team understands the unique challenges of professional web 
                   development services and ensures your online business’s success.
                  </p>

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
