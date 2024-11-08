import React from "react"

import Navbar from "../src/components/App/Navbar"
import Footer from "../src/components/App/Footer"
import MainBanner from "../src/components/English/hosting-migration/MainBanner"

import HostingPartners from "../src/components/Common/HostingPartners"
import HostingScopeOfWork from "../src/components/English/hosting-migration/HostingScopeOfWork"
import HostingAffectsSEO from "../src/components/English/hosting-migration/HostingAffectsSEO"
import WhatIsHostingMigration from "../src/components/English/hosting-migration/WhatIsHostingMigration"
import Layout from "../src/components/App/Layout"
import SEO from "../src/components/App/SEO"


import WhatWeDo from "../src/components/Common/WhatWeDo"

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
