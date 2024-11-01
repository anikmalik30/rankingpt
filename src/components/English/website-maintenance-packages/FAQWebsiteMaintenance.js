import React from "react"


import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion"

const FAQWebsiteMaintenance = () => {
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
                  What happens if my website gets hacked or goes down?
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <p>
                The goal of WordPress website maintenance is to keep your site secure, which is why we go out of our way to avoid issues. However, if something happens and your website needs immediate attention, we will be there to assist you.<p></p>

We are unable to promise that your website will not be hacked, but we can assure you that we will make every effort to prevent it, as well as assist in the recovery and cleanup.


                </p>
              </AccordionItemPanel>
            </AccordionItem>

            <AccordionItem uuid="b">
              <AccordionItemHeading>
                <AccordionItemButton>
                What tasks are included in the dedicated support time?
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <p>
                Content update requests and small design improvements are the most common requests, however, anything that can fit into your monthly support time is a free game. We just ask you to be aware that requests for new features to your website will likely result in a formal quote as those commonly go over the monthly dedicated time.


                </p>
              </AccordionItemPanel>
            </AccordionItem>

            <AccordionItem uuid="c">
              <AccordionItemHeading>
                <AccordionItemButton>
                What if I need something outside my maintenance package?
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <p>
                If you have a task that is beyond what is included in your website maintenance, we will submit a quote for you to approve separately.<p></p>

However, many times we will evaluate requests that exceed your plan on a case by case basis, and with approval, work past the time will be billed at our discounted hourly rate.
                </p>
              </AccordionItemPanel>
            </AccordionItem>

            <AccordionItem uuid="d">
              <AccordionItemHeading>
                <AccordionItemButton>
                Can I cancel at any time?
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <p>
                Absolutely. All we need is a 30-day notice.<p></p>

We’re all about building a valuable relationship with you and your website, so we would hate to see you go but we know financial needs weigh on many decisions and don’t want to lock anyone in.


                </p>
              </AccordionItemPanel>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
  )
}

export default FAQWebsiteMaintenance
