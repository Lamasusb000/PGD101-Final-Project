import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"


const Photos = () => (
    <Layout>
        <SEO title="Page Details"/>
        <br/>
        <h1 style={{
            fontFamily:"inherit"
        }}>
            How I created This Website
        </h1>
        <p
        style={{
            textTransform:"capitalize"
        }}>
            To Create This Site I Firstly Started Off with a Starter Template.
            <br/><br/>
            I chose to use the <a href="https://gatsby-starter-default-demo.netlify.app/">Gatsby-Starter-Default</a> template since it was a bare bones Starter
            That is easily incorperated with Netlify's hosting services and it allowed to start working
            with a React based Website.
            <br/><br/>
            After starting off with a template my first move was to delete about 90% of the template as 
            to start from scratch and start cleaning the code from HTML based CSS formatting
            to imported CSS files based Styling.
            <br/><br/>
            After My new CSS rules being set to imported files I then started designing my website in a raw state with no CSS to get a general
            look on How the site would present to the viewer
            <br/><br/>
            After cleaning my code I proceeded to add my own CSS rules which included the general theme styling to my preference of a darker setting.
            With my choice of darker theme i had to change my text color to white to contrast the darker backgrounds
            <br/><br/>
            I also chose to force a minimum height for the body area you are reading this on to ensure the footer remains at the bottom of the screen
            and the reader would have to scroll down to read it rather than it appearing on short web pages
            <br/><br/>
            For a more visually appearing link menu I chose to use a bootstrap/JQuery Hamburger menu as well
        </p>
    </Layout>
)

export default Photos