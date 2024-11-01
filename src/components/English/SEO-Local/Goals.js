import React from "react"
import Icons from "../../../components/Icons/Icons"
import { Link } from "gatsby"

const Goals = () => {
  return (
    <>
      <div className="featured-services-area pt-100 pb-70">
        <div className="container">
          <div className="section-title">
            <h2>Do local SEO services really work?</h2>
            <p>
              Today, the Internet is more personal than ever. So whether your
              main customer is 100 miles or 100 feet away from you, using local
              SEO for your small business is actually the most effective way to
              make that connection. But how does this work?
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

                <h3>Name, address, telephone</h3>

                <p>
                  Also known as NAP syndication, getting your business found in
                  highly sought-after local directories is a must for any SEO
                  campaign.
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

                <h3>Google My Business Profile</h3>

                <p>
                  Optimizing your company's profile page on Google is a
                  fundamental pillar of your success in the local market,
                  ensuring that you are found organically and on Google Maps.
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

                <h3>Focused strategy</h3>

                <p>
                  The most successful small business SEO services will have a
                  hyper-targeted campaign for your main products and services.
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
