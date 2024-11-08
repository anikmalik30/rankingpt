import React from "react"
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemPanel,
  AccordionItemButton,
} from "react-accessible-accordion"

const WhatIsHostingMigration = () => {
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
                <h2>What are Hosting Migration Services? </h2>
                <p>
                  Hosting migration refers to transferring a website to a new
                  hosting environment. <p></p>
                  This could mean moving to a different hosting provider or even
                  upgrading to a more powerful server with the same provider.
                  Hosting migration is often done to ensure your website can
                  handle growing traffic, leverage modern technology, reduce
                  costs, or enhance overall performance. When properly executed,
                  it can provide substantial benefits, such as faster page
                  loading, better security, and higher reliability for your
                  online presence.
                </p>
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
                        <span>Your Website's URL Structure</span>
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>
                        URL restructuring enhances search engine visibility and
                        improves user experience. The goal is to align URLs with
                        your new site structure.
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>

                  <AccordionItem uuid="b">
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        <span>Your content in a rebranding process</span>
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>
                        Align your content with your brand message as you
                        migrate. Rebranding is the ideal time to refresh and
                        refine messaging and visuals.
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>

                  <AccordionItem uuid="c">
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        <span>User experience design</span>
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>
                        Focus on enhancing user experience design by updating
                        layouts, improving navigation, and making your website
                        more intuitive during migration.
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>

                  <AccordionItem uuid="d">
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        <span>Your website technology</span>
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>
                        Upgrading to modern technologies during migration
                        enhances website performance and keeps you ahead of
                        competitors.
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

export default WhatIsHostingMigration
