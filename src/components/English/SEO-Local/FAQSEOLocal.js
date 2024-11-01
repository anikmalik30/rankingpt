import React from "react"

import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion"

const FAQSEOLocal = () => {
  return (
    <div className="ptb-100">
      <div className="container">
        <div className="section-title">
          <h2>Frequently Asked Questions</h2>
        </div>
        <Accordion className="accordion-list" preExpanded={["a"]}>
          <AccordionItem uuid="a">
            <AccordionItemHeading>
              <AccordionItemButton>What is Local SEO?</AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <p>
                Local SEO, or local search engine optimization, is a digital
                marketing strategy that helps businesses improve their
                visibility in local search results on Google and other search
                engines. This approach focuses on increasing the online
                visibility of small and medium-sized businesses, particularly in
                specific geographic areas, by targeting “near me” and other
                location-specific searches.
              </p>
            </AccordionItemPanel>
          </AccordionItem>

          <AccordionItem uuid="b">
            <AccordionItemHeading>
              <AccordionItemButton>
                Why is local SEO important?
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <p>
                Local SEO is crucial because it significantly increases small
                businesses’ online visibility to local consumers. With the
                number of local searches, including terms like “near me,”
                recently doubling, and with 72% of local searchers visiting a
                store within a five-mile radius, local SEO solutions are
                essential for attracting a local audience and growing visits to
                the store.
              </p>
            </AccordionItemPanel>
          </AccordionItem>

          <AccordionItem uuid="c">
            <AccordionItemHeading>
              <AccordionItemButton>
                How does local SEO work?
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <p>
                Local SEO works by optimizing a business’s online presence so
                that it appears in local search results. This involves ensuring
                that search engines correctly understand your business location
                and offerings, utilizing local keywords and optimizing Google My
                Business listings to improve rankings in local search results.
              </p>
            </AccordionItemPanel>
          </AccordionItem>

          <AccordionItem uuid="d">
            <AccordionItemHeading>
              <AccordionItemButton>
                What are local SEO services?
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <p>
                Local SEO services specialize in digital marketing and aim to
                improve a business’s online visibility on local search engine
                results pages. These services include optimizing the company’s
                Google My Business profile, improving rankings for local
                keywords, managing reviews, and ensuring the company’s listings
                are accurate across multiple directories.
              </p>
            </AccordionItemPanel>
          </AccordionItem>

          <AccordionItem uuid="e">
            <AccordionItemHeading>
              <AccordionItemButton>Who Needs Local SEO?</AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <p>
                Local SEO services are essential for any small business serving
                a specific geographic area, such as local retailers, service
                providers, medical offices, restaurants, and brick-and-mortar
                stores. These services are particularly beneficial for
                businesses that want to attract customers nearby and compete
                effectively in local markets.
              </p>
            </AccordionItemPanel>
          </AccordionItem>

          <AccordionItem uuid="f">
            <AccordionItemHeading>
              <AccordionItemButton>
                What does a local SEO company do?
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <p>
                A company specializing in local SEO optimizes a business’s
                online presence to achieve a higher ranking in local search
                results. This process includes managing Google My Business
                profile optimization, optimizing local keywords, creating local
                backlinks, managing reviews, ensuring NAP consistency (name,
                address and phone number), creating website content and
                analyzing local competitors to improve local search rankings.
              </p>
            </AccordionItemPanel>
          </AccordionItem>

          <AccordionItem uuid="g">
            <AccordionItemHeading>
              <AccordionItemButton>
                What are local SEO ranking factors?
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <p>
                Local SEO ranking factors include relevance and accuracy of
                business information, searcher proximity, Google My Business
                profile optimization, online reviews, local keyword usage, and
                user experience . Google evaluates these factors to determine
                local search rankings on its search engine results pages.
              </p>
            </AccordionItemPanel>
          </AccordionItem>

          <AccordionItem uuid="h">
            <AccordionItemHeading>
              <AccordionItemButton>
                How does local SEO help?
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <p>
                Local SEO helps increase a local business’s visibility in search
                engine results, generate more local website traffic, and
                outperform competitors in the area. Leads to an increase in
                contacts and sales from local customers, improving the company’s
                global online presence.
              </p>
            </AccordionItemPanel>
          </AccordionItem>

          <AccordionItem uuid="i">
            <AccordionItemHeading>
              <AccordionItemButton>
                What are the benefits of local SEO services?
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <p>
                The advantages of local SEO services include trackable digital
                marketing strategies, better rankings on Google My Business and
                Google Maps, increased traffic both in-store and on your
                website, and a competitive advantage over other local
                businesses. These services position companies more prominently
                in search results, thus attracting a greater number of local
                customers.
              </p>
            </AccordionItemPanel>
          </AccordionItem>

          <AccordionItem uuid="j">
            <AccordionItemHeading>
              <AccordionItemButton>
                How long does local SEO take?
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <p>
                Local SEO services can take some time to produce results.
                Typically, significant improvements in local SEO rankings can
                take a few months to appear. The exact duration may vary
                depending on factors such as competition, site history, and
                breadth of SEO efforts.
              </p>
            </AccordionItemPanel>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  )
}

export default FAQSEOLocal
