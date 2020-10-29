import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"

const AvatarWrap = styled.div`
  padding-left: 40px;
  flex: 0 1 36px;

  @media (max-width: 768px) and (orientation: landscape) {
    flex: 0 1 25px;
  }
`  

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
      <AvatarWrap>
        <Img fixed={data.file.childImageSharp.fixed} alt="avatar"/>
    </AvatarWrap>
  )
}

export default Avatar