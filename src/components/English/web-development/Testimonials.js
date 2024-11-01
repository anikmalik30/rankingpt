import React from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination } from "swiper"

import ClientImg1 from "../../../assets/images/home-8-9-10/clients/clients-1.png"
import ClientImg2 from "../../../assets/images/home-8-9-10/clients/clients-2.png"
import ClientImg3 from "../../../assets/images/home-8-9-10/clients/clients-3.png"

const Testimonials = () => {
  return (
    <>
      <div className="mibix-clients-area-with-white-color ptb-100">
        <div className="container">
          <div className="section-title with-gradient-color">
            <span className="sub-title">TESTIMONIALS</span>
            <h2>What Our Clients Are Saying?</h2>
          </div>

          <Swiper
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              0: {
                slidesPerView: 2,
              },
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            modules={[Pagination]}
            className="mibix-clients-slides"
          >
            <SwiperSlide>
              <div className="mibix-clients-card">
                <div className="client-info">
                  <div className="d-flex align-items-center">
                    <img src={ClientImg1} alt="Client" />
                    <div className="title">
                      <h3>John Smith</h3>
                      <span>Python Developer</span>
                    </div>
                  </div>
                </div>
                <p>
                  “Vestibulum ante ipsum primis in faucibus orci luctus et
                  ultrices posuere cubilia Curae Donec velit neque auctor sit
                  amet aliquam vel ullamcorper sit amet ligula donec rutrum
                  congue leo eget malesuada.”
                </p>
                <div className="icon">
                  <i className="flaticon-quote"></i>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="mibix-clients-card">
                <div className="client-info">
                  <div className="d-flex align-items-center">
                    <img src={ClientImg2} alt="Client" />
                    <div className="title">
                      <h3>Sarah Taylor</h3>
                      <span>Marketing Lead</span>
                    </div>
                  </div>
                </div>
                <p>
                  “Vestibulum ante ipsum primis in faucibus orci luctus et
                  ultrices posuere cubilia Curae Donec velit neque auctor sit
                  amet aliquam vel ullamcorper sit amet ligula donec rutrum
                  congue leo eget malesuada.”
                </p>
                <div className="icon">
                  <i className="flaticon-quote"></i>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="mibix-clients-card">
                <div className="client-info">
                  <div className="d-flex align-items-center">
                    <img src={ClientImg3} alt="Client" />
                    <div className="title">
                      <h3>David Warner</h3>
                      <span>Support</span>
                    </div>
                  </div>
                </div>
                <p>
                  “Vestibulum ante ipsum primis in faucibus orci luctus et
                  ultrices posuere cubilia Curae Donec velit neque auctor sit
                  amet aliquam vel ullamcorper sit amet ligula donec rutrum
                  congue leo eget malesuada.”
                </p>
                <div className="icon">
                  <i className="flaticon-quote"></i>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="mibix-clients-card">
                <div className="client-info">
                  <div className="d-flex align-items-center">
                    <img src={ClientImg1} alt="Client" />
                    <div className="title">
                      <h3>John Smith</h3>
                      <span>Python Developer</span>
                    </div>
                  </div>
                </div>
                <p>
                  “Vestibulum ante ipsum primis in faucibus orci luctus et
                  ultrices posuere cubilia Curae Donec velit neque auctor sit
                  amet aliquam vel ullamcorper sit amet ligula donec rutrum
                  congue leo eget malesuada.”
                </p>
                <div className="icon">
                  <i className="flaticon-quote"></i>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="mibix-clients-card">
                <div className="client-info">
                  <div className="d-flex align-items-center">
                    <img src={ClientImg2} alt="Client" />
                    <div className="title">
                      <h3>Sarah Taylor</h3>
                      <span>Marketing Lead</span>
                    </div>
                  </div>
                </div>
                <p>
                  “Vestibulum ante ipsum primis in faucibus orci luctus et
                  ultrices posuere cubilia Curae Donec velit neque auctor sit
                  amet aliquam vel ullamcorper sit amet ligula donec rutrum
                  congue leo eget malesuada.”
                </p>
                <div className="icon">
                  <i className="flaticon-quote"></i>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="mibix-clients-card">
                <div className="client-info">
                  <div className="d-flex align-items-center">
                    <img src={ClientImg3} alt="Client" />
                    <div className="title">
                      <h3>David Warner</h3>
                      <span>Support</span>
                    </div>
                  </div>
                </div>
                <p>
                  “Vestibulum ante ipsum primis in faucibus orci luctus et
                  ultrices posuere cubilia Curae Donec velit neque auctor sit
                  amet aliquam vel ullamcorper sit amet ligula donec rutrum
                  congue leo eget malesuada.”
                </p>
                <div className="icon">
                  <i className="flaticon-quote"></i>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="mibix-clients-card">
                <div className="client-info">
                  <div className="d-flex align-items-center">
                    <img src={ClientImg1} alt="Client" />
                    <div className="title">
                      <h3>John Smith</h3>
                      <span>Python Developer</span>
                    </div>
                  </div>
                </div>
                <p>
                  “Vestibulum ante ipsum primis in faucibus orci luctus et
                  ultrices posuere cubilia Curae Donec velit neque auctor sit
                  amet aliquam vel ullamcorper sit amet ligula donec rutrum
                  congue leo eget malesuada.”
                </p>
                <div className="icon">
                  <i className="flaticon-quote"></i>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="mibix-clients-card">
                <div className="client-info">
                  <div className="d-flex align-items-center">
                    <img src={ClientImg2} alt="Client" />
                    <div className="title">
                      <h3>Sarah Taylor</h3>
                      <span>Marketing Lead</span>
                    </div>
                  </div>
                </div>
                <p>
                  “Vestibulum ante ipsum primis in faucibus orci luctus et
                  ultrices posuere cubilia Curae Donec velit neque auctor sit
                  amet aliquam vel ullamcorper sit amet ligula donec rutrum
                  congue leo eget malesuada.”
                </p>
                <div className="icon">
                  <i className="flaticon-quote"></i>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="mibix-clients-card">
                <div className="client-info">
                  <div className="d-flex align-items-center">
                    <img src={ClientImg3} alt="Client" />
                    <div className="title">
                      <h3>David Warner</h3>
                      <span>Support</span>
                    </div>
                  </div>
                </div>
                <p>
                  “Vestibulum ante ipsum primis in faucibus orci luctus et
                  ultrices posuere cubilia Curae Donec velit neque auctor sit
                  amet aliquam vel ullamcorper sit amet ligula donec rutrum
                  congue leo eget malesuada.”
                </p>
                <div className="icon">
                  <i className="flaticon-quote"></i>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  )
}

export default Testimonials
