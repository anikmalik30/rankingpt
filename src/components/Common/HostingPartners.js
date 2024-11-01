import React from "react"

import HostingPartner1 from "../../assets/images/brands/hosting/digitalocean.png"
import HostingPartner2 from "../../assets/images/brands/hosting/azure.png"
import HostingPartner3 from "../../assets/images/brands/hosting//aws.png"
import HostingPartner4 from "../../assets/images/brands/hosting//vultr.png"
import HostingPartner5 from "../../assets/images/brands/hosting//bluehost.png"
import HostingPartner6 from "../../assets/images/brands/hosting//godaddy.png"

const HostingPartners = () => {
  return (
    <>
      <div className="partner-area bg-f9f9f9 ptb-70">
        <div className="container">
          <div className="row align-items-center justify-content-md-center">
            <div 
              className="col-lg-2 col-6 col-sm-4 col-md-4"
              data-aos="fade-in"
              data-aos-duration="1200"
              data-aos-delay="100"
            >
              <div className="single-partner-item">
                <img src={HostingPartner1} alt="Partner" />
              </div>
            </div>

            <div 
              className="col-lg-2 col-6 col-sm-4 col-md-4"
              data-aos="fade-in"
              data-aos-duration="1200"
              data-aos-delay="200"
            >
              <div className="single-partner-item">
                <img src={HostingPartner2} alt="Partner" />
              </div>
            </div>

            <div 
              className="col-lg-2 col-6 col-sm-4 col-md-4"
              data-aos="fade-in"
              data-aos-duration="1200"
              data-aos-delay="300"
            >
              <div className="single-partner-item">
                <img src={HostingPartner3} alt="Partner" />
              </div>
            </div>

            <div 
              className="col-lg-2 col-6 col-sm-4 col-md-4"
              data-aos="fade-in"
              data-aos-duration="1200"
              data-aos-delay="400"
            >
              <div className="single-partner-item">
                <img src={HostingPartner4} alt="Partner" />
              </div>
            </div>

            <div 
              className="col-lg-2 col-6 col-sm-4 col-md-4"
              data-aos="fade-in"
              data-aos-duration="1200"
              data-aos-delay="500"
            >
              <div className="single-partner-item">
                <img src={HostingPartner5} alt="Partner" />
              </div>
            </div>

            <div 
              className="col-lg-2 col-6 col-sm-4 col-md-4"
              data-aos="fade-in"
              data-aos-duration="1200"
              data-aos-delay="600"
            >
              <div className="single-partner-item">
                <img src={HostingPartner6} alt="Partner" />
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}

export default HostingPartners
