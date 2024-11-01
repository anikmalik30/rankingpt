import React from "react"

import Shape9 from "../../../assets/images/shape/shape9.png"
import Shape10 from "../../../assets/images/shape/shape10.png"
import Shape11 from "../../../assets/images/shape/shape11.png"
import Shape12 from "../../../assets/images/shape/shape12.png"

import AboutImg1 from "../../../assets/images/ecommerce/8-E-commerce.png"

const Appointment = () => {
  return (
    <>
<div className="subscribe-area ptb-100">
  <div className="container">
    <div className="row align-items-center">
      {/* Left Column - Text Content */}
      <div className="col-lg-6 col-md-12">
        <div className="subscribe-content">
          <span
            className="sub-title"
            data-aos="fade-up"
            data-aos-duration="1200"
            data-aos-delay="100"
          >
            Mibix Updates
          </span>

          <h2 data-aos="fade-up" data-aos-duration="1200" data-aos-delay="200">
            See what we can do for you
          </h2>

          <p
            data-aos="fade-up"
            data-aos-duration="1200"
            data-aos-delay="300"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>

          <form
            className="newsletter-form"
            data-aos="fade-up"
            data-aos-duration="1200"
            data-aos-delay="400"
          >
            <div className="d-table-cell">
              <button type="submit" className="default-btn">
                Subscribe Now
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Right Column - Image Content */}
      <div className="col-lg-6 col-md-12">
        <div className="image-content text-center">
          <img src={Shape9} alt="Shape" className="img-fluid" />
        </div>
      </div>
    </div>
  </div>

  {/* Shapes */}
  <div className="shape10">
    <img src={Shape10} alt="Shape" />
  </div>
  <div className="shape11">
    <img src={Shape11} alt="Shape" />
  </div>
  <div className="shape12">
    <img src={Shape12} alt="Shape" />
  </div>
</div>

    </>
  )
}

export default Appointment
