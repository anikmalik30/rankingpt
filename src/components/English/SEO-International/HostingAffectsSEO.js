import React from "react"
import { Link } from "gatsby"
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemPanel,
  AccordionItemButton,
} from "react-accessible-accordion"

import ProjectStartImg from "../../../assets/images/dev/cloud.png"

import Shape2 from "../../../assets/images/shape/shape2.png"
import Shape3 from "../../../assets/images/shape/shape3.png"
import Shape5 from "../../../assets/images/shape/shape5.png"
import Shape6 from "../../../assets/images/shape/shape6.png"
import Shape7 from "../../../assets/images/shape/shape7.png"
import Shape13 from "../../../assets/images/shape/shape13.png"

const HostingAffectsSEO = () => {
  return (
    <>
      <div className="project-start-area ptb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div
                className="project-start-content"
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-delay="400"
              >
                <h2>Our International SEO Services </h2>

                <p>
                  {" "}
                  As an SEO agency, we offer holistic support in developing
                  successful international SEO strategies. Together, we develop
                  customized concepts and support you in all relevant areas
                  related to international SEO.
                </p>
              </div>
            </div>

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
          </div>
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
                      <span>Strategic SEO / SEO Strategies</span>
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <p>
                      From keyword strategy development, potential analyses,
                      technical audits and relaunch support to needs analyses
                      and strategies in the areas of content and off-page, our
                      strategic search engine optimization services for
                      multilingual websites are diverse and always individually
                      tailored to your needs and objectives.
                    </p>
                  </AccordionItemPanel>
                </AccordionItem>

                <AccordionItem uuid="b">
                  <AccordionItemHeading>
                    <AccordionItemButton>
                      <span>International content and keyword strategies</span>
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <p>
                      When developing a content and keyword strategy, we work
                      with you to create a concrete needs analysis for your
                      target market, taking into account your business model,
                      website and target group. This will help us determine how
                      much content is needed and how it should be presented to
                      achieve maximum success.
                    </p>
                  </AccordionItemPanel>
                </AccordionItem>

                <AccordionItem uuid="c">
                  <AccordionItemHeading>
                    <AccordionItemButton>
                      <span>International Content</span>
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <p>
                      Depending on the target market, our international experts
                      will adapt your existing content or create new texts that
                      are valuable for your future users and optimized for
                      search engines. The localization or transcription process
                      is not limited to translating the text into other
                      languages, but also includes prior research into cultural
                      conditions and culturally shaped search behavior.
                    </p>
                  </AccordionItemPanel>
                </AccordionItem>

                <AccordionItem uuid="d">
                  <AccordionItemHeading>
                    <AccordionItemButton>
                      <span>International domain strategies</span>
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <p>
                      Depending on the target market and considering individual
                      circumstances, we decide together which domain strategy
                      will best help you achieve your goals and implement it
                      with you.
                    </p>
                  </AccordionItemPanel>
                </AccordionItem>

                <AccordionItem uuid="e">
                  <AccordionItemHeading>
                    <AccordionItemButton>
                      <span>International offpage measures</span>
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <p>
                      We offer international off-page SEO strategies that
                      include off-page audits, disavow analysis, reconsideration
                      requests and off-page competitor analysis.
                    </p>
                  </AccordionItemPanel>
                </AccordionItem>

                <AccordionItem uuid="f">
                  <AccordionItemHeading>
                    <AccordionItemButton>
                      <span>
                        Support for international relaunch and migration
                      </span>
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <p>
                      We ensure that your international relaunch is successful,
                      without any loss of visibility or traffic. To ensure that
                      the process runs smoothly, we incorporate SEO from the
                      planning stage and thoroughly prepare the technical
                      migration.
                    </p>
                  </AccordionItemPanel>
                </AccordionItem>
              </Accordion>
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

export default HostingAffectsSEO
