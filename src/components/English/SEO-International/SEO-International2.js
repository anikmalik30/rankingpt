import React from "react"
import { Link } from "gatsby"

import ProjectStartImg from "../../../assets/images/seo/seoanalysis2.png"

import Shape2 from "../../../assets/images/shape/shape2.png"
import Shape3 from "../../../assets/images/shape/shape3.png"
import Shape5 from "../../../assets/images/shape/shape5.png"
import Shape6 from "../../../assets/images/shape/shape6.png"
import Shape7 from "../../../assets/images/shape/shape7.png"
import Shape13 from "../../../assets/images/shape/shape13.png"

const SEOInternational2 = () => {
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
                <h2>Why choose RankingPT as your International SEO agency?
                </h2>

                <p>
                  {" "}
                  International SEO is a complex and nuanced specialty that requires the guidance of an experienced company to navigate the fluctuations of search engines and their guidelines. At RankingPT, we have a highly specialized team in international SEO, with years of experience in the sector.




                </p>
                <p>We are experts in developing detailed strategies based on exhaustive research, and we use our technical SEO expertise to ensure that your website is optimized effectively. Our team is dedicated to identifying and implementing the most relevant changes to ensure that your website ranks highly in the SERPs for the target languages.

                </p>
                <Link to="/contact" className="default-btn">
                  Schedule an Appointment
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
    </>
  )
}

export default SEOInternational2
