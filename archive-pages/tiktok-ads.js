import React from "react"

import Navbar from "../src/components/App/Navbar"
import Footer from "../src/components/App/Footer"
import MainBanner from "../src/components/English/TiktokAds/MainBanner"

import FAQTiktok from "../src/components/English/TiktokAds/FAQTiktok"
import TikTokTargetAudience from "../src/components/English/TiktokAds/TikTokTargetAudience"
import TikTokAds1 from "../src/components/English/TiktokAds/TikTokAds1"
import TikTokAds3 from "../src/components/English/TiktokAds/TikTokAds3"
import TikTokAds4 from "../src/components/English/TiktokAds/TikTokAds4"
import Goals from "../src/components/English/TiktokAds/Goals"
import Layout from "../src/components/App/Layout"
import SEO from "../src/components/App/SEO"


import WhatWeDo from "../src/components/Common/WhatWeDo"

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
