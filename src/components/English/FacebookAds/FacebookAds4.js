import React from "react"
import { Link } from "gatsby"

import ProjectStartImg from "../../../assets/images/ppc/ppc2.png"

import Shape2 from "../../../assets/images/shape/shape2.png"
import Shape3 from "../../../assets/images/shape/shape3.png"
import Shape5 from "../../../assets/images/shape/shape5.png"
import Shape6 from "../../../assets/images/shape/shape6.png"
import Shape7 from "../../../assets/images/shape/shape7.png"
import Shape13 from "../../../assets/images/shape/shape13.png"

const FacebookAds4 = () => {
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
                <h2>Why should businesses invest in Facebook Ads?   </h2>

                <p>
                  {" "}
                  Facebook’s advanced targeting options allow you to reach a specific audience based on demographics, interests, behaviors, and more. This means you can effectively target your ads to the people who are most likely to be interested in your products or services. Facebook ads can be a cost-effective way to reach and engage your target audience. You can set a budget for your ad campaign and only pay when people take a specific action, like clicking your ad or visiting your website. Additionally, Facebook offers a variety of ad formats, including video ads, carousel ads, and more, allowing you to create ads tailored to your business and your target audience. You can also choose to run your ads on a pay-per-click (PPC) or pay-per-impression (PPI) basis, depending on your goals.</p>



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

export default FacebookAds4
