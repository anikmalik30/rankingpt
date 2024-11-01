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
                <h2>What's behind an SEO-optimized website?    </h2>
                <p>
                Invisible to the common user, but equally essential for efficient indexing and a good browsing 
                experience are some technical criteria that relate to the website's programming and performance.
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
                        <span>Sitemap</span>
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>
                      It's a sort of index of your website's pages, which helps search engines crawl it.


                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>

                  <AccordionItem uuid="b">
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        <span>Robots.txt</span>
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>
                      It allows you to control the information on the website that should or should not 
                      be indexed by search engines. For example, login pages and exclusive customer access 
                      pages have no advantage in appearing on the SERP.




                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>

                  <AccordionItem uuid="c">
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        <span>Redirects</span>
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>
                      Think about the signs that are placed on the doors of stores saying that they have changed their address. 
                      Redirects do exactly the same thing: redirect users to the correct page when the previous one is no longer active.




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
