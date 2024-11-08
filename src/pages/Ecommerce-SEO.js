import React from "react"

import Navbar from "../components/App/Navbar"
import Footer from "../components/App/Footer"
import MainBanner from "../components/English/SEO-Ecommerce/MainBanner"

import AppointmentCenterButton from "../components/Common/AppointmentCenterButton"
import Industries from "../components/English/SEO-Ecommerce/Industries"
import FAQSEOInternational from "../components/English/SEO-Ecommerce/FAQSEOInternational"
import SEOInternational from "../components/English/SEO-Ecommerce/SEO-International"
import HostingAffectsSEO from "../components/English/SEO-Ecommerce/HostingAffectsSEO"
import SEOEcommerce3 from "../components/English/SEO-Ecommerce/SEO-Ecommerce3"
import Goals from "../components/English/SEO-Ecommerce/Goals"
import Layout from "../components/App/Layout"
import SEO from "../components/App/SEO"


import WhatWeDo from "../components/Common/WhatWeDo"

const InternationalSEO = () => {
  return (
    <Layout>
      <SEO title="International SEO " />

      <Navbar />

      <MainBanner />

      <Industries />

      <AppointmentCenterButton />

      <HostingAffectsSEO />

      <SEOEcommerce3 />

      <Footer />
    </Layout>
  )
}

export default InternationalSEO
