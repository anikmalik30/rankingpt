import React from "react"
import { Link } from "gatsby"

import ProjectStartImg from "../../../assets/images/brands/instagram.png"

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

const InstagramVerification = () => {
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
                <h2>Instagram Verification  </h2>
                <p></p>
                <p>
                  {" "}
                  Many companies use verification services to increase their popularity among competitors. This is a great way for your customers to build better and longer-lasting trust in your brand.

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
              <p>
              A minimum of 1500 followers.</p>

              <p>A public account with a profile picture.</p>

              <p>A minimum of 3 posts with good engagement.</p>

            </AccordionItemPanel>
          </AccordionItem>

          <AccordionItem uuid="b">
            <AccordionItemHeading>
              <AccordionItemButton>
              How long does verification take?
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
            <p>Getting verified on Instagram can take a long time, especially if you do it yourself.</p>

            <p>Keep in mind that your Instagram account needs to meet the requirements to get verified.</p>

            <p>If you do, then you should already have a PR on the internet that explains who you are.</p>

            <p>If you don’t, then you’ll need to write your own PR and find publishers to publish that content, or you can use an Instagram verification service like RankingPT to do all of this for you.</p>

            <p>Once your PR is up and running, you’ll need to create a case study for Instagram to review and decide whether or not to give you the Instagram verification badge.</p>


            </AccordionItemPanel>
          </AccordionItem>

          <AccordionItem uuid="c">
            <AccordionItemHeading>
              <AccordionItemButton>
              How does Instagram verification work?
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <p>
              The Instagram verified blue tick, also known as a verification badge, is a blue checkmark you receive when Instagram considers you an “influencer” in their space.</p>

              <p>As explained above, there are verification badge requirements that you need to meet before you can get verified on Instagram.</p>

              <p>Submitting an Instagram verification badge request without meeting these requirements will harm your profile because your Instagram verification badge request will be noted in Instagram’s database.</p>

              <p>Make sure that your Instagram account meets these verification badge requirements before submitting any request.</p>


              
            </AccordionItemPanel>
          </AccordionItem>

          <AccordionItem uuid="d">
            <AccordionItemHeading>
              <AccordionItemButton>
              How many times can you request verification on Instagram?
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <p>
              You need to be careful when trying to get verified on Instagram. If you submit a blue tick request and it’s denied, you can reapply to get verified on Instagram and receive your Instagram verification badge within 30 days. That said, if you submit duplicate requests, the IG team will cancel your request to get verified on Instagram. As I said above, the verified badge isn’t necessarily hard to get, but you do need to follow the process. It doesn’t look good on your Instagram profile if you submit duplicate requests for the verified blue badge. Keep in mind that when you buy followers, or even get free followers, companies like Thunderclap have tested the delivery and optimized not only the safest but also the most effective boost.




              </p>
            </AccordionItemPanel>
          </AccordionItem>

          <AccordionItem uuid="e">
            <AccordionItemHeading>
              <AccordionItemButton>
              What are the criteria for Instagram verification?
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <p>
              There are a few things you need to do if you want to get the Instagram verification badge. Simply trying to buy Instagram verification won’t work if your Instagram profile isn’t ready for it.</p>

              <p>The criteria for Instagram verification are as follows:</p>

              <p>First of all, Instagram requires you to follow their Terms of Service and Community Guidelines. Additionally, the Instagram team says that your account should be authentic, unique, complete, and notable.</p>




  
            </AccordionItemPanel>
          </AccordionItem>

          <AccordionItem uuid="f">
            <AccordionItemHeading>
              <AccordionItemButton>
              How does Instagram verification work?
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <p>
              The Instagram verified badge, also known as a verification badge, is a blue checkmark that you receive when Instagram considers you an “influencer” in their space.</p>

              <p>As explained above, there are verification badge requirements that you need to meet before you can get verified on Instagram.</p>

              <p>Submitting an Instagram verification badge request without meeting these requirements will harm your profile because your Instagram verification badge request will be noted in Instagram’s database.</p>

              <p>Make sure that your Instagram account meets these verification badge requirements before submitting any request.</p>



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

export default InstagramVerification
