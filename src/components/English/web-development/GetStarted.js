import React from "react"
import { Link } from "gatsby"

import GetStartedImg from "../../../assets/images/home-8-9-10/get-started/get-started.png"

const GetStarted = () => {
  return (
    <>
      <div className="mibix-get-started-area ptb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="mibix-get-started-image">
                <img src={GetStartedImg} alt="Get Started" />
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div className="mibix-get-started-content">
                <span>GET STARTED</span>
                <h3>How we can help your company grow? </h3>
                <p>
                Our certified developers and award-winning experts will help you build your website from 
                scratch and grow your brand online. Explore our website development services.
Digital Silk offers custom end-to-end web development services. We analyze your industry and competitors 
to devise a custom strategy tailored to your business needs. Then we craft designs and develop features and
 functionalities all geared towards growing your brand online. Work with our experts to receive custom website
  optimized for increased traffic and conversion.




                </p>
                <div className="get-started-btn">
                  <Link to="/contact" className="default-btn-with-radius">
                    Start your Project <i className="flaticon-next-button"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default GetStarted
