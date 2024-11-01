import React from "react"
import Icons from "../../../components/Icons/Icons"
import { Link } from "gatsby"

const Goals = () => {
  return (
    <>
      <div className="featured-services-area pt-100 pb-70">
        <div className="container">
          <div className="section-title">
            <h2>Our Google Ads services</h2>
            <p>
              As an award-winning Google Ads agency, our team of experts has
              extensive experience managing search campaigns across the
              following 4 channels:
            </p>
          </div>

          <div className="d-flex justify-content-center align-items-center">
            <Link to="/contact" className="default-btn">
              Let's chat!
            </Link>
          </div>
          <p></p>

          <div className="row justify-content-center equal-height-container">
            <div
              className="col-lg-3 col-md-6 col-sm-6"
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

                <h3>Search</h3>

                <p>
                  Increase your business's online visibility with text ads that
                  ensure your business's position at the top of the search
                  engine results page. To ensure sustainable results, your
                  RankingPT ad manager will constantly work to minimize cost per
                  click and maximize conversions.
                </p>
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

                <h3>Screen</h3>

                <p>
                  Maximize the impact of your ads with compelling digital
                  advertising that reaches your customers as they browse the
                  millions of websites on the Internet. Our talented designers
                  create compelling display ads that generate clicks from
                  high-interest audiences.
                </p>
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

                <h3>Youtube</h3>

                <p>
                  Reach engaged audiences with the world's second largest search
                  engine: YouTube. Our YouTube experts conduct ongoing
                  management to capture high-performing keywords and ensure ad
                  messaging reflects the viewer's stage in the customer journey.
                </p>
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

                <h3>Shopping</h3>

                <p>
                  Convert ready-to-buy searchers into paying customers through
                  targeted Google Shopping ads. Our team will use real-time data
                  insights to create a custom Google Shopping Ads strategy that
                  actively introduces valuable customers to your ecommerce
                  store.
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
