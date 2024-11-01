import React from "react"
import { Link } from "gatsby"

import AboutImg1 from "../../../assets/images/home-8-9-10/about/about-2.png"

const AboutUsContent = () => {
  return (
    <>
      <div className="mibix-about-area ptb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="mibix-about-image">
                <img src={AboutImg1} alt="About" />
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div className="mibix-about-content">
                <span>ABOUT US</span>
                <h3>Enjoy Full-Service Digital Marketing Expertise</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipiscing elit sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua
                  quis ipsum suspendisse ultrices gravida risus commodo viverra
                  maecenas accumsan lacus vel facilisis.
                </p>

                <ul className="about-list">
                  <li>
                    <span>376</span> Product Designers
                  </li>
                  <li>
                    <span>7548</span> Frontend Developers
                  </li>
                  <li>
                    <span>570</span> Backend Developers
                  </li>
                  <li>
                    <span>570</span> Quality Assurance Specialists
                  </li>
                </ul>

                <div className="about-btn">
                  <Link to="/about-us-1" className="default-btn-with-radius">
                    More About Us <i className="flaticon-next-button"></i>
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

export default AboutUsContent
