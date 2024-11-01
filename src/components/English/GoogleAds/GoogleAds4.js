import React from "react"
import { Link } from "gatsby"

import ProjectStartImg from "../../../assets/images/ppc/googleadsexample.png"

import Shape2 from "../../../assets/images/shape/shape2.png"
import Shape3 from "../../../assets/images/shape/shape3.png"
import Shape5 from "../../../assets/images/shape/shape5.png"
import Shape6 from "../../../assets/images/shape/shape6.png"
import Shape7 from "../../../assets/images/shape/shape7.png"
import Shape13 from "../../../assets/images/shape/shape13.png"

const GoogleAds4 = () => {
  return (
    <>
      <div className="project-start-area ptb-100">
        <div className="container">
          <div className="row align-items-center">
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

            <div className="col-lg-6 col-md-12">
              <div
                className="project-start-content"
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-delay="400"
              >
                <h2>How Does Google Ads Work?    </h2>

                <p>
                  {" "}
                  Google is the #1 search engine people go to when looking to seek information or solve problems, so being present precisely when they are looking for your product or service is crucial. Google Ads gives you a chance to choose which searches/keywords your ads appear for, what message you deliver to your potential customers, and which pages they visit when they first land on your website. </p>

                  <p>We leverage the power of Google Ads to reach your customers at the right time, as we send them to the content on your site most likely to answer their questions or solve their problems. Using the various tools and tactics within Google Ads, we can attract visitors who are unfamiliar with your brand, remind past site visitors of what you have to offer, and help grow your business by increasing your sales or leads.</p>



                <Link to="/contact" className="default-btn">
                  Discuss Campaign
                </Link>
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

export default GoogleAds4
