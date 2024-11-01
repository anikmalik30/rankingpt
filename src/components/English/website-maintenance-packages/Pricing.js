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
                  <h3>Essential Plan</h3>
                </div>

                <div className="pricing-features">
                  <ul>
                    <li>
                      {" "}
                      <b>1-3</b> Monthly Service Requests
                    </li>
                    <li>
                      <b>2</b> Maximum Support Hours
                    </li>
                    <li>
                      {" "}
                      <b>Free</b> Task Manager Access
                    </li>
                    <li>
                      <b> 2-5 days</b> Turnaround Time
                    </li>
                    <li> Update or correct website content</li>
                    <li> Damage pages & links repairing</li>
                    <li> Email/Domain/Hosting Support</li>
                    <li> 3rd Party Web Hosting Help</li>
                    <li> Monthly Backup</li>
                    <li> Consulting Requests</li>
                  </ul>
                </div>

                <div className="price">
                  $54.99
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
                  <h3>Pro Plan</h3>
                </div>

                <div className="pricing-features">
                  <ul>
                    <li>
                      {" "}
                      <b>1-10</b> Monthly Service Requests
                    </li>
                    <li>
                      <b>6</b> Maximum Support Hours
                    </li>
                    <li>
                      {" "}
                      <b>Free</b> Task Manager Access
                    </li>
                    <li>
                      <b> 1-4 days</b> Turnaround Time
                    </li>
                    <li> Update or correct website content</li>
                    <li> Damage pages & links repairing</li>
                    <li> Email/Domain/Hosting Support</li>
                    <li> 3rd Party Web Hosting Help</li>
                    <li> Monthly Backup</li>
                    <li> Consulting Requests</li>
                    <li> Form Creation</li>
                    <li> Script Installations</li>
                    <li> PHP Scripting Help</li>
                    <li> CMS / WordPress Support</li>
                  </ul>
                </div>

                <div className="price">
                  $174.99
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
                  <h3>Premium Plan</h3>
                </div>

                <div className="pricing-features">
                  <ul>
                    <li>
                      {" "}
                      <b>Unlimited </b> Monthly Service Requests
                    </li>
                    <li>
                      <b>30</b> Maximum Support Hours
                    </li>
                    <li>
                      {" "}
                      <b>Free</b> Task Manager Access
                    </li>
                    <li>
                      <b> 0-3 days</b> Turnaround Time
                    </li>
                    <li> Update or correct website content</li>
                    <li> Damage pages & links repairing</li>
                    <li> Email/Domain/Hosting Support</li>
                    <li> 3rd Party Web Hosting Help</li>
                    <li> Monthly Backup</li>
                    <li> Consulting Requests</li>
                    <li> Form Creation</li>
                    <li> Script Installations</li>
                    <li> PHP Scripting Help</li>
                    <li> CMS / WordPress Support</li>
                    <li> Server Support</li>
                    <li> Ecommerce Site Support</li>
                    <li> On-Site SEO Work</li>
                    <li> Graphic Design</li>
                    <li> Coding</li>
                  </ul>
                </div>

                <div className="price">
                  $769.99
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
