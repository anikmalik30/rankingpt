import React from "react"

import Navbar from "../src/components/App/Navbar"
import Footer from "../src/components/App/Footer"
import MainBanner from "../src/components/English/SEO-Ecommerce/MainBanner"

import AppointmentCenterButton from "../src/components/Common/AppointmentCenterButton"
import Industries from "../src/components/English/SEO-Ecommerce/Industries"
import FAQSEOInternational from "../src/components/English/SEO-Ecommerce/FAQSEOInternational"
import SEOInternational from "../src/components/English/SEO-Ecommerce/SEO-International"
import HostingAffectsSEO from "../src/components/English/SEO-Ecommerce/HostingAffectsSEO"
import SEOEcommerce3 from "../src/components/English/SEO-Ecommerce/SEO-Ecommerce3"
import Goals from "../src/components/English/SEO-Ecommerce/Goals"
import Layout from "../src/components/App/Layout"
import SEO from "../src/components/App/SEO"


import WhatWeDo from "../src/components/Common/WhatWeDo"

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
