import React from "react"

import HowItsWork from "../../assets/images/how-its-work.png"

const HowWeAnalyseYourSEO = () => {
  return (
    <>
      <div className="how-its-work-area ptb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="how-its-work-content">
                <h2>How We Analyse Your SEO</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna.
                </p>

                <div className="inner-box">
                  <div className="single-item">
                    <div className="count-box">01</div>
                    <h3>SEO Content Analysis</h3>
                    <p>
                      Dolor sit amet consectetur elit eiusmod tempor incidi dunt
                      labore dolore magna aliqua enim.
                    </p>
                  </div>

                  <div className="single-item">
                    <div className="count-box">02</div>
                    <h3>Technical SEO Analysis</h3>
                    <p>
                      Dolor sit amet consectetur elit eiusmod tempor incidi dunt
                      labore dolore magna aliqua enim.
                    </p>
                  </div>

                  <div className="single-item">
                    <div className="count-box">03</div>
                    <h3>Backlink Profile Analysis</h3>
                    <p>
                      Dolor sit amet consectetur elit eiusmod tempor incidi dunt
                      labore dolore magna aliqua enim.
                    </p>
                  </div>

                  <div className="single-item">
                    <div className="count-box">04</div>
                    <h3>Competitor SEO Analysis</h3>
                    <p>
                      Dolor sit amet consectetur elit eiusmod tempor incidi dunt
                      labore dolore magna aliqua enim.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div 
                className="how-its-work-image"
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-delay="100"
              >
                <img src={HowItsWork} alt="How It's Work" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default HowWeAnalyseYourSEO
