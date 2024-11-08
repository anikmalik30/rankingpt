import React from 'react';
import Layout from "../src/components/App/Layout";
import Seo from "../src/components/App/SEO";
import MainBanner from '../src/components/English/wordpress-maintenance-packages/MainBanner';
import Pricing from '../src/components/English/wordpress-maintenance-packages/Pricing';
import Footer from '../src/components/App/Footer';
import Navbar from "../src/components/App/Navbar"

import DiscussProject from '../src/components/Common/DiscussProject';
import FAQWordpressMaintenance from '../src/components/English/wordpress-maintenance-packages/FAQWordpressMaintenance';
import WhyRankingPT from '../src/components/English/wordpress-maintenance-packages/WhyRankingPT';
import Services from '../src/components/English/wordpress-maintenance-packages/Services';

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