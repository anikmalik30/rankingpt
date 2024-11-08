import React from 'react';
import Layout from "../components/App/Layout";
import Seo from "../components/App/SEO";
import MainBanner from '../components/English/wordpress-maintenance-packages/MainBanner';
import Pricing from '../components/English/wordpress-maintenance-packages/Pricing';
import Footer from '../components/App/Footer';
import Navbar from "../components/App/Navbar"

import DiscussProject from '../components/Common/DiscussProject';
import FAQWordpressMaintenance from '../components/English/wordpress-maintenance-packages/FAQWordpressMaintenance';
import WhyRankingPT from '../components/English/wordpress-maintenance-packages/WhyRankingPT';
import Services from '../components/English/wordpress-maintenance-packages/Services';

const WordpressMaintenance = () => {
    return (
        <Layout>
            <Seo title="Website Maintenance Packages" />

            <Navbar />

            <MainBanner />

            <Pricing />

            < WhyRankingPT />

            < Services />

            <DiscussProject />

            < FAQWordpressMaintenance />

            <Footer />
        </Layout>
    )
}

export default WordpressMaintenance;