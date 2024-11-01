import React from "react"
import { Link } from "gatsby"

import ProjectStartImg from "../../../assets/images/seo/seotraffic.jpg"

import Shape2 from "../../../assets/images/shape/shape2.png"
import Shape3 from "../../../assets/images/shape/shape3.png"
import Shape5 from "../../../assets/images/shape/shape5.png"
import Shape6 from "../../../assets/images/shape/shape6.png"
import Shape7 from "../../../assets/images/shape/shape7.png"
import Shape13 from "../../../assets/images/shape/shape13.png"

const SEOInternational3 = () => {
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
                <h2>International consultants specialized in SEO</h2>

                <p>
                  {" "}
                  Our international SEO experts have strong relationships with
                  brands across the globe, working across a wide range of
                  industries. We work with leading SaaS companies in San
                  Francisco, airlines in China, luxury tour operators in Morocco
                  and prominent retailers in the UK, giving us the expertise to
                  serve clients anywhere in the world.
                </p>

                <p>
                  No matter the industry or country, our talented team is
                  committed to ensuring the success of your online business
                  through our diverse international SEO services.
                </p>

                <p>
                  Unlock digital marketing strategies to create an
                  immersive brand experience for your target audience, no matter
                  where they are located.
                </p>

                <Link to="/contact" className="default-btn">
                  Schedule an Appointment
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

export default SEOInternational3
