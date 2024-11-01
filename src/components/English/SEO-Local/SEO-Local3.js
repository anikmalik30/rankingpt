import React from "react"
import { Link } from "gatsby"

import ProjectStartImg from "../../../assets/images/seo/localseo.jpg"

import Shape2 from "../../../assets/images/shape/shape2.png"
import Shape3 from "../../../assets/images/shape/shape3.png"
import Shape5 from "../../../assets/images/shape/shape5.png"
import Shape6 from "../../../assets/images/shape/shape6.png"
import Shape7 from "../../../assets/images/shape/shape7.png"
import Shape13 from "../../../assets/images/shape/shape13.png"

const SEOLocal3 = () => {
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
                <h2>The advantages of local SEO</h2>

                <p>
                  {" "}
                  Do you have a local business? Are you a service provider
                  looking to grow your audience in certain locations? With
                  top-ranked individual landing pages that promote your business
                  in each of the locations you serve, a number of local
                  directory entries, and top places in the Google Map Pack, your
                  local online visibility will get a huge boost.
                </p>

                <p>
                  88% of local business searches on a cell phone call or visit
                  the location within 24 hours. This is precisely why you have
                  to appear in local and “near me” searches, with a clear
                  presence in your target areas, excellent reviews that build
                  trust, and a user-friendly website perfectly structured for
                  SEO success. And with RankingPT’s local SEO services, you’ll
                  be able to take advantage of everything mentioned above.
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

export default SEOLocal3
