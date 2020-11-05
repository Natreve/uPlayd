import React from "react"
import Img from "gatsby-image"
import { Link, useStaticQuery, graphql } from "gatsby"
import css from "./css.module.scss"

const Avatar = () => {
  const data = useStaticQuery(graphql`
    query {
      file(name: { eq: "avatar" }, extension: { eq: "png" }) {
        childImageSharp {
          fixed(width: 50, height: 50) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)
  return (
    <Link to="/" className={css.avatar}>
      <Img fixed={data.file.childImageSharp.fixed} alt="avatar" />
    </Link>
  )
}

export default Avatar
