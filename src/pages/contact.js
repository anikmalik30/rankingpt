import React, { useEffect } from "react";
import Layout from "../components/App/Layout"
import SEO from "../components/App/SEO"
import Navbar from "../components/App/Navbar"
// import PageBanner from "../components/Common/PageBanner"
import Footer from "../components/App/Footer"
import ContactForm from "../components/Contact/ContactForm"
// import SvgIcon from "../components/SvgIcon";

const Contact = () => {
  return (
    <Layout>
      <SEO title="Contact" />

      <Navbar />

      <div className="contact-info-area pt-100 pb-70">
        {/* <SvgIcon name="084-approved" height={50} width={50} />just give the name of the svg file */}
      </div>

      <ContactForm />

      <p>contact</p>
      <Footer />
    </Layout>
  )
}

export default Contact
