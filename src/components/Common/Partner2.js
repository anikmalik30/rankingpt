import React from "react"

import PartnerImg1 from "../../assets/images/partner2/partner-img1.png"
import PartnerImg2 from "../../assets/images/partner2/partner-img2.png"

const Partner2 = () => {
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
                {/* Add anchor tag with href */}
                <a href="https://www.designrush.com/agency/profile/rankingpt" target="_blank" rel="noopener noreferrer">
                  <img src={PartnerImg1} alt="designrush" />
                </a>
              </div>
            </div>

            <div 
              className="col-lg-2 col-6 col-sm-4 col-md-4"
              data-aos="fade-in"
              data-aos-duration="1200"
              data-aos-delay="200"
            >
              <div className="single-partner-item">
                {/* Add anchor tag with href */}
                <a href="https://techbehemoths.com/company/rankingpt" target="_blank" rel="noopener noreferrer">
                  <img src={PartnerImg2} alt="techbehemoths" />
                </a>
              </div>


            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Partner2
