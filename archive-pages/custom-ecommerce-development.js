import React from "react"

import Navbar from "../src/components/App/Navbar"

import Footer from "../src/components/App/Footer"

import MainBanner from "../src/components/English/custom-ecommerce-development/Banner"
import ServicesBanner from "../src/components/English/custom-ecommerce-development/ServicesBanner"
import WhyRankingPT from "../src/components/English/custom-ecommerce-development/WhyRankingPT"
import Industries from "../src/components/English/custom-ecommerce-development/Industries"
import Appointment from "../src/components/English/custom-ecommerce-development/Appointment"
import Goals from "../src/components/English/custom-ecommerce-development/Goals"
import Funnel from "../src/components/English/custom-ecommerce-development/Funnel"


import IndustriesWeWork from "../src/components/English/custom-ecommerce-development/IndustriesWeWork"
import StartProjectWithUs from "../src/components/English/custom-ecommerce-development/StartProjectWithUs"
import PartnerCMS from "../src/components/Common/PartnerCMS"
import Layout from "../src/components/App/Layout"
import SEO from "../src/components/App/SEO"


import WhatWeDo from "../src/components/Common/WhatWeDo"

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
