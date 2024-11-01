import React from "react"


import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion"

const FAQWordpressMaintenance = () => {
  return (
      <div className="ptb-100">
        <div className="container">
        <div className="section-title">
            <h2>Frequently Asked Questions</h2>
          </div>
          <Accordion className="accordion-list" preExpanded={["b"]}>
            <AccordionItem uuid="a">
              <AccordionItemHeading>
                <AccordionItemButton>
                Why use a WordPress maintenance service?
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
  <p>To ensure a website is fast and functions properly, it requires regular checks that need specific knowledge of the WordPress environment.</p>

  <p>Our website maintenance service allows you to:</p>
  <ul>
    <li>Fix code conflicts between WordPress, themes, and plugins.</li>
    <li>Prevent or resolve commonly encountered bugs.</li>
    <li>Optimize your server's PHP version and its configuration.</li>
    <li>Perform regular backups, enabling instant restoration without affecting traffic.</li>
    <li>Update the site periodically as needed.</li>
    <li>Protect the site from hacking attempts and reduce security vulnerabilities.</li>
  </ul>
</AccordionItemPanel>

            </AccordionItem>

            <AccordionItem uuid="b">
              <AccordionItemHeading>
                <AccordionItemButton>
                How do I know which type of maintenance package to subscribe to?
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <p>
                Maintenance packages are suited to most WordPress sites.<p></p>
If the content of your site remains stable over time, the Pro package will work best for you.<p></p>
If you have a WooCommerce online store or your site is multilingual, the Business and Business Pro packages will be more appropriate.<p></p>
In case of doubt, do not hesitate to contact us.




                </p>
              </AccordionItemPanel>
            </AccordionItem>

            <AccordionItem uuid="c">
              <AccordionItemHeading>
                <AccordionItemButton>
                How can I find out what actions are performed on my site?
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <p>
                On the 1st of every month, you will receive a maintenance report including all the actions carried out on your site by the Maintenance WP team.<p></p>
This includes the number and dates of WordPress, plugins and theme updates, number of backups, optimizations, a security report and changes made as needed.<p></p>
We will also send you regular emails to keep you updated on the progress.
                </p>
              </AccordionItemPanel>
            </AccordionItem>

            <AccordionItem uuid="d">
              <AccordionItemHeading>
                <AccordionItemButton>
                Can you manage multiple websites?
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <p>
                Yes! However, each website will require an separate WordPress maintenance package.
                </p>
              </AccordionItemPanel>
            </AccordionItem>


          </Accordion>
        </div>
      </div>
  )
}

export default FAQWordpressMaintenance
