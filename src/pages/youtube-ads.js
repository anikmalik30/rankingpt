import React from "react"

import Navbar from "../components/App/Navbar"
import Footer from "../components/App/Footer"
import MainBanner from "../components/English/YoutubeAds/MainBanner"

import Goals from "../components/English/YoutubeAds/Goals"
import FAQYoutubeAds from "../components/English/YoutubeAds/FAQYoutubeAds"
import YoutubeAds2 from "../components/English/YoutubeAds/YoutubeAds2"
import YoutubeServices from "../components/English/YoutubeAds/YoutubeServices"
import Layout from "../components/App/Layout"
import SEO from "../components/App/SEO"


import WhatWeDo from "../components/Common/WhatWeDo"

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
