import React from "react"
import Icons from "../../../components/Icons/Icons"
import { Link } from "gatsby"

const Goals = () => {
  return (
    <>
      <div className="featured-services-area pt-100 pb-70">
        <div className="container">
          <div className="section-title">
            <h2>Connect your brand to the world</h2>
            <p>
              Gain global visibility by optimizing your pages for local search
              engines and build trust in your brand by tailoring your content to
              regional audiences.
            </p>
          </div>

          <div className="d-flex justify-content-center align-items-center">
            <Link to="/contact" className="default-btn">
              Optimize my business
            </Link>
          </div>

          <div className="row justify-content-center equal-height-container">
            <div
              className="col-lg-4 col-md-6 col-sm-6"
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-delay="100"
            >
              <div className="single-featured-services-box">
                <div className="icon">
                  <Icons name="088-growth-1" size={48} color="#000" />{" "}
                  {/* Adjust `name` to match your icon ID */}
                  <div className="circles-box">
                    <div className="circle-one"></div>
                    <div className="circle-two"></div>
                  </div>
                </div>

                <h3>Commercially viable keywords</h3>

                <p>
                  We will select the keywords with the greatest potential to
                  drive qualified traffic to commercially valuable conversion
                  points on your website.
                </p>
              </div>
            </div>

            <div
              className="col-lg-4 col-md-6 col-sm-6"
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

                <h3>Optimized product pages</h3>

                <p>
                  We help you improve high-value, geographic-specific pages
                  using over 200 optimization factors so you can outperform your
                  competition.
                </p>
              </div>
            </div>

            <div
              className="col-lg-4 col-md-6 col-sm-6"
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

                <h3>Creating strategic connections</h3>

                <p>
                  Effectively close competitive gaps in unique referring
                  domains, strengthen your website's topical authority, and
                  drive organic traffic to your most important pages.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Goals
