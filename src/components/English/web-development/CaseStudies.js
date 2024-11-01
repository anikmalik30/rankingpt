import React from "react"
import { Link } from "gatsby"

import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination } from "swiper"

import CaseStudies1 from "../../../assets/images/home-8-9-10/case-studies/case-studies-1.jpg"
import CaseStudies2 from "../../../assets/images/home-8-9-10/case-studies/case-studies-2.jpg"
import CaseStudies3 from "../../../assets/images/home-8-9-10/case-studies/case-studies-3.jpg"

const CaseStudies = () => {
  return (
    <>
      <div className="mibix-case-studies-area ptb-100">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-4 col-md-12">
              <div className="mibix-case-studies-section-content">
                <span>CASE STUDIES</span>
                <h3>Check of Our Some Recent Works & Case Studies</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipiscing elit sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua
                  quis ipsum suspendisse ultrices gravida.
                </p>
              </div>
            </div>

            <div className="col-lg-8 col-md-12">
              <Swiper
                slidesPerView={1}
                spaceBetween={10}
                pagination={{
                  clickable: true,
                }}
                breakpoints={{
                  0: {
                    slidesPerView: 1,
                  },
                  576: {
                    slidesPerView: 2,
                  },
                  1200: {
                    slidesPerView: 3,
                  },
                }}
                modules={[Pagination]}
                className="mibix-case-studies-slides"
              >
                <SwiperSlide>
                  <div className="mibix-case-studies-card">
                    <Link to="/single-portfolio">
                      <img src={CaseStudies1} alt="Case Studies" />
                    </Link>

                    <div className="content">
                      <h3>
                        <Link to="/single-portfolio">Data Scientist</Link>
                      </h3>
                      <div className="icon">
                        <Link to="/single-portfolio">
                          <i className="flaticon-next-button"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="mibix-case-studies-card">
                    <Link to="/single-portfolio">
                      <img src={CaseStudies2} alt="Case Studies" />
                    </Link>

                    <div className="content">
                      <h3>
                        <Link to="/single-portfolio">Data Analysis</Link>
                      </h3>
                      <div className="icon">
                        <Link to="/single-portfolio">
                          <i className="flaticon-next-button"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="mibix-case-studies-card">
                    <Link to="/single-portfolio">
                      <img src={CaseStudies3} alt="Case Studies" />
                    </Link>

                    <div className="content">
                      <h3>
                        <Link to="/single-portfolio">Detection Project</Link>
                      </h3>
                      <div className="icon">
                        <Link to="/single-portfolio">
                          <i className="flaticon-next-button"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="mibix-case-studies-card">
                    <Link to="/single-portfolio">
                      <img src={CaseStudies1} alt="Case Studies" />
                    </Link>

                    <div className="content">
                      <h3>
                        <Link to="/single-portfolio">Data Scientist</Link>
                      </h3>
                      <div className="icon">
                        <Link to="/single-portfolio">
                          <i className="flaticon-next-button"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="mibix-case-studies-card">
                    <Link to="/single-portfolio">
                      <img src={CaseStudies2} alt="Case Studies" />
                    </Link>

                    <div className="content">
                      <h3>
                        <Link to="/single-portfolio">Data Analysis</Link>
                      </h3>
                      <div className="icon">
                        <Link to="/single-portfolio">
                          <i className="flaticon-next-button"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="mibix-case-studies-card ">
                    <Link to="/single-portfolio">
                      <img src={CaseStudies3} alt="Case Studies" />
                    </Link>

                    <div className="content">
                      <h3>
                        <Link to="/single-portfolio">Detection Project</Link>
                      </h3>
                      <div className="icon">
                        <Link to="/single-portfolio">
                          <i className="flaticon-next-button"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default CaseStudies
