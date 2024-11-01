import React from "react"

import HowItsWork from "../../../assets/images/how-its-work.png"

const HowWeb = () => {
  return (
    <>
      <div className="how-its-work-area ptb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="how-its-work-content">
                <h2>Custom Web Development Process</h2>
                <p>
                We recognize that the most complex projects demand that our web development 
                team pay attention to every detail in the process of creating web-based solutions. 
                At Netguru, we’ve delivered over 1000 projects, so we know what it takes to execute 
                a seamless and optimized web-based software development process.


                </p>

                <div className="inner-box">
                  <div className="single-item">
                    <div className="count-box">01</div>
                    <h3>Web Strategy</h3>
                    <p>We analyze your brand, industry and competitors to come with a custom, research-backed strategy
                       that fits your goals. By understanding what makes you unique, we differentiate you from your
                        competitors and make you stand out from the crowd.</p>
                  </div>

                  <div className="single-item">
                    <div className="count-box">02</div>
                    <h3>Planning & Information</h3>
                    <p>Here we map your visitors’ journey. We work with all leading web development platforms, 
                      so we will choose the one that works for you and customize it to your needs. We will also 
                      optimize it for increased visibility and conversion.</p>
                  </div>

                  <div className="single-item">
                    <div className="count-box">03</div>
                    <h3>Design & Development</h3>
                    <p>Here our award-winning designers craft custom, on-brand visuals for your websites.
                       Then our developers focus on creating your website’s front and back end while following 
                       industry best practices.</p>
                  </div>

                  <div className="single-item">
                    <div className="count-box">04</div>
                    <h3>Quality Assurance (QA)</h3>
                    <p>Our QA phase runs simultaneously with your website development as we consistently ensure 
                      the quality of your code and proper front and backend functionalities.</p>
                  </div>

                  <div className="single-item">
                    <div className="count-box">05</div>
                    <h3>Launch & Optimization</h3>
                    <p>We push your site live but our job doesn’t end there. We set up monitoring controls to 
                      continuously follow the performance of your website and to optimize it according to industry
                       best practices for increased visibility and conversion.</p>
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

export default HowWeb
