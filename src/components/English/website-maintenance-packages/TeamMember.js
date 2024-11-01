import React from "react"
import { Link } from "gatsby"

import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Autoplay } from "swiper"

import TeamImg1 from "../../../assets/images/home-8-9-10/team/team-5.png"
import TeamImg2 from "../../../assets/images/home-8-9-10/team/team-6.png"
import TeamImg3 from "../../../assets/images/home-8-9-10/team/team-7.png"
import TeamImg4 from "../../../assets/images/home-8-9-10/team/team-8.png"
import TeamImg5 from "../../../assets/images/home-8-9-10/team/team-5.png"
import TeamImg6 from "../../../assets/images/home-8-9-10/team/team-6.png"
import TeamImg7 from "../../../assets/images/home-8-9-10/team/team-7.png"
import TeamImg8 from "../../../assets/images/home-8-9-10/team/team-8.png"

const TeamMember = () => {
  return (
    <>
      <div className="mibix-team-area pt-100 pb-100">
        <div className="container">
          <div className="section-title with-gradient-color">
            <span className="sub-title">OUR TEAM</span>
            <h2>We Help to Acheive Your Business Goal</h2>
          </div>

          <Swiper
            spaceBetween={30}
            navigation={true}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              576: {
                slidesPerView: 2,
              },
              992: {
                slidesPerView: 3,
              },
              1200: {
                slidesPerView: 4,
              },
            }}
            autoplay={{
              delay: 6500,
              disableOnInteraction: true,
              pauseOnMouseEnter: true,
            }}
            modules={[Navigation, Autoplay]}
            className="mibix-team-slides"
          >
            <SwiperSlide>
              <div className="mibix-team-card text-center">
                <div className="team-image">
                  <img src={TeamImg1} alt="Team" />

                  <ul className="social-link">
                    <li>
                      <a
                        href="https://www.facebook.com/"
                        className="d-block"
                        target="_blank" rel="noreferrer"
                      >
                        <i className="bx bxl-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.twitter.com/"
                        className="d-block"
                        target="_blank" rel="noreferrer"
                      >
                        <i className="bx bxl-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.instagram.com/"
                        className="d-block"
                        target="_blank" rel="noreferrer"
                      >
                        <i className="bx bxl-instagram"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.linkedin.com/"
                        className="d-block"
                        target="_blank" rel="noreferrer"
                      >
                        <i className="bx bxl-linkedin"></i>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="team-content">
                  <h3>James Anderson</h3>
                  <span>CEO</span>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="mibix-team-card text-center">
                <div className="team-image">
                  <img src={TeamImg2} alt="Team" />

                  <ul className="social-link">
                    <li>
                      <a
                        href="https://www.facebook.com/"
                        className="d-block"
                        target="_blank" rel="noreferrer"
                      >
                        <i className="bx bxl-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.twitter.com/"
                        className="d-block"
                        target="_blank" rel="noreferrer"
                      >
                        <i className="bx bxl-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.instagram.com/"
                        className="d-block"
                        target="_blank" rel="noreferrer"
                      >
                        <i className="bx bxl-instagram"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.linkedin.com/"
                        className="d-block"
                        target="_blank" rel="noreferrer"
                      >
                        <i className="bx bxl-linkedin"></i>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="team-content">
                  <h3>Alina Smith</h3>
                  <span>Marketing Lead</span>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="mibix-team-card text-center">
                <div className="team-image">
                  <img src={TeamImg3} alt="Team" />

                  <ul className="social-link">
                    <li>
                      <a
                        href="https://www.facebook.com/"
                        className="d-block"
                        target="_blank" rel="noreferrer"
                      >
                        <i className="bx bxl-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.twitter.com/"
                        className="d-block"
                        target="_blank" rel="noreferrer"
                      >
                        <i className="bx bxl-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.instagram.com/"
                        className="d-block"
                        target="_blank" rel="noreferrer"
                      >
                        <i className="bx bxl-instagram"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.linkedin.com/"
                        className="d-block"
                        target="_blank" rel="noreferrer"
                      >
                        <i className="bx bxl-linkedin"></i>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="team-content">
                  <h3>Sarah Taylor</h3>
                  <span>Advisor</span>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="mibix-team-card text-center">
                <div className="team-image">
                  <img src={TeamImg4} alt="Team" />

                  <ul className="social-link">
                    <li>
                      <a
                        href="https://www.facebook.com/"
                        className="d-block"
                        target="_blank" rel="noreferrer"
                      >
                        <i className="bx bxl-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.twitter.com/"
                        className="d-block"
                        target="_blank" rel="noreferrer"
                      >
                        <i className="bx bxl-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.instagram.com/"
                        className="d-block"
                        target="_blank" rel="noreferrer"
                      >
                        <i className="bx bxl-instagram"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.linkedin.com/"
                        className="d-block"
                        target="_blank" rel="noreferrer"
                      >
                        <i className="bx bxl-linkedin"></i>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="team-content">
                  <h3>David Warner</h3>
                  <span>Support</span>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="mibix-team-card text-center">
                <div className="team-image">
                  <img src={TeamImg5} alt="Team" />

                  <ul className="social-link">
                    <li>
                      <a
                        href="https://www.facebook.com/"
                        className="d-block"
                        target="_blank" rel="noreferrer"
                      >
                        <i className="bx bxl-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.twitter.com/"
                        className="d-block"
                        target="_blank" rel="noreferrer"
                      >
                        <i className="bx bxl-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.instagram.com/"
                        className="d-block"
                        target="_blank" rel="noreferrer"
                      >
                        <i className="bx bxl-instagram"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.linkedin.com/"
                        className="d-block"
                        target="_blank" rel="noreferrer"
                      >
                        <i className="bx bxl-linkedin"></i>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="team-content">
                  <h3>Alina Smith</h3>
                  <span>CEO</span>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="mibix-team-card text-center">
                <div className="team-image">
                  <img src={TeamImg6} alt="Team" />

                  <ul className="social-link">
                    <li>
                      <a
                        href="https://www.facebook.com/"
                        className="d-block"
                        target="_blank" rel="noreferrer"
                      >
                        <i className="bx bxl-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.twitter.com/"
                        className="d-block"
                        target="_blank" rel="noreferrer"
                      >
                        <i className="bx bxl-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.instagram.com/"
                        className="d-block"
                        target="_blank" rel="noreferrer"
                      >
                        <i className="bx bxl-instagram"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.linkedin.com/"
                        className="d-block"
                        target="_blank" rel="noreferrer"
                      >
                        <i className="bx bxl-linkedin"></i>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="team-content">
                  <h3>Sarah Taylor</h3>
                  <span>Marketing Lead</span>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="mibix-team-card text-center">
                <div className="team-image">
                  <img src={TeamImg7} alt="Team" />

                  <ul className="social-link">
                    <li>
                      <a
                        href="https://www.facebook.com/"
                        className="d-block"
                        target="_blank" rel="noreferrer"
                      >
                        <i className="bx bxl-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.twitter.com/"
                        className="d-block"
                        target="_blank" rel="noreferrer"
                      >
                        <i className="bx bxl-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.instagram.com/"
                        className="d-block"
                        target="_blank" rel="noreferrer"
                      >
                        <i className="bx bxl-instagram"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.linkedin.com/"
                        className="d-block"
                        target="_blank" rel="noreferrer"
                      >
                        <i className="bx bxl-linkedin"></i>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="team-content">
                  <h3>Alina Smith</h3>
                  <span>Advisor</span>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="mibix-team-card text-center">
                <div className="team-image">
                  <img src={TeamImg8} alt="Team" />

                  <ul className="social-link">
                    <li>
                      <a
                        href="https://www.facebook.com/"
                        className="d-block"
                        target="_blank" rel="noreferrer"
                      >
                        <i className="bx bxl-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.twitter.com/"
                        className="d-block"
                        target="_blank" rel="noreferrer"
                      >
                        <i className="bx bxl-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.instagram.com/"
                        className="d-block"
                        target="_blank" rel="noreferrer"
                      >
                        <i className="bx bxl-instagram"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.linkedin.com/"
                        className="d-block"
                        target="_blank" rel="noreferrer"
                      >
                        <i className="bx bxl-linkedin"></i>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="team-content">
                  <h3>David Warner</h3>
                  <span>Support</span>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="mibix-team-bottom-text">
          <Link to="/team-1">See All Our Team Member</Link>
        </div>
      </div>
    </>
  )
}

export default TeamMember
