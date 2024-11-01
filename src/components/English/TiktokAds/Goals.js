import React from "react"
import Icons from "../../../components/Icons/Icons"
import { Link } from "gatsby"

const Goals = () => {
  return (
    <>
      <div className="featured-services-area pt-100 pb-70">
        <div className="container">
          <div className="section-title">
            <h2>Why Tiktok Ads?

            </h2>
            <p>
            Tiktok is the hottest social media site in the world. It’s like Facebook in 2008 – a brand new platform with huge potential and a massive, engaged user base. It’s the perfect platform to reach out to the most impulsive generation in history, swing your marketing hooks straight into their wallets and pull out some fun coupons.</p>

            <p>Don’t know where to start?</p>


          </div>

          <div className="d-flex justify-content-center align-items-center">
            <Link to="/contact" className="default-btn">
            Let's chat!
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

                <h3>Increase your reach</h3>

                <p>
                More than 150 million Millennials and Gen-Zs are using TikTok, but the app is also becoming popular among other generations, with 80% of users aged 16-34 and 26% aged 25-44.


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

                <h3>Increase engagement</h3>

                <p>
                Drive engagement with trending sounds and hashtags. TikTok's algorithm means that anyone and any content can go viral - it's just a matter of posting the right content at the right time.


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

                <h3>Build a brand personality</h3>

                <p>
                Well-run ad campaigns on TikTok help brands thrive by being unique. Show off your personality and let the world know what makes you different from others using fun, engaging content that represents your brand.


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
