import React from "react"
import { Link } from "gatsby"

import ProjectStartImg from "../../../assets/images/brands/tiktok.png"

import Shape2 from "../../../assets/images/shape/shape2.png"
import Shape3 from "../../../assets/images/shape/shape3.png"
import Shape5 from "../../../assets/images/shape/shape5.png"
import Shape6 from "../../../assets/images/shape/shape6.png"
import Shape7 from "../../../assets/images/shape/shape7.png"
import Shape13 from "../../../assets/images/shape/shape13.png"

import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion"

const TikTokVerification = () => {
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
                <h2>Tiktok Verification  </h2>
                <p></p>
                <p>
                  {" "}
                  Ready to get a shiny blue TikTok badge on your account? Contact us to get a verified badge on your TikTok profile.



  </p>



                <Link to="/contact" className="default-btn">
                  Get Verified!
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="ptb-100">
      <div className="container">
      <Accordion className="accordion-list" preExpanded={["a"]}>
  <AccordionItem uuid="a">
    <AccordionItemHeading>
      <AccordionItemButton>
        What are the requirements?
      </AccordionItemButton>
    </AccordionItemHeading>
    <AccordionItemPanel>
      <p>It is mandatory to have a verified profile on Facebook or Instagram. If you don’t have one yet, we can also do the full verification for you if you have a very large budget.</p>
    </AccordionItemPanel>
  </AccordionItem>

  <AccordionItem uuid="b">
    <AccordionItemHeading>
      <AccordionItemButton>
        What is the TikTok verified badge?
      </AccordionItemButton>
    </AccordionItemHeading>
    <AccordionItemPanel>
      <p>Social media platforms recognize important influencers, businesses, organizations, artists, etc. as authentic and legitimate through social media verification (whether on TikTok, Instagram, Facebook, YouTube, Snapchat, Twitter, etc.).</p>

      <p>It makes it easier for people to trust content and less likely to share, accept, or take anything seriously from fake profiles. Since it validates users’ information, it cannot be considered a “truth” service. It merely confirms the legitimacy of a specific profile sharing news, not endorsing any material.</p>

      <p>“A verified badge means that TikTok has confirmed that the account belongs to the user it represents,” according to its own words. It appears as a light blue checkmark next to a TikTok user’s account name in search results and on their profile. (Official TikTok website).</p>
    </AccordionItemPanel>
  </AccordionItem>

  <AccordionItem uuid="c">
    <AccordionItemHeading>
      <AccordionItemButton>
        Do you need login details?
      </AccordionItemButton>
    </AccordionItemHeading>
    <AccordionItemPanel>
      <p>Never. We never ask for your login details for any of our services. Simply provide us with links to your articles and social media accounts and we’ll take care of the rest.</p>
    </AccordionItemPanel>
  </AccordionItem>

  <AccordionItem uuid="d">
    <AccordionItemHeading>
      <AccordionItemButton>
        Are there any risks?
      </AccordionItemButton>
    </AccordionItemHeading>
    <AccordionItemPanel>
      <p>No. Our service works by legitimately filing claims on social media. We make all our claims through professional means to the respective social media networks. This service is 100% risk-free.</p>
    </AccordionItemPanel>
  </AccordionItem>

  <AccordionItem uuid="e">
    <AccordionItemHeading>
      <AccordionItemButton>
        I was rejected for the application, can I apply with you?
      </AccordionItemButton>
    </AccordionItemHeading>
    <AccordionItemPanel>
      <p>Yes, of course! You can apply with us. Our TikTok verification service can bypass the 30-day waiting period required by the app. Additionally, if you applied through another agency and were told you would have to wait 30 days to reapply, we can bypass that waiting period as well.</p>
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

export default TikTokVerification
