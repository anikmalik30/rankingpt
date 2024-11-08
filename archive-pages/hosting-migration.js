import React from "react"

import Navbar from "../components/App/Navbar"
import Footer from "../components/App/Footer"
import MainBanner from "../components/English/hosting-migration/MainBanner"

import HostingPartners from "../components/Common/HostingPartners"
import HostingScopeOfWork from "../components/English/hosting-migration/HostingScopeOfWork"
import HostingAffectsSEO from "../components/English/hosting-migration/HostingAffectsSEO"
import WhatIsHostingMigration from "../components/English/hosting-migration/WhatIsHostingMigration"
import Layout from "../components/App/Layout"
import SEO from "../components/App/SEO"


import WhatWeDo from "../components/Common/WhatWeDo"

const HomeOne = () => {
  return (
    <Layout>
      <SEO title="Custom Ecommerce Development " />

      <Navbar />

      <MainBanner />

      <HostingPartners />

      <WhatIsHostingMigration />

      <HostingAffectsSEO />

      <HostingScopeOfWork />


      <Footer />
    </Layout>
  )
}

export default HomeOne
