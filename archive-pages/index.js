import React from "react"

import Navbar from "../components/App/Navbar"

import Footer from "../components/App/Footer"

import MainBanner from "../components/English/Home/Banner"
import Services from "../components/English/Home/MainServices"
import WhyRankingPT from "../components/English/Home/WhyRankingPT"
import Industries from "../components/English/Home/Industries"
import Appointment from "../components/Common/Appointment"
import Goals from "../components/English/Home/Goals"
import Funnel from "../components/English/Home/Funnel"

import Partner2 from "../components/Common/Partner2"
import Partner from "../components/Common/Partner"
import Layout from "../components/App/Layout"
import SEO from "../components/App/SEO"


import WhatWeDo from "../components/Common/WhatWeDo"

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
