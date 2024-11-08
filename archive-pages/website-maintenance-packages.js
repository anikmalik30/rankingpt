import React from 'react';
import Layout from "../src/components/App/Layout";
import SEO from "../src/components/App/SEO";
import MainBanner from '../src/components/English/website-maintenance-packages/MainBanner';
import Pricing from '../src/components/English/website-maintenance-packages/Pricing';
import Footer from '../src/components/App/Footer';
import Navbar from "../src/components/App/Navbar"

import HowMaintenance from '../src/components/English/website-maintenance-packages/HowMaintenance';
import AdvantagesMaintenance from '../src/components/English/website-maintenance-packages/AdvantagesMaintenance';
import FAQWebsiteMaintenance from '../src/components/English/website-maintenance-packages/FAQWebsiteMaintenance';

const WebMaintenance = () => {
    return (
        <Layout>
            <SEO title="Website Maintenance Packages" />

            <Navbar />

            <MainBanner />

            <Pricing />

            <HowMaintenance />

            <AdvantagesMaintenance />

            < FAQWebsiteMaintenance />

            <Footer />
        </Layout>
    )
}

export default WebMaintenance;