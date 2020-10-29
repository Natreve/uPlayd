import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFilm, faFutbol, faSortDown } from "@fortawesome/free-solid-svg-icons"
import styled from "styled-components"
import { Link } from "gatsby"
import UploadButton from "../buttons"
import Avatar from "./avatar"

const NavItem = styled(Link)`
  text-decoration: none;
  text-transform: none;
  color: #AFAFAF;
  display: inline-block;
  white-space: nowrap;
  padding-right: 40px;
  margin-right: 10px;
  margin-left: 10px;
  transition: all 200ms ease-in;
  position: relative;

  :after {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    width: 0%;
    content: ".";
    color: transparent;
    background: #AFAFAF;
    height: 1px;
    transition: all 0.4s ease-in;
  }

  :hover {
    color: #FE3255;
    ::after {
      width: 100%;
    }
  }

  @media (max-width: 768px) {
    padding: 20px 0;
    font-size: 1.5rem;
    z-index: 6;
  }
`
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

export default NavbarLinks