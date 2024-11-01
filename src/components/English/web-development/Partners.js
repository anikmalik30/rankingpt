import React from "react"

import Partnerimg1 from "../../../assets/images/home-8-9-10/partner/partner-1.png"
import Partnerimg2 from "../../../assets/images/home-8-9-10/partner/partner-2.png"
import Partnerimg3 from "../../../assets/images/home-8-9-10/partner/partner-3.png"
import Partnerimg4 from "../../../assets/images/home-8-9-10/partner/partner-4.png"
import Partnerimg5 from "../../../assets/images/home-8-9-10/partner/partner-5.png"
import Partnerimg6 from "../../../assets/images/home-8-9-10/partner/partner-6.png"

const Partners = () => {
  return (
    <>
      <div className="mibix-partner-area pt-100 pb-70">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-2 col-6 col-sm-4 col-md-4">
              <div className="mibix-partner-item">
                <a href="#" target="_blank" rel="noreferrer">
                  <img src={Partnerimg1} alt="Partner" />
                </a>
              </div>
            </div>

            <div className="col-lg-2 col-6 col-sm-4 col-md-4">
              <div className="mibix-partner-item">
                <a href="#" target="_blank" rel="noreferrer">
                  <img src={Partnerimg2} alt="Partner" />
                </a>
              </div>
            </div>

            <div className="col-lg-2 col-6 col-sm-4 col-md-4">
              <div className="mibix-partner-item">
                <a href="#" target="_blank" rel="noreferrer">
                  <img src={Partnerimg3} alt="Partner" />
                </a>
              </div>
            </div>

            <div className="col-lg-2 col-6 col-sm-4 col-md-4">
              <div className="mibix-partner-item">
                <a href="#" target="_blank" rel="noreferrer">
                  <img src={Partnerimg4} alt="Partner" />
                </a>
              </div>
            </div>

            <div className="col-lg-2 col-6 col-sm-4 col-md-4">
              <div className="mibix-partner-item">
                <a href="#" target="_blank" rel="noreferrer">
                  <img src={Partnerimg5} alt="Partner" />
                </a>
              </div>
            </div>

            <div className="col-lg-2 col-6 col-sm-4 col-md-4">
              <div className="mibix-partner-item">
                <a href="#" target="_blank" rel="noreferrer">
                  <img src={Partnerimg6} alt="Partner" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Partners
