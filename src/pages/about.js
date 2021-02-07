import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import { HomeHeader, Banner } from '../utils'
import aboutImg from '../images/bcg/aboutBcg.jpg'
import About from '../components/About/About'

const AboutPage = () => {
    return (
        <Layout>
            <SEO title="About" />
            <HomeHeader img={aboutImg}>
                <Banner title="about us" subtitle="a little about us"></Banner>
            </HomeHeader>
            <About />
        </Layout>
    )
}

export default AboutPage
