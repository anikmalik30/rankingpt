import React from "react"

import Navbar from "../src/components/App/Navbar"
import Footer from "../src/components/App/Footer"
import MainBanner from "../src/components/English/YoutubeAds/MainBanner"

import Goals from "../src/components/English/YoutubeAds/Goals"
import FAQYoutubeAds from "../src/components/English/YoutubeAds/FAQYoutubeAds"
import YoutubeAds2 from "../src/components/English/YoutubeAds/YoutubeAds2"
import YoutubeServices from "../src/components/English/YoutubeAds/YoutubeServices"
import Layout from "../src/components/App/Layout"
import SEO from "../src/components/App/SEO"


import WhatWeDo from "../src/components/Common/WhatWeDo"

const YoutubeAds = () => {
  return (
    <Layout>
      <SEO title="Ecommerce SEO " />

      <Navbar />

      <MainBanner />

      <Goals />

      <YoutubeServices />

      <YoutubeAds2 />

      <FAQYoutubeAds />


      <Footer />
    </Layout>
  )
}

export default YoutubeAds
