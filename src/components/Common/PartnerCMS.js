import React from "react"

import PartnerImg1 from "../../assets/images/brands/cms/bigcommerce.png"
import PartnerImg2 from "../../assets/images/brands/cms/magento.png"
import PartnerImg3 from "../../assets/images/brands/cms/salesforce-comerce-cloud.png"
import PartnerImg4 from "../../assets/images/brands/cms/shopify.png"
import PartnerImg5 from "../../assets/images/brands/cms/squarespace.png"
import PartnerImg6 from "../../assets/images/brands/cms/volusion.png"
import PartnerImg7 from "../../assets/images/brands/cms/vtex.png"
import PartnerImg8 from "../../assets/images/brands/cms/woocommerce.png"
import PartnerImg9 from "../../assets/images/brands/cms/opencart.png"

const Partner = () => {
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
                <img src={PartnerImg6} alt="Partner" />
              </div>
            </div>

            <div 
              className="col-lg-2 col-6 col-sm-4 col-md-4"
              data-aos="fade-in"
              data-aos-duration="1200"
              data-aos-delay="200"
            >
              <div className="single-partner-item">
                <img src={PartnerImg2} alt="Partner" />
              </div>
            </div>

            <div 
              className="col-lg-2 col-6 col-sm-4 col-md-4"
              data-aos="fade-in"
              data-aos-duration="1200"
              data-aos-delay="300"
            >
              <div className="single-partner-item">
                <img src={PartnerImg3} alt="Partner" />
              </div>
            </div>

            <div 
              className="col-lg-2 col-6 col-sm-4 col-md-4"
              data-aos="fade-in"
              data-aos-duration="1200"
              data-aos-delay="400"
            >
              <div className="single-partner-item">
                <img src={PartnerImg4} alt="Partner" />
              </div>
            </div>

            <div 
              className="col-lg-2 col-6 col-sm-4 col-md-4"
              data-aos="fade-in"
              data-aos-duration="1200"
              data-aos-delay="500"
            >
              <div className="single-partner-item">
                <img src={PartnerImg1} alt="Partner" />
              </div>
            </div>

            <div 
              className="col-lg-2 col-6 col-sm-4 col-md-4"
              data-aos="fade-in"
              data-aos-duration="1200"
              data-aos-delay="600"
            >
              <div className="single-partner-item">
                <img src={PartnerImg5} alt="Partner" />
              </div>
            </div>

            <div 
              className="col-lg-2 col-6 col-sm-4 col-md-4"
              data-aos="fade-in"
              data-aos-duration="1200"
              data-aos-delay="600"
            >
              <div className="single-partner-item">
                <img src={PartnerImg7} alt="Partner" />
              </div>
            </div>

            <div 
              className="col-lg-2 col-6 col-sm-4 col-md-4"
              data-aos="fade-in"
              data-aos-duration="1200"
              data-aos-delay="600"
            >
              <div className="single-partner-item">
                <img src={PartnerImg8} alt="Partner" />
              </div>
            </div>

            <div 
              className="col-lg-2 col-6 col-sm-4 col-md-4"
              data-aos="fade-in"
              data-aos-duration="1200"
              data-aos-delay="600"
            >
              <div className="single-partner-item">
                <img src={PartnerImg9} alt="Partner" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Partner
