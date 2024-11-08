import React from "react"

import Navbar from "../components/App/Navbar"
import Footer from "../components/App/Footer"
import MainBanner from "../components/English/GoogleAds/MainBanner"

import FAQGoogleAds from "../components/English/GoogleAds/FAQGoogleAds"
import TikTokTargetAudience from "../components/English/GoogleAds/TikTokTargetAudience"
import GoogleAds1 from "../components/English/GoogleAds/GoogleAds1"
import GoogleAds3 from "../components/English/GoogleAds/GoogleAds3"
import GoogleAds4 from "../components/English/GoogleAds/GoogleAds4"
import Goals from "../components/English/GoogleAds/Goals"
import GoogleTag from "../components/English/GoogleAds/GoogleTag"
import Layout from "../components/App/Layout"
import SEO from "../components/App/SEO"


import WhatWeDo from "../components/Common/WhatWeDo"

const GoogleAds = () => {
  return (
    <Layout>
      <SEO title="Ecommerce SEO " />

      <Navbar />

      <MainBanner />

      <Goals />

      <GoogleAds3 />

      <GoogleAds4 />

      <GoogleTag />

      <FAQGoogleAds />


      <Footer />
    </Layout>
  )
}

export default GoogleAds
