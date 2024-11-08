import React from "react"

import Navbar from "../src/components/App/Navbar"
import Footer from "../src/components/App/Footer"
import MainBanner from "../src/components/English/SEO-International/MainBanner"

import FAQSEOInternational from "../src/components/English/SEO-International/FAQSEOInternational"
import SEOInternational from "../src/components/English/SEO-International/SEO-International"
import HostingAffectsSEO from "../src/components/English/SEO-International/HostingAffectsSEO"
import SEOInternational2 from "../src/components/English/SEO-International/SEO-International2"
import SEOInternational3 from "../src/components/English/SEO-International/SEO-International3"
import Goals from "../src/components/English/SEO-International/Goals"
import Layout from "../src/components/App/Layout"
import SEO from "../src/components/App/SEO"


import WhatWeDo from "../src/components/Common/WhatWeDo"

const EcommerceSEO = () => {
  return (
    <Layout>
      <SEO title="Ecommerce SEO " />

      <Navbar />

      <MainBanner />

      <HostingAffectsSEO />

      <Goals />

      <SEOInternational3 />

      <SEOInternational2 />

      <SEOInternational />

      <FAQSEOInternational />


      <Footer />
    </Layout>
  )
}

export default EcommerceSEO
