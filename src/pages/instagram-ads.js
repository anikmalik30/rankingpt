import React from "react"

import Navbar from "../components/App/Navbar"
import Footer from "../components/App/Footer"
import MainBanner from "../components/English/InstagramAds/MainBanner"

import FAQInstagramAds from "../components/English/InstagramAds/FAQInstagramAds"
import InstagramAds2 from "../components/English/InstagramAds/InstagramAds2"
import InstagramAds3 from "../components/English/InstagramAds/InstagramAds3"
import InstagramAds4 from "../components/English/InstagramAds/InstagramAds4"
import InstagramServices from "../components/English/InstagramAds/InstagramServices"
import Layout from "../components/App/Layout"
import SEO from "../components/App/SEO"


import WhatWeDo from "../components/Common/WhatWeDo"

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

      <FAQInstagramAds/>


      <Footer />
    </Layout>
  )
}

export default InstagramAds
