import React from "react"

import Navbar from "../src/components/App/Navbar"
import Footer from "../src/components/App/Footer"
import MainBanner from "../src/components/English/SEO-Local/MainBanner"

import FAQSEOLocal from "../src/components/English/SEO-Local/FAQSEOLocal"
import SEOLocal from "../src/components/English/SEO-Local/SEO-Local"
import HostingAffectsSEO from "../src/components/English/SEO-Local/HostingAffectsSEO"
import SEOLocal2 from "../src/components/English/SEO-Local/SEO-Local2"
import SEOLocal3 from "../src/components/English/SEO-Local/SEO-Local3"
import Goals from "../src/components/English/SEO-Local/Goals"
import Layout from "../src/components/App/Layout"
import SEO from "../src/components/App/SEO"


import WhatWeDo from "../src/components/Common/WhatWeDo"

const LocalSEO = () => {
  return (
    <Layout>
      <SEO title="International SEO " />

      <Navbar />

      <MainBanner />

      <Goals />

      <HostingAffectsSEO />

      <SEOLocal3 />

      <SEOLocal2 />

      <SEOLocal />

      <FAQSEOLocal />


      <Footer />
    </Layout>
  )
}

export default LocalSEO
