import React from "react"
import { Link } from "gatsby"

import FeaturesImg1 from "../../../assets/images/home-8-9-10/features/features-4.png"
import FeaturesImg2 from "../../../assets/images/home-8-9-10/features/features-5.png"
import FeaturesImg3 from "../../../assets/images/home-8-9-10/features/features-6.png"

const Features = () => {
  return (
    <>
      <div className="mibix-features-area">
        <div className="container">
          <div className="mibix-features-inner-box">
            <div className="row justify-content-center">
              <div className="col-lg-4 col-sm-6">
                <div className="mibix-features-box">
                  <div className="features-image">
                    <Link to="/single-services">
                      <img src={FeaturesImg1} alt="Features" />
                    </Link>
                  </div>
                  <h3>
                    <Link to="/single-services">Ecommerce</Link>
                  </h3>
                  <p>
                  21 years in ecommerce development, we’ve grown the expertise from entry-level shops 
                  for startups to custom ecommerce solutions built for large-scale and high-growth businesses.
                   We multiply business efficiency by using scalable microservices architectures and enabling 
                   high automation of all business processes.


                  </p>
                </div>
              </div>

              <div className="col-lg-4 col-sm-6">
                <div className="mibix-features-box">
                  <div className="features-image">
                    <Link to="/single-services">
                      <img src={FeaturesImg2} alt="Features" />
                    </Link>
                  </div>
                  <h3>
                    <Link to="/single-services">Websites</Link>
                  </h3>
                  <p>
                  250+ businesses, governmental and non-profit organizations use the websites we’ve 
                  created for corporate presentation and brand building. We make sure our websites have an 
                  easy-to-use page editor for dynamic content management.


                  </p>
                </div>
              </div>

              <div className="col-lg-4 col-sm-6">
                <div className="mibix-features-box">
                  <div className="features-image">
                    <Link to="/single-services">
                      <img src={FeaturesImg3} alt="Features" />
                    </Link>
                  </div>
                  <h3>
                    <Link to="/single-services">Web apps</Link>
                  </h3>
                  <p>
                  In our portfolio of 1,900+ created web apps, you will find solutions for efficient
                   management of different business activities. We apply smart automation to streamline
                    workflows and integrate corporate apps together for coherent operation.


                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Features
