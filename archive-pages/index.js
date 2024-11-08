import React from "react"

import Navbar from "../src/components/App/Navbar"

import Footer from "../src/components/App/Footer"

import MainBanner from "../src/components/English/Home/Banner"
import Services from "../src/components/English/Home/MainServices"
import WhyRankingPT from "../src/components/English/Home/WhyRankingPT"
import Industries from "../src/components/English/Home/Industries"
import Appointment from "../src/components/Common/Appointment"
import Goals from "../src/components/English/Home/Goals"
import Funnel from "../src/components/English/Home/Funnel"

import Partner2 from "../src/components/Common/Partner2"
import Partner from "../src/components/Common/Partner"
import Layout from "../src/components/App/Layout"
import SEO from "../src/components/App/SEO"


import WhatWeDo from "../src/components/Common/WhatWeDo"

const HomeOne = () => {
  return (
    <Layout>
      <SEO title="RankingPT " />

      <Navbar />

      <MainBanner />

      <Partner />

      <Goals />

      <WhyRankingPT />

      <Industries />

      <WhatWeDo />

      <Partner2 />   {/*Mudar para os logos dos partners dos socials , tech behemoth etc */}

      <Appointment />

      <Footer />
    </Layout>
  )
}

export default HomeOne
