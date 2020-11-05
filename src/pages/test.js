import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFilm, faFutbol, faSortDown } from "@fortawesome/free-solid-svg-icons"
import UploadButton from "components/buttons"
import Logo from "components/logo"
import { NavBar, NavBarItem } from "components/navbar"
const Test = () => {
  return (
    <NavBar>
      <Logo />
      <NavBarItem path="/">
        <FontAwesomeIcon icon={faFilm} style={{ marginRight: `10px` }} />
        Film <FontAwesomeIcon icon={faSortDown} />
      </NavBarItem>
      <NavBarItem path="/">
        <FontAwesomeIcon icon={faFutbol} style={{ marginRight: `10px` }} />
        Squad <FontAwesomeIcon icon={faSortDown} />
      </NavBarItem>
      <UploadButton />
    </NavBar>
  )
}
export default Test
