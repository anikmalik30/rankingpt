import React from "react"

import Navbar from "../components/App/Navbar"
import Footer from "../components/App/Footer"
import MainBanner from "../components/English/FacebookAds/MainBanner"

import FAQFacebookAds from "../components/English/FacebookAds/FAQFacebookAds"
import FacebookAds3 from "../components/English/FacebookAds/FacebookAds3"
import FacebookAds4 from "../components/English/FacebookAds/FacebookAds4"
import Goals from "../components/English/FacebookAds/Goals"
import Layout from "../components/App/Layout"
import SEO from "../components/App/SEO"


import WhatWeDo from "../components/Common/WhatWeDo"

const FacebookAds = () => {
  return (
    <Layout>
      <SEO title="Ecommerce SEO " />

      <Navbar />

      <MainBanner />

      <Goals/>

      <FacebookAds3 />

      <FacebookAds4 />

      <FAQFacebookAds/>


      <Footer />
    </Layout>
  )
}

export default FacebookAds
