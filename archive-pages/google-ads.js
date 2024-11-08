import React from "react"

import Navbar from "../src/components/App/Navbar"
import Footer from "../src/components/App/Footer"
import MainBanner from "../src/components/English/GoogleAds/MainBanner"

import FAQGoogleAds from "../src/components/English/GoogleAds/FAQGoogleAds"
import TikTokTargetAudience from "../src/components/English/GoogleAds/TikTokTargetAudience"
import GoogleAds1 from "../src/components/English/GoogleAds/GoogleAds1"
import GoogleAds3 from "../src/components/English/GoogleAds/GoogleAds3"
import GoogleAds4 from "../src/components/English/GoogleAds/GoogleAds4"
import Goals from "../src/components/English/GoogleAds/Goals"
import GoogleTag from "../src/components/English/GoogleAds/GoogleTag"
import Layout from "../src/components/App/Layout"
import SEO from "../src/components/App/SEO"


import WhatWeDo from "../src/components/Common/WhatWeDo"

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
