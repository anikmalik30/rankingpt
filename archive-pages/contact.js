import React, { useEffect } from "react";
import Layout from "../src/components/App/Layout"
import SEO from "../src/components/App/SEO"
import Navbar from "../src/components/App/Navbar"
import PageBanner from "../src/components/Common/PageBanner"
import Footer from "../src/components/App/Footer"
import ContactForm from "../src/components/Contact/ContactForm"
import SvgIcon from "../src/components/SvgIcon";

// import PageSpeedIcon from "../assets/icons/pagespeed.svg";
const Contact = () => {
  return (
    <Layout>
      <SEO title="Contact" />

      <Navbar />

      <div className="contact-info-area pt-100 pb-70">
        <SvgIcon name="084-approved" height={50} width={50} />{/* just give the name of the svg file */}
      </div>

      <ContactForm />

      <Footer />
    </Layout>
  )
}

export default Contact
