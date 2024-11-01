import React from "react";
import { Link } from "gatsby";
import Icons from "../../../components/Icons/Icons"

const Goals = () => {
  return (
    <>
      <div className="featured-services-area pt-100 pb-70">
        <div className="container">
          <div className="section-title">
            <h2>Your goals. Our channels and marketing strategies</h2>
            <p>
              A varied content and design for each different phase of digital
              advertising. Our inbound digital marketing campaigns are created
              to meet your needs.
            </p>
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
                <Icons name="088-growth-1" size={48} color="#000" />  {/* Adjust `name` to match your icon ID */}
                  <div className="circles-box">
                    <div className="circle-one"></div>
                    <div className="circle-two"></div>
                  </div>
                </div>

                <h3>
                  <Link to="/single-services">Sales increase</Link>
                </h3>

                <p>35% better sales for our clients.</p>
                <strong>We use:</strong>
                <p className="service-list">
                  Search Engine Optimization<br />
                  Meta Ads<br />
                  Product Listing Ads<br />
                  Google Ads<br />
                  Google Shopping
                </p>

                <Link to="/single-services" className="default-btn">
                  Get Started
                </Link>
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

                <h3>
                  <Link to="/single-services">Lead generation</Link>
                </h3>

                <p>We run over a 1000 advertising campaigns for service and B2B websites</p>
                <strong>Based on</strong>
                <p className="service-list">
                  Google Ads <br />
                  Facebook Ads<br />
                  LinkedIn Ads
                </p>

                <Link to="/single-services" className="default-btn">
                  Get Started
                </Link>
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

                <h3>
                  <Link to="/single-services">Brand awareness</Link>
                </h3>

                <p>We build awareness campaigns with a wide range and optimized cost.</p>
                <strong>With the help of:</strong>
                <p className="service-list">
                  Google Display Network<br />
                  YouTube<br />
                  Programmatic<br />
                  Gmail<br />
                  App Campaigns
                </p>

                <Link to="/single-services" className="default-btn">
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Goals;
