import React from "react"
import { Link } from "gatsby"

const Services = () => {
  return (
    <>
      <div className="mibix-services-area bg-F3ECEA pt-100 pb-75">
        <div className="container">
          <div className="section-title with-gradient-color">
            <span className="sub-title">SERVICES</span>
            <h2>What Web Solution Do You Need?</h2>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6">
              <div className="mibix-services-box">
                <div className="icon">
                  <i className="flaticon-megaphone"></i>
                </div>
                <h3>
                  <Link to="/single-services">Web Development Consulting</Link>
                </h3>
                <p>
                Get expert advice and define your project scope for a smooth development process.


                </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="mibix-services-box">
                <div className="icon">
                  <i className="flaticon-keywords"></i>
                </div>
                <h3>
                  <Link to="/single-services">Custom Web Development</Link>
                </h3>
                <p>
                Create tailored solutions, from CRM systems to SaaS applications, designed to boost engagement and growth.


                </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="mibix-services-box">
                <div className="icon">
                  <i className="flaticon-content-management"></i>
                </div>
                <h3>
                  <Link to="/single-services">Web Design Services</Link>
                </h3>
                <p>
                Beautiful and functional web designs that reflect your brand's values.


                </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="mibix-services-box">
                <div className="icon">
                  <i className="flaticon-competitor"></i>
                </div>
                <h3>
                  <Link to="/single-services">Ecommerce Development</Link>
                </h3>
                <p>
                Build feature rich ecommerce platforms that drive sales and customer satisfaction.


                </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="mibix-services-box">
                <div className="icon">
                  <i className="flaticon-ppc"></i>
                </div>
                <h3>
                  <Link to="/single-services">Web Application Development</Link>
                </h3>
                <p>
                Custom web apps designed for ease of use and operational alignment.


                </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="mibix-services-box">
                <div className="icon">
                  <i className="flaticon-startup"></i>
                </div>
                <h3>
                  <Link to="/single-services">Progressive Web Apps (PWAs)</Link>
                </h3>
                <p>
                Reach your audience anytime with apps that offer native-like experiences.


                </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="mibix-services-box">
                <div className="icon">
                  <i className="flaticon-startup"></i>
                </div>
                <h3>
                  <Link to="/single-services">CMS Development</Link>
                </h3>
                <p>
                Simplify content management with custom CMS platforms like Wordpress and Shopify.


                </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="mibix-services-box">
                <div className="icon">
                  <i className="flaticon-startup"></i>
                </div>
                <h3>
                  <Link to="/single-services">API Development & Integration
                  </Link>
                </h3>
                <p>
                Enhance functionality with powerful APIs.




                </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="mibix-services-box">
                <div className="icon">
                  <i className="flaticon-startup"></i>
                </div>
                <h3>
                  <Link to="/single-services">Staff Augmentation</Link>
                </h3>
                <p>
                Access skilled web developers on demand to meet your project needs.


                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Services
