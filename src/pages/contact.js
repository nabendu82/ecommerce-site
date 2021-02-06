import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import { HomeHeader, Banner } from '../utils'
import contactImg from '../images/bcg/contactBcg.jpg'

const ContactPage = () => {
    return (
        <Layout>
            <SEO title="Contact" />
            <HomeHeader img={contactImg}>
                <Banner title="contact us" subtitle="For all of your queries"></Banner>
            </HomeHeader>
        </Layout>
    )
}

export default ContactPage
