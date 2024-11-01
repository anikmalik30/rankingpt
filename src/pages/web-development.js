import React from 'react';
import Layout from "../components/App/Layout";
import SEO from "../components/App/SEO";
import MainBanner from '../components/English/web-development/MainBanner';
import Features from '../components/English/web-development/Features';
import AboutUsContent from '../components/English/web-development/AboutUsContent';
import Services from '../components/English/web-development/Services';
import WhatWeDo from '../components/English/web-development/WhatWeDo';
import CaseStudies from '../components/English/web-development/CaseStudies';
import Partners from '../components/English/web-development/Partners';
import GetStarted from '../components/English/web-development/GetStarted';
import Testimonials from '../components/English/web-development/Testimonials';
import Footer from '../components/App/Footer';
import Navbar from "../components/App/Navbar"

import HowWeb from '../components/English/web-development/HowWeb';

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