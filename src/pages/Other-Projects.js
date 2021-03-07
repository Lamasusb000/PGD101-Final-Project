import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Projects = () => (
    <Layout>
        <SEO title="Projects"/>
        <br/>
        <h4>
            While This Site is Barebones I Created Similar Sites for Small Businesses
        </h4>
        <p>
            Both sites have CSS rules that allow responsive screen sizes for Mobile and Desktop Layouts
        </p>
        <ul>
            <li>
                <a
                href="https://www.TattoosBySiaki.com">
                    TattoosBySiaki.com
                </a>
                <ul>
                    <li>
                        This Website is fully responsive and dynamically coded using Netlify CMS
                    </li>
                    <li>
                        Dynamic CMS features are as follows
                        <ul>
                            <li>Front Page Text</li>
                            <li>Quick Updating for Links in case social media handles change</li>
                        </ul>
                    </li>
                </ul>
            </li>
            <li>
                <a
                href="https://fadedcutz-gatsby.netlify.app/">
                    FadedCutz
                </a>
                <span> (Domain Not Purchased Yet)</span>
            </li>
            <ul>
                <li>
                    This website is still a work in progress as I am still coordinating with the business over design
                </li>
                <li>
                    Full Disclosure the owner does not have a good logo as of this time (3/7/2021)
                </li>
                <li>
                    Dynamic CMS features are as follows
                    <ul>
                        <li>
                            Barber Staffing List
                            <ul>
                                <li>
                                    Owner can add and remove barbers at any time
                                </li>
                                <li>
                                    Website supports an infinate barber staffing by utilizing JSON file being transformed by a .map() function
                                </li>
                            </ul>
                        </li>
                        <li>
                            Front Page Picture Display
                            <ul>
                                Owner can choose two photos to display on the front page
                                <ul>
                                    <li>
                                        Landscape: For Desktop Screens
                                    </li>
                                    <li>
                                        Portrait: For Mobile Screens
                                    </li>
                                </ul>
                            </ul>
                        </li>
                        <li>
                            Burger Menu Links
                            <ul>
                                <li>
                                    Owner Can Quickly add and remove links from the Burger menu (dropdown)
                                </li>
                                <li>
                                    Operates using the same .map() function to allow infinate amount of Link in Menu and allows custom names per link
                                </li>
                            </ul>
                        </li>
                    </ul>
                </li>
            </ul>
        </ul>

    </Layout>
)

export default Projects