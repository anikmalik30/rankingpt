import React from "react"

import Navbar from "../components/App/Navbar"
import Footer from "../components/App/Footer"
import MainBanner from "../components/English/SEO-Local/MainBanner"

import FAQSEOLocal from "../components/English/SEO-Local/FAQSEOLocal"
import SEOLocal from "../components/English/SEO-Local/SEO-Local"
import HostingAffectsSEO from "../components/English/SEO-Local/HostingAffectsSEO"
import SEOLocal2 from "../components/English/SEO-Local/SEO-Local2"
import SEOLocal3 from "../components/English/SEO-Local/SEO-Local3"
import Goals from "../components/English/SEO-Local/Goals"
import Layout from "../components/App/Layout"
import SEO from "../components/App/SEO"


import WhatWeDo from "../components/Common/WhatWeDo"

const LocalSEO = () => {
  return (
    <Layout>
      <SEO title="International SEO " />

      <Navbar />

      <MainBanner />

      <Goals/>

      <HostingAffectsSEO />

      <SEOLocal3 />

      <SEOLocal2 />

      <SEOLocal />

      <FAQSEOLocal/>


      <Footer />
    </Layout>
  )
}

export default LocalSEO
