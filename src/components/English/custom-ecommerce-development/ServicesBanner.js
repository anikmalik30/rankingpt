import React from "react"
import { Link } from "gatsby"

const ServicesBanner = () => {
  return (
    <>
      <div className="featured-services-area pt-100 pb-70">
        <div className="container">
          <div className="section-title">
            <h2>Your goals. Our channels
            and marketing strategies</h2>
            <p>
            A varied content and design for each different phase of digital advertising. Our inbound digital marketing campaigns are created to meet your needs.
            </p>
          </div>

          <div className="row justify-content-center">
            <div 
              className="col-lg-3 col-md-6 col-sm-6"
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-delay="100"
            >
              <div className="single-featured-services-box">
                <div className="icon">
                  <i className="flaticon-research"></i>
                  <div className="circles-box">
                    <div className="circle-one"></div>
                    <div className="circle-two"></div>
                  </div>
                </div>

                <h3>
                  <Link to="/single-services">Web Services</Link>
                </h3>

                <p>
                From creating optimized websites to ongoing maintenance, we ensure your business stands out in the digital world


                </p>

                <Link to="/single-services" className="learn-more-btn">
                  <i className="left-icon flaticon-next-button"></i>
                  Learn More <i className="right-icon flaticon-next-button"></i>
                </Link>
              </div>
            </div>

            <div 
              className="col-lg-3 col-md-6 col-sm-6"
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-delay="100"
            >
              <div className="single-featured-services-box">
                <div className="icon">
                  <i className="flaticon-speed"></i>
                  <div className="circles-box">
                    <div className="circle-one"></div>
                    <div className="circle-two"></div>
                  </div>
                </div>

                <h3>
                  <Link to="/single-services">SEO Solutions</Link>
                </h3>

                <p>
                Increase your online presence through our SEO solutions.


                </p>

                <Link to="/single-services" className="learn-more-btn">
                  <i className="left-icon flaticon-next-button"></i>
                  Learn More <i className="right-icon flaticon-next-button"></i>
                </Link>
              </div>
            </div>

            <div 
              className="col-lg-3 col-md-6 col-sm-6"
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-delay="100"
            >
              <div className="single-featured-services-box">
                <div className="icon">
                  <i className="flaticon-email-marketing"></i>
                  <div className="circles-box">
                    <div className="circle-one"></div>
                    <div className="circle-two"></div>
                  </div>
                </div>

                <h3>
                  <Link to="/single-services">PPC - Social Ads</Link>
                </h3>

                <p>
                Get greater reach and promising opportunities with social media ads. As a social advertising agency, we support you in implementing social advertising campaigns - adapted to your target group.


                </p>

                <Link to="/single-services" className="learn-more-btn">
                  <i className="left-icon flaticon-next-button"></i>
                  Learn More <i className="right-icon flaticon-next-button"></i>
                </Link>
              </div>
            </div>

            <div 
              className="col-lg-3 col-md-6 col-sm-6"
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-delay="100"
            >
              <div className="single-featured-services-box">
                <div className="icon">
                  <i className="flaticon-speed"></i>
                  <div className="circles-box">
                    <div className="circle-one"></div>
                    <div className="circle-two"></div>
                  </div>
                </div>

                <h3>
                  <Link to="/single-services">SEO Analysis</Link>
                </h3>

                <p>
                Our team is ready to analyze the SEO aspects of your website and provide some tips to help you increase traffic, generate leads and maximize revenue.
                </p>

                <Link to="/single-services" className="learn-more-btn">
                  <i className="left-icon flaticon-next-button"></i>
                  Learn More <i className="right-icon flaticon-next-button"></i>
                </Link>
              </div>
            </div>

            
          </div>
        </div>
      </div>
    </>
  )
}

export default ServicesBanner
