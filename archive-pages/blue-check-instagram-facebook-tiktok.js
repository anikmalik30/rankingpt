import React from "react"

import Navbar from "../components/App/Navbar"
import Footer from "../components/App/Footer"
import MainBanner from "../components/English/Verification/MainBanner"

import TikTokVerification from "../components/English/Verification/TikTokVerification"
import FacebookVerification from "../components/English/Verification/FacebookVerification"
import InstagramVerification from "../components/English/Verification/InstagramVerification"
import Layout from "../components/App/Layout"
import SEO from "../components/App/SEO"

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