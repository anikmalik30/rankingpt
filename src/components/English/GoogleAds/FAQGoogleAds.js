import React from "react"


import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion"

const FAQGoogleAds = () => {
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
                What are Google Ads management services?
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <p>
                TikTok is often associated with Gen Z, as it initially gained popularity among younger users. However, the platform has evolved to appeal to a diverse audience. While a significant portion of the user base is still made up of Gen Z and Millennials, TikTok has been gaining popularity among older users and even businesses. In fact, 37.4% of TikTok users are over the age of 30.</p>

                <p>An agency-managed solution that targets your most profitable clients on the Google ad network, using strategies focused on high-performing keywords, improving ad performance and maximizing return on investment (ROI).</p>






                
              </AccordionItemPanel>
            </AccordionItem>

            <AccordionItem uuid="b">
              <AccordionItemHeading>
                <AccordionItemButton>
                How can I get started with a Google Ads agency?
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <p>
                To begin collaborating with a Google Ads agency, it’s critical to conduct in-depth industry research, identify your company’s budget and goals, and consult with multiple agencies to make an informed decision. At RankingPT, we offer all potential clients a completely free PPC audit where we analyze your existing ad campaigns to provide actionable insights. We take the time to understand your company’s unique KPIs before getting started to ensure you get the maximum possible return on your investment.</p>
                <p>You can read more and register your company through official Google channels.</p>





              </AccordionItemPanel>
            </AccordionItem>

            <AccordionItem uuid="c">
              <AccordionItemHeading>
                <AccordionItemButton>
                Why should I hire a Google Ads agency instead of managing Google Ads campaigns in-house?
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <p>
                Hiring a Google Ads agency like ours offers several advantages. We have experience in campaign management, keyword research, ad writing, and ongoing optimization, which can lead to better results. We can save you time and effort, allowing you to focus on your core business activities. Additionally, we have enterprise tools, resources, and data that for small businesses could be cost-prohibitive.</p>



             
              </AccordionItemPanel>
            </AccordionItem>

            <AccordionItem uuid="d">
              <AccordionItemHeading>
                <AccordionItemButton>
                How much does it cost to manage my ads on Google Ads?
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <p>
                Google Ads management fees start from a minimum of 500€ per month or 15% of ad spend, whichever is greater. Depending on the size of your Google Ads budget, the percentage charged may be lower. These values ​​do not include costs directly paid to Google for the traffic generated.</p>







                
              </AccordionItemPanel>
            </AccordionItem>

            <AccordionItem uuid="e">
              <AccordionItemHeading>
                <AccordionItemButton>
                How are Google Ads campaigns created and optimized to achieve our business objectives?
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <p>
                As the leading Google Ads agency, we have a well-defined process that includes competitor research, campaign structuring and setup, ad copy creation, and ongoing optimization. We can explain all these details if you request a quote. Ultimately, our strategies will align with your specific business goals, whether it’s for lead generation, eCommerce sales, brand awareness, or other goals.</p>


              </AccordionItemPanel>
            </AccordionItem>

            <AccordionItem uuid="f">
              <AccordionItemHeading>
                <AccordionItemButton>
                Is it worth paying for ads on Google Ads?
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
              <p>Yes, if you want a complete digital marketing strategy. Few marketing channels offer the quality of traffic and targeting capabilities that Google provides. Plus, Google Ads is a quick and efficient way to get high-converting search traffic, making it ideal if you’re looking for a more immediate way to increase your online sales.</p>


              </AccordionItemPanel>
            </AccordionItem>

            <AccordionItem uuid="g">
              <AccordionItemHeading>
                <AccordionItemButton>
                How do they ensure our advertising dollars are efficient and not wasted on irrelevant clicks?
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>

                 <p>There are several strategies we use to ensure efficient ad spend. These include implementing negative keywords to filter out irrelevant traffic, setting ad scheduling to target the most valuable time periods, and continually monitoring and optimizing campaigns. As a Google Ads Premier Agency, our goal is to maximize the return on investment (ROI) of your budget by ensuring that ongoing ad optimizations allow you to use your budget effectively.</p>
              </AccordionItemPanel>
            </AccordionItem>

            <AccordionItem uuid="h">
              <AccordionItemHeading>
                <AccordionItemButton>
                What is the deadline to see results from Google Ads campaigns?
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
              <p>The timeframe for seeing results may vary depending on factors such as competition, budget, and campaign maturity. In general, you can expect to see initial results within a few weeks. However, as your campaign accumulates data and we make optimizations, you can expect to see additional improvements over the course of a few months.</p>




              </AccordionItemPanel>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
  )
}

export default FAQGoogleAds
