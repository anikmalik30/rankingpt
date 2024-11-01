import React from "react"
import Icons from "../../../components/Icons/Icons"
import { Link } from "gatsby"

const Goals = () => {
  return (
    <>
      <div className="featured-services-area pt-100 pb-70">
        <div className="container">
          <div className="section-title">
            <h2>The Benefits of Youtube Ads</h2>
            <p>
              Using YouTube for marketing isn’t just about leveraging its vast
              audience, it’s also about leveraging the platform’s ability to
              deliver precise targeting and cost-effective advertising
              campaigns. YouTube allows your brand to stand out through engaging
              visual storytelling, engaging with your audience in a meaningful
              way. Additionally, the platform provides detailed analytics to
              understand every user action, allowing you to optimize your
              campaigns based on hard data.
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

                <h3>Reach Your Target Audience</h3>

                <p>
                  YouTube’s vast user base not only translates into reach, but
                  also into opportunities to connect with exactly the right
                  audience. YouTube’s robust targeting options allow you to
                  narrow down your audience based on demographics, interests,
                  behaviors, and more. This precision ensures that your message
                  reaches the people most likely to engage with your brand or
                  product, maximizing the effectiveness of your campaigns.
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

                <h3>Increase brand awareness</h3>

                <p>
                  Building and maintaining brand awareness is essential for
                  long-term growth. YouTube offers an ideal platform to support
                  your brand awareness efforts. By showing your ads to a broad
                  but precisely targeted audience, you can generate widespread
                  awareness at a surprisingly low cost compared to traditional
                  advertising channels.
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

                <h3>Visual Storytelling</h3>

                <p>
                  In today’s digital landscape, consumers are drawn to visual
                  content. YouTube allows you to tell your brand story in a
                  compelling and memorable way through video advertising. With
                  creative video content, you can not only convey your brand
                  message, but also evoke emotions and leave a lasting
                  impression on viewers.
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
                  <Icons name="088-growth-1" size={48} color="#000" />{" "}
                  {/* Adjust `name` to match your icon ID */}
                  <div className="circles-box">
                    <div className="circle-one"></div>
                    <div className="circle-two"></div>
                  </div>
                </div>

                <h3>Profitable Advertising</h3>

                <p>
                  One of the advantages of online video advertising on YouTube
                  is its cost-effectiveness. You only pay when viewers engage
                  with your content, whether through clicks, views, or other
                  interactions. This pay-per-engagement model ensures that you
                  get value for your advertising budget and maximize your return
                  on investment (ROI).
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
                  <Icons name="088-growth-1" size={48} color="#000" />{" "}
                  {/* Adjust `name` to match your icon ID */}
                  <div className="circles-box">
                    <div className="circle-one"></div>
                    <div className="circle-two"></div>
                  </div>
                </div>

                <h3>Involvement and interaction</h3>

                <p>
                  YouTube Ads provide a two-way communication platform with your
                  audience. Viewers can like, comment and share your videos,
                  allowing for direct interaction and building a community
                  around your brand.
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
                  <Icons name="088-growth-1" size={48} color="#000" />{" "}
                  {/* Adjust `name` to match your icon ID */}
                  <div className="circles-box">
                    <div className="circle-one"></div>
                    <div className="circle-two"></div>
                  </div>
                </div>

                <h3>Analysis and insights</h3>

                <p>
                  YouTube offers robust analytics tools that provide valuable
                  insights into your audience behavior and campaign performance.
                  You can monitor views, engagement metrics, and conversion
                  data, allowing you to adjust your strategies based on
                  real-time data.
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
