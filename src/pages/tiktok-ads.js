import React from "react"

import Navbar from "../components/App/Navbar"
import Footer from "../components/App/Footer"
import MainBanner from "../components/English/TiktokAds/MainBanner"

import FAQTiktok from "../components/English/TiktokAds/FAQTiktok"
import TikTokTargetAudience from "../components/English/TiktokAds/TikTokTargetAudience"
import TikTokAds1 from "../components/English/TiktokAds/TikTokAds1"
import TikTokAds3 from "../components/English/TiktokAds/TikTokAds3"
import TikTokAds4 from "../components/English/TiktokAds/TikTokAds4"
import Goals from "../components/English/TiktokAds/Goals"
import Layout from "../components/App/Layout"
import SEO from "../components/App/SEO"


import WhatWeDo from "../components/Common/WhatWeDo"

const EcommerceSEO = () => {
  return (
    <Layout>
      <SEO title="Ecommerce SEO " />

      <Navbar />

      <MainBanner />

      <Goals />

      <TikTokAds3 />

      <TikTokAds4 />

      <TikTokAds1 />

      <TikTokTargetAudience />

      <FAQTiktok />


      <Footer />
    </Layout>
  )
}

export default EcommerceSEO
