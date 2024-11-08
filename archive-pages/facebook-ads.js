import React from "react"

import Navbar from "../src/components/App/Navbar"
import Footer from "../src/components/App/Footer"
import MainBanner from "../src/components/English/FacebookAds/MainBanner"

import FAQFacebookAds from "../src/components/English/FacebookAds/FAQFacebookAds"
import FacebookAds3 from "../src/components/English/FacebookAds/FacebookAds3"
import FacebookAds4 from "../src/components/English/FacebookAds/FacebookAds4"
import Goals from "../src/components/English/FacebookAds/Goals"
import Layout from "../src/components/App/Layout"
import SEO from "../src/components/App/SEO"


import WhatWeDo from "../src/components/Common/WhatWeDo"

const FacebookAds = () => {
  return (
    <Layout>
      <SEO title="Ecommerce SEO " />

      <Navbar />

      <MainBanner />

      <Goals />

      <FacebookAds3 />

      <FacebookAds4 />

      <FAQFacebookAds />


      <Footer />
    </Layout>
  )
}

export default FacebookAds
