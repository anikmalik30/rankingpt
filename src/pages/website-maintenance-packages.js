import React from 'react';
import Layout from "../components/App/Layout";
import SEO from "../components/App/SEO";
import MainBanner from '../components/English/website-maintenance-packages/MainBanner';
import Pricing from '../components/English/website-maintenance-packages/Pricing';
import Footer from '../components/App/Footer';
import Navbar from "../components/App/Navbar"

import HowMaintenance from '../components/English/website-maintenance-packages/HowMaintenance';
import AdvantagesMaintenance from '../components/English/website-maintenance-packages/AdvantagesMaintenance';
import FAQWebsiteMaintenance from '../components/English/website-maintenance-packages/FAQWebsiteMaintenance';

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