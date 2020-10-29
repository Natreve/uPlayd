import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import { Link, useStaticQuery, graphql } from "gatsby"

const LogoWrap = styled.div`
  margin: auto 0;
  flex: 0 1 36px;

  @media (max-width: 768px) and (orientation: landscape) {
    flex: 0 1 25px;
  }
`   

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

    <LogoWrap as={Link} to="/">
      <Img fixed={data.file.childImageSharp.fixed} alt="logo" />
    </LogoWrap>
  )
}

export default Logo