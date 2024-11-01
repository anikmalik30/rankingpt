import React from "react"
import { Link } from "gatsby"

import ProjectStartImg from "../../../assets/images/dev/support.png"

import Shape2 from "../../../assets/images/shape/shape2.png"
import Shape3 from "../../../assets/images/shape/shape3.png"
import Shape5 from "../../../assets/images/shape/shape5.png"
import Shape6 from "../../../assets/images/shape/shape6.png"
import Shape7 from "../../../assets/images/shape/shape7.png"
import Shape13 from "../../../assets/images/shape/shape13.png"

const AdvantagesMaintenance = () => {
  return (
    <>
      <div className="project-start-area ptb-100">
        <div className="container">
          <div className="row align-items-center">

            <div className="col-lg-6 col-md-12">
              <div
                className="project-start-image text-right"
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-delay="200"
              >
                <img src={ProjectStartImg} alt="Project" />
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div
                className="project-start-content"
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-delay="400"
              >
                <h2>Advantages of website maintenance packages?</h2>
                
                <p> Maintenance options provide support and significantly improve your website.</p>

                <p><b> Improved user experiences </b></p>

                <p> Providing maintenance services is more than just fixing issues; a professional website 
                  company like ours is proactive in optimizing and updating your website to address issues. 
                  We will audit your website to detect potential issues, especially with elements that 
                  affect customer interactions, such as radio elements and checkboxes.

</p>

                <p><b>Updated content and interface</b></p>

                <p> Our website management packages at RankingPT include consulting and web design services.
                   It’s a great way to keep your website up to date and maintain a user-friendly 
                   interface. Our experts are happy to help you find a website maintenance service

</p>

                <Link to="/contact" className="default-btn">
                  Talk with professionals
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="shape2">
          <img src={Shape2} alt="Shape" />
        </div>
        <div className="shape3">
          <img src={Shape3} alt="Shape" />
        </div>
        <div className="shape5">
          <img src={Shape5} alt="Shape" />
        </div>
        <div className="shape6">
          <img src={Shape6} alt="Shape" />
        </div>
        <div className="shape7">
          <img src={Shape7} alt="Shape" />
        </div>
        <div className="shape13">
          <img src={Shape13} alt="Shape" />
        </div>
      </div>
    </>
  )
}

export default AdvantagesMaintenance
