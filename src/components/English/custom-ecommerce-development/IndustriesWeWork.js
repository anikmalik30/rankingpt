import React from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination, Autoplay } from "swiper"

import TeamImg1 from "../../../assets/images/industries/finance.jpg"
import TeamImg2 from "../../../assets/images/industries/mobile_gaming.jpg"
import TeamImg3 from "../../../assets/images/industries/real_estate.jpg"
import TeamImg4 from "../../../assets/images/industries/eventplanning.jpg"
import TeamImg5 from "../../../assets/images/industries/ecommerce.jpg"
import TeamImg6 from "../../../assets/images/industries/education_learning.jpg"
import TeamImg7 from "../../../assets/images/industries/food_drinks.jpg"
import TeamImg8 from "../../../assets/images/industries/health_fitness.jpg"
import TeamImg9 from "../../../assets/images/industries/marketplace_solutions.jpg"
import TeamImg10 from "../../../assets/images/industries/Media_Enterainment.jpg"
import TeamImg11 from "../../../assets/images/industries/ondemandservices.jpg"
import TeamImg12 from "../../../assets/images/industries/taxi_solutions.jpg"
import TeamImg13 from "../../../assets/images/industries/Transport_Logistic.jpg"
import TeamImg14 from "../../../assets/images/industries/travel_tourism.jpg"
import Shape17 from "../../../assets/images/shape/shape17.png"

const IndustriesWeWork = () => {
  return (
    <>
      <div className="team-area-two ptb-100">
        <div className="container">
          <div className="section-title">
            <h2>Industries We Work With</h2>
            <p>
            We provide innovative solutions for following industries.
            </p>
          </div>

          <Swiper
            spaceBetween={30}
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
              992: {
                slidesPerView: 4,
              },
            }}
            autoplay={{
              delay: 1500,
              disableOnInteraction: true,
              pauseOnMouseEnter: true,
            }}
            modules={[Pagination, Autoplay]}
            className="team-slides"
          >
            <SwiperSlide>
              <div className="single-team-member">
                <div className="image">
                  <img src={TeamImg1} alt="Team" />
                </div>

                <div className="content">
                  <h3>Banking & Finance</h3>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="single-team-member">
                <div className="image">
                  <img src={TeamImg2} alt="Team" />

                </div>

                <div className="content">
                  <h3>Mobile Gaming</h3>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="single-team-member">
                <div className="image">
                  <img src={TeamImg3} alt="Team" />
                </div>

                <div className="content">
                  <h3>Real Estate</h3>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="single-team-member">
                <div className="image">
                  <img src={TeamImg4} alt="Team" />

                </div>

                <div className="content">
                  <h3>Events & Planning</h3>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="single-team-member">
                <div className="image">
                  <img src={TeamImg5} alt="Team" />
                </div>

                <div className="content">
                  <h3>ECommerce</h3>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="single-team-member">
                <div className="image">
                  <img src={TeamImg6} alt="Team" />

                </div>

                <div className="content">
                  <h3>Education & Learning</h3>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="single-team-member">
                <div className="image">
                  <img src={TeamImg7} alt="Team" />
                </div>

                <div className="content">
                  <h3>Food & Drinks</h3>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="single-team-member">
                <div className="image">
                  <img src={TeamImg8} alt="Team" />
                </div>

                <div className="content">
                  <h3>Health & Fitness</h3>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="single-team-member">
                <div className="image">
                  <img src={TeamImg9} alt="Team" />
                </div>

                <div className="content">
                  <h3>Marketplace Solutions</h3>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="single-team-member">
                <div className="image">
                  <img src={TeamImg10} alt="Team" />
                </div>

                <div className="content">
                  <h3>Media & Entertainment</h3>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="single-team-member">
                <div className="image">
                  <img src={TeamImg11} alt="Team" />
                </div>

                <div className="content">
                  <h3>On Demand Services</h3>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="single-team-member">
                <div className="image">
                  <img src={TeamImg12} alt="Team" />
                </div>

                <div className="content">
                  <h3>Taxi Solutions</h3>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="single-team-member">
                <div className="image">
                  <img src={TeamImg13} alt="Team" />
                </div>

                <div className="content">
                  <h3>Transport & Logistic</h3>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="single-team-member">
                <div className="image">
                  <img src={TeamImg14} alt="Team" />
                </div>

                <div className="content">
                  <h3>Travel & Tourism</h3>
                </div>
              </div>
            </SwiperSlide>

          </Swiper>
        </div>

        <div className="shape17">
          <img src={Shape17} alt="Shape" />
        </div>
      </div>
    </>
  )
}

export default IndustriesWeWork
