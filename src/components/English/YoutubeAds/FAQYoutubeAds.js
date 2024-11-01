import React from "react"

import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion"

const FAQYoutubeAds = () => {
  return (
    <div className="ptb-100">
      <div className="container">
        <div className="section-title">
          <h2>Frequently Asked Questions</h2>
        </div>
        <Accordion className="accordion-list" preExpanded={["a"]}>
          <AccordionItem uuid="a">
            <AccordionItemHeading>
              <AccordionItemButton>
                How do Youtube Ads services work?
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <p>
                YouTube’s advertising services allow you to create and promote
                video content through different ad formats. These ads can be
                targeted based on demographics, interests and behavior.
                Advertisers bid for ad placement and the cost is based on views
                or interactions.
              </p>

              <p>To register your business, register using this link.</p>
            </AccordionItemPanel>
          </AccordionItem>

          <AccordionItem uuid="b">
            <AccordionItemHeading>
              <AccordionItemButton>
              What targeting options are available on YouTube?
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <p>
              A YouTube ad campaign offers several targeting options, including demographic targeting (such as age, gender, and location), interest-based targeting, and custom audience targeting. Advertisers can also use remarketing to reach users who have previously engaged with their content.


              </p>
            </AccordionItemPanel>
          </AccordionItem>

          <AccordionItem uuid="c">
            <AccordionItemHeading>
              <AccordionItemButton>
              How much does Youtube Ads cost?
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <p>
              The cost of YouTube ads depends on the bidding strategy and ad format. TrueView ads, for example, typically operate on a cost-per-view (CPV) basis, where advertisers pay when a viewer watches at least 30 seconds of the ad or interacts with it. Costs can vary depending on competition and targeting parameters.
              </p>
            </AccordionItemPanel>
          </AccordionItem>

          <AccordionItem uuid="d">
            <AccordionItemHeading>
              <AccordionItemButton>
              What is your experience with Youtube Ads?
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <p>
              We have been providing YouTube advertising services for over 10 years and are a leading marketing agency on the platform, working with a diverse range of clients. Our extensive experience has allowed us to keep pace with changes on the platform and develop strategies that produce tangible results.


              </p>
            </AccordionItemPanel>
          </AccordionItem>

          <AccordionItem uuid="e">
            <AccordionItemHeading>
              <AccordionItemButton>
              How do you approach target audience segmentation?
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <p>
              Our approach to targeting involves a detailed analysis of your target audience. We use demographic, interest and behavioural targeting to ensure your ads reach the right audience, maximising the impact of your campaigns.


              </p>
            </AccordionItemPanel>
          </AccordionItem>

          <AccordionItem uuid="f">
            <AccordionItemHeading>
              <AccordionItemButton>
              What types of YouTube Ads formats do you recommend for our company?
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <p>
              Based on your business goals and target audience, we recommend a combination of ad formats. This could include TrueView ads for in-stream engagement, bumper ads for concise messaging, and other formats strategically chosen to align with your campaign goals.


              </p>
            </AccordionItemPanel>
          </AccordionItem>

          <AccordionItem uuid="g">
            <AccordionItemHeading>
              <AccordionItemButton>
              How do you stay up to date with trends and changes in YouTube advertising?
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <p>
              Our team is committed to continuous learning and staying up to date on the latest trends and changes in the YouTube advertising landscape. As a Google Premier Partner, we actively participate in industry events, webinars, and maintain close relationships with platform representatives to ensure our strategies stay ahead of the curve.


              </p>
            </AccordionItemPanel>
          </AccordionItem>

          <AccordionItem uuid="h">
            <AccordionItemHeading>
              <AccordionItemButton>
              How do you deal with communication with customers?
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <p>
              Our team is committed to continuous learning and staying up to date on the latest trends and changes in the YouTube advertising landscape. As a Google Premier Partner, we actively participate in industry events, webinars, and maintain close relationships with platform representatives to ensure our strategies stay ahead of the curve.


              </p>
            </AccordionItemPanel>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  )
}

export default FAQYoutubeAds
