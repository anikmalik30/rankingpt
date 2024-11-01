import React from "react"
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemPanel,
  AccordionItemButton,
} from "react-accessible-accordion"

const WhatWeDo = () => {
  return (
    <>
      <div className="what-we-do-area ptb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div 
                className="what-we-do-content"
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-delay="100"
              >
                <span className="sub-title">Driving Growth for Your Business</span>
                <h2>Get visible at every place your customer is</h2>
                <p>
                No matter where your customers are in their journey, we ensure your 
                brand is there to guide them forward. Whether they are just getting 
                to know you or ready to make a purchase, our targeted campaigns ensure 
                your message is always relevant and impactful.


                </p>

                <div className="skills-item">
                  <div className="skills-header">
                    <h4 className="skills-title">Targeted Digital Solutions</h4>
                    <div className="skills-percentage">
                      <div className="count-box">99%</div>
                    </div>
                  </div>
                  <div className="skills-bar">
                    <div className="bar-inner">
                      <div className="bar progress-line" data-width="95"></div>
                    </div>
                  </div>
                </div>


                <div className="skills-item">
                  <div className="skills-header">
                    <h4 className="skills-title">Audience Growth & Brand Strategy</h4>
                    <div className="skills-percentage">
                      <div className="count-box">99%</div>
                    </div>
                  </div>
                  <div className="skills-bar">
                    <div className="bar-inner">
                      <div className="bar progress-line" data-width="95"></div>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div 
                className="what-we-do-content-accordion"
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-delay="300"
              >
                <Accordion allowZeroExpanded preExpanded={["a"]}>
                  <AccordionItem uuid="a">
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        <span>Awareness</span>
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>
                      At RankingPT, we help your brand get noticed by your audience through 
                      impactful awareness campaigns. We focus on creating engaging content
                       and leveraging platforms like social media, Google Ads, and display networks 
                       to ensure your message reaches the right people at the right time.


                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>

                  <AccordionItem uuid="b">
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        <span>Interest</span>
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>
                      Once we've grabbed the audience's attention, we aim to convert their 
                      curiosity into interest. By using strategies like retargeting ads, blog posts,
                       and personalized email marketing, we ensure your audience begins to understand
                        the value of your products and services.


                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>

                  <AccordionItem uuid="c">
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        <span>Decision</span>
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>
                      This is where we build trust. We provide potential customers with
                       detailed insights, comparisons, and client success stories, positioning 
                       your product as the best solution to their needs. Leveraging landing pages,
                        clear calls to action, and testimonials, we help guide your audience towards
                         making an informed decision.


                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>

                  <AccordionItem uuid="c">
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        <span>Action</span>
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>
                      Finally, we encourage your potential customers to take action. Whether
                       it's making a purchase, booking a call, or signing up for a newsletter,
                        our optimized campaigns make the path to conversion as smooth as possible.
                        We use precise targeting, compelling offers, and easy-to-navigate pages to 
                        turn interest into action.


                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>
                </Accordion>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default WhatWeDo
