/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFilm, faFutbol, faSortDown } from "@fortawesome/free-solid-svg-icons"
import UploadButton from "components/buttons"
import Avatar from "components/avatar"
import { NavBar, NavBarItem } from "components/navbar"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <NavBar>
        <NavBarItem path="/">
          <FontAwesomeIcon icon={faFilm} style={{ marginRight: `10px` }} />
          Film <FontAwesomeIcon icon={faSortDown} />
        </NavBarItem>
        <NavBarItem path="/">
          <FontAwesomeIcon icon={faFutbol} style={{ marginRight: `10px` }} />
          Squad <FontAwesomeIcon icon={faSortDown} />
        </NavBarItem>
        <UploadButton />
        <Avatar />
      </NavBar>
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `1.45rem 1.0875rem`,
        }}
      >
        <main>{children}</main>
        <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
