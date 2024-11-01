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
                  <span className="sub-title">SEO EXPERTS</span>
                  <h2>Why RankingPT</h2>
                  <p>
                  Serving clients with excellent marketing solutions for years, we have earned our reputation,
                   and with the practice of taking on all marketing tasks and providing excellent results in return,
                    the team at RankingPT has the experience of completing all the tasks at hand as well as most efficient way possible.
                     With the support of the excellent RankingPT team, several companies have found their solutions and have excellent marketing 
                     skills that guarantee the success of their campaigns.
                  </p>

                  <ul className="funfacts-list">
                    <li>
                      <div className="list">
                        <i className="flaticon-menu-1"></i>
                        <h3>376</h3>
                        <p>Completed projects</p>
                      </div>
                    </li>
                    <li>
                      <div className="list">
                        <i className="flaticon-web-settings"></i>
                        <h3>7548</h3>
                        <p>Working hours were spent</p>
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
