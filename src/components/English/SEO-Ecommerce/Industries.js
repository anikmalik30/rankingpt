import React from "react"
import Icons from "../../../components/Icons/Icons"
import { Link } from "gatsby"

const Industries = () => {
  return (
    <>
      <div className="services-area pt-100 pb-70">
        <div className="container">
          <div className="section-title">
            <h2>Optimize with SEO E-Commerce services</h2>
            <p>
              We offer comprehensive eCommerce SEO services that cover your page
              optimization from start to finish and ensure positive organic
              search results. Check out the inner workings of our eCommerce SEO
              packages and see what you can expect for your eCommerce business
              below:
            </p>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-boxes-box">
                <div className="icon">
                  {/* Replace the flaticon icon with your custom Icons component */}
                  <Icons name="116-pill" size={48} color="#000" />{" "}
                  {/* Adjust `name` to match your icon ID */}
                  <div className="circles-box">
                    <div className="circle-one"></div>
                    <div className="circle-two"></div>
                  </div>
                </div>
                <h3>Website Audit</h3>
                <p>
                  Receive a comprehensive analysis of your website's SEO
                  strengths and areas of opportunity so we can create a
                  customized strategy.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-boxes-box">
                <div className="icon">
                  <Icons name="117-HE~1.SVG" size={48} color="#000" />{" "}
                  {/* Adjust `name` to match your icon ID */}
                  <div className="circles-box">
                    <div className="circle-one"></div>
                    <div className="circle-two"></div>
                  </div>
                </div>
                <h3>Specific Research</h3>
                <p>
                  We discover what your potential customers are searching for
                  and which keywords will attract more buyers and generate more
                  sales.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-boxes-box">
                <div className="icon">
                  <Icons name="117-HE~1.SVG" size={48} color="#000" />{" "}
                  {/* Adjust `name` to match your icon ID */}
                  <div className="circles-box">
                    <div className="circle-one"></div>
                    <div className="circle-two"></div>
                  </div>
                </div>
                <h3>Custom Strategy</h3>
                <p>
                  Our E-Commerce SEO packages include the creation of a
                  personalized plan adapted to your company's goals and
                  expectations, based on audits, analysis and keyword research.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-boxes-box">
                <div className="icon">
                  <Icons name="icon6" size={48} color="#000" />{" "}
                  {/* Adjust `name` to match your icon ID */}
                  <div className="circles-box">
                    <div className="circle-one"></div>
                    <div className="circle-two"></div>
                  </div>
                </div>
                <h3>Build Trust</h3>
                <p>
                  Through specific page targeting and acquiring high-quality
                  links, we ensure that users trust your brand and website.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-boxes-box">
                <div className="icon">
                  <Icons name="#4481911" size={48} color="#000" />{" "}
                  {/* Adjust `name` to match your icon ID */}
                  <div className="circles-box">
                    <div className="circle-one"></div>
                    <div className="circle-two"></div>
                  </div>
                </div>
                <h3>Content Optimization</h3>
                <p>
                  Optimizing your website content and custom metadata for your
                  product and category pages are key to successful eCommerce
                  SEO, along with strategic blog posts.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-boxes-box">
                <div className="icon">
                  <Icons name="001-credit" size={48} color="#000" />{" "}
                  {/* Adjust `name` to match your icon ID */}
                  <div className="circles-box">
                    <div className="circle-one"></div>
                    <div className="circle-two"></div>
                  </div>
                </div>
                <h3>Monthly Reports</h3>
                <p>
                  You will receive monthly reports that will provide visibility
                  into audience growth, rankings, and conversion funnel analysis
                  to assess KPI performance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Industries
