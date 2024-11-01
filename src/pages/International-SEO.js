import React from "react"

import Navbar from "../components/App/Navbar"
import Footer from "../components/App/Footer"
import MainBanner from "../components/English/SEO-International/MainBanner"

import FAQSEOInternational from "../components/English/SEO-International/FAQSEOInternational"
import SEOInternational from "../components/English/SEO-International/SEO-International"
import HostingAffectsSEO from "../components/English/SEO-International/HostingAffectsSEO"
import SEOInternational2 from "../components/English/SEO-International/SEO-International2"
import SEOInternational3 from "../components/English/SEO-International/SEO-International3"
import Goals from "../components/English/SEO-International/Goals"
import Layout from "../components/App/Layout"
import SEO from "../components/App/SEO"


import WhatWeDo from "../components/Common/WhatWeDo"

const EcommerceSEO = () => {
  return (
    <Layout>
      <SEO title="Ecommerce SEO " />

      <Navbar />

      <MainBanner />

      <HostingAffectsSEO />

      <Goals/>

      <SEOInternational3 />

      <SEOInternational2 />

      <SEOInternational />

      <FAQSEOInternational/>


      <Footer />
    </Layout>
  )
}

export default EcommerceSEO
