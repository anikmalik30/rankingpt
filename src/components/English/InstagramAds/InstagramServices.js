import React from "react"
import { Link } from "gatsby"

import ProjectStartImg from "../../../assets/images/ppc/instagramads3.jpg"

import Shape2 from "../../../assets/images/shape/shape2.png"
import Shape3 from "../../../assets/images/shape/shape3.png"
import Shape5 from "../../../assets/images/shape/shape5.png"
import Shape6 from "../../../assets/images/shape/shape6.png"
import Shape7 from "../../../assets/images/shape/shape7.png"
import Shape13 from "../../../assets/images/shape/shape13.png"

const InstagramServices = () => {
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
                <h2>Our Instagram Ads Services  </h2>
                <p></p>
                <h3>Instagram Ads audit</h3>
                <p>
                  {" "}
                  Audits are essential to give us a clear idea of your account’s strengths and weaknesses, and where the opportunities are for your brand. It’s the best way to make sure we hit the ground running and put your budget to the best use.</p>
                  <h3>Instagram Ads management</h3>
                <p>
                  {" "}
                  At Launch there is no ‘set and forget’ mentality – we’re always monitoring campaigns to get you the very best results. Our in-house experts will set up, manage and optimise your Instagram Ads activity every month, reporting on performance to give you full oversight and input.</p>
                  <h3>Instagram Ads strategy</h3>
                <p>
                  {" "}
                  You’re spoilt for choice with ad formats and campaign types on Instagram. We’ll collaborate with you to understand your goals, what creative you have available, and what you want to achieve. We’ll then develop a long-term strategy focused on your KPIs, with plenty of opportunities for review from your team.</p>



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

export default InstagramServices
