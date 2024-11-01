import React from "react"

import Shape9 from "../../assets/images/shape/shape9.png"
import Shape10 from "../../assets/images/shape/shape10.png"
import Shape11 from "../../assets/images/shape/shape11.png"
import Shape12 from "../../assets/images/shape/shape12.png"

const Appointment = () => {
  return (
    <>
      <div className="subscribe-area ptb-100">
        <div className="container">
          <div className="subscribe-content">
            <span
              className="sub-title"
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-delay="100"
            >
              Mibix Updates
            </span>

            <h2
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-delay="200"
            >
              See what we can do for you

            </h2>

            <p data-aos="fade-up" data-aos-duration="1200" data-aos-delay="300">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>

            <form
  className="newsletter-form d-table"
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

        <div className="shape9">
          <img src={Shape9} alt="Shape" />
        </div>
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
