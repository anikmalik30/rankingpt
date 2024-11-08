import React from "react"

import Navbar from "../src/components/App/Navbar"
import Footer from "../src/components/App/Footer"
import MainBanner from "../src/components/English/Verification/MainBanner"

import TikTokVerification from "../src/components/English/Verification/TikTokVerification"
import FacebookVerification from "../src/components/English/Verification/FacebookVerification"
import InstagramVerification from "../src/components/English/Verification/InstagramVerification"
import Layout from "../src/components/App/Layout"
import SEO from "../src/components/App/SEO"

const BlueCheck = () => {
  return (
    <Layout>
      <SEO title="Ecommerce SEO " />

      <Navbar />

      <MainBanner />

      <InstagramVerification />

      <FacebookVerification />

      <TikTokVerification />



      <Footer />
    </Layout>
  )
}

export default BlueCheck
