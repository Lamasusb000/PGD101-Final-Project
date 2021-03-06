import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <br/>
    <h2
    className="Centered"
    style={{
      fontFamily:"inherit"
    }}>
      Try Checking out The Hamburger Menu For More Links
    </h2>
    <div
    className="Main-Image">
      <StaticImage
      src="../images/EGCC-Logo.png"
      className="Main-Image"/>
    </div>
  </Layout>
)

export default IndexPage
