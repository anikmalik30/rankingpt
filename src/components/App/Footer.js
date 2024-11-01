import React from "react"
import { Link } from "gatsby"

import WhiteLogo from "../../assets/images/white-logo.png"
import Shape16 from "../../assets/images/shape/shape16.png"

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <>
      <footer className="footer-area">
        <div className="container">
          <div className="row">
            <div
              className="col-lg-4 col-md-6 col-sm-6"
              data-aos="fade-in"
              data-aos-duration="1200"
              data-aos-delay="100"
            >
              <div className="single-footer-widget">
                <Link to="/" className="logo">
                  <img src={WhiteLogo} alt="logo" />
                </Link>
                <p>
                Your privacy matters to us. We value your personal information and adhere to strict privacy policies. You can read more about how we handle your data by visiting our Privacy Policy.


                </p>

                <ul className="social-link">
                  <li>
                    <a
                      href="https://www.facebook.com/"
                      className="d-block"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i className="bx bxl-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.twitter.com/"
                      className="d-block"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i className="bx bxl-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.instagram.com/"
                      className="d-block"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i className="bx bxl-instagram"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.linkedin.com/"
                      className="d-block"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i className="bx bxl-linkedin"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div
              className="col-lg-2 col-md-6 col-sm-6"
              data-aos="fade-in"
              data-aos-duration="1200"
              data-aos-delay="200"
            >
              <div className="single-footer-widget pl-5">
                <h3>Services</h3>

                <ul className="footer-links-list">
                  <li>
                    <Link to="/">Pay Per Click Services</Link>
                  </li>
                  <li>
                    <Link to="/about-us-1">Web Development</Link>
                  </li>
                  <li>
                    <Link to="/pricing">Hosting Migration</Link>
                  </li>
                  <li>
                    <Link to="/portfolio-1">Hosting Support and Maintenance</Link>
                  </li>
                  <li>
                    <Link to="/contact">ECommerce Store Development</Link>
                  </li>
                  <li>
                    <Link to="/portfolio-1">SEO Ecommerce</Link>
                  </li>
                  <li>
                    <Link to="/portfolio-1">SEO Local</Link>
                  </li>
                  <li>
                    <Link to="/portfolio-1">SEO Internacional</Link>
                  </li>
                </ul>
              </div>
            </div>

            <div
              className="col-lg-2 col-md-6 col-sm-6"
              data-aos="fade-in"
              data-aos-duration="1200"
              data-aos-delay="300"
            >
              <div className="single-footer-widget pl-2">
                <h3>Company</h3>

                <ul className="footer-links-list">
                  <li>
                    <Link to="/team-1">About us</Link>
                  </li>
                  <li>
                    <Link to="/contact">Recruting</Link>
                  </li>
                  <li>
                    <Link to="/faq">Our Team</Link>
                  </li>
                  <li>
                    <Link to="/blog-1">Get in Contact</Link>
                  </li>
                </ul>
              </div>
            </div>

            <div
              className="col-lg-4 col-md-6 col-sm-6"
              data-aos="fade-in"
              data-aos-duration="1200"
              data-aos-delay="400"
            >
              <div className="single-footer-widget">
                <h3>Information</h3>

                <ul className="footer-contact-info">
                  <li>
                    <i className="bx bx-phone-call"></i>
                    <a href="tel:+11234567890">+351 934072652</a>
                  </li>
                  <li>
                    <i className="bx bx-envelope"></i>
                    <a href="mailto:hello@mibix.com">sales@rankingpt.com</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="footer-bottom-area">
            <div className="row align-items-center">
              <div className="col-lg-6 col-md-6">
                <p>
                  <i className="bx bx-copyright"></i>
                  {currentYear} {" "}
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href=""
                  >
                    RankingPT
                  </a>
                </p>
              </div>

              <div className="col-lg-6 col-md-6">
                <ul>
                  <li>
                    <Link to="/privacy-policy">Privacy Policy</Link>
                  </li>
                  <li>
                    <Link to="/terms-of-service">Terms & Conditions</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="shape16">
          <img src={Shape16} alt="Shape" />
        </div>
      </footer>
    </>
  )
}

export default Footer
