import React from "react"
import { Link } from "gatsby"

import ProjectStartImg from "../../../assets/images/dev/cloud.png"

import Shape2 from "../../../assets/images/shape/shape2.png"
import Shape3 from "../../../assets/images/shape/shape3.png"
import Shape5 from "../../../assets/images/shape/shape5.png"
import Shape6 from "../../../assets/images/shape/shape6.png"
import Shape7 from "../../../assets/images/shape/shape7.png"
import Shape13 from "../../../assets/images/shape/shape13.png"

const HostingAffectsSEO = () => {
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
                <h2>What is Local SEO?                </h2>

                <p>
                  {" "}
                  Local SEO is a strategic approach that allows businesses to optimize their online presence for specific geographic locations. By focusing on local search engine optimization, businesses can effectively target customers who are most likely to search for and interact with their products or services in their vicinity.</p>

                  <p>One of the most common searches is localized searches, using keywords like “near me” or “closer” accompanied by a keyword related to the product or service.</p>

                  <p>Google recognizes the importance of local searches and prioritizes local results in its rankings. This means that businesses with a strong local SEO strategy have the opportunity to reach a highly targeted and qualified audience. In fact, statistics reveal that around 50% of local searches result in a visit to a physical store.</p>

                  <p>Additionally, 97% of people search locally to find supermarkets, restaurants, stores, gyms and even e-commerce sites that deliver to their area.</p>

                  <p>In short, local SEO involves a series of fine-tuned aspects of search engines like Google Maps and Google My Business that help potential customers find you. This strategy is essential for any business that wants to thrive locally in its industry.</p>


                
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

export default HostingAffectsSEO
