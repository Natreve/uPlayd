import { Link } from "gatsby"
import React, { useEffect } from "react"
import css from "./css.module.scss"

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false)

  return (
    <Navigation>
      <Logo />
      <Toggle
        navbarOpen={navbarOpen}
        onClick={() => setNavbarOpen(!navbarOpen)}
      >
        {navbarOpen ? <Hamburger open /> : <Hamburger />}
      </Toggle>
      {navbarOpen ? (
        <Navbox>
          <NavbarLinks />
        </Navbox>
      ) : (
        <Navbox open>
          <NavbarLinks />
        </Navbox>
      )}
    </Navigation>
  )
}

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

const NavbarLinks = () => {
  return (
    <>
      <NavItem to="/"><FontAwesomeIcon icon={faFilm} style={{ marginRight: `10px`}}/>Film <FontAwesomeIcon icon={faSortDown}/></NavItem>
      <NavItem to=""><FontAwesomeIcon icon={faFutbol} style={{ marginRight: `10px`}} />Squad <FontAwesomeIcon icon={faSortDown}/></NavItem>
      <UploadButton/>
      <Avatar/>
    </>
  )
}
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

export {Navbar, Logo, NavbarLinks, Avatar} 