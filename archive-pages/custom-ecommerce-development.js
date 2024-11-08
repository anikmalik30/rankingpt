import React from "react"

import Navbar from "../components/App/Navbar"

import Footer from "../components/App/Footer"

import MainBanner from "../components/English/custom-ecommerce-development/Banner"
import ServicesBanner from "../components/English/custom-ecommerce-development/ServicesBanner"
import WhyRankingPT from "../components/English/custom-ecommerce-development/WhyRankingPT"     
import Industries from "../components/English/custom-ecommerce-development/Industries"
import Appointment from "../components/English/custom-ecommerce-development/Appointment"
import Goals from "../components/English/custom-ecommerce-development/Goals"
import Funnel from "../components/English/custom-ecommerce-development/Funnel"


import IndustriesWeWork from "../components/English/custom-ecommerce-development/IndustriesWeWork"
import StartProjectWithUs from "../components/English/custom-ecommerce-development/StartProjectWithUs"
import PartnerCMS from "../components/Common/PartnerCMS"
import Layout from "../components/App/Layout"
import SEO from "../components/App/SEO"


import WhatWeDo from "../components/Common/WhatWeDo"

const HomeOne = () => {
  return (
    <Layout>
      <SEO title="Custom Ecommerce Development " />

      <Navbar />

      <MainBanner />

      <PartnerCMS />

      <Industries />

      <WhyRankingPT />

      <Goals />

      <IndustriesWeWork />

      <StartProjectWithUs />

      <Footer />
    </Layout>
  )
}

export default HomeOne
