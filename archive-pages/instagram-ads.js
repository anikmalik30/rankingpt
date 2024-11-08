import React from "react"

import Navbar from "../src/components/App/Navbar"
import Footer from "../src/components/App/Footer"
import MainBanner from "../src/components/English/InstagramAds/MainBanner"

import FAQInstagramAds from "../src/components/English/InstagramAds/FAQInstagramAds"
import InstagramAds2 from "../src/components/English/InstagramAds/InstagramAds2"
import InstagramAds3 from "../src/components/English/InstagramAds/InstagramAds3"
import InstagramAds4 from "../src/components/English/InstagramAds/InstagramAds4"
import InstagramServices from "../src/components/English/InstagramAds/InstagramServices"
import Layout from "../src/components/App/Layout"
import SEO from "../src/components/App/SEO"


import WhatWeDo from "../src/components/Common/WhatWeDo"

const InstagramAds = () => {
  return (
    <Layout>
      <SEO title="Ecommerce SEO " />

      <Navbar />

      <MainBanner />

      <InstagramServices />

      <InstagramAds2 />

      <InstagramAds4 />

      <InstagramAds3 />

      <FAQInstagramAds />


      <Footer />
    </Layout>
  )
}

export default InstagramAds
