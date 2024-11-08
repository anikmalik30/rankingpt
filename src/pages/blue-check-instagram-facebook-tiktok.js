import React from "react"
import Layout from "../components/App/Layout"
import Navbar from "../components/App/Navbar"
import SEO from "../components/App/SEO"
import Footer from "../components/App/Footer"
// import MainBanner from "../components/English/Verification/MainBanner"
// import TikTokVerification from "../components/English/Verification/TikTokVerification"
// import FacebookVerification from "../components/English/Verification/FacebookVerification"
// import InstagramVerification from "../components/English/Verification/InstagramVerification"



const BlueCheck = () => {
  return (
    <Layout>
      <SEO title="Ecommerce SEO " />

      <Navbar />
      {/* page */}
      <p>BlueCheck</p>
      {/* <MainBanner />

      <InstagramVerification />

      <FacebookVerification />

      <TikTokVerification /> */}



      <Footer />
    </Layout>
  )
}

export default BlueCheck
