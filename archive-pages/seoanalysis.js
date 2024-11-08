import React from "react"
import { Link } from "gatsby"


import Layout from "../src/components/App/Layout"
import SEO from "../src/components/App/SEO"
import Navbar from "../src/components/App/Navbar"
import Footer from "../src/components/App/Footer"

import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion"


import StartProjectWithUs from "../src/components/English/SEOAnalysis/StartProjectWithUs"
import HowWeAnalyseYourSEO from "../src/components/Common/HowWeAnalyseYourSEO"
import SEOFeatures from "../src/components/English/SEOAnalysis/SEOFeatures"
import WhatWeDo from "../src/components/English/SEOAnalysis/WhatWeDo"
import AnalysisSEO from "../src/components/English/SEOAnalysis/AnalysisSEO"
import AboutAnalysisSEO from "../src/components/English/SEOAnalysis/AboutAnalysisSEO"

const seoanalysis = () => {
  return (
    <Layout>
      <SEO title="SEO Analysis" />

      <Navbar />

      <AnalysisSEO />

      <WhatWeDo />

      <SEOFeatures />

      <AboutAnalysisSEO />

      <HowWeAnalyseYourSEO />

      <StartProjectWithUs />



      <div className="ptb-100">
        <div className="container">
          <Accordion className="accordion-list" preExpanded={["a"]}>
            <AccordionItem uuid="a">
              <AccordionItemHeading>
                <AccordionItemButton>
                  Q: What is an SEO Analysis?
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <p>
                  A: An SEO analysis is an analysis of a website carried out by an SEO specialist or team.
                  The objective is to see what measures should be taken to increase the visibility of
                  a given website on Google. It is SEO analysis that should be the first step towards
                  optimizing your website.


                </p>
              </AccordionItemPanel>
            </AccordionItem>

            <AccordionItem uuid="b">
              <AccordionItemHeading>
                <AccordionItemButton>
                  Q: What does an SEO analysis consist of?
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <p>
                  A: The auditor evaluates the Website in terms of SEO, finds errors in the audited website
                  or suggests improvements. An SEO analysis includes technical analysis
                  (e.g. page load time or security), content analysis (including in terms of tags,
                  graphics and key phrases for which the site should be positioned) and analysis of links
                  leading to the website (backlinks). This way, the analysis helps you create an SEO strategy
                  perfectly adapted to your website.


                </p>
              </AccordionItemPanel>
            </AccordionItem>

            <AccordionItem uuid="c">
              <AccordionItemHeading>
                <AccordionItemButton>
                  Q: What are the differences between a free and paid SEO Analysis?
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <p>
                  A: Want to get an idea of ​​how your website is performing from an SEO perspective?
                  A free online SEO audit is enough. When opting for it on RankingPT, you will receive
                  a summary of the most important SEO parameters for your website. You’ll learn the key
                  aspects of your website’s SEO and know what general improvements you can make immediately.
                  A free SEO audit is a great first step to making your website more visible on Google!

                  <p>A paid SEO audit, on the other hand, is an in-depth analysis of a website. Not only does it cover more
                    SEO parameters, but it also describes them in much more detail… You will receive a report that analyzes
                    each subpage of your website in terms of content, links and technical parameters. This will help you know what
                    you should improve specifically to get your website to the top of Google search engine visibility. A paid SEO
                    audit is a huge dose of knowledge that will help you implement a perfect SEO strategy for your website.</p>


                </p>
              </AccordionItemPanel>
            </AccordionItem>

            <AccordionItem uuid="d">
              <AccordionItemHeading>
                <AccordionItemButton>
                  Q: What exactly does an SEO Analysis show?
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <p>
                  A: RankingPT’s SEO Analysis provides detailed information about your website and shows
                  you exactly what is stopping you from ranking better in search engines. SEO analysis is
                  basically divided into three parts: content, indexing and coding. The content part looks
                  at your website text, keywords, image size, alt tags, meta descriptions, meta titles, internal links,
                  external links, and more. They may seem like small things, but they are really important.
                  From there, the analysis provides information about your indexing, mainly making sure that
                  your page has robots.txt and that your site has a proper sitemap. Finally, the Code Analysis
                  section goes into detail about your site’s coding. It tells you about your obsolete HTML tags,
                  HTML size, text-to-HTML ratio, compression, inline CSS hits, internal CSS hits, microdata schema,
                  and more.


                </p>
              </AccordionItemPanel>
            </AccordionItem>

            <AccordionItem uuid="e">
              <AccordionItemHeading>
                <AccordionItemButton>
                  Q: How can an SEO Analysis help my business?
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <p>
                  A: Have you ever heard that “knowledge is power”? Well, if we take this literally,
                  an SEO audit can be extremely powerful for your business. This is because a thorough audit
                  takes the guesswork out of your website’s SEO. No more guesswork. No more confusion. No more
                  blind moves. You just need an SEO audit that is simple to read, easy to understand and has all
                  the information you need to increase your organic traffic. Once you’ve analyzed the report,
                  it’s time to take your audit to an SEO professional to inspect it and decide your next course of
                  action. Once you receive your audit, please don’t hesitate to contact us so we can help you with
                  any questions or concerns you may have.


                </p>
              </AccordionItemPanel>
            </AccordionItem>

            <AccordionItem uuid="f">
              <AccordionItemHeading>
                <AccordionItemButton>
                  Q: Can I work on SEO Analysis for my own website?
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <p>
                  A: Working with SEO on your own has its advantages: the main one is control.
                  Many companies prefer to work on their marketing strategy in-house, as this gives
                  them full control and oversight of the entire SEO campaign. However, the truth is that
                  this control is not exact. In fact, if you work with an excellent agency, you’ll find
                  that you’ll have more control over your SEO than you ever thought possible, all while
                  running your campaign in a streamlined way. This is due to the fact that top agencies
                  already have the systems and procedures in place. This means that your account manager
                  will keep you informed of everything that is happening and nothing will be activated or
                  changed without your explicit authorization. Plus, working with an agency means you’ll
                  have an entire SEO department working hard to get your site to the top of the rankings.


                </p>
              </AccordionItemPanel>
            </AccordionItem>

            <AccordionItem uuid="g">
              <AccordionItemHeading>
                <AccordionItemButton>
                  Q: How often do I need to update my SEO Analysis?
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <p>
                  A: As your website is a living, ever-changing organism, we suggest you use our regular quarterly
                  SEO audit services to assess changes to your website structure, website content and backlink profile.
                  Each subsequent revision of the Website will build on the previous one and typically takes much less
                  time to perform.


                </p>
              </AccordionItemPanel>
            </AccordionItem>

            <AccordionItem uuid="h">
              <AccordionItemHeading>
                <AccordionItemButton>Q: How does the SEO Analysis process work?</AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <p>
                  A: After purchasing our SEO audit services, we will perform a complete SEO audit of the known ranking
                  factors that search engines use to analyze and evaluate your Website. We will carefully review every
                  detail so that no corner goes unchecked.

                  <p>Our search engine optimization services are comprehensive, analyzing every aspect of your web pages such as keyword usage,
                    load times and mobile-friendliness. Additionally, our team will analyze coding, traceability and accessibility errors,
                    along with analytical reports, to ensure you have the most up-to-date Site possible.</p>

                  <p>Ultimately, we provide you with the ability to improve your rankings, attract an influx of visitors, and generate more
                    sales. After thoroughly evaluating each segment of the audit, we expose any potential issues that may arise, as well
                    as provide specific strategies for resolving them efficiently and effectively.</p>


                </p>
              </AccordionItemPanel>
            </AccordionItem>
          </Accordion>
          <div className="d-table">
            <div className="d-table-cell">
              <Link to="/contact" className="default-btn">
                Contact Us
              </Link>
            </div>
          </div>

        </div>
      </div>

      <Footer />
    </Layout>
  )
}

export default seoanalysis
