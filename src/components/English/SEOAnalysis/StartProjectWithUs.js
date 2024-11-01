import React from "react"
import { Link } from "gatsby"

import ProjectStartImg from "../../../assets/images/brands/google.png"

import Shape2 from "../../../assets/images/shape/shape2.png"
import Shape3 from "../../../assets/images/shape/shape3.png"
import Shape5 from "../../../assets/images/shape/shape5.png"
import Shape6 from "../../../assets/images/shape/shape6.png"
import Shape7 from "../../../assets/images/shape/shape7.png"
import Shape13 from "../../../assets/images/shape/shape13.png"

const StartProjectWithUs = () => {
  return (
    <>
      <div className="project-start-area ptb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div 
                className="project-start-content"
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-delay="400"
              >
                <h2>Continuous Optimization of your SEO Strategy</h2>
                <p>
                  Even after your website meets SEO standards, we will continue to find ways to optimize and improve your SEO strategy, 
                  which allows you to earn more from Search Engine Optimization.
                </p>

                <Link to="/contact" className="default-btn">
                  Get Started
                </Link>
              </div>
            </div>

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

      <div className="container">
        {/* Add the new heading and subtext here */}
        <div className="text-center mb-5">
          <h2>Why is it worth it?  </h2>
          <p>
          Learn for free what you need to do to make your website reach more customers! You can count on:
          </p>
        </div>

        <div className="row justify-content-center">
          <div 
            className="col-lg-4 col-md-6 col-sm-6"
            data-aos="fade-up"
            data-aos-duration="1200"
            data-aos-delay="100"
          >
            <div className="single-featured-services-box">
              <div className="icon">
                <i className="flaticon-research"></i>
              </div>

              <h3>Smart Guidance</h3>

              <p>
                We don't beat around the bush - you'll know, black and white, what needs improving.
              </p>
            </div>
          </div>

          <div 
            className="col-lg-4 col-md-6 col-sm-6"
            data-aos="fade-up"
            data-aos-duration="1200"
            data-aos-delay="200"
          >
            <div className="single-featured-services-box">
              <div className="icon">
                <i className="flaticon-speed"></i>
              </div>

              <h3>Clear report</h3>

              <p>
                Above all, the report must be clear and easy to understand - that's what we guarantee.
              </p>
            </div>
          </div>

          <div 
            className="col-lg-4 col-md-6 col-sm-6"
            data-aos="fade-up"
            data-aos-duration="1200"
            data-aos-delay="300"
          >
            <div className="single-featured-services-box">
              <div className="icon">
                <i className="flaticon-email-marketing"></i>
              </div>

              <h3>Greater visibility</h3>

              <p>
                By implementing our recommendations, you can expect to see more traffic to your website.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default StartProjectWithUs
