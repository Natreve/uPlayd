import React from "react"
import Img from "gatsby-image"
import { Link, useStaticQuery, graphq1 } from "gatsby"
import css from "./css.module.scss"

const Logo = () => {
  const data = useStaticQuery(graphql`
    query {
      file(name: { eq: "uplayed" }, extension: { eq: "jpg" }) {
        childImageSharp {
          fixed(width: 150, height: 30) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)
  return (
    <Link to="/" className={css.logo}>
      <Img fixed={data.file.childImageSharp.fixed} alt="logo" />
    </Link>
  )
}

export default Logo
