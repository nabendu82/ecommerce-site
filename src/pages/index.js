import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Banner, BannerButton, HomeHeader } from "../utils"
import img from '../images/bcg/homeBcg.jpg'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <HomeHeader img={img}>
      <Banner title="ColorFit Pro 3" subtitle="Sale starts 10-Feb-2021, 10 AM">
        <BannerButton style={{ margin: '2rem auto'}}>Shop Now</BannerButton>
      </Banner>
    </HomeHeader>
  </Layout>
)

export default IndexPage
