import React from 'react';
import Layout from "../src/components/App/Layout";
import SEO from "../src/components/App/SEO";
import MainBanner from '../src/components/English/web-development/MainBanner';
import Features from '../src/components/English/web-development/Features';
import AboutUsContent from '../src/components/English/web-development/AboutUsContent';
import Services from '../src/components/English/web-development/Services';
import WhatWeDo from '../src/components/English/web-development/WhatWeDo';
import CaseStudies from '../src/components/English/web-development/CaseStudies';
import Partners from '../src/components/English/web-development/Partners';
import GetStarted from '../src/components/English/web-development/GetStarted';
import Testimonials from '../src/components/English/web-development/Testimonials';
import Footer from '../src/components/App/Footer';
import Navbar from "../src/components/App/Navbar"

import HowWeb from '../src/components/English/web-development/HowWeb';

const WebDevelopment = () => {
    return (
        <Layout>
            <SEO title="Web Development Services" />

            <Navbar />

            <MainBanner />

            <Features />

            <HowWeb />

            <AboutUsContent />

            <Services />

            <WhatWeDo />

            <CaseStudies />

            <Partners />

            <GetStarted />

            <Testimonials />

            <Footer />
        </Layout>
    )
}

export default WebDevelopment;