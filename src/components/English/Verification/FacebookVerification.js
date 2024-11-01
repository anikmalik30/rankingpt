import React from "react"
import { Link } from "gatsby"

import ProjectStartImg from "../../../assets/images/brands/facebook.png"

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

const FacebookVerification = () => {
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
                <h2>Facebook Verification  </h2>
                <p></p>
                <p>
                  {" "}
                  The blue badge next to your name on Facebook is the first thing your customers notice. It’s a mark that sets big brands apart from the rest.



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
      <p>According to Facebook’s official correspondence, these are the requirements for Verification:</p>

      <p><b>Authentic:</b> Represents a real person, registered business, or entity.</p>

      <p><b>Unique:</b> Be the only presence of that person or business. Only one Page or profile per person or business can be verified, with exceptions for language-specific Pages and profiles. Pages and profiles of general interest (e.g., dog memes) are not verified.</p>

      <p><b>Complete:</b> Have an about section, a Page or profile photo, and recent activity, including at least one post.</p>

      <p><b>Notable:</b> Represents a well-known and frequently searched-for person, brand, or entity. We review Pages and profiles that are featured in multiple news sources and do not consider paid or promotional content as sources for review.</p>

      <p>Therefore, it is possible that even with a large following and notability, Facebook verification may be denied, as the uniqueness and authenticity requirements may not be met.</p>
    </AccordionItemPanel>
  </AccordionItem>

  <AccordionItem uuid="b">
    <AccordionItemHeading>
      <AccordionItemButton>
        Who can get Facebook verification?
      </AccordionItemButton>
    </AccordionItemHeading>
    <AccordionItemPanel>
      <p>While it may seem like Facebook is handing out blue badges to just about everyone, that’s not the case. Some regular, public users have managed to get verified. If you work in any of the following industries, your chances of getting verified may be higher: music, TV and film, fashion, government, religion, journalism, sports, or business. Facebook makes a big deal about whether your account or profile is of public interest.</p>

      <p>You should note that “general interest” content, such as a group or page for car enthusiasts, will not be verified. On the other hand, if it’s a specific car brand, it will most likely be verified, as it trumps general interest.</p>

      <p>The same goes for a general interest page about music – it won’t be verified, but a profile about a famous singer that is specific to them will be more likely to pass a verification request.</p>
    </AccordionItemPanel>
  </AccordionItem>

  <AccordionItem uuid="c">
    <AccordionItemHeading>
      <AccordionItemButton>
        How do I confirm the identity of a Facebook account?
      </AccordionItemButton>
    </AccordionItemHeading>
    <AccordionItemPanel>
      <p>Social media platforms are a great way to promote your brand and reach a global market of people that traditional advertising simply cannot reach. While the golden rule is “Don’t believe everything you see on social media”, having that little blue checkmark next to your brand instantly boosts your credibility on the platform.</p>

      <p>Confirming your identity on Facebook isn’t just about uploading a profile picture and filling in your details. While a strong bio helps people get to know you, it doesn’t guarantee that the account is trustworthy and safe to interact with.</p>

      <p>With technological advancements, we’ve seen fake accounts create videos that imitate the voice and superimpose the face of the person they’re trying to impersonate in order to ask for money or attack the character of the victim. It can be difficult to defend yourself in a scenario like this, but if your account is verified, it becomes much easier to prove that the imposter account is definitely not yours and that you’re not involved in any drama caused by the imposter.</p>
    </AccordionItemPanel>
  </AccordionItem>

  <AccordionItem uuid="d">
    <AccordionItemHeading>
      <AccordionItemButton>
        How long does it take to verify my Facebook profile?
      </AccordionItemButton>
    </AccordionItemHeading>
    <AccordionItemPanel>
      <p>It all depends on the PR you have and your account setup. On average, it takes about 8-9 weeks. But most of our verification packages say a full 12 weeks, just in case we run into any issues.</p>
    </AccordionItemPanel>
  </AccordionItem>

  <AccordionItem uuid="e">
    <AccordionItemHeading>
      <AccordionItemButton>
        Facebook has rejected me numerous times. How can RankingPT help me?
      </AccordionItemButton>
    </AccordionItemHeading>
    <AccordionItemPanel>
      <p>Yes, Facebook is strict about who they approve. There’s no doubt about that. Previous rejections are acceptable, as long as it’s been 30 days since the last rejected verification request. That’s why you need a team of experts to help you, someone with years of experience and who knows what Facebook wants. We’re that team, and we promise you results! We won’t charge you a single cent if you’re not verified.</p>
    </AccordionItemPanel>
  </AccordionItem>

  <AccordionItem uuid="f">
    <AccordionItemHeading>
      <AccordionItemButton>
        If I get verified on Facebook, does the verification mark go away?
      </AccordionItemButton>
    </AccordionItemHeading>
    <AccordionItemPanel>
      <p>No, unless you make it disappear because you made a mistake or violated Facebook’s terms of service. Our verification badges are obtained legitimately through Facebook staff, and there’s no trickery, insiders, or foul play involved. If our company manages to get your account verified, the verification mark won’t disappear. There are a few guidelines you’ll need to follow to keep everything the way it is. For example, if you change your @handle after you’ve been verified, the verification mark will disappear, as that violates Facebook’s rules for verified accounts.</p>
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

export default FacebookVerification
