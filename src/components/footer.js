import React from "react"
import "../components/CSS/Footer.css"

const Footer = () => (
    <div
    className="Footer-Container">
        <div
        className="Left-Column">
            <h2>Project Details</h2>
            <p>
                This website is Hosted By Netlify and is compiled By Gatsby to create a "dynamic" website
                that creates easy access to the creation and deletion of extra websites with features such as
                components which allows the addition of combinations of templates to a webpage
                <br/><br/>
                This Site is for the use of creating a final project for my PGD101 Front-End Development Class
            </p>
        </div>
        <div
        className="Right-Column">
            <h2>Libraries</h2>
            <ul>
                <li>
                    React
                    <ul>
                        <li>
                            Used To Create Templates and Generate The Website
                        </li>
                    </ul>
                </li>
                <li>
                    JQuery and Bootstrap
                    <ul>
                        <li>Used To Create a Hamburger Menu for Link</li>
                    </ul>
                </li>
                <li>
                    Gatsby
                    <ul>
                        <li>
                            File Structure and Compiling for Site
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    </div>
)

export default Footer