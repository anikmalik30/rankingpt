import React from "react";
import { Link } from "gatsby";
import Icons from "../../../components/Icons/Icons"

const Goals = () => {
  return (
    <>
      <div className="featured-services-area pt-100 pb-70">
        <div className="container">
          <div className="section-title">
            <h2>Types of ecommerce</h2>
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
                  Company Ratings
                </h3>

                <strong>We use:</strong>
                <p className="service-list">
                B2B – Business to Business <br />
                B2C – Business to Consumer <br />
                C2C – Consumer to Consumer <br />
                C2B – Consumer to Business <br />
                B2A – Business to Administration <br />
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

                <h3>
                  Business models
                </h3>

                <strong>Based on</strong>
                <p className="service-list">
                  Dropshipping <br />
                  Wholesaling and Warehousing <br />
                  White-labeling <br />
                  Manufacturing <br />
                  Subscription-based <br />
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

                <h3>
                Product models
                </h3>

                <strong>With the help of:</strong>
                <p className="service-list">
                Single Product <br />
                Single Category <br />
                Multiple Category <br />
                Affiliate <br />
                Hybrid <br />


                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Goals;
