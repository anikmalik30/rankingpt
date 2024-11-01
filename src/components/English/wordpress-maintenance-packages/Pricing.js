import React from "react"
import { Link } from "gatsby"

const Pricing = () => {
  return (
    <>
      <div className="pricing-area bg-f9f9f9 pt-100 pb-70">
        <div className="container">
          <div className="section-title">
            <h2>Our Custom Website Maintenance Packages Include:</h2>
            <p>
              We would love to work with you to maintain and update your
              website. You can save BIG money by getting a website maintenance
              package from us. We currently offer the following standard
              packages, however, we can also create a bespoke package to meet
              your specific requirements. Just let us know what kind of package
              you are looking for, and we’ll have it.
            </p>
          </div>

          <div className="row justify-content-center">
            <div
              className="col-lg-4 col-md-6 col-sm-6"
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-delay="100"
            >
              <div className="single-pricing-box">
                <div className="pricing-header">
                  <div className="icon">
                    <i className="flaticon-paper-plane"></i>
                    <div className="circles-box">
                      <div className="circle-one"></div>
                    </div>
                  </div>
                  <h3>Pro Maintenance Plan</h3>
                </div>

                <div className="pricing-features">
                  <ul>
                    <li>
                      {" "}
                      Bi-monthly WordPress updates
                    </li>
                    <li>
                    Bi-monthly plugin updates
                    </li>
                    <li>
                      {" "}
                      Bi-monthly theme update
                    </li>
                    <li>
                    Bi-monthly site backups
                    </li>
                    <li> Performance optimizations</li>
                    <li> Free and unlimited restorations of the site</li>
                    <li> 1 hour of support (design changes, text additions, images, articles...)                    </li>
                    <li> Exclusive discounts with all our partners</li>
                    <li> Cleaning up spam/trash/database</li>
                    <li> 24-hour monitoring</li>
                  </ul>
                </div>

                <div className="price">
                  $69.99
                  <span>Per Month</span>
                </div>

                <Link to="#" className="default-btn">
                  Book Now
                </Link>
              </div>
            </div>

            <div
              className="col-lg-4 col-md-6 col-sm-6"
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-delay="200"
            >
              <div className="single-pricing-box">
                <div className="pricing-header">
                  <div className="icon">
                    <i className="flaticon-jigsaw"></i>
                    <div className="circles-box">
                      <div className="circle-one"></div>
                    </div>
                  </div>
                  <h3>WooCommerce Maintenance Plan                  </h3>
                </div>

                <div className="pricing-features">
                  <ul>
                    <li>Weekly WordPress updates</li>
                  <li>Weekly plugin updates</li>
                  <li>Weekly theme update</li>
                  <li>Weekly site backups</li>
                  <li>Performance optimizations</li>
                  <li>Free and unlimited restorations of the site</li>
                  <li>1h30 of support (design changes, text additions, images, articles...)</li>
                  <li>Exclusive discounts with all our partners</li>
                  <li>Cleaning up spam/trash/database</li>
                  <li>24-hour monitoring</li>
                  <li>SSL Certificate installed for free</li>
                  <li>Enhanced security</li>
                  <li>Free hosting of the site</li>
                  <li>Priority Support</li>
                  </ul>
                </div>

                <div className="price">
                  $129.99
                  <span>Per Month</span>
                </div>

                <Link to="#" className="default-btn">
                  Book Now
                </Link>
              </div>
            </div>

            <div
              className="col-lg-4 col-md-6 col-sm-6"
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-delay="300"
            >
              <div className="single-pricing-box">
                <div className="pricing-header">
                  <div className="icon">
                    <i className="flaticon-diamond"></i>
                    <div className="circles-box">
                      <div className="circle-one"></div>
                    </div>
                  </div>
                  <h3>High Velocity Maintenance Plan</h3>
                </div>

                <div className="pricing-features">
                  <ul>
                  <li>Real-time WordPress updates</li>
                  <li>Real-time plugin updates</li>
                  <li>Real-time theme update</li>
                  <li>Real-time site backups</li>
                  <li>Performance optimizations</li>
                  <li>Free and unlimited restorations of the site</li>
                  <li>2 hours of support (design changes, text additions, images, articles...)</li>
                  <li>Exclusive discounts with all our partners</li>
                  <li>Cleaning up spam/trash/database</li>
                  <li>24-hour monitoring</li>
                  <li>SSL Certificate installed for free</li>
                  <li>Enhanced security</li>
                  <li>Free hosting of the site</li>
                  <li>Priority Support</li>
                  </ul>
                </div>

                <div className="price">
                  $199.99
                  <span>Per Month</span>
                </div>

                <Link to="#" className="default-btn">
                  Book Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Pricing
