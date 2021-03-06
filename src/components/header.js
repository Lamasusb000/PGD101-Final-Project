import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import "../components/CSS/Header.css"
import "../components/CSS/bootstrap.min.css"

const Header = ({ siteTitle }) => (
  <header
    className="Header-Container">
      <nav 
      className="navbar navbar-light">
        <Link
          to="/"
          className="navbar-brand text-white">
            PGD101 Final Project
        </Link>
        <button
        className="navbar-toggler navbar-dark"
        type="button"
        data-toggle="collapse"
        data-target="#BurgerMenu"
        aria-controls="BurgerMenu"
        aria-expanded="false"
        aria-label="Toggle navigation">
          <span
          className="navbar-toggler-icon">

          </span>
        </button>

          <div
          className="collapse navbar-collapse"
          id="BurgerMenu">
            <ul
            className="navbar-nav mr-auto">
              <li
              className="nav-item active">
                <Link
                to="/"
                className="nav-item text-white">
                  Home
                </Link>
              </li>
              <li
              className="nav-item">
                <Link
                to="/Page-Details"
                className="nav-item text-white">
                  Page Details
                </Link>
              </li>
              <li
              className="nav-item">
                <a
                href="https://egcc.edu/"
                className="nav-item text-white">
                  My School
                </a>
              </li>
            </ul>
          </div>
      </nav>
  </header>
)
Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
